import "./Services.css";
import {GlobeCode, WandSparkles, Store, ShieldHalf} from "lucide-react";

function Services() {

    return(
        <section className="services" id="leistungen">
            <div className="services-headline">
                <h1>Alles, was dein Unternehmen für den Online-Erfolg braucht</h1>
            </div>
            <div className="services-support-text">
                <p>Von schlichten, modernen Websites bis hin zu maßgeschneiderten, funktionalen Online-Shops</p>
            </div>
            <div className="services-cards">
                <div className="services-card">
                    <GlobeCode className="services-icon"/>
                    <h1>Unternehmen-Websites</h1>
                    <p className="services-card-p">Moderne, individuelle Websites für Handwerksbetriebe, Salons, Fotografen und lokale Dienstleister – entwickelt, 
                        um dein Unternehmen professionell zu präsentieren und Besucher in Anfragen zu verwandeln.
                    </p>
                    <ul>
                        <li>Individuelles Design & Branding</li>
                        <li>Optimiert für Smartphone & Tablet</li>
                        <li>Grundlagen der lokalen SEO</li>
                    </ul>
                </div>
                <div className="services-card">
                    <WandSparkles className="services-icon"/>
                    <h1>Website-Redesigns</h1>
                    <p className="services-card-p">Deine bestehende Website wirkt veraltet, langsam oder funktioniert auf dem Smartphone nicht richtig? 
                       Ich bringe sie technisch und optisch auf einen modernen Stand.
                    </p>
                    <ul>
                        <li>Modernes UI/UX-Redesign</li>
                        <li>Performance-Optimierung</li>
                        <li>Überarbeitung & Migration bestehender Inhalte</li>
                    </ul>
                </div>
                <div className="services-card">
                    <Store className="services-icon"/>
                    <h1>Online Shops</h1>
                    <p className="services-card-p">Vom ersten Produkt bis zum sicheren Checkout: individuelle Online-Shops für digitale und physische Produkte, passend zu deinem Unternehmen.
                    </p>
                    <ul>
                        <li>Produktverwaltung</li>
                        <li>Stripe- & PayPal-Integration</li>
                        <li>Sicherer Checkout</li>
                        <li>Einfache Bestandsverwaltung</li>
                    </ul>
                </div>
                <div className="services-card">
                    <ShieldHalf className="services-icon"/>
                    <h1>Wartung & Support</h1>
                    <p className="services-card-p">Eine Website ist nach dem Launch nicht plötzlich „fertig“. 
                        Ich unterstütze dich auch danach bei Updates, Änderungen und technischen Problemen.
                    </p>
                    <ul>
                        <li>Regelmäßige Updates & Wartung</li>
                        <li>Kleine Inhaltsänderungen</li>
                        <li>Fehlerbehebung & technischer Support</li>
                        <li>Performance- & Sicherheitschecks</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Services;