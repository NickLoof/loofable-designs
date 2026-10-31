import "./Impressum.css";
import { useEffect } from "react";

function Impressum(){

    useEffect(() => {
    document.title = "Impressum | Loofable Designs";

    const description = document.querySelector('meta[name="description"]');

    description?.setAttribute(
    "content",
    "Impressum und Anbieterinformationen von Loofable Designs."
    );
    }, []);

    return(
        <div className="impressum-page">
            <h3 className="impressum-page-h3">Rechtliches</h3>
            <main className="impressum-container">
                <div className="impressum-container-header">
                    <h1>Impressum</h1>
                    <h2 className="impressum-container-h2">Angaben nach § 5 DDG</h2>
                </div>
                <section className="impressum-my-info">
                    <h3>Angaben zum Unternehmen</h3>
                    <div className="impressum-my-info-section">
                        <h4>Unternehmen</h4>
                        <p>Loofable Designs</p>
                    </div>
                    <div className="impressum-my-info-section">
                        <h4>Inhaber</h4>
                        <p>Nicholas Loof</p>
                    </div>
                    <div className="impressum-my-info-section">
                        <h4>Anschrift</h4>
                        <p>Kieler Weg 164, 24145 Kiel</p>
                    </div>
                </section>
                <section className="impressum-contact">
                    <h4>Kontakt</h4>
                    <p>
                        Telefon: <a href="tel:01754458459">+49 175 4458459</a><br/>
                        E-Mail: <a href="mailto:contact@loofable-designs.de">contact@loofable-designs.de</a>
                    </p>
                </section>
            </main>
        </div>
    )
}

export default Impressum;