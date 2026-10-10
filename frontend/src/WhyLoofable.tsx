import "./WhyLoofable.css";
import { Handshake, SlidersHorizontal, CircleDollarSign } from "lucide-react";
import browserMockup from "./assets/branding/von-der-idee-zur-webseite.png"


function WhyLoofable() {

    return (
        <section id="warum-loofable" className="why-loofable">
            <div className="why-loofable-header">
                <p>Der unabhängige Vorteil</p>
                <h1>Warum Loofable Designs?</h1>
            </div>
            <div className="why-loofable-columns">
                <div className="why-loofable-browser-mockup-container">
                    <img className="why-loofable-browser-mockup" src={browserMockup} alt="Von der Idee zur Webseite"/>
                </div>
                <div className="why-loofable-reasons">
                    <div className="why-loofable-reason">
                        <Handshake className="why-loofable-icon"/>
                        <div className="why-loofable-reason-text">
                            <h2>Direkte Zusammenarbeit</h2>
                            <p>Du arbeitest direkt mit der Person zusammen, die deine Website gestaltet und entwickelt. Keine Account Manager, keine unnötigen Zwischenwege.</p>
                        </div>
                    </div>
                    <div className="why-loofable-reason">
                        <SlidersHorizontal className="why-loofable-icon"/>
                        <div className="why-loofable-reason-text">
                            <h2>Individuell statt von der Stange</h2>
                            <p>Deine Website wird passend zu deinem Unternehmen entwickelt – individuell statt nach einer vorgefertigten Vorlage.</p>
                        </div>
                    </div>
                    <div className="why-loofable-reason">
                        <CircleDollarSign className="why-loofable-icon"/>
                        <div className="why-loofable-reason-text">
                            <h2>Verständlich & transparent</h2>
                            <p>Du sollst wissen, wofür du bezahlst und was auf deiner Website passiert. 
                            Deshalb halte ich den Prozess verständlich, die Kommunikation direkt und die Kosten transparent.</p>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default WhyLoofable;