import "./LiveDemo.css";
import { Monitor, Tablet, Smartphone } from "lucide-react";
import {useState} from "react";
import RestaurantDemo from "./RestaurantDemo";
import HandwerkDemo from "./HandwerkDemo";
import OnlineShopDemo from "./OnlineShopDemo";

function LiveDemo() {
    const [selectedDemo, setSelectedDemo] = useState("restaurant");
    const [selectedScreen, setSelectedScreen] = useState("desktop");

    return (
        <section className="live-demo" id="live-demo">
            <div className="live-demo-header">
                <p><strong>Live-Demo</strong></p>
                <h1>Sieh selbst, wie deine Webseite aussehen könnte!</h1>
                <p>Entdecke verschiedene Website-Stile und teste direkt, wie sie sich auf Desktop, Tablet und Smartphone anpassen.</p>
            </div>
            <div className="live-demo-selectors">
                <div className="live-demo-website-selector">
                    <button type="button" className={selectedDemo === "restaurant"?"live-demo-website live-demo-website-active":"live-demo-website"} 
                    onClick={() => setSelectedDemo("restaurant")}>Restaurant</button>
                    <button type="button" className={selectedDemo === "handwerk"?"live-demo-website live-demo-website-active":"live-demo-website"} 
                    onClick={() => setSelectedDemo("handwerk")}>Handwerk</button>
                    <button type="button" className={selectedDemo === "online-shop"?"live-demo-website live-demo-website-active":"live-demo-website"} 
                    onClick={() => setSelectedDemo("online-shop")}>Online-Shop</button>
                </div>
                <div className="live-demo-screen-selector">
                    <button type="button" className={selectedScreen === "desktop"?"live-demo-screen-icon live-demo-screen-icon-active":"live-demo-screen-icon"} 
                    onClick={() => setSelectedScreen("desktop")}>
                        <Monitor/>
                    </button>
                    <button type="button" className={selectedScreen === "tablet"?"live-demo-screen-icon live-demo-screen-icon-active":"live-demo-screen-icon"} 
                    onClick={() => setSelectedScreen("tablet")}>
                        <Tablet className="tablet"/>
                    </button>
                    <button type="button" className={selectedScreen === "smartphone"?"live-demo-screen-icon live-demo-screen-icon-active":"live-demo-screen-icon"} 
                    onClick={() => setSelectedScreen("smartphone")}>
                        <Smartphone/>
                    </button>
                </div>
            </div>
            <div className={`live-demo-demo-screen demo-${selectedScreen}`}>
                {selectedDemo === "restaurant"&&<RestaurantDemo/>}
                {selectedDemo === "handwerk"&&<HandwerkDemo/>}
                {selectedDemo === "online-shop"&&<OnlineShopDemo/>}
            </div>
        </section>
    )
}

export default LiveDemo;