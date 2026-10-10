import { useState, useEffect } from "react";
import "./RestaurantDemo.css";
import logo from "./assets/restaurant img/antica tavola logo.png"
import restaurantImage from "./assets/restaurant img/hero/inside-dining-with-olive-tree.png";
import insideDiningWineGlass from "./assets/restaurant img/hero/inside-dining-with-wineglass.png";
import italianPizza from "./assets/restaurant img/hero/italian-pizza.png";
import outsideDining from "./assets/restaurant img/hero/outside-dining-with-wineglass.png";
import pasta from "./assets/restaurant img/hero/pasta.png";
import tiramisu from "./assets/restaurant img/hero/tiramisu.png";
import wineAndCheese from "./assets/restaurant img/hero/wine-and-cheese.png";
import appetizer from "./assets/restaurant img/unsereKueche/appetizer-tomato-cheese.png";
import lasagna from "./assets/restaurant img/unsereKueche/lasagna.png";
import margharita from "./assets/restaurant img/unsereKueche/margherita-pizza.png";
import pastaDelMar from "./assets/restaurant img/unsereKueche/pasta-del-mar.png";
import pepperPasta from "./assets/restaurant img/unsereKueche/pepper-pasta.png";
import tiramisu2 from "./assets/restaurant img/unsereKueche/tiramisu2.png";
import wineCheeseProcciutto from "./assets/restaurant img/unsereKueche/wine-cheese-procciutto.png";
import aboutUsImage from "./assets/restaurant img/unsereKueche/rustic-italian-pasta-making.png";


function RestaurantDemo() {
    const heroImages = [
        restaurantImage,
        insideDiningWineGlass,
        italianPizza,
        outsideDining,
        pasta,
        tiramisu,
        wineAndCheese
    ]
    type Dish = {
        image: string;
        name: string;
        description: string;
        price: number;
    }
    const unsereKuecheDishes: Dish[] = [
        {image: appetizer, name: "Carpese Classica", description: "Büffelmozzarella, sonnengereifte Tomaten, frisches Basilikum und Olivenöl.", price: 8.90},
        {image: margharita, name: "Pizza Margherita", description: "San-Marzano-Tomaten, Fior di Latte, frisches Basilikum und Olivenöl.", price: 12.90},
        {image: lasagna, name: "Lasagne della Casa", description: "Hausgemachte Lasagne mit Rinderragù, Béchamel und gereiftem Parmesan.", price: 15.90},
        {image: pastaDelMar, name: "Pasta del Mare", description: "Frische Pasta mit Garnelen, Muscheln, Tomaten, Knoblauch und Petersilie.", price: 18.90},
        {image: pepperPasta, name: "Cacio e Pepe", description: "Hausgemachte Pasta mit Pecorino Romano und frisch gemahlenem schwarzem Pfeffer.", price: 14.90},
        {image: tiramisu2, name: "Tiramisù Classico", description: "Mascarpone, Espresso, Löffelbiskuit und feiner Kakao nach traditionellem Rezept.", price: 7.90},
        {image: wineCheeseProcciutto, name: "Tagliere Italiano", description: "Auswahl italienischer Käse- und Wurstspezialitäten mit Oliven und hausgemachtem Brot.", price: 16.90}
    ]
    const [currentImage, setCurrentImage] = useState(0);

    const reservationTimes = [
        "17:00",
        "17:30",
        "18:00",
        "18:30",
        "19:00",
        "19:30",
        "20:00",
        "20:30",
        "21:00"
    ]
    const partySize = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    useEffect(() => {

        const interval = setInterval(() => {
                if(currentImage != (heroImages.length-1)){
                    setCurrentImage(currentImage +1)
                }else{
                    setCurrentImage(0);
                    }
        }, 5000);

        return() => {
            clearInterval(interval);
        }
    }, [currentImage])

    return (
        <>
            <nav id="restaurant-home" className="restaurant-navbar">
                <div className="restaurant-navbar-container">
                    <img className="restaurant-navbar-logo" src={logo} alt="Antica Tavola"/>
                </div>
            </nav>
            <nav className="restaurant-navlinks">
                <ul>
                    <li><a href="#restaurant-home">Home</a></li> 
                    <li><a href="#unsere-kueche">Unsere Küche</a></li>
                    <li><a href="#über-uns">Über uns</a></li>  
                    <li><a href="#reservieren">Reservieren</a></li>  
                </ul>
            </nav>
            <section className="restaurant-hero">
                <div className="restaurant-hero-background">
                    {heroImages.map((image, index) => <img key={index} src={image}
                    className={index == currentImage?"restaurant-hero-image restaurant-hero-image-active":"restaurant-hero-image"}/>)}
                    <div className="restaurant-hero-content">
                        <div className="restaurant-hero-text">
                            <h1>Tradizione, servita con eleganza</h1>
                            <p>Italienische Küche, handgemachte Pasta und ausgewählte Weine – inspiriert von den traditionellen Küchen Italiens.</p>
                        </div>
                        <div className="restaurant-hero-ctas">
                            <a className="restaurant-hero-primary" href="#reservieren">Tisch reservieren</a>
                            <a className="restaurant-hero-secondary" href="#speisekarte">Speisekarte entdecken</a>
                        </div>
                    </div>
                </div>
            </section>
            <section id="unsere-kueche" className="restaurant-cuisine">
                <div className="restaurant-cuisine-heading">
                    <p className="restaurant-cuisine-heading-uppercase">Unsere Küche</p>
                    <h2>Tradition trifft Leidenschaft</h2>
                    <p className="restaurant-cuisine-description">Hausgemachte Pasta, ausgewählte Zutaten und Rezepte, die Italiens kulinarische Tradition auf den Teller bringen.</p>
                </div>
                <div className="restaurant-cuisine-dishes">
                {unsereKuecheDishes.map((dish) => (
                    <div key={dish.name} className="restaurant-cuisine-dish">
                        <img src={dish.image} className="restaurant-unsere-kueche-image"/>
                        <div className="restaurant-cuisine-dish-text">
                            <p className="restaurant-dish-name">{dish.name}</p>
                            <p className="restaurant-dish-description">{dish.description}</p>
                            <p className="restaurant-dish-price">{dish.price.toFixed(2)}€</p>
                        </div>
                    </div>))}
                    <div className="restaurant-cusine-menu-button">
                        <p className="restaurant-cusine-menu-button-p"><strong>Noch mehr entdecken</strong></p>
                        <p className="restaurant-cusine-menu-button-p">Antipasti, Pasta, Pizza, Desserts und ausgewählte Weine</p>
                        <a href="#speisekarte" className="restaurant-cusine-menu-button-h2"><strong>Speisekarte ansehen</strong></a>
                    </div>
                </div>
            </section>
            <section id="über-uns" className="restaurant-about-us">
                    <div className="restaurant-about-us-left-side">
                        <img className="restaurant-about-us-left-side-image" src={aboutUsImage} alt="rustic-italian-pasta-making" />
                    </div>
                    <div className="restaurant-about-us-right-side">
                        <p className="restaurant-about-us-label">ÜBER UNS</p>
                        <h2>Ein Stück Italien, mitten im Herzen der Stadt</h2>
                        <p>Bei Antica Tavola verbinden wir die Wärme italienischer Gastfreundschaft mit den Rezepten, 
                            mit denen wir aufgewachsen sind. Unsere Küche setzt auf ausgewählte Zutaten, hausgemachte Pasta und Gerichte, 
                            die ihren Ursprung in den verschiedenen Regionen Italiens haben.</p>
                        <p>Für uns bedeutet gutes Essen mehr als eine Mahlzeit. Es bedeutet gemeinsam am Tisch zu sitzen, 
                            Geschichten zu teilen und sich Zeit füreinander zu nehmen.</p>
                        <div className="restaurant-about-us-values-container">
                            <div className="restaurant-about-us-value">
                                <h2>Tradizione</h2>
                                <p>Rezepte mit Geschichte</p>
                            </div>
                            <div className="restaurant-about-us-value">
                                <h2>Fatto a mano</h2>
                                <p>Mit Liebe hausgemacht</p>
                            </div>
                            <div className="restaurant-about-us-value">
                                <h2>Famiglia</h2>
                                <p>Gastfreundschaft, die verbindet</p>
                            </div>
                        </div>
                    </div>
            </section>
            <section id="reservieren" className="restaurant-reservation">
                <div className="restaurant-reservation-heading">
                    <h1>Tisch reservieren</h1>
                    <h2>Ein Abend bei Antica Tavola</h2>
                    <p>Reserviere deinen Tisch und genieße einen Abend mit italienischer Küche und Gastfreundschaft.</p>
                </div>
                <div className="restaurant-reservation-form">
                    <label >Datum:
                    <input className="restaurant-reservation-input" id="datePicker" type="date"/>
                    </label>
                    <label>Uhrzeit: 
                    <select className="restaurant-reservation-select">
                        {reservationTimes.map((time) => <option key={time}>{time}</option>)}
                    </select>
                    </label>
                    <label>Personen: 
                    <select className="restaurant-reservation-select">
                        {partySize.map((party) => <option key={party}>{party}</option>)}
                    </select>
                    </label>
                </div>
                <div className="restaurant-reservation-submit-button-container">
                    <button type="button" className="restaurant-reservation-submit-button">Tisch reservieren</button>
                </div>
                <div className="restaurant-reservation-info">
                    <div className="restaurant-reservation-opening-hours">
                        <h2>Öffnungszeiten</h2>
                        <p>Mo–Do 17–22 Uhr </p>
                        <p>Fr–Sa 17–23 Uhr </p>
                        <p>So geschlossen</p>
                    </div>
                    <div className="restaurant-reservation-contact">
                        <h2>Kontakt</h2>
                        <p>0431 ...</p>
                        <p>Musterstraße 12</p>
                        <p>24103 Kiel</p>
                    </div>
                </div>
            </section>
            <section className="restaurant-footer">
                <div className="restaurant-footer-info">
                    <div className="restaurant-footer-logo-container">
                        <img className="restaurant-footer-logo" src={logo} alt="Antica Tavola"/>
                    </div>
                    <div className="restaurant-footer-navigation">
                        <ul> 
                            <h3>Navigation</h3>
                            <li><a href="#unsere-kueche">Unsere Küche</a></li>
                            <li><a href="#über-uns">Über uns</a></li>  
                            <li><a href="#reservieren">Reservieren</a></li>  
                        </ul>
                    </div>
                    <div className="restaurant-footer-contact">
                        <h2>Kontakt</h2>
                        <p>Musterstraße 12</p>
                        <p>24103 Kiel</p>
                        <p>0431 ...</p>
                        <a href="mailto:info@anticatavolo.de">info@anticatavola.de</a>
                    </div>
                    <div className="restaurant-footer-legal-info">
                        <h3>Rechtliches</h3>
                        <a>Impressum</a>
                        <a>Datenschutz</a>
                    </div>
                </div>
                <div className="restaurant-footer-bottom-line">
                    <p>© 2026 Antica Tavola. Alle Rechte vorbehalten.</p>
                </div>
            </section>
        </>
    )
}

export default RestaurantDemo;