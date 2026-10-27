from fastapi import FastAPI, Form, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import sqlite3
import json
from pathlib import Path
import shutil
import uuid

UPLOAD_DIR = Path(__file__).parent / "uploads"
UPLOAD_DIR.mkdir(exist_ok=True)
(UPLOAD_DIR / "texts").mkdir(exist_ok=True)
(UPLOAD_DIR / "logos").mkdir(exist_ok=True)
(UPLOAD_DIR / "branding").mkdir(exist_ok=True)
(UPLOAD_DIR / "images").mkdir(exist_ok=True)

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
    textFileOriginalName TEXT,
    textFileStoredName TEXT,
    logoOriginalName TEXT, 
    logoStoredName TEXT,
    brandingOriginalName TEXT, 
    brandingStoredName TEXT,
    imageOriginalNames TEXT,
    imageStoredNames TEXT,
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
def create_project_inquiry(
    firstName: str = Form(),
    lastName: str = Form(),
    email: str = Form(),
    companyName: str | None = Form(None),
    phone: str | None = Form(None),
    privacyAccepted: bool = Form(),
    message: str = Form(),
    projectType: str = Form(),
    industry: str | None = Form(None),
    companyDescription: str = Form(),
    websiteGoal: str | None = Form(None),
    url: str | None = Form(None),
    primaryColor: str | None = Form(None),
    secondaryColor: str | None = Form(None),
    accentColor: str | None = Form(None),
    style: str | None = Form(None),
    inspiration: str | None = Form(None),
    availableText: bool = Form(),
    availableImages: bool = Form(),
    availableLogo: bool = Form(),
    availableBranding: bool = Form(),
    textFile: UploadFile | None = File(None),
    logo: UploadFile | None = File(None),
    images: list[UploadFile] | None = File(None),
    branding: UploadFile | None = File(None),
    pageCount: str | None = Form(None),
    pages: str | None = Form(None),
    otherPages: str | None = Form(None),
    features: str | None = Form(None),
    otherFeatures: str | None = Form(None),
    timeline: str = Form(),
    ):
    connection = get_db_connection()

    text_file_original_name = None
    text_file_stored_name = None
    logo_original_name = None
    logo_stored_name = None
    branding_original_name = None
    branding_stored_name = None
    image_original_names = []
    image_stored_names = []

    if textFile:
        file_extension = Path(textFile.filename).suffix
        unique_filename = f"{uuid.uuid4()}{file_extension}"

        text_file_original_name = textFile.filename
        text_file_stored_name = unique_filename
        file_path = UPLOAD_DIR / "texts" /unique_filename
        with file_path.open("wb") as buffer:
            shutil.copyfileobj(textFile.file, buffer)

    if logo:
        file_extension = Path(logo.filename).suffix
        unique_filename = f"{uuid.uuid4()}{file_extension}"

        logo_original_name = logo.filename
        logo_stored_name = unique_filename
        file_path = UPLOAD_DIR / "logos" / unique_filename
        with file_path.open("wb") as buffer:
            shutil.copyfileobj(logo.file, buffer)

    if branding:
        file_extension = Path(branding.filename).suffix
        unique_filename = f"{uuid.uuid4()}{file_extension}"

        branding_original_name = branding.filename
        branding_stored_name = unique_filename
        file_path = UPLOAD_DIR / "branding" / unique_filename
        with file_path.open("wb") as buffer:
            shutil.copyfileobj(branding.file, buffer)

    if images:
        for image in images:
            file_extension = Path(image.filename).suffix
            unique_filename = f"{uuid.uuid4()}{file_extension}"

            image_original_names.append(image.filename)
            image_stored_names.append(unique_filename)

            file_path = UPLOAD_DIR / "images" / unique_filename
            with file_path.open("wb") as buffer:
                shutil.copyfileobj(image.file, buffer)

    connection.execute("""INSERT INTO project_inquiries
    (firstName, lastName, companyName, email, phone, privacyAccepted, message, projectType, industry, companyDescription, websiteGoal, url, primaryColor, secondaryColor, accentColor, 
    style, inspiration, availableText, availableImages, availableLogo, availableBranding, textFileOriginalName, textFileStoredName, logoOriginalName, logoStoredName,
     brandingOriginalName, brandingStoredName, imageOriginalNames, imageStoredNames, pageCount, pages, otherPages, features, otherFeatures, timeline)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?) """, (
        firstName,
        lastName,
        companyName,
        email,
        phone,
        privacyAccepted,
        message,
        projectType,
        industry,
        companyDescription,
        websiteGoal,
        url,
        primaryColor,
        secondaryColor,
        accentColor,
        style,
        inspiration,
        availableText,
        availableImages,
        availableLogo,
        availableBranding,
        text_file_original_name,
        text_file_stored_name,
        logo_original_name, 
        logo_stored_name,
        branding_original_name, 
        branding_stored_name,
        json.dumps(image_original_names),
        json.dumps(image_stored_names),
        pageCount,
        pages,
        otherPages,
        features,
        otherFeatures,
        timeline,
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