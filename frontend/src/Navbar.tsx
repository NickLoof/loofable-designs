import "./Navbar.css";
import logo from "./assets/branding/loofable-designs-logo-3d.svg";

function Navbar () {
    return (
        <nav className="navbar">
            <div className="navbar-logo-container">
                <img className="navbar-logo" src={logo} alt="Loofable-Designs"/>
            </div>
            <div className="nav-links">
                <ul>
                    <li><a href="#leistungen">Leistungen</a></li>
                    <li><a href="#warum-loofable">Warum Loofable?</a></li>
                    <li><a href="#live-demo">Live-Demo</a></li>
                    <li><a href="#prozess">Prozess</a></li>
                    <li><a href="#live-demo">Preise</a></li>
                </ul>
                <a className="navbar-button" href="#kontakt">Kostenloses Angebot</a>
            </div>
        </nav>
    )
}

export default Navbar;