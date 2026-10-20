import "./Footer.css"
import logo from "./assets/branding/loofable-designs-logo-3d.svg"
import { Link } from "react-router-dom";

function Footer () {

    return(
        <section className="footer-container">
            <div className="footer-top">
                <div className="footer-logo">
                    <img src={logo} alt="Loofable Designs Logo" />
                </div>
                <div className="footer-links">
                    <div className="footer-navigation">
                        <h3>Navigation</h3>
                        <a className="footer-normal-link" href="#loofable-home">Startseite</a>
                        <a className="footer-normal-link" href="#leistungen">Leistungen</a>
                        <Link className="footer-normal-link" to="/about-loofable">Über Loofable</Link>
                        <a className="footer-normal-link" href="#live-demo">Live-Demo</a>
                        <a className="footer-normal-link" href="#prozess">Prozess</a>
                        <Link className="footer-normal-link" to="/preise">Preise</Link>
                        <Link className="footer-normal-link" to="/kontakt">Kontakt</Link>
                    </div>
                    <div className="footer-contact">
                        <h3>Kontakt</h3>
                        <a className="footer-contact-link" href="mailto:contact@loofable-designs.de">contact@loofable-designs.de</a>
                        <a className="footer-contact-link" href="tel:+491754458459">+49 175 4458459</a>
                        <p>Telefonisch erreichhbar:</p>
                        <p>Mo–Fr: 9:00–18:00 Uhr</p>
                    </div>
                    <div className="footer-legal">
                        <h3>Rechtliches</h3>
                        <Link className="footer-normal-link" to="/impressum">Impressum</Link>
                        <Link className="footer-normal-link" to="/datenschutz">Datenschutz</Link>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>© 2026 Loofable Designs. Alle Rechte vorbehalten.</p>
            </div>
        </section>
    )
}

export default Footer;