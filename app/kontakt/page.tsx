export const metadata = {
    title: "Kontakt – A. Ponzo Marmor",
    description: "Kontaktieren Sie A. Ponzo Marmor in Berlin – Ihr Partner für exklusive Naturstein- und Marmorarbeiten.",
}

export default function Kontakt() {
    return (
        <main data-legal className="min-h-screen bg-white">
            <div className="mx-auto max-w-2xl px-8 py-24 md:px-12 md:py-32">
                <div className="space-y-16 text-neutral-800">
                    {/* Kontaktinformationen */}
                    <section>
                        <h2 className="mb-6 text-sm font-light uppercase tracking-[0.2em]">
                            Kontaktinformationen
                        </h2>
                        <p className="text-justify text-base font-light leading-relaxed">
                            <strong>A. Ponzo Marmor UG</strong>
                            <br />
                            Andrea Ponzo
                            <br />
                            Helmholtzstr. 25
                            <br />
                            10587 Berlin
                        </p>
                        <p className="mt-6 text-base font-light leading-relaxed">
                            Telefon: 030 54824291
                            <br />
                            E-Mail:{" "}
                            <a href="mailto:info@marmorponzo.de" className="underline">
                                info@marmorponzo.de
                            </a>
                        </p>
                    </section>

                    {/* Öffnungszeiten */}
                    <section>
                        <h2 className="mb-6 text-sm font-light uppercase tracking-[0.2em]">
                            Öffnungszeiten
                        </h2>
                        <p className="text-base font-light leading-relaxed">
                            <br />
                            Montag – Freitag: 09:30 – 13:00 Uhr
                        </p>
                    </section>
                </div>
            </div>
        </main>
    )
}
