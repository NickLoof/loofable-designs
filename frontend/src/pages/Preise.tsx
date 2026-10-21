import "./Preise.css";

function Prices() {
    type Package = {
        name: string,
        price: number,
        startingAt: boolean,
        description: string,
        features: string[]
    }

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
                "Einrichtung von bis zu 10 Produkten",
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

    return(
        <>
            <div className="prices-container">
                <div className="prices-header">
                    <h1>Preise</h1>
                    <p>Transparent. Fair. Ohne Überraschungen.</p>
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
                        <div className="prices-package" key={item.name}>
                                <div className="prices-package-heading">
                                    <h2>{item.name}</h2>
                                    <h2>{item.startingAt && "ab "}{item.price}{" "}€</h2>
                                </div>
                                <div className="prices-package-info">
                                    <p>{item.description}</p>
                                    <ul>
                                    {item.features.map((feature) => (
                                            <li key={feature}>{feature}</li>
                                        ))}
                                    </ul>
                                </div>
                                <button className="prices-package-button">Paket anfragen</button>
                        </div>))}
                    
                </div>
            </div>
        </>
    )
}

export default Prices;