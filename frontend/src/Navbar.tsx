import "./Navbar.css";
import logo from "./assets/branding/loofable-designs-logo-3d.svg";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar () {
    const location = useLocation();
    const [activeSection, setActiveSection] = useState("loofable-home");

    useEffect(() => {
        const sectionIds = [
            "loofable-home",
            "leistungen",
            "warum-loofable",
            "live-demo",
            "prozess"
        ];
        const handleScroll = () => {
            if (window.scrollY < 10) {
                setActiveSection("loofable-home");
            } else{
                const screenMiddle = window.innerHeight / 2;
                sectionIds.forEach((id) => {
                    const section = document.getElementById(id);
                    if (section) {
                        const rect = section.getBoundingClientRect();
                        if (
                            rect.top <= screenMiddle &&
                            rect.bottom >= screenMiddle
                        ) {
                            setActiveSection(id);
                        }
                    }
                });
            }
        };
        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [])
    return (
        <nav className="navbar">
            <div className="navbar-logo-container">
                <img className="navbar-logo" src={logo} alt="Loofable-Designs"/>
            </div>
            <div className="nav-links">
                <ul>
                    <li><Link to="/" onClick={() => window.scrollTo(0, 0)} 
                    className={location.pathname === "/" && activeSection === "loofable-home"?"active":""}>Startseite</Link></li>
                    <li><Link to="/#leistungen" 
                    className={location.pathname === "/" && activeSection === "leistungen"?"active":""}>Leistungen</Link></li>
                    <li><Link to="/#warum-loofable" 
                    className={location.pathname === "/" && activeSection === "warum-loofable"?"active":""}>Warum Loofable?</Link></li>
                    <li><Link to="/#live-demo" 
                    className={location.pathname === "/" && activeSection === "live-demo"?"active":""}>Live-Demo</Link></li>
                    <li><Link to="/#prozess"
                    className={location.pathname === "/" && activeSection === "prozess"?"active":""}>Prozess</Link></li>
                    <li><Link to="/preise" className={location.pathname === "/preise" ? "active" : ""}>Preise</Link></li>
                </ul>
                <Link to="/kontakt" className="navbar-button">Kostenloses Angebot</Link>
            </div>
        </nav>
    )
}

export default Navbar;