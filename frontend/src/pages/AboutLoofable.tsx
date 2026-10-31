import "./AboutLoofable.css";
import { useEffect } from "react";

function AboutLoofable(){

    useEffect(() => {
    document.title = "Über Loofable | Loofable Designs";

    const description = document.querySelector('meta[name="description"]');

    description?.setAttribute(
    "content",
    "Lerne Loofable Designs kennen – persönliches Webdesign und individuelle Webentwicklung für Selbstständige und kleine Unternehmen."
    );
    }, []);

    return(
        <>
            <section className="about-hero">
                <div className="about-hero-content">
                    <h3>Über Loofable</h3>
                    <h1>Webdesign mit Persönlichkeit</h1>
                    <p>Loofable Designs steht für individuelle Websites, direkte Zusammenarbeit und transparente Lösungen – ohne unnötige Umwege.</p>
                </div>
                
            </section>
            <section className="about-content">
                    <div className="about-hero-intro">
                <h4>Hi, ich bin Nick</h4>
                    <p>Die Person hinter <span>Loofable Designs.</span></p>
                </div>
                <div className="about-loofable-story">
                    <p>Loofable Designs begann ursprünglich als kreatives Nebenprojekt rund um 3D-Druck und Lasergravur. 
                        Was dabei immer im Mittelpunkt stand, war die Freude daran, eigene Ideen zu entwickeln und etwas Individuelles zu schaffen.</p>
                    <p>Heute verbinde ich diese kreative Seite mit Webdesign und Entwicklung. Dabei geht es mir nicht darum, möglichst viele Websites 
                        nach demselben Schema zu erstellen. Ich möchte verstehen, was ein Unternehmen ausmacht, und daraus eine Website entwickeln, 
                        die wirklich dazu passt.</p>
                    <p>Durch meinen beruflichen Hintergrund im kaufmännischen Bereich kenne ich dabei auch die andere Seite: Eine Website muss nicht nur gut aussehen, 
                        sondern einen echten Nutzen für das Unternehmen haben. Sie soll Leistungen verständlich präsentieren, Vertrauen schaffen und es potenziellen 
                        Kunden so einfach wie möglich machen, Kontakt aufzunehmen oder ein Angebot anzufragen.</p>
                    <p>Bei Loofable Designs arbeite ich deshalb direkt mit meinen Kunden zusammen – von der ersten Idee bis zur fertigen Website. Es gibt keine 
                        wechselnden Ansprechpartner und keine Lösungen von der Stange. Stattdessen entsteht jede Website passend zum Unternehmen, seinen Kunden und 
                        seinen Zielen.</p>
                </div>
                <h2 className="about-values-heading">
                    Was mir bei meiner Arbeit wichtig ist
                </h2>
                <div className="about-loofable-ideology">
                    <div className="about-loofable-ideology-card">
                        <h3>Persönliche Zusammenarbeit</h3>
                        <p>Du arbeitest direkt mit mir zusammen. So bleiben Absprachen unkompliziert und deine Ideen gehen nicht zwischen verschiedenen Ansprechpartnern verloren.</p>
                    </div>
                    <div className="about-loofable-ideology-card">
                        <h3>Individuell statt von der Stange</h3>
                        <p>Eine Website sollte zum Unternehmen passen – nicht umgekehrt. Deshalb entstehen Design und Aufbau passend zu deinem Auftritt, 
                            deinen Leistungen und deinen Kunden.</p>
                    </div>
                    <div className="about-loofable-ideology-card">
                        <h3>Verständlich & transparent</h3>
                        <p>Klare Leistungen, nachvollziehbare Preise und verständliche Kommunikation gehören für mich genauso zu einem guten Projekt wie das eigentliche Webdesign.</p>
                    </div>
                </div>
                <div className="about-cta">
                    <h3>Lass uns dein Projekt besprechen</h3>
                    <p>Erzähl mir, was du vorhast – gemeinsam finden wir die passende Lösung!</p>
                    <button>Kostenloses Angebot</button>
                </div>
            </section>
            </>
    )
}

export default AboutLoofable;