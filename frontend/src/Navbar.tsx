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
                    <li><a href="#loofable-home">Startseite</a></li>
                    <li><a href="#leistungen">Leistungen</a></li>
                    <li><a href="#warum-loofable">Warum Loofable?</a></li>
                    <li><a href="#live-demo">Live-Demo</a></li>
                    <li><a href="#prozess">Prozess</a></li>
                    <li><Link to="/preise">Preise</Link></li>
                </ul>
                <Link to="/kontakt" className="navbar-button">Kostenloses Angebot</Link>
            </div>
        </nav>
    )
}

export default Navbar;