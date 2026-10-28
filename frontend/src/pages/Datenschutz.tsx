import "./Datenschutz.css";

function Datenschutz() {

    return(
        <div className="datenschutz-page">
            <h3 className="datenschutz-page-h3">Rechtliches</h3>
            <main className="datenschutz-container">
                <h1>Datenschutzerklärung</h1>
                <section className="datenschutz-responsible-party">
                    <div className="datenschutz-responsible-party-header">
                    <h3>1. Verantwortlicher</h3>
                    <p>Verantwortlicher für die Datenverarbeitung auf dieser Website ist:</p>
                    </div>
                    <div className="datenschutz-responsible-party-my-info-section">
                        <h4>Unternehmen</h4>
                        <p>Loofable Designs</p>
                    </div>
                    <div className="datenschutz-responsible-party-my-info-section">
                        <h4>Inhaber</h4>
                        <p>Nicholas Loof</p>
                    </div>
                    <div className="datenschutz-responsible-party-my-info-section">
                        <h4>Anschrift</h4>
                        <p>Kieler Weg 164, 24145 Kiel</p>
                    </div>
                </section>
                <section className="datenschutz-responsible-party-contact">
                    <h4>Kontakt</h4>
                    <p>
                        Telefon: <a href="tel:01754458459">+49 175 4458459</a><br/>
                        E-Mail: <a href="mailto:contact@loofable-designs.de">contact@loofable-designs.de</a>
                    </p>
                </section>
                <section className="datenschutz-general-processing">
                    <h3>2. Allgemeine Hinweise zur Datenverarbeitung</h3>
                    <div className="datenschutz-general-processing-processing-scope">
                        <h4>Umfang der Verarbeitung personenbezogener Daten</h4>
                        <p>Ich verarbeite personenbezogene Daten nur, soweit dies zur Bereitstellung dieser Website, zur Bearbeitung von Anfragen sowie zur 
                            Durchführung vorvertraglicher oder vertraglicher Maßnahmen erforderlich ist.</p>
                    </div>
                    <div className="datenschutz-general-processing-purpose-of-processing">
                        <h4>Zweck der Verarbeitung</h4>
                        <p>Die Verarbeitung personenbezogener Daten erfolgt insbesondere zur Bearbeitung von Kontakt- und Projektanfragen, zur 
                            Kommunikation mit Interessenten und Kunden sowie zur technischen Bereitstellung und Sicherheit dieser Website.</p>
                    </div>
                    <div className="datenschutz-general-processing-legal-bases">
                        <h4>Rechtsgrundlagen</h4>
                        <p>
                            Die Verarbeitung personenbezogener Daten erfolgt auf Grundlage der
                            Datenschutz-Grundverordnung (DSGVO). Soweit die Verarbeitung zur
                            Bearbeitung einer Anfrage oder zur Durchführung vorvertraglicher
                            Maßnahmen erforderlich ist, erfolgt sie auf Grundlage von Art. 6 Abs. 1
                            lit. b DSGVO. Soweit die Verarbeitung zur technischen Bereitstellung,
                            Sicherheit und zum zuverlässigen Betrieb dieser Website erforderlich ist,
                            erfolgt sie auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.
                        </p>
                    </div>
                </section>
                <section className="datenschutz-hosting-server-logs">
                    {/* Wird nach Auswahl des Hosting-Anbieters ergänzt */}
                </section>
                <section className="datenschutz-forms">
                    <h3>4. Kontakt- und Projektanfragen</h3>
                    <h4>Art und Umfang der Verarbeitung</h4>
                    <p>
                        Wenn Sie mich über das Kontaktformular oder das ausführliche
                        Projektformular kontaktieren, werden die von Ihnen eingegebenen
                        personenbezogenen Daten verarbeitet. Dazu können insbesondere Name,
                        E-Mail-Adresse, Telefonnummer, Unternehmensname sowie die von Ihnen
                        übermittelten Angaben zu Ihrem Anliegen oder Projekt gehören.
                    </p>
                    <h4>Zweck der Verarbeitung</h4>
                    <p>
                        Die Verarbeitung dieser Daten erfolgt, um Ihre Anfrage zu bearbeiten,
                        mit Ihnen Kontakt aufzunehmen und gegebenenfalls ein Angebot zu erstellen
                        oder weitere vorvertragliche Maßnahmen durchzuführen.
                    </p>
                    <h4>Rechtsgrundlage</h4>
                    <p>
                        Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO,
                        soweit Ihre Anfrage der Anbahnung oder Durchführung eines Vertrags dient.
                    </p>
                </section>
                <section className="datenschutz-uploads">
                    <h3>5. Datei-Uploads</h3>
                    <h4>Art und Umfang der Verarbeitung</h4>
                    <p>
                        Im Rahmen des Projektformulars haben Sie die Möglichkeit, Dateien
                        wie Texte, Logos, Bilder oder Branding-Materialien hochzuladen.
                        Die hochgeladenen Dateien können personenbezogene Daten enthalten
                        und werden zusammen mit Ihrer Projektanfrage verarbeitet.
                    </p>
                    <h4>Zweck der Verarbeitung</h4>
                    <p>
                        Die Verarbeitung der hochgeladenen Dateien erfolgt ausschließlich zur
                        Bearbeitung Ihrer Projektanfrage, zur Einschätzung des gewünschten
                        Leistungsumfangs sowie gegebenenfalls zur Vorbereitung und Durchführung
                        eines Vertragsverhältnisses.
                    </p>
                    <h4>Rechtsgrundlage</h4>
                    <p>
                        Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO,
                        soweit die Dateien im Zusammenhang mit einer Vertragsanbahnung oder
                        Vertragsdurchführung übermittelt werden.
                    </p>
                </section>
                <section className="datenschutz-email">
                    <h3>6. E-Mail-Kommunikation</h3>
                    <h4>Art und Umfang der Verarbeitung</h4>
                    <p>
                        Wenn Sie mich per E-Mail kontaktieren, werden die von Ihnen
                        übermittelten personenbezogenen Daten verarbeitet. Hierzu gehören
                        insbesondere Ihre E-Mail-Adresse sowie die Inhalte Ihrer Nachricht.
                    </p>
                    <p>
                        Bei der Übermittlung einer Kontakt- oder Projektanfrage über diese
                        Website wird zusätzlich eine E-Mail-Benachrichtigung mit den von Ihnen
                        angegebenen Informationen an meine geschäftliche E-Mail-Adresse
                        versendet.
                    </p>
                    <h4>E-Mail-Dienstleister</h4>
                    <p>
                        Für die E-Mail-Kommunikation nutze ich Dienste der IONOS SE,
                        Elgendorfer Str. 57, 56410 Montabaur, Deutschland.
                    </p>
                    <h4>Zweck der Verarbeitung</h4>
                    <p>
                        Die Verarbeitung erfolgt zur Bearbeitung Ihrer Anfrage und zur
                        Kommunikation mit Ihnen.
                    </p>

                    <h4>Rechtsgrundlage</h4>
                    <p>
                        Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO,
                        soweit die Kommunikation der Anbahnung oder Durchführung eines Vertrags
                        dient.
                    </p>
                </section>
                <section className="datenschutz-storage">
                    <h3>7. Speicherdauer und Löschung</h3>
                    <p>
                        Personenbezogene Daten aus Kontakt- und Projektanfragen werden nur so
                        lange gespeichert, wie dies zur Bearbeitung der jeweiligen Anfrage und
                        für eine mögliche weitere Geschäftsbeziehung erforderlich ist.
                    </p>
                    <p>
                        Kommt kein Vertragsverhältnis zustande, werden die Daten einschließlich
                        gegebenenfalls hochgeladener Dateien gelöscht, sobald sie für die
                        Bearbeitung der Anfrage nicht mehr erforderlich sind und keine
                        gesetzlichen Aufbewahrungspflichten entgegenstehen.
                    </p>
                    <p>
                        Kommt ein Vertragsverhältnis zustande, werden die hierfür erforderlichen
                        Daten für die Dauer der Geschäftsbeziehung sowie anschließend im Rahmen
                        der jeweils geltenden gesetzlichen Aufbewahrungspflichten gespeichert.
                    </p>
                </section>
                <section className="datenschutz-recipients">
                    <h3>8. Empfänger der Daten</h3>
                    <p>
                        Eine Weitergabe personenbezogener Daten an Dritte erfolgt nur, soweit
                        dies zur Bereitstellung dieser Website, zur Bearbeitung Ihrer Anfrage
                        oder zur Erfüllung gesetzlicher Verpflichtungen erforderlich ist.
                    </p>
                    <p>
                        Im Rahmen der E-Mail-Kommunikation können personenbezogene Daten durch
                        den von mir eingesetzten E-Mail-Dienstleister IONOS SE verarbeitet
                        werden.
                    </p>
                    <p>
                        Darüber hinaus erfolgt eine Weitergabe nur, wenn eine gesetzliche
                        Grundlage hierfür besteht oder Sie ausdrücklich eingewilligt haben.
                    </p>
                </section>
                <section className="datenschutz-gdpr-rights">
                    <h3>9. Ihre Datenschutzrechte</h3>
                    <p>
                        Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit
                        das Recht auf Auskunft über Ihre gespeicherten personenbezogenen Daten.
                        Darüber hinaus stehen Ihnen insbesondere folgende Rechte zu:
                    </p>
                    <ul>
                        <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
                        <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
                        <li>Recht auf Löschung (Art. 17 DSGVO)</li>
                        <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
                        <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
                        <li>Recht auf Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
                    </ul>
                    <h4>Widerruf einer Einwilligung</h4>
                    <p>
                        Soweit eine Verarbeitung auf Ihrer Einwilligung beruht, können Sie
                        diese Einwilligung jederzeit mit Wirkung für die Zukunft widerrufen.
                        Die Rechtmäßigkeit der bis zum Widerruf erfolgten Verarbeitung bleibt
                        hiervon unberührt.
                    </p>
                    <h4>Beschwerderecht</h4>
                    <p>
                        Sie haben außerdem das Recht, sich bei einer Datenschutz-Aufsichtsbehörde
                        über die Verarbeitung Ihrer personenbezogenen Daten zu beschweren.
                    </p>
                </section>
            </main>
        </div>
    )
}

export default Datenschutz;