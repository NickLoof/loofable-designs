from fastapi import FastAPI, Form, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import sqlite3
import json

app = FastAPI()

origins = ["http://localhost:5173"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

def get_db_connection():
    connection = sqlite3.connect("loofable.db")
    connection.row_factory = sqlite3.Row
    return connection

def create_tables():
    connection = get_db_connection()
    connection.execute("""
        CREATE TABLE IF NOT EXISTS quick_inquiries(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        firstName TEXT,
        lastName TEXT,
        companyName TEXT,
        email TEXT,
        phone TEXT,
        privacyAccepted INTEGER,
        message TEXT
        )
        """)
    connection.execute("""
    CREATE TABLE IF NOT EXISTS project_inquiries(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    firstName TEXT,
    lastName TEXT,
    companyName TEXT,
    email TEXT,
    phone TEXT,
    privacyAccepted INTEGER,
    message TEXT,
    projectType TEXT,
    industry TEXT,
    companyDescription TEXT,
    websiteGoal TEXT,
    url TEXT,
    primaryColor TEXT,
    secondaryColor TEXT,
    accentColor TEXT,
    style TEXT,
    inspiration TEXT,
    availableText INTEGER,
    availableImages INTEGER,
    availableLogo INTEGER,
    availableBranding INTEGER,
    pageCount TEXT,
    pages TEXT,
    otherPages TEXT,
    features TEXT,
    otherFeatures TEXT,
    timeline TEXT
    )
     """)
    connection.commit()
    connection.close()

create_tables()

class BaseInquiry(BaseModel):
    firstName: str
    lastName: str
    companyName: str | None = None
    email: str
    phone: str | None = None
    privacyAccepted: bool
    message: str

class QuickInquiry(BaseInquiry):
    pass

class ProjectInquiry(BaseInquiry):
    projectType: str
    industry: str | None = None
    companyDescription: str
    websiteGoal: str
    url: str | None = None
    primaryColor: str | None = None
    secondaryColor: str | None = None
    accentColor: str | None = None
    style: str | None = None
    inspiration: str | None = None
    availableText: bool
    availableImages: bool
    availableLogo: bool
    availableBranding: bool
    pageCount: str | None = None
    pages: list[str] 
    otherPages: str | None = None
    features: list[str] 
    otherFeatures: str | None = None
    timeline: str

@app.get("/")
def home():
    return{"message": "Loofable backend is running"}
@app.post("/inquiries/quick")
def create_quick_inquiry(inquiry: QuickInquiry):
    connection = get_db_connection()
    connection.execute("""INSERT INTO quick_inquiries
    (firstName, lastName, companyName, email, phone, privacyAccepted, message)
    VALUES (?, ?, ?, ?, ?, ?, ?) """, (
        inquiry.firstName,
        inquiry.lastName,
        inquiry.companyName,
        inquiry.email,
        inquiry.phone,
        inquiry.privacyAccepted,
        inquiry.message,
    ))
    connection.commit()
    connection.close()
    return {"message": "Inquiry saved successfully"}

@app.post("/inquiries/project")
def create_project_inquiry(inquiry: ProjectInquiry):
    connection = get_db_connection()
    connection.execute("""INSERT INTO project_inquiries
    (firstName, lastName, companyName, email, phone, privacyAccepted, message, projectType, industry, companyDescription, websiteGoal, url, primaryColor, secondaryColor, accentColor, 
    style, inspiration, availableText, availableImages, availableLogo, availableBranding, pageCount, pages, otherPages, features, otherFeatures, timeline)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?) """, (
        inquiry.firstName,
        inquiry.lastName,
        inquiry.companyName,
        inquiry.email,
        inquiry.phone,
        inquiry.privacyAccepted,
        inquiry.message,
        inquiry.projectType,
        inquiry.industry,
        inquiry.companyDescription,
        inquiry.websiteGoal,
        inquiry.url,
        inquiry.primaryColor,
        inquiry.secondaryColor,
        inquiry.accentColor,
        inquiry.style,
        inquiry.inspiration,
        inquiry.availableText,
        inquiry.availableImages,
        inquiry.availableLogo,
        inquiry.availableBranding,
        inquiry.pageCount,
        json.dumps(inquiry.pages),
        inquiry.otherPages,
        json.dumps(inquiry.features),
        inquiry.otherFeatures,
        inquiry.timeline,
    ))
    connection.commit()
    connection.close()
    return {"message": "Inquiry saved successfully"}

@app.get("/inquiries/quick")
def read_quick_inquiry():
    connection = get_db_connection()
    cursor = connection.execute("""SELECT * FROM quick_inquiries """)
    inquiries = cursor.fetchall()
    connection.close()
    return [dict(row) for row in inquiries]

@app.get("/inquiries/project")
def read_project_inquiries():
    connection = get_db_connection()
    cursor = connection.execute("""SELECT * FROM project_inquiries """)
    inquiries = cursor.fetchall()
    connection.close()
    result = []
    for row in inquiries:
        inquiry = dict(row)
        inquiry["pages"] = json.loads(inquiry["pages"])
        inquiry["features"] = json.loads(inquiry["features"])
        result.append(inquiry)
    return result




@app.get("/debug/project-columns")
def project_columns():
    connection = get_db_connection()
    cursor = connection.execute("PRAGMA table_info(project_inquiries)")
    columns = cursor.fetchall()
    connection.close()

    return [dict(column) for column in columns]