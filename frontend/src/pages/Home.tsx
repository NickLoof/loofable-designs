import Navbar from '../Navbar'
import Hero from '../Hero';
import Services from '../Services';
import WhyLoofable from '../WhyLoofable';
import LiveDemo from '../LiveDemo';
import Processes from '../Processes';
import FAQ from '../FAQ';
import CTA from '../CTA';
import Footer from '../Footer';


function Home() {

    return(
        <>
            <Navbar/>
            <Hero/>
            <Services/>
            <WhyLoofable/>
            <LiveDemo/>
            <Processes/>
            <FAQ/>
            <CTA/>
            <Footer/>
        </>
    )
}

export default Home;