import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import PromoBanner from "./PromoBanner";

function Layout() {
    const location = useLocation();

    useEffect(() => {
        if (location.hash){
            const element = document.getElementById(location.hash.substring(1)
        );
        element?.scrollIntoView({behavior: "smooth"});
    }else{
        window.scrollTo(0, 0);
    }
    }, [location.pathname, location.hash])

    

    return(
        <>
            <Navbar/>
            <PromoBanner/>
            <Outlet/>
            <Footer/>
        </>
    );
}

export default Layout;