import Hero from '../Hero';
import Services from '../Services';
import WhyLoofable from '../WhyLoofable';
import LiveDemo from '../LiveDemo';
import Processes from '../Processes';
import FAQ from '../FAQ';
import CTA from '../CTA';
import { useEffect } from 'react';


function Home() {

    
    useEffect(() => {
    document.title = "Loofable Designs | Webdesign & Webentwicklung in Kiel";

    const description = document.querySelector('meta[name="description"]');

    description?.setAttribute(
    "content",
    "Loofable Designs erstellt moderne, individuelle Websites und Online-Shops für Selbstständige und kleine Unternehmen – persönlich, transparent und professionell."
    );
    }, []);

    return(
        <>
            <Hero/>
            <Services/>
            <WhyLoofable/>
            <LiveDemo/>
            <Processes/>
            <FAQ/>
            <CTA/>
        </>
    )
}

export default Home;