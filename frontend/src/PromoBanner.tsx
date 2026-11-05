import "./PromoBanner.css";

function PromoBanner () {

    return(
        <div className="promo-banner">
            <p>
                🎉 <strong>20 % Eröffnungsrabatt!</strong>{" "}
                Nur für die ersten 3 Kunden – bis zum 05.12.2026.
            </p>

            <a href="/preise">
                Angebot sichern →
            </a>
        </div>
    )
}
export default PromoBanner;