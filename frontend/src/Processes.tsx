import "./Processes.css";

function Processes () {

    return (
        <section id="prozess" className="process-content">
            <div className="process-content-header">
                <h2>So läuft dein Projekt ab.</h2>
                <p>Von der ersten Idee bis zur fertigen Website - transparent und unkompliziert</p>
            </div>
            <div className="process-content-info">
                <div className="process-timeline">
                    <span>01</span>
                    <span>02</span>
                    <span>03</span>
                    <span>04</span>
                </div>
                <div className="process-content-info-columns">
                <div className="process-content-info-column">
                    <h3>Kennenlernen</h3>
                    <p>Wir sprechen über dein Unternehmen, deine Wünsche und deine Ziele</p>
                </div>
                <div className="process-content-info-column">
                    <h3>Planung</h3>
                    <p>Wir legen Aufbau, Inhalte und die passende Lösung gemeinsam fest.</p>
                </div>
                <div className="process-content-info-column">
                    <h3>Umsetzung</h3>
                    <p>Ich gestalte und entwickle deine Website und halte dich auf dem Laufenden</p>
                </div>
                <div className="process-content-info-column">
                    <h3>Veröffentlichung</h3>
                    <p>Nach deiner Freigabe geht deine Website online.</p>
                </div>
                </div>
            </div>
        </section>
    )
}

export default Processes;