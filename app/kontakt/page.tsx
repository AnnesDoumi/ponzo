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
                        <h2 className="mb-6 text-sm font-light uppercase tracking-[0.2em]">
                            Kontaktinformationen
                        </h2>

                        <div className="text-base font-light leading-relaxed space-y-2">
                            <p className="text-justify">
                                <strong className="font-normal text-neutral-900">
                                    A. Ponzo Marmor UG
                                </strong>
                                <br />
                                Andrea Ponzo
                                <br />
                                Helmholtzstr.&nbsp;<span className="num">25</span>
                                <br />
                                <span className="num">10587</span>&nbsp;Berlin
                            </p>

                            <div className="pt-4">
                                <p className="text-justify">
                                    Telefon:&nbsp;
                                    <a
                                        href="tel:+493054824291"
                                        className="text-base font-light leading-relaxed space-y-2"
                                    >
                                        030&nbsp;548&nbsp;242&nbsp;91
                                    </a>
                                    <br />
                                    E-Mail:&nbsp;
                                    <a
                                        href="mailto:info@marmorponzo.de"
                                        className="text-base font-light leading-relaxed space-y-2"
                                    >
                                        info@marmorponzo.de
                                    </a>
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Öffnungszeiten */}
                    <section>
                        <h2 className="mb-6 text-sm font-light uppercase tracking-[0.2em]">
                            Öffnungszeiten
                        </h2>

                        <p className="text-base font-light leading-relaxed text-justify">
                            Montag – Freitag:&nbsp;
                            <span className="num font-normal text-neutral-900">
                09:30 – 13:00&nbsp;Uhr
              </span>
                            <br />
                            Weitere Termine nach Vereinbarung.
                        </p>
                    </section>
                </div>
            </div>
        </main>
    )
}
