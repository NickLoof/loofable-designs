import "./OnlineShopDemo.css";
import logo from "./assets/shop img/northbound-logo.svg";
import summitDaypack from "./assets/shop img/summitDaypack.png";
import trailBottle from "./assets/shop img/trailBottle.png";
import alpineFleece from "./assets/shop img/alpineFleece.png";
import campfireMug from "./assets/shop img/campfireMug.png";
import ridgeCap from "./assets/shop img/ridgeCap.png";
import basecampBlanket from "./assets/shop img/basecampBlanket.png";
import pathfinderBackpack from "./assets/shop img/pathfinderBackpack.png";
import beaconLantern from "./assets/shop img/beaconLantern.png";
import explorerTee from "./assets/shop img/explorerTee.png";
import summitThermos from "./assets/shop img/summitThermos.png";
import trailOrganizer from "./assets/shop img/trailOrganizer.png";
import weekendDuffel from "./assets/shop img/weekendDuffel.png";
import { Search, ChevronDown, Heart, User, ShoppingCart, ArrowBigRight, Star, Truck, RotateCcw, ShieldCheck, Mountain, } from "lucide-react"; 
import type {LucideIcon} from "lucide-react";
import { useState } from "react";
import hero from "./assets/shop img/hero.png";
import backpacks from "./assets/shop img/category-backpacks.png";
import bottles from "./assets/shop img/category-bottles.png";
import outdoorCamping from "./assets/shop img/category-outdoor-camping.png";
import accessories from "./assets/shop img/category-accessories.png";

function OnlineShopDemo() {
    type Product = {
        id: number;
        name: string;
        category: string;
        price: number;
        oldPrice: number|null;
        image: string;
        description: string;
        rating: number;
        reviews: number;
        stock: number;
        featured: boolean;
        colors: string[];
    }
    const products: Product[] = [
    {
        id: 1,
        name: "Tagesrucksack Summit",
        category: "Rucksäcke",
        price: 79.90,
        oldPrice: null,
        image: summitDaypack,
        description: "Leichter Tagesrucksack mit gepolstertem Rücken und wasserabweisendem Außenmaterial.",
        rating: 4.8,
        reviews: 124,
        stock: 18,
        featured: true,
        colors: ["Forest", "Sand", "Black"]
    },
    {
        id: 2,
        name: "Trinkflasche Trail",
        category: "Trinkflaschen",
        price: 29.90,
        oldPrice: null,
        image: trailBottle,
        description: "Doppelwandige Edelstahlflasche für heiße und kalte Getränke unterwegs.",
        rating: 4.7,
        reviews: 86,
        stock: 34,
        featured: true,
        colors: ["Sage", "Black", "Stone"]
    },
    {
        id: 3,
        name: "Fleece-Pullover Alpine",
        category: "Bekleidung",
        price: 64.90,
        oldPrice: 79.90,
        image: alpineFleece,
        description: "Weicher Fleece-Pullover für kühle Abende am Lagerfeuer oder unterwegs auf dem Trail.",
        rating: 4.9,
        reviews: 203,
        stock: 11,
        featured: true,
        colors: ["Rust", "Forest", "Cream"]
    },
    {
        id: 4,
        name: "Camping-Becher",
        category: "Camping",
        price: 18.90,
        oldPrice: null,
        image: campfireMug,
        description: "Robuster Emaille-Becher für Kaffee am Morgen und Tee unter freiem Himmel.",
        rating: 4.6,
        reviews: 67,
        stock: 42,
        featured: false,
        colors: ["Cream", "Forest"]
    },
    {
        id: 5,
        name: "Outdoor-Cap Ridge",
        category: "Accessoires",
        price: 24.90,
        oldPrice: null,
        image: ridgeCap,
        description: "Verstellbare Outdoor-Cap aus strapazierfähiger Baumwolle mit gesticktem NORTHBOUND Logo.",
        rating: 4.5,
        reviews: 48,
        stock: 26,
        featured: false,
        colors: ["Forest", "Sand", "Black"]
    },
    {
        id: 6,
        name: "Camping-Decke Basecamp",
        category: "Camping",
        price: 54.90,
        oldPrice: 69.90,
        image: basecampBlanket,
        description: "Warme, kompakt verstaubare Decke für Camping, Vanlife und entspannte Abende draußen.",
        rating: 4.9,
        reviews: 151,
        stock: 7,
        featured: true,
        colors: ["Rust", "Olive"]
    },
    {
        id: 7,
        name: "Wanderrucksack Pathfinder",
        category: "Rucksäcke",
        price: 119.90,
        oldPrice: null,
        image: pathfinderBackpack,
        description: "Geräumiger 35-Liter-Rucksack mit mehreren Fächern für längere Tagesausflüge.",
        rating: 4.8,
        reviews: 97,
        stock: 9,
        featured: false,
        colors: ["Forest", "Black"]
    },
    {
        id: 8,
        name: "LED-Laterne Beacon",
        category: "Camping",
        price: 39.90,
        oldPrice: null,
        image: beaconLantern,
        description: "Wiederaufladbare LED-Laterne mit warmem Licht und stufenloser Helligkeitsregelung.",
        rating: 4.7,
        reviews: 112,
        stock: 21,
        featured: false,
        colors: ["Black", "Sand"]
    },
    {
        id: 9,
        name: "T-Shirt Explorer",
        category: "Bekleidung",
        price: 32.90,
        oldPrice: null,
        image: explorerTee,
        description: "Schlichtes Baumwollshirt mit kleinem NORTHBOUND Print für Alltag und Abenteuer.",
        rating: 4.4,
        reviews: 39,
        stock: 31,
        featured: false,
        colors: ["Cream", "Forest", "Charcoal"]
    },
    {
        id: 10,
        name: "Thermosflasche Summit",
        category: "Trinkflaschen",
        price: 34.90,
        oldPrice: 42.90,
        image: summitThermos,
        description: "Isolierte Thermosflasche mit Becherdeckel für lange Tage bei niedrigen Temperaturen.",
        rating: 4.8,
        reviews: 73,
        stock: 14,
        featured: false,
        colors: ["Black", "Rust"]
    },
    {
        id: 11,
        name: "Organizer Trail",
        category: "Accessoires",
        price: 22.90,
        oldPrice: null,
        image: trailOrganizer,
        description: "Kompakte Tasche für Kabel, Werkzeug und kleine Ausrüstungsgegenstände.",
        rating: 4.5,
        reviews: 31,
        stock: 28,
        featured: false,
        colors: ["Olive", "Black"]
    },
    {
        id: 12,
        name: "Reisetasche Weekend",
        category: "Taschen",
        price: 89.90,
        oldPrice: null,
        image: weekendDuffel,
        description: "Robuste Reisetasche mit 40 Litern Volumen für Wochenendtrips und spontane Abenteuer.",
        rating: 4.9,
        reviews: 89,
        stock: 12,
        featured: true,
        colors: ["Forest", "Sand"]
    }
];

    const [inputValue, setInputValue] = useState("");
    const [isSearching, setIsSearching] = useState(false);

    type TrustItem = {
        title: string,
        description: string,
        icon: LucideIcon
    }

    const trustItems: TrustItem[] = [
        {
            title: "Kostenloser Versand",
            description: "Ab 75 €",
            icon: Truck
        },
        {
            title: "30 Tage Rückgabe",
            description: "Einfach & unkompliziert",
            icon: RotateCcw
        },
        {
            title: "Sicher bezahlen",
            description: "Geschützter Checkout",
            icon: ShieldCheck
        },
        {
            title: "Für draußen gemacht",
            description: "Robuste Ausrüstung",
            icon: Mountain
        }
    ]

    return (
        <div className="online-shop-demo">
            <div className="online-shop-topbar">
                <div className="online-shop-topbar-top">
                    <div className="online-shop-topbar-logo-container">
                        <img className="online-shop-topbar-logo" src={logo} alt="Northbound Logo"/>
                    </div>
                    <div className="online-shop-topbar-search-container">
                        <div className="online-shop-topbar-search-wrapper">
                            <Search className="online-shop-search-icon"/>
                            <input className="online-shop-topbar-searchbar" placeholder="Search Shop ..." value={inputValue} 
                            onChange={(event) => {setInputValue(event.target.value); setIsSearching(event.target.value !== "")}}/>
                        </div>
                    </div>
                </div>
                <div className="online-shop-topbar-bottom">
                    <div className="online-shop-navbar">
                        <div className="online-shop-navbar-left">
                        <button className="online-shop-navbar-shop-dropdown">Shop<ChevronDown/></button>
                        <button className="online-shop-navbar-button">Rucksäcke</button>
                        <button className="online-shop-navbar-button">Trinkflaschen</button>
                        <button className="online-shop-navbar-button">Outdoor & Camping</button>
                        <button className="online-shop-navbar-button">Zubehör</button>
                        </div>
                        <div className="online-shop-navbar-right">
                            <Heart className="online-shop-navbar-right-icon"/>
                            <User className="online-shop-navbar-right-icon"/>
                            <ShoppingCart className="online-shop-navbar-right-icon"/>
                        </div>
                    </div>
                </div>
            </div>
            <section className="online-shop-hero">
                <img className="online-shop-hero-image" src={hero} alt="man and dog viewing sunset"/>
                <div className="online-shop-hero-content">
                    <div className="online-shop-hero-text-container">
                        <h1>Rausgehen.</h1>
                        <h1>Weitergehen.</h1>
                        <p>Ausrüstung für unterwegs, gemacht für kleine Auszeiten und große Abenteuer.</p>
                    </div>
                    <div className="online-shop-hero-cta-container">
                        <a className="online-shop-hero-cta-primary">Jetzt entdecken</a>
                        <a className="online-shop-hero-cta-secondary">Bestseller ansehen</a>
                    </div>
                </div>
            </section>
            <section className="online-shop-popular">
                <div className="online-shop-popular-header">
                    <h1>Beliebte Kategorien</h1>
                    <p>Finde die richtige Ausrüstung für dein nächstes Abenteuer.</p>
                </div>
                <div className="online-shop-popular-cards">
                    <div className="online-shop-popular-card-backpacks">
                        <div className="online-shop-card-image-wrapper">
                            <img className="online-shop-card-image" src={backpacks} alt="Backpack"/>
                            <h2 className="online-shop-card-h2">Rucksäcke<ArrowBigRight className="online-shop-popular-icon"/></h2>
                        </div>                       
                    </div>
                    <div className="online-shop-popular-card-bottles">
                        <div className="online-shop-card-image-wrapper">
                            <img className="online-shop-card-image" src={bottles} alt="Bottles"/>
                            <h2 className="online-shop-card-h2">Trinkflaschen<ArrowBigRight className="online-shop-popular-icon"/></h2>
                        </div>       
                    </div>
                    <div className="online-shop-popular-card-outdoor-camping">
                        <div className="online-shop-card-image-wrapper">
                            <img className="online-shop-card-image" src={outdoorCamping} alt="Camping tent"/>
                            <h2 className="online-shop-card-h2">Outdoor & Camping<ArrowBigRight className="online-shop-popular-icon"/></h2>
                        </div>
                    </div>
                    <div className="online-shop-popular-card-accessories">
                        <div className="online-shop-card-image-wrapper">
                            <img className="online-shop-card-image" src={accessories} alt="Accessories"/>
                            <h2 className="online-shop-card-h2">Zubehör<ArrowBigRight className="online-shop-popular-icon"/></h2>
                        </div>
                    </div>
                </div>
            </section>
            <section className="online-shop-bestseller">
                <div className="online-shop-bestseller-header">
                    <h1>Unsere Favoriten</h1>
                    <p>Bestseller für dein nächstes Abenteuer.</p>
                    <p>Von unserer Community besonders beliebt.</p>
                </div>
                <div className="online-shop-bestseller-grid">
                    {products.filter((product) => (product.featured)).map((product) => (
                        <div key={product.id} className="online-shop-bestseller-product">
                            <img className="online-shop-bestseller-product-image" src={product.image} alt={product.name}/>
                            <div className="online-shop-bestseller-product-info">
                            <p className="online-shop-bestseller-product-name">{product.name}</p>
                            <p className="online-shop-bestseller-product-category">{product.category}</p>
                            <p className="online-shop-bestseller-product-rating">{Array(5).fill(null).map((_, index) => 
                            (<Star key={index} fill={index < Math.round(product.rating)?"orange":"none"}/>))}<span>{product.rating}</span>({product.reviews})</p>
                            <p className="online-shop-bestseller-product-price">{product.oldPrice !== null&& (<span className="online-shop-bestseller-product-oldPrice">{product.oldPrice.toFixed(2)}€</span>)}
                            {product.price.toFixed(2)}€</p>
                            <Heart className="online-shop-bestseller-product-icon"/>
                        </div>
                     </div>))}
                </div>
            </section>
            <section className="online-shop-trust">
                {trustItems.map((item, index) => {
                    const Icon = item.icon;
                    return(
                    <div key={index} className="online-shop-trust-item">
                        <Icon className="online-shop-trust-item-icon"/>
                        <div className="online-shop-trust-item-text">
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                        </div>
                    </div>)})}
            </section>
        </div>
    )
}

export default OnlineShopDemo;