import "./CTA.css"
import { Link } from "react-router-dom";

function CTA () {
    return (
        <section className="cta-container">
            <h2>Bereit für deine neue Website?</h2>
            <p>Lass uns gemeinsam herausfinden, welche Lösung zu deinem Unternehmen passt.</p>
            <Link to="/kontakt" className="cta-button">Kostenloses Angebot anfragen</Link>
        </section>
    )
}

export default CTA;