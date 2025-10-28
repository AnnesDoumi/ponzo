// app/kontakt/page.tsx
export const metadata = {
    title: "Kontakt – A. Ponzo Marmor",
    description:
        "Kontaktieren Sie A. Ponzo Marmor in Berlin – Ihr Partner für exklusive Naturstein- und Marmorarbeiten.",
}

export default function Kontakt() {
    return (
        <main data-contact className="min-h-screen bg-white">{/* <-- HIER: data-contact */}
            <div className="mx-auto max-w-2xl px-8 py-24 md:px-12 md:py-32">
                <div className="space-y-16 text-neutral-800">
                    {/* Kontaktinformationen */}
                    <section>
                        <h2 className="mb-6">Kontaktinformationen</h2>

                        <div className="space-y-4">
                            <p>
                                <strong>A. Ponzo Marmor UG</strong>
                                <br />
                                Andrea Ponzo
                                <br />
                                Helmholtzstr. 25
                                <br />
                                10587 Berlin
                            </p>

                            <p>
                                Telefon: 030&nbsp;54824291
                                <br />
                                E-Mail:{" "}
                                <a href="mailto:info@marmorponzo.de">info@marmorponzo.de</a>
                            </p>
                        </div>
                    </section>

                    {/* Öffnungszeiten */}
                    <section>
                        <h2 className="mb-6">Öffnungszeiten</h2>
                        <p>
                            Montag – Freitag: 09:30 – 13:00&nbsp;Uhr
                            <br />
                            Weitere Termine nach Vereinbarung.
                        </p>
                    </section>
                </div>
            </div>
        </main>
    )
}
