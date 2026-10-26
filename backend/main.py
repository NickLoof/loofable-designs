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
    companyName: str
    email: str
    phone: str
    privacyAccepted: bool

class QuickInquiry(BaseInquiry):

@app.get("/")
def home():
    return{"message": "Loofable backend is running"}
@app.post("/inquiries")
def create_inquiry(inquiry: Inquiry):
    return {"firstName": inquiry.firstName}