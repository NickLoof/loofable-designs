import "./Hero.css";
import { Link } from "react-router-dom";

function Hero() {

    return (
        <section className="hero" id="loofable-home">
                <div className="hero-headline">
                <h1>Websites für kleine Unternehmen, die <span>auffallen wollen.</span></h1>
                </div>
                <div className="hero-support-text">
                    <p>Arbeite direkt mit demjenigen zusammen, der deine Website gestaltet und entwickelt. 
                        Keine Zwischenwege, keine Baukastenlösungen – sondern individuelles Webdesign, das zu deinem Unternehmen passt.
                    </p>
                </div>
                <div className="hero-CTAs">
                    <Link to="/kontakt" className="hero-primary">Kostenloses Angebot</Link>
                    <Link to="/preise" className="hero-secondary">Preise ansehen</Link>
                </div>
                <div className="hero-additional-info">
                    <div className="hero-info">
                        <h1>1-zu-1</h1>
                        <p>Direkte Zusammenarbeit</p>
                    </div >
                    <div className="hero-info">
                        <h1>100% individuell</h1>
                        <p>Keine Baukastenlösung</p>
                    </div>
                    <div className="hero-info">
                        <h1>Schnell</h1>
                        <p>Optimierte Ladezeiten</p>
                    </div>
                    <div className="hero-info">
                        <h1>Fair</h1>
                        <p>Transparente Preisgestaltung</p>
                    </div>
                </div>
        </section>
    )
}

export default Hero;