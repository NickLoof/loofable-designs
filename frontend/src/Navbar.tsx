import "./Navbar.css";
import logo from "./assets/branding/loofable-designs-logo-3d.svg";
import { Link } from "react-router-dom";

function Navbar () {
    return (
        <nav className="navbar" id="loofable-home">
            <div className="navbar-logo-container">
                <img className="navbar-logo" src={logo} alt="Loofable-Designs"/>
            </div>
            <div className="nav-links">
                <ul>
                    <li><Link to="/" onClick={() => window.scrollTo(0, 0)}>Startseite</Link></li>
                    <li><Link to="/#leistungen">Leistungen</Link></li>
                    <li><Link to="/#warum-loofable">Warum Loofable?</Link></li>
                    <li><Link to="/#live-demo">Live-Demo</Link></li>
                    <li><Link to="/#prozess">Prozess</Link></li>
                    <li><Link to="/preise">Preise</Link></li>
                </ul>
                <Link to="/kontakt" className="navbar-button">Kostenloses Angebot</Link>
            </div>
        </nav>
    )
}

export default Navbar;