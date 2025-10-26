export default function Impressum() {
  return (
      <main className="min-h-screen bg-white">
        <div className="mx-auto max-w-2xl px-8 py-24 md:px-12 md:py-32">
          <h1 className="mb-20 text-center text-4xl font-light uppercase tracking-[0.3em] md:text-5xl">Impressum</h1>

          <div className="space-y-16 text-neutral-800">
            <section>
              <h2 className="mb-6 text-sm font-light uppercase tracking-[0.2em]">Angaben gemäß § 5 TMG</h2>
              <p className="text-justify text-base font-light leading-relaxed">
                Marmor Ponzo
                <br />
                [Ihre Straße und Hausnummer]
                <br />
                [PLZ und Ort]
              </p>
            </section>

            <section>
              <h2 className="mb-6 text-sm font-light uppercase tracking-[0.2em]">Kontakt</h2>
              <p className="text-justify text-base font-light leading-relaxed">
                Telefon: [Ihre Telefonnummer]
                <br />
                E-Mail:{" "}
                <a href="mailto:info@marmorponzo.de" className="underline">
                  info@marmorponzo.de
                </a>
              </p>
            </section>

            <section>
              <h2 className="mb-6 text-sm font-light uppercase tracking-[0.2em]">Umsatzsteuer-ID</h2>
              <p className="text-justify text-base font-light leading-relaxed">
                Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz: [Ihre USt-IdNr.]
              </p>
            </section>

            <section>
              <h2 className="mb-6 text-sm font-light uppercase tracking-[0.2em]">
                Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
              </h2>
              <p className="text-justify text-base font-light leading-relaxed">
                [Ihr Name]
                <br />
                [Ihre Adresse]
              </p>
            </section>

            <section>
              <h2 className="mb-6 text-sm font-light uppercase tracking-[0.2em]">Haftungsausschluss</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="mb-3 text-sm font-normal uppercase tracking-wider">Haftung für Inhalte</h3>
                  <p className="text-justify font-light leading-relaxed">
                    Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit
                    und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
                  </p>
                </div>

                <div>
                  <h3 className="mb-3 text-sm font-normal uppercase tracking-wider">Haftung für Links</h3>
                  <p className="text-justify font-light leading-relaxed">
                    Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss
                    haben. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der
                    Seiten verantwortlich.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="mb-6 text-sm font-light uppercase tracking-[0.2em]">Urheberrecht</h2>
              <p className="text-justify font-light leading-relaxed">
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen
                Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
                Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
              </p>
            </section>
          </div>
        </div>
      </main>
  )
}
