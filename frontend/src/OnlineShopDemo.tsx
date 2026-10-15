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
import { Search, ChevronDown, Heart, User, ShoppingCart, ArrowBigRight, Star, Truck, RotateCcw, ShieldCheck, Mountain, CircleX, Eye, EyeClosed, Trash } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useState, useRef, useEffect, type RefObject } from "react";
import hero from "./assets/shop img/hero.png";
import backpacks from "./assets/shop img/category-backpacks.png";
import bottles from "./assets/shop img/category-bottles.png";
import outdoorCamping from "./assets/shop img/category-outdoor-camping.png";
import accessories from "./assets/shop img/category-accessories.png";
import promoImage from "./assets/shop img/promo-image.png";
import { createPortal } from "react-dom";


    type OnlineShopDemoProps = {
        demoScreenRef: RefObject<HTMLDivElement | null>
    }

function OnlineShopDemo({demoScreenRef}: OnlineShopDemoProps) {
    type Product = {
        id: number;
        name: string;
        category: string;
        price: number;
        oldPrice: number | null;
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
            stock: 0,
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
    type PriceFilter =
    | "Unter 30€"
    | "30€ - 60€"
    | "60€ - 100€"
    | "Über 100€";


    const [inputValue, setInputValue] = useState("");
    const [isSearching, setIsSearching] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [shopOpen, setShopOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [selectedPrice, setSelectedPrice] = useState<PriceFilter | null>(null);
    const [availability, setAvailability] = useState(false);
    const [storyOpen, setStoryOpen] = useState(false);
    const [loginOpen, setLoginOpen] = useState(false);
    const [cartOpen, setCartOpen] = useState(false);
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const [signupOpen, setSignupOpen] = useState(false);
    const [signupFirstName, setSignupFirstName] = useState("");
    const [signupLastName, setSignupLastName] = useState("");
    const [signupEmail, setSignupEmail] = useState("");
    const [signupPassword, setSignupPassword] = useState("");
    const [signupPasswordConfirm, setSignupPasswordConfirm] = useState("");
    const [showLoginPassword, setShowLoginPassword] = useState(false);
    const [showSignupPassword, setShowSignupPassword] = useState(false);
    const [showSignupConfirmPassword, setShowSignupConfirmPassword] = useState(false);
    const [signupPasswordError, setSignupPasswordError] = useState("");
    const [signupEmptyFieldError, setSignupEmptyFieldError] = useState("");
    const [signupSuccessOpen, setSignupSuccessOpen] = useState(false);
    const [cart, setCart] = useState<CartItem[]>([]);

    type TrustItem = {
        title: string,
        description: string,
        icon: LucideIcon
    }

    interface CartItem extends Product{quantity: number;}

    function addToCart(product: Product){
        const itemInCart = cart.some((item) => item.id === product.id)

            if(itemInCart){
            setCart(cart.map((item) => {
                if(item.id === product.id){
                    return {...item, quantity: item.quantity + 1}; 
                }
                return item;
            })
        );
        }else{
            setCart([...cart, {...product, quantity: 1}]);
        }
    }

    const subTotal = cart.reduce((total, item) => {
        return total + (item.price * item.quantity)
    }, 0);

    function increaseQuantity(id: number){
        setCart(cart.map((item) => {
                if(item.id === id){
                    return {...item, quantity: item.quantity + 1}; 
                }
                return item;
            })
        );
    }
    function decreaseQuantity(id: number) {

    const itemToDecrease = cart.find((item) => item.id === id);

    if (itemToDecrease?.quantity === 1) {
        setCart(cart.filter((item) => item.id !== id));
    } else {
        setCart(
            cart.map((item) => {
                if (item.id === id) {
                    return {...item, quantity: item.quantity - 1};
                }
                return item;
            })
        );
    }
}

    function removeFromCart(id: number){
        setCart(cart.filter((item) => item.id !== id))
    }

    const cartCount = cart.reduce((total, item) => {
        return total + item.quantity;
    }, 0)

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
    const filteredProducts = products.filter(product => (product.name.toLowerCase().includes(inputValue.toLowerCase())) ||
        product.category.toLowerCase().includes(inputValue.toLowerCase()));

    const searchRef = useRef<HTMLDivElement>(null);
    const shopRef = useRef<HTMLDivElement>(null);
    const storyRef = useRef<HTMLDivElement>(null);
    const loginRef = useRef<HTMLDivElement>(null);
    const cartRef = useRef<HTMLDivElement>(null);
    const signupRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {

            if (
                searchRef.current &&
                !searchRef.current.contains(event.target as Node)
            ) {
                setIsSearching(false);
            }
            if (
                shopRef.current &&
                !shopRef.current.contains(event.target as Node)
            ) {
                setDropdownOpen(false);
            }
            if (
                storyRef.current &&
                !storyRef.current.contains(event.target as Node)
            ){
                setStoryOpen(false);
            }
            if (
                loginRef.current &&
                !loginRef.current.contains(event.target as Node)
            ){
                setLoginOpen(false);
                resetLoginForm();
            }
            if (
                cartRef.current &&
                !cartRef.current.contains(event.target as Node)
            ){
                setCartOpen(false);
            }
            if (
                signupRef.current &&
                !signupRef.current.contains(event.target as Node)
            ){
                setSignupOpen(false);
                resetSignupForm();
                
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    
    const categories = [...new Set(products.map(product => product.category))];
    const shopProducts = selectedCategory === null ? products : products.filter(product => product.category === selectedCategory);
    const filteredPriceShopProducts = shopProducts.filter((product) => {if(selectedPrice === "Unter 30€"){
                                        return product.price < 30;
                                        }else if(selectedPrice === "30€ - 60€"){
                                            return product.price >= 30 && product.price < 60;
                                        }else if(selectedPrice === "60€ - 100€"){
                                            return product.price >= 60 && product.price < 100;
                                        }else if(selectedPrice === "Über 100€"){
                                            return product.price >= 100;
                                        }else{
                                            return true;
                                        }
                                    })
    const productsToDisplay = filteredPriceShopProducts.filter((product => {if (availability){
                                                                                return product.stock > 0;
                                                                            }else{
                                                                                return true;
                                                                            }
                                                                            }));

function resetSignupForm() {
    setSignupFirstName("");
    setSignupLastName("");
    setSignupEmail("");
    setSignupPassword("");
    setSignupPasswordConfirm("");

    setSignupEmptyFieldError("");
    setSignupPasswordError("");
    
}
function resetLoginForm() {
    setLoginEmail("");
    setLoginPassword("");
}

    function handleSignupSubmit(event: React.SubmitEvent<HTMLFormElement>){
        event.preventDefault();

        setSignupEmptyFieldError("");
        setSignupPasswordError("");

        if(signupFirstName === "" || signupLastName === "" || signupEmail === "" || signupPassword === "" || signupPasswordConfirm === ""){
            setSignupEmptyFieldError("Bitte alle Felder ausfüllen");
            return;
        }
        if(signupPassword !== signupPasswordConfirm){
            setSignupPasswordError("Die Passwörter stimmen nicht überein.")
            return;
        }
        

        setSignupOpen(false);
        setSignupSuccessOpen(true);
        resetSignupForm();
    }
    

    


    return (
        <div className="online-shop-demo" id="home">
            <div className="online-shop-topbar">
                <div className="online-shop-topbar-top">
                    <div className="online-shop-topbar-logo-container">
                        <img className="online-shop-topbar-logo" src={logo} alt="Northbound Logo" />
                    </div>
                    <div className="online-shop-topbar-search-container">
                        <div ref={searchRef} className="online-shop-topbar-search-wrapper">
                            <Search className="online-shop-search-icon" />
                            <input className="online-shop-topbar-searchbar" placeholder="Search Shop ..." value={inputValue}
                                onChange={(event) => { setInputValue(event.target.value); setIsSearching(event.target.value !== "") }} />
                            {isSearching && (
                                <div className="online-shop-topbar-search-dropdown">
                                    {filteredProducts.length > 0 ? filteredProducts.map((product) => (
                                        <div key={product.id} className="online-shop-topbar-search-dropdown-item">
                                            <img className="online-shop-topbar-search-dropdown-image" src={product.image} alt={product.name} />
                                            <div className="online-shop-topbar-search-dropdown-text">
                                                <h3>{product.name}</h3>
                                                <p>{product.category}</p>
                                                <h3>{product.price.toFixed(2)}€</h3>
                                            </div>
                                        </div>)) : <p>Keine Produkte gefunden.</p>}
                                </div>)}
                        </div>
                    </div>
                </div>
            </div>
                <div className="online-shop-topbar-bottom">
                    <div className="online-shop-navbar">
                        <div className="online-shop-navbar-left">
                            <div ref={shopRef} className="online-shop-shop-wrapper">
                                <button className="online-shop-navbar-shop-dropdown-button" onClick={() => setDropdownOpen(!dropdownOpen)}>Shop<ChevronDown /></button>
                                {dropdownOpen &&
                                    <div className="online-shop-navbar-shop-dropdown">
                                        <h2 className="online-shop-navbar-shop-dropdown-header">Entdecke unsere Produkte:</h2>
                                        <button className="online-shop-navbar-shop-dropdown-category-button" onClick={() => 
                                            {setShopOpen(true); 
                                            setSelectedCategory(null);
                                            setDropdownOpen(false);
                                            }}>Alle Produkte</button>
                                        <div className="online-shop-navbar-shop-dropdown-category-button-wrapper">{categories.map((category) => (
                                            <button key={category} className="online-shop-navbar-shop-dropdown-category-button" onClick={() => 
                                            {setShopOpen(true); 
                                            setSelectedCategory(category);
                                            setDropdownOpen(false);
                                            }}>{category}</button>))}
                                        </div>
                                    </div>}
                            </div>
                            <a onClick={() => setShopOpen(false)} className="online-shop-navbar-button" href="#home">Home</a>
                            <a onClick={() => setShopOpen(false)} className="online-shop-navbar-button" href="#popular">Beliebte Kategorien</a>
                            <a onClick={() => setShopOpen(false)} className="online-shop-navbar-button" href="#bestseller">Bestseller</a>
                            <a onClick={() => setShopOpen(false)} className="online-shop-navbar-button" href="#promo">Northbound</a>
                        </div>
                        <div className="online-shop-navbar-right">
                            <Heart className="online-shop-navbar-right-icon" />
                            <User className="online-shop-navbar-right-icon" onClick={() => setLoginOpen(true)} />
                                <div className="online-shop-cart-icon-wrapper">
                                    <ShoppingCart className="online-shop-navbar-right-icon" onClick={() => setCartOpen(true)} />
                                    {cartCount > 0 && (<span className="online-shop-cart-badge">{cartCount}</span>)}
                                </div>
                            {loginOpen&& demoScreenRef.current && createPortal(
                                <div className="online-shop-overlay">
                                    <div ref={loginRef} className="online-shop-login-window">
                                        <h2>Willkommen zurück!</h2>
                                        <h3>Melde dich bei deinem Konto an.</h3>
                                        <form className="online-shop-login-form">
                                            <fieldset>
                                                <legend>Login</legend>
                                                <label htmlFor="login-email-input">E-Mail</label>
                                                <input id="login-email-input" type="email" placeholder="E-Mail eingeben" value={loginEmail} onChange={(event) => 
                                                    setLoginEmail(event.target.value)}/>
                                                <label htmlFor="login-password-input">Passwort</label>
                                                <div className="online-shop-login-password-container">
                                                    <input className="online-shop-login-password" id="login-password-input" 
                                                    type={showLoginPassword?"Text":"password"} placeholder="Passwort eingeben" value={loginPassword} 
                                                    onChange={(event) => setLoginPassword(event.target.value)}/>
                                                    {!showLoginPassword?(<button className="online-shop-login-closedeye-button" onClick={() => 
                                                    setShowLoginPassword(!showLoginPassword)}><EyeClosed/></button>)
                                                    :(<button className="online-shop-login-eye-button" onClick={() => setShowLoginPassword(!showLoginPassword)}><Eye/></button>)}
                                                </div>
                                                <a>Passwort vergessen?</a>
                                                <button type="submit" className="online-shop-login-button" onClick={() => resetLoginForm()}>Einloggen</button>
                                            </fieldset>
                                        </form>
                                        <div className="online-shop-login-outside-form">
                                        <h3>Noch kein Konto?</h3>
                                        <button className="online-shop-to-signup-button" onClick={() => {setLoginOpen(false); setSignupOpen(true); resetLoginForm()}}>Konto erstellen</button>
                                        </div>
                                        <button className="online-shop-close-login-button" onClick={() => {setLoginOpen(false); resetSignupForm(); resetLoginForm();}}><CircleX/></button>
                                    </div>
                                </div>, demoScreenRef.current)}
                                {signupOpen&& demoScreenRef.current && createPortal(
                                    <div className="online-shop-overlay"> 
                                        <div ref={signupRef} className="online-shop-signup-window">
                                            <form className="online-shop-signup-form" onSubmit={handleSignupSubmit}>
                                                <fieldset>
                                                    <legend>Konto erstellen</legend>
                                                    <label htmlFor="firstname-input">Vorname</label>
                                                    <input id="firstname-input" type="text" value={signupFirstName} placeholder="Vorname" onChange={(event) => 
                                                        setSignupFirstName(event.target.value)}/>
                                                    <label htmlFor="lastname-input">Nachname</label> 
                                                    <input id="lastname-input" type="text" value={signupLastName} placeholder="Nachname" onChange={(event) => 
                                                        setSignupLastName(event.target.value)}/>
                                                    <label htmlFor="signup-email-input">Email</label>
                                                    <input id="signup-email-input" type="email" value={signupEmail} placeholder="Email eingeben" onChange={(event) => 
                                                        setSignupEmail(event.target.value)}/>
                                                    <label htmlFor="signup-password-input">Passwort</label>
                                                    <div className="online-shop-signup-password-container">
                                                        <input id="signup-password-input" type={showSignupPassword?"Text":"password"} value={signupPassword} placeholder="Passwort eingeben" onChange={(event) => 
                                                        setSignupPassword(event.target.value)}/>
                                                        {!showSignupPassword?(<button className="online-shop-signup-closedeye-button" onClick={() => 
                                                        setShowSignupPassword(!showSignupPassword)}><EyeClosed/></button>)
                                                        :(<button className="online-shop-signup-eye-button" onClick={() => setShowSignupPassword(!showSignupPassword)}><Eye/></button>)}
                                                    </div>
                                                    <label htmlFor="signup-password-confirm">Passwort bestätigen</label>
                                                    <div className="online-shop-signup-confirm-password-container">
                                                        <input id="signup-password-confirm" type={showSignupConfirmPassword?"Text":"password"} 
                                                        value={signupPasswordConfirm} placeholder="Passwort erneut eingeben" 
                                                        onChange={(event) => setSignupPasswordConfirm(event.target.value)}/>
                                                        {!showSignupConfirmPassword?(<button className="online-shop-signup-confirm-closedeye-button" onClick={() => 
                                                        setShowSignupConfirmPassword(!showSignupConfirmPassword)}><EyeClosed/></button>)
                                                        :(<button className="online-shop-signup-confirm-eye-button" onClick={() => 
                                                        setShowSignupConfirmPassword(!showSignupConfirmPassword)}><Eye/></button>)}
                                                    </div>
                                                    {signupPasswordError && <p>{signupPasswordError}</p>}
                                                    {signupEmptyFieldError && <p>{signupEmptyFieldError}</p>}
                                                    <button type="submit" className="online-shop-signup-button">Konto erstellen</button>
                                                    <button type="button" className="online-shop-signup-close-button" onClick={() => 
                                                        {setSignupOpen(false); resetSignupForm();}}><CircleX/></button>
                                                </fieldset>
                                            </form>
                                            <div className="online-shop-signup-outside-form">
                                            <p>Bereits ein Konto?</p>
                                            <button type="button" className="online-shop-to-login-button" onClick={() => 
                                                {setSignupOpen(false); setLoginOpen(true); resetSignupForm();}}>Zur Anmeldung</button>
                                            </div>
                                        </div>
                                    </div>, demoScreenRef.current
                                )}
                                {signupSuccessOpen && demoScreenRef.current && createPortal(
                                                <div className="online-shop-overlay">
                                                    <div className="online-shop-signup-confirmation-window">
                                                        <h2>Konto erstellt!</h2>
                                                        <p>Dein NORTHBOUND-Konto wurde erfolgreich erstellt.</p>
                                                        <p>Demo-Hinweis: Es wurden keine echten Kontodaten gespeichert.</p>
                                                        <button onClick={() => {setSignupSuccessOpen(false); resetSignupForm();}}>Weiter einkaufen</button>
                                                    </div>
                                                </div>, demoScreenRef.current)}
                            {cartOpen&& demoScreenRef.current && createPortal(
                                <div className="online-shop-cart-overlay">
                                    <div ref={cartRef} className="online-shop-cart-window">
                                        <h2>Warenkorb</h2>
                                        {cart.length > 0?
                                        <div className="online-shop-cart-grid">
                                            {cart.map((item) => (
                                                <div key={item.id} className="online-shop-cart-item">
                                                    <img src={item.image} alt={item.name}/>
                                                    <p>{item.name}</p>
                                                    <p>{item.price.toFixed(2)}€</p>
                                                    <div className="online-shop-cart-quantity-container">
                                                        <p>Menge:</p>
                                                        <p className="online-shop-cart-quantity">
                                                            <button onClick={() => decreaseQuantity(item.id)}>-</button>{item.quantity}<button onClick={() => 
                                                                increaseQuantity(item.id)}>+</button></p>
                                                    </div>         
                                                    <button className="online-shop-cart-trash-button" onClick={() => removeFromCart(item.id)}><Trash/></button>
                                                </div>))} 
                                        </div>
                                        :<div>
                                            <h3>Noch nichts hier!</h3>    
                                        </div>}
                                        <div className="online-shop-cart-bottom">
                                        <div className="online-shop-cart-subtotal">
                                            <h3>Zwischensumme: </h3>
                                            <p>{subTotal.toFixed(2)}€</p>
                                        </div>
                                        <button className="online-shop-cart-checkout-button">Zur Kasse</button>
                                        </div>
                                        <button className="online-shop-x-button" onClick={() => setCartOpen(false)}><CircleX/></button>
                                    </div>
                                </div>, demoScreenRef.current)}
                        </div>
                    </div>
                </div>
            {shopOpen?
            <div className="online-shop-shop">
                <div className="online-shop-shop-header">
                    <h1>{selectedCategory === null ? "Alle Produkte": selectedCategory}</h1>
                </div>
                <div className="online-shop-shop-content">
                    <div className="online-shop-shop-content-filter-container">
                        <div className="online-shop-shop-content-filters">
                            <h2>Kategorie</h2>
                            <ul>
                                <li><button className={selectedCategory === null
                                    ?"online-shop-shop-content-filtered-category-active online-shop-shop-content-filtered-category"
                                    :"online-shop-shop-content-filtered-category"}
                                    onClick={() => setSelectedCategory(null)}>Alle Produkte</button></li>
                                {categories.map((category) => (<li key={category}>
                                    <button className={selectedCategory === category
                                    ?"online-shop-shop-content-filtered-category-active online-shop-shop-content-filtered-category"
                                    :"online-shop-shop-content-filtered-category"}
                                    onClick={() => setSelectedCategory(selectedCategory === category
                                        ? null : category)}>{category}</button></li>))}
                            </ul>
                        </div>
                        <div className="online-shop-shop-content-filters">
                            <h2>Preis</h2>
                            <ul>
                                <li><button onClick={() => setSelectedPrice(selectedPrice === "Unter 30€"
                                ? null : "Unter 30€")} className={selectedPrice === "Unter 30€"
                                ?"online-shop-shop-content-filtered-price-active online-shop-shop-content-filtered-price"
                                :"online-shop-shop-content-filtered-price"}>Unter 30€</button></li>
                                <li><button onClick={() => setSelectedPrice(selectedPrice === "30€ - 60€"
                                ? null : "30€ - 60€")} className={selectedPrice === "30€ - 60€"
                                ?"online-shop-shop-content-filtered-price-active online-shop-shop-content-filtered-price"
                                :"online-shop-shop-content-filtered-price"}>30€ - 60€</button></li>
                                <li><button onClick={() => setSelectedPrice(selectedPrice === "60€ - 100€"
                                ? null : "60€ - 100€")} className={selectedPrice === "60€ - 100€"
                                ?"online-shop-shop-content-filtered-price-active online-shop-shop-content-filtered-price"
                                :"online-shop-shop-content-filtered-price"}>60€ - 100€</button></li>
                                <li><button onClick={() => setSelectedPrice(selectedPrice === "Über 100€"
                                ? null : "Über 100€")} className={selectedPrice === "Über 100€"
                                ?"online-shop-shop-content-filtered-price-active online-shop-shop-content-filtered-price"
                                :"online-shop-shop-content-filtered-price"}>Über 100€</button></li>
                            </ul>
                        </div>
                        <div className="online-shop-shop-content-filters">
                            <h2>Verfügbarkeit</h2>
                            <ul>
                                <li><button onClick={() => setAvailability(!availability)} className={availability
                                ?"online-shop-shop-content-filtered-availability-active online-shop-shop-content-filtered-availability"
                                :"online-shop-shop-content-filtered-availability"}>Auf Lager</button></li>
                            </ul>
                        </div>
                        <button className="online-shop-shop-content-clear-filter-button" 
                        onClick={() => {setAvailability(false); setSelectedPrice(null); setSelectedCategory(null)}}>Filter zurücksetzen</button>
                    </div>
                    <div className="online-shop-shop-content-catalog">
                        {productsToDisplay.length === 0
                        ?(<div className="online-shop-shop-no-content"><h2>Keine Produkte gefunden</h2>
                         <p>Passe deine Filter an oder setze sie zurück.</p></div>)
                        :productsToDisplay.map((product) => (<div key={product.id} className="online-shop-catalog-product">
                                <img className="online-shop-catalog-product-image" src={product.image} alt={product.name} />
                                <div className="online-shop-catalog-product-info">
                                    <p className="online-shop-catalog-product-name">{product.name}</p>
                                    <p className="online-shop-catalog-product-category">{product.category}</p>
                                    <p className="online-shop-catalog-product-rating">{Array(5).fill(null).map((_, index) =>
                                        (<Star key={index} fill={index < Math.round(product.rating) ? "orange" : "none"} />))}<span>{product.rating}</span>({product.reviews})</p>
                                        <p className="online-shop-catalog-product-price">{product.oldPrice !== null && (<span className="online-shop-catalog-product-oldPrice">{product.oldPrice.toFixed(2)}€</span>)}
                                            {product.price.toFixed(2)}€</p>
                                    <div className="online-shop-catalog-addToCart-container">
                                        <button className="online-shop-catalog-addToCart-button" onClick={() => addToCart(product)}><ShoppingCart/>In den Warenkorb</button>
                                    </div>
                                    <Heart className="online-shop-catalog-product-icon" />
                                </div>
                            </div>))}
                    </div>
                </div>
            </div>:
            <div className="online-shop-home">
                <section className="online-shop-hero">
                    <img className="online-shop-hero-image" src={hero} alt="man and dog viewing sunset" />
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
                <section className="online-shop-popular" id="popular">
                    <div className="online-shop-popular-header">
                        <h1>Beliebte Kategorien</h1>
                        <p>Finde die richtige Ausrüstung für dein nächstes Abenteuer.</p>
                    </div>
                    <div className="online-shop-popular-cards">
                        <div className="online-shop-popular-card-backpacks">
                            <div className="online-shop-card-image-wrapper">
                                <img className="online-shop-card-image" src={backpacks} alt="Backpack" />
                                <h2 className="online-shop-card-h2">Rucksäcke<ArrowBigRight className="online-shop-popular-icon" /></h2>
                            </div>
                        </div>
                        <div className="online-shop-popular-card-bottles">
                            <div className="online-shop-card-image-wrapper">
                                <img className="online-shop-card-image" src={bottles} alt="Bottles" />
                                <h2 className="online-shop-card-h2">Trinkflaschen<ArrowBigRight className="online-shop-popular-icon" /></h2>
                            </div>
                        </div>
                        <div className="online-shop-popular-card-outdoor-camping">
                            <div className="online-shop-card-image-wrapper">
                                <img className="online-shop-card-image" src={outdoorCamping} alt="Camping tent" />
                                <h2 className="online-shop-card-h2">Outdoor & Camping<ArrowBigRight className="online-shop-popular-icon" /></h2>
                            </div>
                        </div>
                        <div className="online-shop-popular-card-accessories">
                            <div className="online-shop-card-image-wrapper">
                                <img className="online-shop-card-image" src={accessories} alt="Accessories" />
                                <h2 className="online-shop-card-h2">Zubehör<ArrowBigRight className="online-shop-popular-icon" /></h2>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="online-shop-bestseller" id="bestseller">
                    <div className="online-shop-bestseller-header">
                        <h1>Unsere Favoriten</h1>
                        <p>Bestseller für dein nächstes Abenteuer.</p>
                        <p>Von unserer Community besonders beliebt.</p>
                    </div>
                    <div className="online-shop-bestseller-grid">
                        {products.filter((product) => (product.featured)).map((product) => (
                            <div key={product.id} className="online-shop-bestseller-product">
                                <img className="online-shop-bestseller-product-image" src={product.image} alt={product.name} />
                                <div className="online-shop-bestseller-product-info">
                                    <p className="online-shop-bestseller-product-name">{product.name}</p>
                                    <p className="online-shop-bestseller-product-category">{product.category}</p>
                                    <p className="online-shop-bestseller-product-rating">{Array(5).fill(null).map((_, index) =>
                                        (<Star key={index} fill={index < Math.round(product.rating) ? "orange" : "none"} />))}<span>{product.rating}</span>({product.reviews})</p>
                                    <p className="online-shop-bestseller-product-price">{product.oldPrice !== null && (<span className="online-shop-bestseller-product-oldPrice">{product.oldPrice.toFixed(2)}€</span>)}
                                        {product.price.toFixed(2)}€</p>
                                    <Heart className="online-shop-bestseller-product-icon" />
                                </div>
                            </div>))}
                    </div>
                </section>
                <section className="online-shop-trust">
                    {trustItems.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <div key={index} className="online-shop-trust-item">
                                <Icon className="online-shop-trust-item-icon" />
                                <div className="online-shop-trust-item-text">
                                    <h3>{item.title}</h3>
                                    <p>{item.description}</p>
                                </div>
                            </div>)
                    })}
                </section>
                <section className="online-shop-promo" id="promo">
                    <div className="online-shop-promo-left">
                        <img className="online-shop-promo-left-image" src={promoImage} alt="Man sitting and watching sunset" />
                    </div>
                    <div className="online-shop-promo-right">
                        <h2 className="online-shop-promo-right-h2">Draußen beginnt dort, wo der Alltag endet.</h2>
                        <p className="online-shop-promo-right-p">NORTHBOUND steht für unkomplizierte Ausrüstung für Wochenenden, Wanderungen und spontane Abenteuer.
                            Funktional, langlebig und gemacht für alle, die lieber draußen unterwegs sind.
                        </p>
                        <button className="online-shop-promo-right-button" onClick={() => setStoryOpen(true)}>Unsere Geschichte</button>
                        {storyOpen&& demoScreenRef.current && createPortal(
                            <div className="online-shop-overlay">
                                <div ref={storyRef} className="online-shop-our-story-window">
                                    <h2>Aus Liebe zum Draußensein.</h2>
                                    <p><span><strong>NORTHBOUND</strong></span> entstand aus der Idee, dass gute Outdoor-Ausrüstung nicht kompliziert sein muss.</p>
                                    <p>Wir entwickeln Produkte für Menschen, die ihre Zeit lieber draußen verbringen – egal ob auf einer mehrtägigen Wanderung, 
                                        beim Camping am Wochenende oder bei einem spontanen Ausflug ins Grüne.</p> 
                                        <p>Unser Fokus liegt auf funktionalem Design, langlebigen Materialien und Ausrüstung, auf die du dich unterwegs verlassen kannst.</p>
                                        <p>Denn am Ende geht es nicht darum, wie weit du gehst – sondern darum, überhaupt loszugehen.</p>
                                    <button className="online-shop-our-story-window-close-button" onClick={() => setStoryOpen(false)}><CircleX/></button>
                                </div>
                            </div>, demoScreenRef.current)}
                    </div>
                </section>
            </div>}
            <section className="online-shop-footer">
                <div className="online-shop-footer-top">
                    <div className="online-shop-footer-top-northbound">
                        <img className="online-shop-footer-top-northbound-image" src={logo} alt="Northbound Logo" />
                        <p className="online-shop-footer-top-northbound-p">Ausrüstung für draußen.</p>
                        <p className="online-shop-footer-top-northbound-p"> Gemacht für unterwegs.</p>
                    </div>
                    <nav className="online-shop-footer-top-section">
                        <h2>SHOP</h2>
                        <a>Rucksäcke</a>
                        <a>Trinkflaschen</a>
                        <a>Outdoor & Camping</a>
                        <a>Zubehör</a>
                    </nav>
                    <nav className="online-shop-footer-top-section">
                        <h2>SERVICE</h2>
                        <a>Kontakt</a>
                        <a>Versand & Rückgabe</a>
                        <a>FAQ</a>
                    </nav>
                    <nav className="online-shop-footer-top-section">
                        <h2>RECHTLICH</h2>
                        <a>Impressum</a>
                        <a>Datenschutz</a>
                    </nav>
                </div>
                <div className="online-shop-footer-bottom">
                    <p className="online-shop-footer-bottom-p">© 2026 NORTHBOUND</p>
                    <nav className="online-shop-footer-bottom-social">
                        <a>Instagram</a>
                        <a>Facebook</a>
                    </nav>
                </div>
            </section>
        </div>
    )
}

export default OnlineShopDemo;