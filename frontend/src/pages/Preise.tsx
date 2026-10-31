import "./Preise.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import type { Package, AddOn } from "../types/calculator";

function Prices() {
    const [selectedPackage, setSelectedPackage] = useState<Package | null>(null);
    const [addonQuantities, setAddonQuantities] = useState<Record<string, number>>({});
    const [selectedAddons, setSelectedAddons] = useState<AddOn[]>([]);

    
    useEffect(() => {
    document.title = "Preise | Loofable Designs";

    const description = document.querySelector('meta[name="description"]');

    description?.setAttribute(
        "content",
        "Transparente Preise für individuelle Websites, Online-Shops und Webdesign von Loofable Designs – passend für Selbstständige und kleine Unternehmen."
    );
    }, []);


    const addOn : AddOn[] = [
        {
            name: "Zusätzliche Standardseite",
            price: 100,
            startingAt: false,
            allowsQuantity: true
        },
        {
            name: "Komplexe Zusatzseite",
            price: 150,
            startingAt: true,
            allowsQuantity: true 
        },
        {
            name: "Zusätzliche Sprache",
            price: 250,
            startingAt: false,
            allowsQuantity: true
        },
        {
            name: "Zusätzliche Galerie",
            price: 100,
            startingAt: false,
            allowsQuantity: true
        },
        {
            name: "Individuelle Animation",
            price: 100,
            startingAt: true,
            allowsQuantity: false
        },
        {
            name: "Lokale SEO-Optimierung",
            price: 250,
            startingAt: false,
            allowsQuantity: false
        },
        {
            name: "Google Unternehmensprofil",
            price: 125,
            startingAt: false,
            allowsQuantity: false
        },
        {
            name: "Karten-/ Standortintegration",
            price: 50,
            startingAt: false,
            allowsQuantity: false
        },
        {
            name: "Buchungssystem-Integration",
            price: 150,
            startingAt: true,
            allowsQuantity: false
        },
        {
            name: "Erweitertes Kontakt-/ Anfrageformular",
            price: 100,
            startingAt: false,
            allowsQuantity: false
        }
    ]

    const packages : Package[] = [
        {
            name: "One Page",
            price: 449,
            startingAt: false,
            description: "Eine kompakte, professionelle Website für Unternehmen, die alle wichtigen Informationen übersichtlich auf einer Seite präsentieren möchten.",
            features: [
                "1 individuell gestaltete Inhaltsseite",
                "Impressum & Datenschutz",
                "Individuelles Webdesign",
                "Optimiert für Desktop, Tablet & Smartphone",
                "Kontaktformular",
                "Grundlegende Suchmaschinenoptimierung (SEO)",
                "Dezente Animationen & Hover-Effekte",
                "Einrichtung & Veröffentlichung der Website",
                "1 Monat Betreuung inklusive"]
        },
        {
            name: "Business Starter",
            price: 649,
            startingAt: false,
            description: "Die ideale Lösung für kleine Unternehmen, die ihre Leistungen und ihr Unternehmen auf mehreren Seiten professionell präsentieren möchten.",
            features: [
                "Bis zu 4 individuell gestaltete Inhaltsseiten",
                "Impressum & Datenschutz",
                "Individuelles Webdesign",
                "Optimiert für Desktop, Tablet & Smartphone",
                "Kontaktformular",
                "Grundlegende Suchmaschinenoptimierung (SEO)",
                "Dezente Animationen & Hover-Effekte",
                "Einrichtung & Veröffentlichung der Website",
                "1 Monat Betreuung inklusive"]
        },
        {
            name: "Business Website",
            price: 899,
            startingAt: false,
            description: "Für Unternehmen, die mehr Inhalte präsentieren und ihren Besuchern eine umfangreichere, individuell gestaltete Website bieten möchten.",
            features: [
                "Bis zu 7 individuell gestaltete Inhaltsseiten",
                "Impressum & Datenschutz",
                "Individuelles Webdesign",
                "Optimiert für Desktop, Tablet & Smartphone",
                "Erweiterte Kontakt- & Anfrageformulare",
                "Erweiterte Suchmaschinenoptimierung (SEO)",
                "Erweiterte Animationen & interaktive Elemente",
                "Galerie, Portfolio oder Referenzbereich",
                "Umfangreichere Struktur- & Inhaltsplanung",
                "Einrichtung & Veröffentlichung der Website",
                "1 Monat Betreuung inklusive"]
        },
        {
            name: "Online-Shop",
            price: 999,
            startingAt: true,
            description: "Ein individueller Online-Shop für Unternehmen, die ihre Produkte professionell online präsentieren und verkaufen möchten.",
            features: [
                "Individuelles Shop-Design",
                "Optimiert für Desktop, Tablet & Smartphone",
                "Kontaktformular",
                "Grundlegende Shop-SEO",
                "Animationen & Hover-Effekte",
                "Startseite & grundlegende Shop-Seiten",
                "Produktübersicht & Kategorien",
                "Produktdetailseiten",
                "Warenkorb & Checkout",
                "Einrichtung einer sicheren Online-Zahlung",
                "Einrichtung von bis zu 20 Produkten",
                "Einrichtung & Veröffentlichung der Website",
                "1 Monat Betreuung inklusive"]
        },
        {
            name: "Custom Website",
            price: 1200,
            startingAt: true,
            description: "Für individuelle Projekte, die über eine klassische Unternehmenswebsite hinausgehen und besondere technische Funktionen benötigen.",
            features: [
                "Individuelle Projektplanung",
                "Impressum & Datenschutz",
                "Individuelles Design & Seitenstruktur",
                "Optimiert für Desktop, Tablet & Smartphone",
                "Kontaktformular",
                "SEO entsprechend dem Projektumfang",
                "Individuelle Animationen & interaktive Elemente",
                "Backend- & Datenbankfunktionen",
                "API-Anbindungen",
                "Benutzerkonten & Login-Bereiche",
                "Komplexe Formulare & Abläufe",
                "Individuelle interaktive Funktionen",
                "Technische Planung & Entwicklung",
                "Einrichtung & Veröffentlichung der Website",
                "1 Monat Betreuung inklusive"]
        }
    ]
    const redesign: Package = {
    name: "Website-Redesign",
    price: 499,
    startingAt: true,
    description: "Für Unternehmen, die bereits eine Website haben und ihr Design, ihre Struktur oder Technik modernisieren und optimieren möchten.",
    features: [
    "Analyse der bestehenden Website",
    "Modernisierung des Designs",
    "Überarbeitung der Seitenstruktur",
    "Optimierung für Desktop, Tablet & Smartphone",
    "Verbesserung der Benutzerfreundlichkeit",
    "Grundlegende Suchmaschinenoptimierung (SEO)",
    "Überarbeitung bestehender Kontaktformulare",
    "Modernisierung von Animationen & Interaktionen",
    "Technische Optimierungen",
    "Einrichtung & Veröffentlichung der überarbeiteten Website",
    "1 Monat Betreuung inklusive"
]
} 

    const selectedAddonsTotal = selectedAddons.reduce((sum, addon) =>{return sum + addon.price;}, 0);
    const quantityAddonsTotal = addOn.reduce((sum, addon) => {const quantity = addonQuantities[addon.name] || 0; return sum + addon.price * quantity;}, 0);
    const total = (selectedPackage?.price || 0) + selectedAddonsTotal + quantityAddonsTotal;

    const navigate = useNavigate();
    

    return(
        <>
            <div className="prices-container">
                <div className="prices-header">
                    <h1>Preise</h1>
                    <p className="prices-header-p">Transparent. Fair. Ohne Überraschungen.</p>
                    <p>Du weißt von Anfang an, womit du rechnen kannst.
                        Wähle eine passende Grundlage für dein Projekt und
                        ergänze sie bei Bedarf mit individuellen Funktionen.
                    </p>
                </div>
                <div className="prices-packages-heading">
                    <h2>Wähle ein passendes Paket:
                    </h2>
                </div>
                <div className="prices-packages">
                    {packages.map((item) => (
                        <div className={`prices-package ${item.name === "Business Website" ? "bestseller" : ""} ${selectedPackage?.name === item.name 
                        ? "selected" : ""}`} key={item.name}>
                                <div className="prices-package-heading">
                                    <div className="bestseller-package-heading">
                                        <h2>{item.name}</h2>
                                        {item.name === "Business Website"&&(<p className="bestseller-p">Bestseller</p>)}
                                    </div>
                                    <h2>{item.startingAt && "ab "}{new Intl.NumberFormat("de-DE", {style: "currency", currency: "EUR",}).format(item.price)}</h2>  
                                </div>
                                <div className="prices-package-info">
                                    <p>{item.description}</p>
                                    <ul>
                                    {item.features.map((feature) => (
                                            <li key={feature}>{feature}</li>
                                        ))}
                                    </ul>
                                </div>
                                <button className="prices-package-button" onClick={() => setSelectedPackage(selectedPackage?.name === item.name? null : item)}>
                                    {selectedPackage?.name === item.name ?"Ausgewählt ✓":"Paket auswählen"}</button>
                        </div>))}
                </div>
                <div className="prices-packages-redesign">
                        <div className="prices-packages-redesign-header">
                            <h3>Du hast bereits eine Website?</h3>
                            <h1>Website-Redesign</h1>
                            <p>Deine Website ist technisch oder optisch in die Jahre gekommen? Ich modernisiere Design, 
                                Struktur und Benutzerfreundlichkeit und passe sie an dein Unternehmen an.</p>
                        </div>
                        <div className={`prices-redesign-package ${selectedPackage?.name === redesign.name ? "selected" : ""}`}>
                            <div className="prices-package-heading">
                                <div className="bestseller-package-heading">
                                    <h2>{redesign.name}</h2>
                                    {redesign.name === "Business Website" &&(<p className="bestseller-p">Bestseller</p>)}
                                </div>
                                <h2>{redesign.startingAt && "ab "}{new Intl.NumberFormat("de-DE", {style: "currency", currency: "EUR",}).format(redesign.price)}</h2>  
                            </div>
                            <div className="prices-package-info">
                                <p>{redesign.description}</p>
                                <ul>
                                    {redesign.features.map((feature) => (
                                            <li key={feature}>{feature}</li>
                                        ))}
                                    </ul>
                            </div>
                            <button className="prices-package-button" onClick={() => setSelectedPackage(selectedPackage?.name === redesign.name ? null : redesign)}>
                                    {selectedPackage?.name === redesign.name ?"Ausgewählt ✓":"Paket auswählen"}</button>
                        </div>     
                    </div>
                    <div className="prices-addons-heading">
                        <h3>Deine Website. Deine Extras.</h3>
                        <h2>Optionale Zusatzleistungen</h2>
                        <p>Ergänze dein gewähltes Paket mit den Funktionen, die du für deine Website brauchst.</p>
                    </div>
                        {selectedPackage === null && (<p className="addons-hint"> Wähle zuerst ein Paket aus, um Zusatzleistungen hinzuzufügen.</p>)}
                    <div className="prices-addon-packages">
                        {addOn.map((addon) => (
                        <div key={addon.name} className={`prices-addon-package ${selectedPackage === null ? "addon-disabled" : ""}`}>
                            <div className="prices-addon-top">
                            <h2>{addon.name}</h2>
                            <h2 className="prices-addon-price">{addon.startingAt && "ab "}{new Intl.NumberFormat("de-DE", {style: "currency", currency: "EUR",}).format(addon.price)}</h2>
                            </div>
                            <div className="prices-addon-bottom">
                                {addon.allowsQuantity?(
                                    <div className="prices-addon-button">
                                        <button disabled={selectedPackage === null} onClick={() => setAddonQuantities((prev) => ({...prev, [addon.name]: Math.max(0, (prev[addon.name] || 0) - 1)}))}>-</button>
                                        <p>{addonQuantities[addon.name] || 0}</p>
                                        <button disabled={selectedPackage === null} onClick={() => setAddonQuantities((prev) => ({...prev, [addon.name]: (prev[addon.name] || 0) + 1}))}>+</button>
                                    </div>)
                                    :(<button disabled={selectedPackage === null} onClick={() => setSelectedAddons((prev) => prev.some((item) => item.name === addon.name)
                                        ? prev.filter((item) => item.name !== addon.name)
                                        :[...prev, addon])} className={selectedAddons.some((item) => item.name === addon.name)?"prices-addon-button prices-addon-button-active"
                                            :"prices-addon-button"}>{selectedAddons.some((item) => item.name === addon.name)
                                    ?"Hinzugefügt ✓":"Hinzufügen"}</button>)}
                            </div>
                        </div>))}
                    </div>
            </div>
                    <div className="prices-calculator-section">
                        <div className="prices-calculator-container">
                            <div className="prices-selected-package">
                                <h2>1. Ausgewähltes Paket: </h2>
                                <div className="prices-selected-package-name-price">
                                    <h3>{selectedPackage?.name}</h3>
                                    <h3>+{new Intl.NumberFormat("de-DE", {style: "currency", currency: "EUR",}).format(selectedPackage?.price || 0)}</h3>
                                </div>
                            </div>
                            <div className="prices-selected-addon">
                                <h2>2. Ausgewählte Zusatzleistungen: </h2>
                                {addOn.filter((item) => (addonQuantities[item.name] || 0) > 0).map((item) => (
                                    <div key={item.name} className="prices-selected-package-quantity-name-price">
                                            <h3>{item.name} x {addonQuantities[item.name]}</h3>
                                            <h3>+{new Intl.NumberFormat("de-DE", {style: "currency", currency: "EUR",}).format((addonQuantities[item.name] || 0) * item.price)}</h3>
                                    </div>))}
                                {selectedAddons.map((addon) => (
                                <div className="prices-selected-package-name-price" key={addon.name}>
                                    <h3>{addon.name}</h3>
                                    <h3 className="prices-selected-package-price">+{new Intl.NumberFormat("de-DE", {style: "currency", currency: "EUR",}).format(addon.price)}</h3>
                                </div>
                                ))}
                            </div>
                            <div className="prices-calculator-sum-header">
                                <h2>3. Geschätzte Investition</h2>
                                <p>Unverbindlich. Das endgültige Angebot wird nach einem ersten Beratungsgespräch bestätigt.</p>
                                {selectedPackage === null &&(<h2>Bitte zuerst ein Paket auswählen!</h2>) }
                            </div>
                            <div className="prices-calculator-sum-body">
                                {selectedPackage &&(<h3>ca. {new Intl.NumberFormat("de-DE", {style: "currency", currency: "EUR",}).format(total)}</h3>)}
                            </div>
                            <button className="prices-calculator-cta" onClick={() => navigate("/kontakt", {state: {selectedPackage, selectedAddons, addonQuantities, total}})}>
                                Auswahl ins Kontaktformular übernehmen</button>
                        </div>
                    </div>
        </>
    )
}

export default Prices;