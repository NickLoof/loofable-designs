import "./Kontakt.css";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import type { CalculatorSelection } from "../types/calculator";

function Contact () {
    const [formType, setFormType] = useState<"basic" | "advanced">("basic");
    const [contactForm, setContactForm] = useState({
        firstName: "",
        lastName: "",
        companyName: "",
        email: "",
        phone: "",
        message: "",
        privacyAccepted: false
    });
    const [contactSuccess, setContactSuccess] = useState("");
    const [submitError, setSubmitError] = useState("");
    const [projectSuccess, setProjectSuccess] = useState("")

    const features = [
    { value: "contact-form", label: "Kontakt-/Anfrageformular" },
    { value: "maps", label: "Google Maps / Standortkarte" },
    { value: "gallery", label: "Galerie" },
    { value: "booking", label: "Buchungssystem" },
    { value: "multilingual", label: "Mehrsprachige Website" },
    { value: "blog", label: "Blog" },
    { value: "newsletter", label: "Newsletter-Anmeldung" },
    { value: "online-shop", label: "Online-Shop" },
    { value: "customer-login", label: "Kundenbereich / Login" },
    { value: "misc", label: "Sonstige" },
];

    const [projectForm, setProjectForm] = useState({
        firstName: "",
        lastName: "",
        companyName: "",
        email: "",
        phone: "",
        projectType: "",
        industry: "",
        companyDescription: "",
        websiteGoal: "",
        url: "",
        primaryColor: "#ffffff",
        secondaryColor: "#ffffff",
        accentColor: "#ffffff",
        style: "",
        inspiration: "",
        availableText: false,
        availableImages: false,
        availableLogo: false,
        availableBranding: false,
        textFile: null as File | null,
        logo: null as File | null,
        images: [] as File[],
        branding: null as File | null,
        pageCount: "",
        pages: [] as string[],
        otherPages: "",
        features: [] as string[],
        otherFeatures: "",
        timeline: "",
        message: "",
        privacyAccepted: false
    })

    const [contactErrors, setContactErrors] = useState({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
        privacyAccepted: ""
    })

    const handleContactSubmit = async (event: React.SubmitEvent<HTMLFormElement>) => {
        event.preventDefault();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const newErrors = {
            firstName: "",
            lastName: "",
            email: "",
            message: "",
            privacyAccepted: ""
        }
        
        if(!contactForm.firstName.trim()){
            newErrors.firstName = "Bitte gib deinen Vornamen ein.";
        }
        if(!contactForm.lastName.trim()){
            newErrors.lastName = "Bitte gib deinen Nachnamen ein.";
        }
        if(!contactForm.email.trim()){
            newErrors.email = "Bitte gib deine E-Mail-Adresse ein.";
        }else if(!emailPattern.test(contactForm.email.trim())){
            newErrors.email = "Bitte gib eine gültige E-Mail-Adresse ein."
        }
        if(!contactForm.message.trim()){
            newErrors.message = "Bitte gib eine Nachricht ein."
        }else if(contactForm.message.trim().length < 20){
            newErrors.message = "Deine Nachricht sollte mindestens 20 Zeichen lang sein."
        }
        if(!contactForm.privacyAccepted){
            newErrors.privacyAccepted = "Bitte akzeptiere die Datenschutzerklärung."
        }
        setContactErrors(newErrors);
        const hasErrors = Object.values(newErrors).some(item => item !== "");
        if(hasErrors){
            return;
        }
        
        const url = `http://127.0.0.1:8000/inquiries/quick`;
        const response = await fetch(url, {method: "POST", headers: {"Content-Type":"application/json"}, body: JSON.stringify(contactForm)})
        const data = await response.json();
        if (response.ok){
            setContactSuccess("Success!");
            setSubmitError("");
            setContactForm({
                firstName: "",
                lastName: "",
                companyName: "",
                email: "",
                phone: "",
                message: "",
                privacyAccepted: false
            });
        }else{
            setSubmitError("Something went wrong!");
            setContactSuccess("");
        }  
}
    

    const [projectErrors, setProjectErrors] = useState({
        firstName: "",
        lastName: "",
        email: "",
        companyDescription: "",
        projectType: "",
        timeline: "",
        websiteGoal: "",
        privacyAccepted: "",
        message: "",
    })

    const handleProjectSubmit = async (event: React.SubmitEvent<HTMLFormElement>) => {
        event.preventDefault();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const newErrors = {
            firstName: "",
            lastName: "",
            email: "",
            companyDescription: "",
            projectType: "",
            timeline: "",
            websiteGoal: "",
            privacyAccepted: "",
            message: "",
        }
        const formData = new FormData();
        Object.entries(projectForm).forEach(([key, value]) => {
            if(value === null){
                return
            }
            else if (value instanceof File){
                formData.append(key, value);
            }
            else if(Array.isArray(value)){
                if(key !== "images"){
                formData.append(key, JSON.stringify(value));
                }else{
                    projectForm.images.forEach((image) => formData.append("images", image));
                }
            }else{
                formData.append(key, value.toString());
            }
        })
        
        
        
        if(!projectForm.firstName.trim()){
            newErrors.firstName = "Bitte gib deinen Vornamen ein.";
        }
        if(!projectForm.lastName.trim()){
            newErrors.lastName = "Bitte gib deinen Nachnamen ein.";
        }
        if(!projectForm.email.trim()){
            newErrors.email = "Bitte gib deine E-Mail-Adresse ein.";
        }else if(!emailPattern.test(projectForm.email.trim())){
            newErrors.email = "Bitte gib eine gültige E-Mail-Adresse ein."
        }
        if(!projectForm.companyDescription.trim()){
            newErrors.companyDescription = "Bitte beschreibe dein Unternehmen kurz."
        }
        if(!projectForm.projectType.trim()){
            newErrors.projectType = "Bitte gib eine Projektart an."
        }
        if(!projectForm.timeline.trim()){
            newErrors.timeline = "Bitte gib einen gewünschten Zeitraum an."
        }
        if(!projectForm.websiteGoal.trim()){
            newErrors.websiteGoal = "Bitte gib an, was du mit deiner Website erreichen möchtest."
        }
        if(!projectForm.message.trim()){
            newErrors.message = "Bitte gib eine Nachricht ein."
        }else if(projectForm.message.trim().length < 20){
            newErrors.message = "Deine Nachricht sollte mindestens 20 Zeichen lang sein."
        }
        if(!projectForm.privacyAccepted){
            newErrors.privacyAccepted = "Bitte akzeptiere die Datenschutzerklärung."
        }
        setProjectErrors(newErrors);
        const hasErrors = Object.values(newErrors).some(item => item !== "");
        if(hasErrors){
            return;
        }
        const url = `http://127.0.0.1:8000/inquiries/project`;
        const response = await fetch(url, {method: "POST", body: formData})
        const data = await response.json();
        if (response.ok){
            setProjectSuccess("✓ Anfrage erfolgreich gesendet!");
            setSubmitError("");
            setProjectForm({
                firstName: "",
                lastName: "",
                companyName: "",
                email: "",
                phone: "",
                projectType: "",
                industry: "",
                companyDescription: "",
                websiteGoal: "",
                url: "",
                primaryColor: "#ffffff",
                secondaryColor: "#ffffff",
                accentColor: "#ffffff",
                style: "",
                inspiration: "",
                availableText: false,
                availableImages: false,
                availableLogo: false,
                availableBranding: false,
                textFile: null as File | null,
                logo: null as File | null,
                images: [] as File[],
                branding: null as File | null,
                pageCount: "",
                pages: [] as string[],
                otherPages: "",
                features: [] as string[],
                otherFeatures: "",
                timeline: "",
                message: "",
                privacyAccepted: false
            });
        }else{
            setSubmitError("Es ist ein Fehler aufgetreten");
            setProjectSuccess("");
        }
    }

    const location = useLocation();
    console.log(location.state);
    const calculatorSelection = location.state as CalculatorSelection | null;

    const testBackend = async () => {
        const url = `http://127.0.0.1:8000/`   
        const response = await fetch(`${url}inquiries`, {method: "POST",
            headers: {"Content-Type": "application/json",
            },
            body: JSON.stringify({firstName: "Nicholas"})
        });
        const data = await response.json();
        console.log(data);
    }

    return(
        <>
            <div className="contact-page">
                <div className="contact-page-header">
                    <h1>Kostenloses Angebot anfragen</h1>
                    <h2>Erzähl mir kurz von deinem Projekt. Ich melde mich persönlich bei dir und wir besprechen gemeinsam die nächsten Schritte.</h2>
                    <div className="contact-page-form-selector">
                        <button type="button" className={formType === "basic" ? "contact-page-form-button contact-page-form-button-active": "contact-page-form-button"} 
                        onClick={() => setFormType("basic")}>Schnelle Anfrage</button>
                        <button type="button" className={formType === "advanced" ? "contact-page-form-button contact-page-form-button-active": "contact-page-form-button"} 
                        onClick={() => setFormType("advanced")}>Projektanfrage</button>
                    </div>
                    {calculatorSelection?.selectedPackage && (
                        <div className="contact-calculator-selection">
                            <h2>Deine Auswahl</h2>
                            <div className="contact-calculator-package">
                                <h2>Paket</h2>
                                <div className="contact-calculator-package-name-price">
                                    <h3>{calculatorSelection.selectedPackage.name}</h3>
                                    <h3>{new Intl.NumberFormat("de-DE", {style: "currency", currency: "EUR",}).format(calculatorSelection.selectedPackage.price)}</h3>
                                </div>
                            </div>
                            <div className="contact-calculator-addons">
                                <h2>Zusatzleistungen</h2>
                                {Object.entries(calculatorSelection.addonQuantities).map(([name, quantity]) => (
                                    <div key={name} className="contact-calculator-addons-name">
                                        <h3>{name}{" "}{quantity} x</h3>
                                        <h3></h3>
                                    </div>
                                )
                                )}
                                {calculatorSelection.selectedAddons.map((addOn) => (
                                    <div key={addOn.name} className="contact-calculator-addons-name">
                                        <h3>{addOn.name}</h3>
                                    </div>))}
                            </div>
                            <div className="contact-calculator-total">
                                <h3>Geschätzte Investition</h3>
                                <h3>{new Intl.NumberFormat("de-DE", {style: "currency", currency: "EUR",}).format(calculatorSelection.total)}</h3>
                            </div>
                        </div>
                    )}
                </div>
                    {formType === "basic"
                    ? <div className="contact-page-form">
                        <form onSubmit={handleContactSubmit} noValidate>
                            <fieldset>
                                <legend>Kontakt</legend>
                                <div className="contact-form-content">
                                    <div className="contact-form-input-container">
                                        <label htmlFor="contact-form-firstName">Vorname: </label>
                                        <input type="text" id="contact-form-firstName" value={contactForm.firstName} placeholder="Vorname"
                                        onChange={(event) => {setContactForm({...contactForm, firstName: event.target.value}); 
                                        setContactErrors({...contactErrors, firstName: ""})}}/>
                                        {contactErrors.firstName &&(<p className="contact-form-error">{contactErrors.firstName}</p>)}
                                    </div>
                                    <div className="contact-form-input-container">
                                        <label htmlFor="contact-form-lastName">Nachname: </label>
                                        <input type="text" id="contact-form-lastName" value={contactForm.lastName} placeholder="Nachname"
                                        onChange={(event) => {setContactForm({...contactForm, lastName: event.target.value});
                                        setContactErrors({...contactErrors, lastName: ""})}}/>
                                        {contactErrors.lastName && (<p className="contact-form-error">{contactErrors.lastName}</p>)}
                                    </div>
                                    <div className="contact-form-input-container">
                                        <label htmlFor="contact-form-companyName">Name deiner Firma (optional):</label>
                                        <input type="text" id="contact-form-companyName" value={contactForm.companyName} placeholder="Firmenname"
                                        onChange={(event) => setContactForm({...contactForm, companyName: event.target.value})}/>
                                    </div>
                                    <div className="contact-form-input-container">
                                        <label htmlFor="contact-form-email">E-Mail:</label>
                                        <input type="email" id="contact-form-email" value={contactForm.email} placeholder="E-Mail"
                                        onChange={(event) => {setContactForm({...contactForm, email: event.target.value});
                                        setContactErrors({...contactErrors, email: ""})}} />
                                        {contactErrors.email && (<p className="contact-form-error">{contactErrors.email}</p>)}
                                    </div>
                                    <div className="contact-form-input-container">
                                        <label htmlFor="contact-form-phone">Telefonnummer (optional): </label>
                                        <input type="tel" id="contact-form-phone" value={contactForm.phone} placeholder="z.B +49 170 1234567"
                                        onChange={(event) => setContactForm({...contactForm, phone: event.target.value})} />
                                    </div>
                                </div>
                                <div className="contact-form-textarea-container">
                                    <div className="contact-form-input-container">
                                        <label htmlFor="contact-form-message">Deine Nachricht: </label>
                                        <textarea className="contact-form-content-textarea" id="contact-form-message" value={contactForm.message} placeholder="Schreibe deine Nachricht hier..." 
                                        onChange={(event) => {setContactForm({...contactForm, message: event.target.value});
                                        setContactErrors({...contactErrors, message: ""})}} />
                                        {contactErrors.message && (<p className="contact-form-error">{contactErrors.message}</p>)}
                                    </div>
                                </div>
                                <div className="contact-form-privacy-container">
                                    <div className="contact-form-privacy">
                                        <input type="checkbox" id="contact-form-privacy-check" checked={contactForm.privacyAccepted} 
                                        onChange={(event) => {setContactForm({...contactForm, privacyAccepted: event.target.checked});
                                        setContactErrors({...contactErrors, privacyAccepted: ""})}} />
                                        <label htmlFor="contact-form-privacy-check">Ich habe die Datenschutzerklärung gelesen und stimme der Verarbeitung meiner Daten zu.</label>
                                    </div>
                                    {contactErrors.privacyAccepted && (<p className="contact-form-error">{contactErrors.privacyAccepted}</p>)}
                                </div>
                                <div className="contact-form-submit-button-container">
                                    <button type="submit" className="contact-form-submit-button">Anfrage senden</button>
                                </div>
                                {contactSuccess && (<div><h3>{contactSuccess}</h3><p>Vielen Dank für deine Anfrage. Ich melde mich so schnell wie möglich bei dir.</p></div>)}
                                {submitError && <p>{submitError}</p>}
                            </fieldset>
                        </form>
                      </div>
                    :<div className="project-page-form">
                        <form onSubmit={handleProjectSubmit} noValidate>
                            <fieldset className="project-page-form-outer-fieldset">
                                <legend>Projektanfrage</legend>
                            <fieldset>
                                <legend>Kontaktdaten</legend>
                                <div className="project-form-content">
                                    <div className="project-form-input-container">
                                        <label htmlFor="project-form-firstName">Vorname: </label>
                                        <input type="text" id="project-form-firstName" value={projectForm.firstName} placeholder="Vorname"
                                        onChange={(event) => {setProjectForm({...projectForm, firstName: event.target.value});
                                        setProjectErrors({...projectErrors, firstName: ""})}}/>
                                        {projectErrors.firstName &&(<p className="project-form-error">{projectErrors.firstName}</p>)}
                                    </div>
                                    <div className="project-form-input-container">
                                        <label htmlFor="project-form-lastName">Nachname: </label>
                                        <input type="text" id="project-form-lastName" value={projectForm.lastName} placeholder="Nachname"
                                        onChange={(event) => {setProjectForm({...projectForm, lastName: event.target.value});
                                        setProjectErrors({...projectErrors, lastName: ""})}}/>
                                        {projectErrors.lastName &&(<p className="project-form-error">{projectErrors.lastName}</p>)}
                                    </div>
                                    <div className="project-form-input-container">
                                        <label htmlFor="project-form-email">E-Mail:</label>
                                        <input type="email" id="project-form-email" value={projectForm.email} placeholder="E-Mail"
                                        onChange={(event) => {setProjectForm({...projectForm, email: event.target.value});
                                        setProjectErrors({...projectErrors, email: ""})}} />
                                        {projectErrors.email &&(<p className="project-form-error">{projectErrors.email}</p>)}
                                    </div>
                                    <div className="project-form-input-container">
                                        <label htmlFor="project-form-phone">Telefonnummer (optional): </label>
                                        <input type="tel" id="project-form-phone" value={projectForm.phone} placeholder="z.B +49 170 1234567"
                                        onChange={(event) => setProjectForm({...projectForm, phone: event.target.value})} />
                                    </div>
                                </div>
                            </fieldset>
                            <fieldset>
                                <legend>Über dein Unternehmen</legend>
                                <div className="project-form-content">
                                    <div className="project-form-input-container">
                                        <label htmlFor="project-form-companyName">Name deiner Firma (Optional):</label>
                                        <input type="text" id="project-form-companyName" value={projectForm.companyName} placeholder="Firmenname"
                                        onChange={(event) => setProjectForm({...projectForm, companyName: event.target.value})}/>
                                    </div>
                                    <div className="project-form-input-container">
                                        <label htmlFor="project-form-companyIndustry">Branche (optional):</label>
                                        <input type="text" id="project-form-companyIndustry" value={projectForm.industry} placeholder="Firmenbranche"
                                        onChange={(event) => setProjectForm({...projectForm, industry: event.target.value})}/>
                                    </div>
                                    <div className="project-form-input-container">
                                        <label htmlFor="project-form-companyWebsite">Webseite vorhanden? (optional)</label>
                                        <input type="text" id="project-form-companyWebsite" value={projectForm.url} placeholder="https://beispiel.de"
                                        onChange={(event) => setProjectForm({...projectForm, url: event.target.value})}/>
                                    </div>
                                </div>
                                <div className="project-form-input-container">
                                    <label htmlFor="project-form-companyDescription">Beschreibe dein Unternehmen kurz:</label>
                                    <textarea className="contact-form-content-textarea" id="project-form-companyDescription" value={projectForm.companyDescription} placeholder="Unternehmensbeschreibung hier..."
                                    onChange={(event) => {setProjectForm({...projectForm, companyDescription: event.target.value});
                                    setProjectErrors({...projectErrors, companyDescription: ""})}}/>
                                    {projectErrors.companyDescription &&(<p className="project-form-error">{projectErrors.companyDescription}</p>)}
                                </div>
                            </fieldset>
                            <fieldset>
                                <legend>Über dein Projekt</legend>
                                <div className="project-form-content">
                                    <div className="project-form-input-container">
                                        <label htmlFor="project-form-projecttype">Projektart:</label>
                                        <select id="project-form-projecttype" value={projectForm.projectType} 
                                        onChange={(event) => {setProjectForm({...projectForm, projectType: event.target.value});
                                        setProjectErrors({...projectErrors, projectType: ""})}}>
                                            <option value="" disabled>Wähle die Art deines Projekts</option>
                                            <option value="new-website">Neue Website</option>
                                            <option value="web-redesign">Website-Redesign</option>
                                            <option value="online-shop">Online-Shop</option>
                                            <option value="miscellaneous">Sonstiges</option>
                                        </select>
                                        {projectErrors.projectType &&(<p className="project-form-error">{projectErrors.projectType}</p>)}
                                    </div>
                                    <div className="project-form-input-container">
                                        <label htmlFor="project-form-timeline">Gewünschter Zeitraum:</label>
                                        <select id="project-form-timeline" value={projectForm.timeline}
                                        onChange={(event) => {setProjectForm({...projectForm, timeline: event.target.value});
                                        setProjectErrors({...projectErrors, timeline: ""})}}>
                                            <option value="" disabled>Zeitraum auswählen</option>
                                            <option value="asap">So schnell wie möglich</option>
                                            <option value="1-2-weeks">1-2 Wochen</option>
                                            <option value="1-2-months">1-2 Monate</option>
                                            <option value="none">Kein fester Termin</option>
                                        </select>
                                        {projectErrors.timeline &&(<p className="project-form-error">{projectErrors.timeline}</p>)}
                                    </div>
                                </div>
                                <div className="project-form-input-container">
                                    <label htmlFor="project-form-websiteGoal">Was möchtest du mit deiner Website erreichen?</label>
                                    <textarea className="contact-form-content-textarea" id="project-form-websiteGoal" value={projectForm.websiteGoal} 
                                    placeholder="z.B. mehr Anfragen, das Unternehmen professionell präsentieren usw."
                                    onChange={(event) => {setProjectForm({...projectForm, websiteGoal: event.target.value});
                                    setProjectErrors({...projectErrors, websiteGoal: ""})}}/>
                                    {projectErrors.websiteGoal &&(<p className="project-form-error">{projectErrors.websiteGoal}</p>)}
                                </div>
                            </fieldset>
                            <fieldset>
                                <legend>Design & Farben</legend>
                                <div className="project-form-content">
                                    <div className="project-form-input-container">
                                        <label htmlFor="project-form-primaryColor">Primärfarbe (optional):</label>
                                        <input type="color" id="project-form-primaryColor" className="project-form-colorPicker" value={projectForm.primaryColor} 
                                        onChange={(event) => setProjectForm({...projectForm, primaryColor: event.target.value})}/>
                                    </div>
                                    <div className="project-form-input-container">
                                        <label htmlFor="project-form-secondaryColor">Sekundärfarbe (optional):</label>
                                        <input type="color" id="project-form-secondaryColor" className="project-form-colorPicker" value={projectForm.secondaryColor} 
                                        onChange={(event) => setProjectForm({...projectForm, secondaryColor: event.target.value})}/>
                                    </div>
                                    <div className="project-form-input-container">
                                        <label htmlFor="project-form-accentColor">Akzentfarbe (optional):</label>
                                        <input type="color" id="project-form-accentColor" className="project-form-colorPicker" value={projectForm.accentColor} 
                                        onChange={(event) => setProjectForm({...projectForm, accentColor: event.target.value})}/>
                                    </div>
                                    <div className="project-form-input-container">
                                        <label htmlFor="project-form-style">Stil (optional):</label>
                                        <select id="project-form-style" value={projectForm.style} 
                                        onChange={(event) => setProjectForm({...projectForm, style: event.target.value})}>
                                            <option value="" disabled>Stil auswählen</option>
                                            <option value="modern-minimalist">Modern & minimalistisch</option>
                                            <option value="elegant-high-quality">Elegant & hochwertig</option>
                                            <option value="natural-organic">Natürlich & organisch</option>
                                            <option value="strong-noticable">Kräftig & auffällig</option>
                                            <option value="professional-serious">Professionell & seriös</option>
                                            <option value="playful-creative">Verspielt & kreativ</option>
                                            <option value="no-preference">Keine Präferenz</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="project-form-input-container">
                                    <label htmlFor="project-form-inspiration">Gibt es Websites oder Designs, die dir gefallen? (optional):</label>
                                    <textarea id="project-form-inspiration" value={projectForm.inspiration} placeholder="Links oder kurze Beschreibung..." 
                                    onChange={(event) => setProjectForm({...projectForm, inspiration: event.target.value})} ></textarea>
                                </div>
                            </fieldset>
                            <fieldset>
                                <legend>Inhalte & Dateien</legend>
                                <div className="project-form-content">
                                    <div className="project-form-contents-and-documents">
                                        <div className="project-form-checkbox-container">
                                            <input  type="checkbox" id="project-form-text-check" checked={projectForm.availableText} 
                                                onChange={(event) => setProjectForm({...projectForm, availableText: event.target.checked})} />
                                            <label htmlFor="project-form-text-check">Stellst du Texte zur verfügung?</label>
                                        </div>
                                        {projectForm.availableText &&(
                                        <div className="project-form-input-container">
                                            <label htmlFor="project-form-text-input">Texte hochladen: </label>
                                            <input id="project-form-text-input" type="file" accept=".pdf, .doc, .docx, .txt" 
                                            onChange={(event) => setProjectForm({...projectForm, textFile: event.target.files?.[0] ?? null})}/>
                                            <p>Akzeptierte Dokumente: .pdf, .doc, .docx, .txt</p>
                                        </div>)}
                                    </div>
                                    <div className="project-form-contents-and-documents">
                                        <div className="project-form-checkbox-container">
                                            <input type="checkbox" id="project-form-images-check" checked={projectForm.availableImages} 
                                                onChange={(event) => setProjectForm({...projectForm, availableImages: event.target.checked})} />
                                            <label htmlFor="project-form-images-check">Stellst du Bilder zur verfügung?</label>
                                        </div>
                                        {projectForm.availableImages &&(
                                        <div className="project-form-input-container">
                                            <label htmlFor="project-form-image-input">Bilder hochladen: </label>
                                            <input id="project-form-image-input" type="file" accept="image/*" multiple 
                                            onChange={(event) => setProjectForm({...projectForm, images: Array.from(event.target.files ?? [])})}/>
                                            <p>Akzeptierte Bildformate: .png, .jpg, .jpeg, .webp</p>
                                        </div>)}
                                    </div>
                                    <div className="project-form-contents-and-documents">
                                        <div className="project-form-checkbox-container">
                                            <input type="checkbox" id="project-form-logo-check" checked={projectForm.availableLogo} 
                                                onChange={(event) => setProjectForm({...projectForm, availableLogo: event.target.checked})} />
                                            <label htmlFor="project-form-logo-check">Stellst du ein Logo zur verfügung?</label>
                                        </div>
                                        {projectForm.availableLogo &&(
                                        <div className="project-form-input-container">
                                            <label htmlFor="project-form-logo-input">Logo hochladen: </label>
                                            <input id="project-form-logo-input" type="file" accept=".png,.jpg,.jpeg,.svg,.webp" 
                                            onChange={(event) => setProjectForm({...projectForm, logo: event.target.files?.[0] ?? null})}/>
                                            <p>Akzeptierte Bildformate: .png, .jpg, .jpeg, .svg, .webp</p>
                                        </div>)}
                                    </div>
                                    <div className="project-form-contents-and-documents">
                                        <div className="project-form-checkbox-container">
                                            <input type="checkbox" id="project-form-branding-check" checked={projectForm.availableBranding} 
                                                onChange={(event) => setProjectForm({...projectForm, availableBranding: event.target.checked})} />
                                            <label htmlFor="project-form-branding-check">Stellst du bereits Branding/Markenmaterial zur Verfügung?</label>
                                        </div>
                                        {projectForm.availableBranding &&(
                                        <div className="project-form-input-container">
                                            <label htmlFor="project-form-branding-input">Markendesign hochladen: </label>
                                            <input id="project-form-branding-input" type="file" accept=".pdf,.png,.jpg,.jpeg" 
                                            onChange={(event) => setProjectForm({...projectForm, branding: event.target.files?.[0] ?? null})}/>
                                            <p>Akzeptierte Bildformate: .pdf, .png, .jpg, .jpeg</p>
                                        </div>)}
                                    </div>
                                </div>
                            </fieldset>
                            <fieldset>
                                <legend>Seiten & Aufbau</legend>
                                <div className="project-form-content">
                                    <div className="project-form-input-container">
                                        <label htmlFor="project-form-page-count">Gewünschte Seitenanzahl (optional):</label>
                                        <select id="project-form-page-count" value={projectForm.pageCount} 
                                        onChange={(event) => setProjectForm({...projectForm, pageCount: event.target.value})}>
                                            <option value="" disabled>Seitenanzahl auswählen</option>
                                            <option value="one-page">1 Seite (One-Page)</option>
                                            <option value="business-starter">2-4 Seiten (Business-Starter)</option>
                                            <option value="business-website">5-7 Seiten (Business-Website)</option>
                                            <option value="custom-website">8+ Seiten (Custom-Website)</option>
                                            <option value="unsure">Noch unsicher</option>
                                        </select>
                                    </div>
                                    <div className="project-form-input-container">
                                        <h3>Welche Seiten werden benötigt? (optional)</h3>
                                        <div className="project-form-page-checkboxes">
                                            <div className="project-form-input-wrapper">
                                                <input type="checkbox" id="project-form-home" checked={projectForm.pages.includes("home")} 
                                                onChange={(event) => setProjectForm({...projectForm, pages: event.target.checked? [...projectForm.pages, "home"]
                                                :projectForm.pages.filter(page => page !== "home")})}/>
                                                <label htmlFor="project-form-home">Startseite</label>
                                            </div>
                                            <div className="project-form-input-wrapper">
                                                <input type="checkbox" id="project-form-about-us" checked={projectForm.pages.includes("about-us")} 
                                                onChange={(event) => setProjectForm({...projectForm, pages: event.target.checked? [...projectForm.pages, "about-us"]
                                                :projectForm.pages.filter(page => page !== "about-us")})}/>
                                                <label htmlFor="project-form-about-us">Über uns</label>
                                            </div>
                                            <div className="project-form-input-wrapper">
                                                <input type="checkbox" id="project-form-services" checked={projectForm.pages.includes("services")} 
                                                onChange={(event) => setProjectForm({...projectForm, pages: event.target.checked? [...projectForm.pages, "services"]
                                                :projectForm.pages.filter(page => page !== "services")})}/>
                                                <label htmlFor="project-form-services">Leistungen</label>
                                            </div>
                                            <div className="project-form-input-wrapper">
                                                <input type="checkbox" id="project-form-contact" checked={projectForm.pages.includes("contact")} 
                                                onChange={(event) => setProjectForm({...projectForm, pages: event.target.checked? [...projectForm.pages, "contact"]
                                                :projectForm.pages.filter(page => page !== "contact")})}/>
                                                <label htmlFor="project-form-contact">Kontakt</label>
                                            </div>
                                            <div className="project-form-input-wrapper">
                                                <input type="checkbox" id="project-form-gallery" checked={projectForm.pages.includes("gallery")} 
                                                onChange={(event) => setProjectForm({...projectForm, pages: event.target.checked? [...projectForm.pages, "gallery"]
                                                :projectForm.pages.filter(page => page !== "gallery")})}/>
                                                <label htmlFor="project-form-gallery">Galerie</label>
                                            </div>
                                            <div className="project-form-input-wrapper">
                                                <input type="checkbox" id="project-form-faq" checked={projectForm.pages.includes("faq")} 
                                                onChange={(event) => setProjectForm({...projectForm, pages: event.target.checked? [...projectForm.pages, "faq"]
                                                :projectForm.pages.filter(page => page !== "faq")})}/>
                                                <label htmlFor="project-form-faq">FAQ</label>
                                            </div>
                                            <div className="project-form-input-wrapper">
                                                <input type="checkbox" id="project-form-blog" checked={projectForm.pages.includes("blog")} 
                                                onChange={(event) => setProjectForm({...projectForm, pages: event.target.checked? [...projectForm.pages, "blog"]
                                                :projectForm.pages.filter(page => page !== "blog")})}/>
                                                <label htmlFor="project-form-blog">Blog</label>
                                            </div>
                                            <div className="project-form-input-wrapper">
                                                <input type="checkbox" id="project-form-misc" checked={projectForm.pages.includes("misc")} 
                                                onChange={(event) => setProjectForm({...projectForm, pages: event.target.checked? [...projectForm.pages, "misc"]
                                                :projectForm.pages.filter(page => page !== "misc")})}/>
                                                <label htmlFor="project-form-misc">Sonstige</label>
                                            </div>
                                        </div>
                                        {projectForm.pages.includes("misc") &&(
                                            <div className="project-form-input-container">
                                                <label htmlFor="project-form-other-pages">
                                                    Welche weiteren Seiten benötigst du?
                                                </label>
                                                <textarea id="project-form-other-pages" value={projectForm.otherPages}
                                                onChange={(event) => setProjectForm({...projectForm, otherPages: event.target.value})} />
                                            </div>)}
                                    </div>
                                </div>
                            </fieldset>
                            <fieldset>
                                <legend>Funktionen (optional)</legend>
                                <div className="project-form-feature-checkboxes">
                                    {features.map((feature) => (<div key={feature.value} className="project-form-input-wrapper">
                                        <input type="checkbox" id={`project-form-${feature.value}`} checked={projectForm.features.includes(feature.value)} 
                                        onChange={(event) => setProjectForm({...projectForm, features: event.target.checked? [...projectForm.features, feature.value]
                                            :projectForm.features.filter(selectedFeature => selectedFeature !== feature.value)
                                        })} />
                                        <label htmlFor={`project-form-${feature.value}`}>{feature.label}</label>
                                    </div>))}
                                </div>
                                {projectForm.features.includes("misc") &&(
                                            <div className="project-form-input-container">
                                                <label htmlFor="project-form-other-features">
                                                    Welche weiteren Funktionen benötigst du?
                                                </label>
                                                <textarea id="project-form-other-features" value={projectForm.otherFeatures}
                                                onChange={(event) => setProjectForm({...projectForm, otherFeatures: event.target.value})} />
                                            </div>)}
                            </fieldset>
                            <fieldset>
                                <legend>Weitere Informationen</legend>
                                <div className="project-form-textarea-container">
                                    <div className="project-form-input-container">
                                        <label htmlFor="project-form-message">Gibt es noch etwas, das ich über dein Projekt wissen sollte?</label>
                                        <textarea id="project-form-message" value={projectForm.message} placeholder="Schreibe deine Nachricht hier..." 
                                        onChange={(event) => {setProjectForm({...projectForm, message: event.target.value});
                                        setProjectErrors({...projectErrors, message: ""})}} />
                                        {projectErrors.message &&(<p className="project-form-error">{projectErrors.message}</p>)}
                                    </div>
                                </div>
                            </fieldset>
                            <div className="project-form-privacy">
                                    <input type="checkbox" id="project-form-privacy-check" checked={projectForm.privacyAccepted} 
                                    onChange={(event) => {setProjectForm({...projectForm, privacyAccepted: event.target.checked});
                                    setProjectErrors({...projectErrors, privacyAccepted: ""})}} />
                                    <label htmlFor="project-form-privacy-check">Ich habe die Datenschutzerklärung gelesen und stimme der Verarbeitung meiner Daten zu.</label>
                                </div>
                                {projectErrors.privacyAccepted &&(<p className="project-form-error privacy-error">{projectErrors.privacyAccepted}</p>)}
                                <div className="project-form-submit-button-container">
                                    <button type="submit" className="project-form-submit-button">Anfrage senden</button>
                                </div>
                                {projectSuccess && (<div><h3>{projectSuccess}</h3><p>Vielen Dank für deine Anfrage. Ich melde mich so schnell wie möglich bei dir.</p></div>)}
                                {submitError && <p>{submitError}</p>}
                            </fieldset>
                        </form>
                    </div>}
            </div>
        </>
    )
}

export default Contact;