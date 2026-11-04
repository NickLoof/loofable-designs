from fastapi import FastAPI, Form, File, UploadFile, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field
import sqlite3
import json
from pathlib import Path
import shutil
import uuid
from dotenv import load_dotenv
import os
import smtplib
from email.message import EmailMessage


MAX_FILE_SIZE = 10 * 1024 * 1024  # 10 MB

ALLOWED_TEXT_EXTENSIONS = {".pdf", ".doc", ".docx", ".txt"}
ALLOWED_LOGO_EXTENSIONS = {".jpg", ".jpeg", ".png", ".webp", ".svg"}
ALLOWED_IMAGE_EXTENSIONS = {".jpg", ".jpeg", ".png", ".webp"}
ALLOWED_BRANDING_EXTENSIONS = {
    ".pdf",
    ".jpg",
    ".jpeg",
    ".png",
    ".webp",
    ".svg",
}

ALLOWED_TEXT_TYPES = {
    "application/pdf",
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "text/plain",
}

ALLOWED_LOGO_TYPES = {
    "image/jpeg",
    "image/png",
    "image/webp",
    "image/svg+xml",
}

ALLOWED_IMAGE_TYPES = {
    "image/jpeg",
    "image/png",
    "image/webp",
}

ALLOWED_BRANDING_TYPES = {
    "application/pdf",
    "image/jpeg",
    "image/png",
    "image/webp",
    "image/svg+xml",
}

load_dotenv()
EMAIL_ADDRESS = os.getenv("EMAIL_ADDRESS")
EMAIL_PASSWORD = os.getenv("EMAIL_PASSWORD")
SMTP_HOST = os.getenv("SMTP_HOST")
SMTP_PORT = int(os.getenv("SMTP_PORT"))

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

def validate_upload(file: UploadFile, allowed_extensions: set[str], allowed_types: set[str]):
    extension = Path(file.filename).suffix.lower()

    if extension not in allowed_extensions:
        raise HTTPException(
            status_code=400,
            detail=f"Dateityp {extension} ist nicht erlaubt."
        )

    if file.content_type not in allowed_types:
        raise HTTPException(
            status_code=400,
            detail=f"Dateityp {file.content_type} ist nicht erlaubt."
        )

    file.file.seek(0, 2)
    file_size = file.file.tell()
    file.file.seek(0)

    if file_size > MAX_FILE_SIZE:
        raise HTTPException(
            status_code=400,
            detail="Die Datei darf maximal 10 MB groß sein."
        )

def send_email(subject: str, body: str, reply_to: str):
    message = EmailMessage()

    message["From"] = EMAIL_ADDRESS
    message["To"] = EMAIL_ADDRESS
    message["Subject"] = subject
    message["Reply-To"] = reply_to

    message.set_content(body)
    with smtplib.SMTP(SMTP_HOST, SMTP_PORT, timeout=30) as smtp:
        smtp.starttls()
        smtp.login(EMAIL_ADDRESS, EMAIL_PASSWORD)
        smtp.send_message(message)

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
        selectedPackage TEXT,
        selectedAddons TEXT,
        addonQuantities TEXT,
        total REAL
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
    selectedPackage TEXT,
    selectedAddons TEXT,
    addonQuantities TEXT,
    total REAL
    )
     """)

    new_columns = {
    "selectedPackage": "TEXT",
    "selectedAddons": "TEXT",
    "addonQuantities": "TEXT",
    "total": "REAL"
}

    for table in ["quick_inquiries", "project_inquiries"]:
        existing_columns = {
            row["name"]
            for row in connection.execute(f"PRAGMA table_info({table})")
        }

        for column, column_type in new_columns.items():
            if column not in existing_columns:
                connection.execute(
                    f"ALTER TABLE {table} ADD COLUMN {column} {column_type}"
                )

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
    selectedPackage: str | None = None
    selectedAddons: list[dict] = Field(default_factory=list)
    addonQuantities: dict[str, int] = Field(default_factory=dict)
    total: float | None = None

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
    (firstName, lastName, companyName, email, phone, privacyAccepted, message, selectedPackage, selectedAddons, addonQuantities, total)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?) """, (
        inquiry.firstName,
        inquiry.lastName,
        inquiry.companyName,
        inquiry.email,
        inquiry.phone,
        inquiry.privacyAccepted,
        inquiry.message,
        inquiry.selectedPackage,
        json.dumps(inquiry.selectedAddons),
        json.dumps(inquiry.addonQuantities),
        inquiry.total,
    ))
    connection.commit()
    connection.close()

    addons_text = "\n".join(
        f"- {addon['name']}: {addon['price']} €"
        for addon in inquiry.selectedAddons
    ) or "-"
    quantities_text = "\n".join(
        f"- {name}: {quantity}"
        for name, quantity in inquiry.addonQuantities.items()
    ) or "-"

    total_text = (
        f"{inquiry.total:.2f} €"
        if inquiry.total is not None
        else "Preis auf Anfrage"
    )

    body = f"""
    Neue Kurzanfrage über loofable-designs.de

    Name: {inquiry.firstName} {inquiry.lastName}
    Unternehmen: {inquiry.companyName or "-"}
    E-Mail: {inquiry.email}
    Telefon: {inquiry.phone or "-"}
    PAKET & PREIS
    Gewähltes Paket: {inquiry.selectedPackage or "-"}
    Zusatzleistungen: {addons_text}
    Mengen: {quantities_text}
    Geschätzter Gesamtpreis: {total_text}
    Nachricht: 
    {inquiry.message}
    """
    subject = f"Neue Kurzanfrage - {inquiry.firstName} {inquiry.lastName}"

    try:
        send_email(subject, body, inquiry.email)
    except Exception as error:
        print(f"E-mail could not be sent: {error}")

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
    selectedPackage: str | None = Form(None),
    selectedAddons: str = Form("[]"),
    addonQuantities: str = Form("{}"),
    total: float | None = Form(None),
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

        # Validate all uploads before saving anything
    if textFile:
        validate_upload(textFile, ALLOWED_TEXT_EXTENSIONS, ALLOWED_TEXT_TYPES)

    if logo:
        validate_upload(logo, ALLOWED_LOGO_EXTENSIONS, ALLOWED_LOGO_TYPES)

    if branding:
        validate_upload(branding, ALLOWED_BRANDING_EXTENSIONS, ALLOWED_BRANDING_TYPES)

    if images:
        for image in images:
            validate_upload(image, ALLOWED_IMAGE_EXTENSIONS, ALLOWED_IMAGE_TYPES)


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
     brandingOriginalName, brandingStoredName, imageOriginalNames, imageStoredNames, pageCount, pages, otherPages, features, otherFeatures, timeline, 
     selectedPackage, selectedAddons, addonQuantities, total)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?) """, (
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
        selectedPackage, 
        selectedAddons, 
        addonQuantities, 
        total,
    ))
    connection.commit()
    connection.close()

    pages_list = json.loads(pages) if pages else []
    features_list = json.loads(features) if features else []

    pages_text = ", ".join(pages_list) if pages_list else "-"
    features_text = ", ".join(features_list) if features_list else "-"

    images_text = ", ".join(image_original_names) if image_original_names else "-"

    addons_list = json.loads(selectedAddons)
    quantities_dict = json.loads(addonQuantities)

    addons_text = "\n".join(
        f"- {addon['name']}: {addon['price']} €"
        for addon in addons_list
    ) or "-"

    quantities_text = "\n".join(
        f"- {name}: {quantity}"
        for name, quantity in quantities_dict.items()
    ) or "-"

    total_text = (
        f"{total:.2f} €"
        if total is not None
        else "Preis auf Anfrage"
    )

    body = f"""
    Neue Projektanfrage

    KUNDE
    Name: {firstName} {lastName}
    Unternehmen: {companyName or "-"}
    E-Mail: {email}
    Telefon: {phone or "-"}

    PROJEKT
    Projektart: {projectType}
    Branche: {industry or "-"}
    Firmenbeschreibung: {companyDescription or "-"}
    Ziel der Website: {websiteGoal}
    Bestehende Website: {url or "-"}

    DESIGN
    Primärfarbe: {primaryColor or "-"}
    Sekundärfarbe: {secondaryColor or "-"}
    Akzentfarbe: {accentColor or "-"}
    Stil: {style or "-"}

    SEITEN & FUNKTIONEN
    Seitenanzahl: {pageCount or "-"}
    Seiten: {pages_text or "-"}
    Funktionen: {features_text or "-"}

    PAKET & PREIS
    Gewähltes Paket: {selectedPackage or "-"}
    Zusatzleistungen: {addons_text}
    Mengen: {quantities_text}
    Geschätzter Gesamtpreis: {total_text}

    ZEITPLAN
    {timeline}

    DATEIEN
    Text: {text_file_original_name or "-"}
    Logo: {logo_original_name or "-"}
    Bilder: {images_text or "-"}
    Branding: {branding_original_name or "-"}

    Nachricht: 
    {message}
    """
    subject = f"Neue Projektanfrage - {firstName} {lastName}"

    try:
        send_email(subject, body, email)
    except Exception as error:
        print(f"E-mail could not be sent: {error}")

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