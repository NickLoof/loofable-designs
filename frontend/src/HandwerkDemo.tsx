import "./HandwerkDemo.css";
import { Phone, Dot, ArrowRight, ArrowLeft, ArrowBigRight } from "lucide-react";
import logo from "./assets/handwerk img/nordwerk-logo.svg";
import heroBackground from "./assets/handwerk img/hero-background.png";
import { useState } from "react";
import sanierungImage from "./assets/handwerk img/sanierung.png";
import renovierungImage from "./assets/handwerk img/renovierung.png";
import innenausbauImage from "./assets/handwerk img/innenausbau.png";
import before1 from "./assets/handwerk img/vorher1.png";
import before2 from "./assets/handwerk img/vorher2.png";
import before3 from "./assets/handwerk img/vorher3.png";
import after1 from "./assets/handwerk img/nachher1.png";
import after2 from "./assets/handwerk img/nachher2.png";
import after3 from "./assets/handwerk img/nachher3.png";
import team from "./assets/handwerk img/team.png";

function HandwerkDemo() {
    const [currentService, setCurrentService] = useState(0);

    type Service = {
        number: number,
        title: string,
        description: string,
        image: string,
        features: string[],
        tag: string
    }
    const tradeService: Service[] = [
        {number: 1, title: "Sanierung", description: "Wir bringen bestehende Gebäude wieder auf den neuesten Stand. Von einzelnen Räumen bis zur umfassenden Sanierung koordinieren wir die Arbeiten zuverlässig und sorgen für saubere Ergebnisse.", image: sanierungImage, features: ["Altbausanierung", "Komplettsanierung", "Modernisierung", "Trockenbau & Wandarbeiten"], tag: "BESTAND NEU GEDACHT"},
        {number: 2, title: "Renovierung", description: "Neue Böden, frische Wände oder eine komplette Raumgestaltung – wir renovieren Wohn- und Geschäftsräume nach deinen Vorstellungen und kümmern uns um die Umsetzung von Anfang bis Ende.", image: renovierungImage, features: ["Maler- & Wandarbeiten", "Bodenverlegung", "Decken & Verkleidungen", "Raumgestaltung"], tag: "RÄUME, DIE SICH NEU ANFÜHLEN"},
        {number: 3, title: "Innenausbau", description: "Wir schaffen Räume, die nicht nur gut aussehen, sondern auch funktionieren. Mit durchdachter Planung und präziser Umsetzung entsteht ein Innenausbau, der zu deinem Gebäude und deinen Anforderungen passt.", image: innenausbauImage, features: ["Trockenbau", "Wand- & Deckensysteme", "Individuelle Einbauten", "Kompletter Innenausbau"], tag: "PRÄZISE BIS INS DETAIL"}
    ]

    function nextService() {
        if(currentService < (tradeService.length-1)) {
            setCurrentService(currentService + 1)
        }else{
            setCurrentService(0);
        }
    }
    function prevService() {
        if(currentService > 0){
            setCurrentService(currentService - 1)
        }else{
            setCurrentService(tradeService.length-1)
        }
    }

    return(
        <div className="trade-demo">
            <div className="trade-topbar">
                <div className="trade-topbar-left-container">
                    <div className="trade-topbar-left">
                        <div className="trade-topbar-phone-container">
                            <Phone className="trade-topbar-phone-icon"/>
                            <a className="trade-topbar-phone-number" href="tel:+49431123456 ">0431 123456</a>
                        </div>|
                        <p>Mo-Fr 07:00-17:00</p>|
                        <p>Kiel +50 km</p>
                    </div>
                </div>
                <div className="trade-topbar-logo">
                    <img src={logo}/>
                </div>
            </div>
            <nav className="trade-navbar">
                        <div className="trade-navbar-links">
                            <a href="#trade-services">Leistungen</a>|
                            <a href="#projects">Projekte</a>|
                            <a href="#about-us">Über uns</a>|
                            <a href="#contact">Kontakt</a>
                        </div>
                        <div >
                            <a className="trade-navbar-offer-button">Angebot anfragen</a>
                        </div>
                    </nav>
            <section className="trade-hero">
                <img className="trade-hero-background" src={heroBackground}/>
                <div className="trade-hero-content">
                    <div className="trade-hero-content-header">
                        <p className="trade-hero-content-header-p1">Sanierung<Dot/>Renovierung<Dot/>Innenausbau</p>
                        <h1 className="trade-hero-content-header-h1">Handwerk, das hält.</h1>
                        <p className="trade-hero-content-header-p2">Von der ersten Planung bis zum letzten Handgriff. Zuverlässige Arbeit, klare Absprachen und saubere Ergebnisse in Kiel und Umgebung.</p>
                    </div>
                    <div className="trade-hero-content-ctas">
                        <a className="trade-hero-content-cta"><span>Projekt anfragen</span></a>
                        <a className="trade-hero-content-cta"><span>Projekte ansehen</span></a>
                    </div>
                </div>
            </section>
            <section id="trade-services" className="trade-services">
                <div className="trade-services-header">
                    <h2 className="trade-services-header-h2">Unsere Leistungen</h2>
                    <p className="trade-services-header-p">Alles aus einer Hand</p>
                </div>
                <div className="trade-services-card">
                    <div className="trade-services-card-arrows">
                        <ArrowLeft className="trade-services-card-arrow-left-icon" onClick={prevService}/>
                        <div className="trade-services-card-middle">
                            <div className="trade-services-card-content">
                                <div className="trade-services-card-image-container">
                                    <img className="trade-services-card-image" src={tradeService[currentService].image} alt={tradeService[currentService].title}/>
                                </div>
                                <div className="trade-services-card-info">
                                    <h2 className="trade-services-card-info-h2">{tradeService[currentService].title}</h2>
                                    <p className="trade-services-card-info-p1">{tradeService[currentService].description}</p>                                                                    
                                    <ul>
                                        {tradeService[currentService].features.map((feature) => (<li className="trade-services-card-info-li" key={feature}>{feature}</li>))}
                                    </ul>
                                    <p className="trade-services-card-info-p2">{tradeService[currentService].tag}</p>
                                </div>
                            </div>
                            <div className="trade-services-card-dots">
                                <button onClick={() => setCurrentService(0)} className={currentService === 0?"active":""}></button>
                                <button onClick={() => setCurrentService(1)} className={currentService === 1?"active":""}></button>
                                <button onClick={() => setCurrentService(2)} className={currentService === 2?"active":""}></button>
                            </div>
                        </div>
                        <ArrowRight className="trade-services-card-arrow-right-icon" onClick={nextService}/>
                    </div>
                </div>
            </section>
            <section id="projects" className="trade-projects">
                <div className="trade-projects-header">
                    <h1 className="trade-projects-header-h1">Unsere Projekte</h1>
                    <p className="trade-projects-header-p">Ergebnisse, die man sieht</p>
                </div>
                <div className="trade-projects-displays">
                    <div className="trade-projects-display">
                        <div className="trade-projects-display-before-after">
                            <img className="trade-projects-display-image" src={before1} alt="Wohnzimmer vor der Sanierung"/>
                            <ArrowBigRight className="trade-projects-display-icon"/>
                            <img className="trade-projects-display-image" src={after1} alt="Wohnzimmer nach der Sanierung"/>
                        </div>
                        <div className="trade-projects-display-before-after-description">
                            <h2 className="trade-projects-display-before-after-description-h2">Altbausanierung<span>·</span>Kiel</h2>
                            <p className="trade-projects-display-before-after-description-p">Komplette Sanierung eines Wohnbereichs</p>
                        </div>
                    </div>
                    <div className="trade-projects-display">
                        <div className="trade-projects-display-before-after">
                            <img className="trade-projects-display-image" src={before2} alt="Badezimmer vor der Sanierung"/>
                            <ArrowBigRight className="trade-projects-display-icon"/>
                            <img className="trade-projects-display-image" src={after2} alt="Badezimmer nach der Sanierung"/>
                        </div>
                        <div className="trade-projects-display-before-after-description">
                            <h2 className="trade-projects-display-before-after-description-h2">Badsanierung<span>·</span>Kiel</h2>
                            <p className="trade-projects-display-before-after-description-p">Modernisierung eines bestehenden Badezimmers</p>
                        </div>
                    </div>
                    <div className="trade-projects-display">
                        <div className="trade-projects-display-before-after">
                            <img className="trade-projects-display-image" src={before3} alt="Terrasse vor der Sanierung"/>
                            <ArrowBigRight className="trade-projects-display-icon"/>
                            <img className="trade-projects-display-image" src={after3} alt="Terrasse nach der Sanierung"/>
                        </div>
                        <div className="trade-projects-display-before-after-description">
                            <h2 className="trade-projects-display-before-after-description-h2">Terrassensanierung<span>·</span>Kiel</h2>
                            <p className="trade-projects-display-before-after-description-p">Neugestaltung des Außenbereichs</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="trade-about-us">
                <div className="trade-about-us-content-container">
                    <p className="trade-about-us-content-p1">ÜBER UNS</p>
                    <h2 className="trade-about-us-content-h2">Handwerk mit Verantwortung.</h2>
                    <p className="trade-about-us-content-p2">Nordwerk steht für saubere Arbeit, ehrliche Kommunikation und Lösungen, die langfristig funktionieren. 
                       Von der ersten Besichtigung bis zur fertigen Übergabe begleiten wir unsere Kunden persönlich und zuverlässig.</p>
                    <div className="trade-about-us-stats-container">
                        <div>
                            <h3 className="trade-about-us-stats-h3">15+ Jahre</h3>
                            <p className="trade-about-us-stats-p">Erfahrung</p>
                        </div>
                        <div>
                            <h3 className="trade-about-us-stats-h3">150+</h3>
                            <p className="trade-about-us-stats-p">abgeschlossene Projekte</p>
                        </div>
                        <div>
                            <h3 className="trade-about-us-stats-h3">Kiel +50 km</h3>
                            <p className="trade-about-us-stats-p">für dich im Einsatz</p>
                        </div>
                    </div>
                </div>
                <div className="trade-about-us-image-container">
                    <img className="trade-about-us-image" src={team} alt="Renovierungsteam prüft die Pläne"/>
                </div>
            </section>
            <section className="trade-contact">
                <div className="trade-contact-left">
                    <div className="trade-contact-inquiry-heading">
                        <p>PROJEKT ANFRAGEN</p>
                        <h2>Lass uns über dein Projekt sprechen</h2>
                        <p>Du planst eine Renovierung, Sanierung oder einen Innenausbau? Beschreibe uns kurz dein Vorhaben und wir melden uns persönlich bei dir.</p>
                    </div>
                    <div className="trade-contact-inquiry-contact-info">
                        <a href="tel:+49431123456">0431 123456</a>
                        <a href="mailto:info@nordwerk-kiel.de">info@nordwerk-kiel.de</a>
                        <p>Kiel +50 km</p>
                    </div>
                </div>
                <div className="trade-contact-right">
                    <form className="trade-contact-form">
                        <h3>Kontakt aufnehmen</h3>
                        <label>Name:
                            <input type="text" placeholder="Name eingeben"/>
                        </label>
                        <label>E-Mail:
                            <input type="email" placeholder="E-Mail eingeben"/>
                        </label>
                        <label>Telefon <em>(optional)</em>:
                            <input type="tel" placeholder="+49 431 123456"/>
                        </label>
                        <label>Art des Projekts:
                            <select defaultValue="">
                                <option value="" disabled>Bitte auswählen</option>
                                <option>Sanierung</option>
                                <option>Renovierung</option>
                                <option>Innenausbau</option>
                                <option>Sonstiges</option>
                            </select>
                        </label>
                            <label>Nachricht: 
                            <textarea placeholder="Nachricht schreiben..."/>
                            </label>
                        <button>Anfrage senden</button>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default HandwerkDemo;