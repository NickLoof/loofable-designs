import "./Kontakt.css";
import { useState } from "react";

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
        structureNotes: "",
        timeline: "",
        message: "",
        privacyAccepted: false
    })

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
                </div>
                    {formType === "basic"
                    ? <div className="contact-page-form">
                        <form>
                            <fieldset>
                                <legend>Kontakt</legend>
                                <div className="contact-form-content">
                                    <div className="contact-form-input-container">
                                        <label htmlFor="contact-form-firstName">Vorname: </label>
                                        <input type="text" id="contact-form-firstName" value={contactForm.firstName} placeholder="Vorname"
                                        onChange={(event) => setContactForm({...contactForm, firstName: event.target.value})}/>
                                    </div>
                                    <div className="contact-form-input-container">
                                        <label htmlFor="contact-form-lastName">Nachname: </label>
                                        <input type="text" id="contact-form-lastName" value={contactForm.lastName} placeholder="Nachname"
                                        onChange={(event) => setContactForm({...contactForm, lastName: event.target.value})}/>
                                    </div>
                                    <div className="contact-form-input-container">
                                        <label htmlFor="contact-form-companyName">Name deiner Firma (optional):</label>
                                        <input type="text" id="contact-form-companyName" value={contactForm.companyName} placeholder="Firmenname"
                                        onChange={(event) => setContactForm({...contactForm, companyName: event.target.value})}/>
                                    </div>
                                    <div className="contact-form-input-container">
                                        <label htmlFor="contact-form-email">E-Mail:</label>
                                        <input type="email" id="contact-form-email" value={contactForm.email} placeholder="E-Mail"
                                        onChange={(event) => setContactForm({...contactForm, email: event.target.value})} />
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
                                        onChange={(event) => setContactForm({...contactForm, message: event.target.value})} />
                                    </div>
                                </div>
                                <div className="contact-form-privacy">
                                    <input type="checkbox" id="contact-form-privacy-check" checked={contactForm.privacyAccepted} 
                                    onChange={(event) => setContactForm({...contactForm, privacyAccepted: event.target.checked})} />
                                    <label htmlFor="contact-form-privacy-check">Ich habe die Datenschutzerklärung gelesen und stimme der Verarbeitung meiner Daten zu.</label>
                                </div>
                                <div className="contact-form-submit-button-container">
                                    <button type="submit" className="contact-form-submit-button">Anfrage senden</button>
                                </div>
                            </fieldset>
                        </form>
                      </div>
                    :<div className="project-page-form">
                        <form>
                            <fieldset className="project-page-form-outer-fieldset">
                                <legend>Projektanfrage</legend>
                            <fieldset>
                                <legend>Kontaktdaten</legend>
                                <div className="project-form-content">
                                    <div className="project-form-input-container">
                                        <label htmlFor="project-form-firstName">Vorname: </label>
                                        <input type="text" id="project-form-firstName" value={projectForm.firstName} placeholder="Vorname"
                                        onChange={(event) => setProjectForm({...projectForm, firstName: event.target.value})}/>
                                    </div>
                                    <div className="project-form-input-container">
                                        <label htmlFor="project-form-lastName">Nachname: </label>
                                        <input type="text" id="project-form-lastName" value={projectForm.lastName} placeholder="Nachname"
                                        onChange={(event) => setProjectForm({...projectForm, lastName: event.target.value})}/>
                                    </div>
                                    <div className="project-form-input-container">
                                        <label htmlFor="project-form-email">E-Mail:</label>
                                        <input type="email" id="project-form-email" value={projectForm.email} placeholder="E-Mail"
                                        onChange={(event) => setProjectForm({...projectForm, email: event.target.value})} />
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
                                        <label htmlFor="project-form-companyName">Name deiner Firma (optional):</label>
                                        <input type="text" id="project-form-companyName" value={projectForm.companyName} placeholder="Firmenname"
                                        onChange={(event) => setProjectForm({...projectForm, companyName: event.target.value})}/>
                                    </div>
                                    <div className="project-form-input-container">
                                        <label htmlFor="project-form-companyIndustry">Branche:</label>
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
                                    onChange={(event) => setProjectForm({...projectForm, companyDescription: event.target.value})}/>
                                </div>
                            </fieldset>
                            <fieldset>
                                <legend>Über dein Projekt</legend>
                                <div className="project-form-content">
                                    <div className="project-form-input-container">
                                        <label htmlFor="project-form-projecttype">Projektart:</label>
                                        <select id="project-form-projecttype" value={projectForm.projectType} 
                                        onChange={(event) => setProjectForm({...projectForm, projectType: event.target.value})}>
                                            <option value="" disabled>Wähle die Art deines Projekts</option>
                                            <option value="new-website">Neue Website</option>
                                            <option value="web-redesign">Website-Redesign</option>
                                            <option value="online-shop">Online-Shop</option>
                                            <option value="miscellaneous">Sonstiges</option>
                                        </select>
                                    </div>
                                    <div className="project-form-input-container">
                                        <label htmlFor="project-form-timeline">Gewünschter Zeitraum:</label>
                                        <select id="project-form-timeline" value={projectForm.timeline}
                                        onChange={(event) => setProjectForm({...projectForm, timeline: event.target.value})}>
                                            <option value="" disabled>Zeitraum auswählen</option>
                                            <option value="asap">So schnell wie möglich</option>
                                            <option value="1-2-weeks">1-2 Wochen</option>
                                            <option value="1-2-months">1-2 Monate</option>
                                            <option value="none">Kein fester Termin</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="project-form-input-container">
                                    <label htmlFor="project-form-websiteGoal">Was möchtest du mit deiner Website erreichen?</label>
                                    <textarea className="contact-form-content-textarea" id="project-form-websiteGoal" value={projectForm.websiteGoal} 
                                    placeholder="z.B. mehr Anfragen, das Unternehmen professionell präsentieren usw."
                                    onChange={(event) => setProjectForm({...projectForm, websiteGoal: event.target.value})}/>
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
                                        <label htmlFor="project-form-page-count">Gewünschte Seitenanzahl:</label>
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
                                        <p>Welche Seiten werden benötigt?</p>
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

                                            </div>)}
                                    </div>
                                </div>
                            </fieldset>
                            <fieldset>
                                <legend>Funktionen</legend>
                                <div className="project-form-content">
                                    
                                </div>
                            </fieldset>
                            <fieldset>
                                <legend>Weitere Informationen</legend>
                                <div className="project-form-textarea-container">
                                    <div className="project-form-input-container">
                                        <label htmlFor="project-form-message">Deine Nachricht: </label>
                                        <textarea id="project-form-message" value={projectForm.message} placeholder="Schreibe deine Nachricht hier..." 
                                        onChange={(event) => setProjectForm({...projectForm, message: event.target.value})} />
                                    </div>
                                </div>
                            </fieldset>
                            <div className="project-form-privacy">
                                    <input type="checkbox" id="project-form-privacy-check" checked={projectForm.privacyAccepted} 
                                    onChange={(event) => setProjectForm({...projectForm, privacyAccepted: event.target.checked})} />
                                    <label htmlFor="project-form-privacy-check">Ich habe die Datenschutzerklärung gelesen und stimme der Verarbeitung meiner Daten zu.</label>
                                </div>
                                <div className="project-form-submit-button-container">
                                    <button type="submit" className="project-form-submit-button">Anfrage senden</button>
                                </div>
                            </fieldset>
                        </form>
                    </div>}
            </div>
        </>
    )
}

export default Contact;