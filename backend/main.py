from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()

origins = ["http://localhost:5173"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

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
    return {"firstName": inquiry.firstName}

@app.post("/inquiries/project")
def create_project_inquiry(inquiry: ProjectInquiry):
    return {"firstName": inquiry.firstName}