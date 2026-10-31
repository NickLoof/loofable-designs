import './FAQ.css';
import { useState } from 'react';

function FAQ () {
    const [openFAQ, setOpenFAQ] = useState<number | null>(null);


    const faqItems = [
        {
            question: "Wie lange dauert die Erstellung einer Website?",
            answer: "Die Dauer hängt vom Umfang und den gewünschten Funktionen deiner Website ab. Eine kleinere Unternehmens-website kann je nach Umfang bereits innerhalb weniger Tage fertiggestellt werden. Bei größeren Projekten oder zusätzlichen Funktionen kann es entsprechend länger dauern. Vor Projektbeginn erhältst du von mir eine realistische Einschätzung des Zeitrahmens."
        },
        {
            question: "Was kostet eine Website?",
            answer: "Die Kosten richten sich nach dem Umfang und den Funktionen deiner Website. Eine einfache Unternehmenswebsite ist natürlich günstiger als ein umfangreicher Online-Shop oder eine Website mit individuellen Funktionen. Auf meiner Preisseite findest du eine transparente Übersicht meiner Preise und kannst dir mit dem Kostenrechner eine erste Einschätzung zusammenstellen."
        },
        {
            question: "Muss ich Texte und Bilder selbst bereitstellen?",
            answer: "Wenn du bereits Texte, Bilder oder ein Logo hast, können wir diese natürlich verwenden. Falls noch Inhalte fehlen, besprechen wir gemeinsam, was benötigt wird und wie wir die passenden Inhalte für deine Website zusammenstellen."
        },
        {
            question: "Wie läuft die Bezahlung ab?",
            answer: "Zu Beginn des Projekts wird eine Anzahlung von 50 % fällig. Die restlichen 50 % zahlst du nach Fertigstellung und deiner Freigabe der Website. So sind die Kosten und der Ablauf von Anfang an klar geregelt."
        },
        {
            question: "Kann ich während der Erstellung Änderungen wünschen?",
            answer: "Natürlich. Zusammenarbeit ist ein wichtiger Teil meines Prozesses. Während der Erstellung halte ich dich über den aktuellen Stand auf dem Laufenden und wir stimmen wichtige Entscheidungen gemeinsam ab, damit die fertige Website wirklich zu deinem Unternehmen passt."
        },
        {
            question: "Kann meine Website später erweitert werden?",
            answer: "Ja. Deine Website kann später beispielsweise um weitere Seiten, neue Funktionen, zusätzliche Sprachen, ein Buchungssystem oder einen Online-Shop erweitert werden. Du musst also nicht von Anfang an alles einplanen."
        },
        {
            question: "Was passiert nach der Veröffentlichung?",
            answer: "Auch nach dem Start deiner Website bist du nicht auf dich allein gestellt. Der erste Monat Wartung und Support ist inklusive. Danach kannst du selbst entscheiden, ob du die Website selbst verwalten möchtest oder ob ich mich weiterhin um Wartung, Updates und Änderungen kümmern soll."
        },
        {
            question: "Kannst du auch meine bestehende Website überarbeiten?",
            answer: "Ja. Wenn du bereits eine Website hast, kann ich sie modernisieren und an dein Unternehmen anpassen. Je nach Ausgangslage kann dabei entweder die bestehende Website überarbeitet oder ein kompletter Neuaufbau sinnvoller sein. Das schauen wir uns gemeinsam an."
        },
    ]

    return (
        <section className='faq-content' id="faq">
            <div className='faq-header'>
                <h2>Noch Fragen?</h2>
                <p>Hier findest du Antworten auf die häufigsten Fragen rund um deine Website und die Zusammenarbeit.</p>
            </div>
            <div className='faq-items'>
                {faqItems.map((item, index) => (
                <div className='faq-item' key={index}>
                    <button className='faq-question' onClick={() => setOpenFAQ(openFAQ === index? null: index)}>
                        <span>{item.question}</span>
                        <span className={`faq-plus ${openFAQ === index ? "open" : ""}`}>+</span>
                    </button>
                    <div className={`faq-answer ${openFAQ === index ? "open" : ""}`}>
                        <p>{item.answer}</p>
                    </div>
                </div>))}
            </div>
        </section>
    )
}

export default FAQ;