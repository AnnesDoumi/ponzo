export default function Impressum() {
  return (
      <main data-legal className="min-h-screen bg-white">
        <div className="mx-auto max-w-2xl px-8 py-24 md:px-12 md:py-32">
          <h1 className="mb-20 text-center text-4xl font-light uppercase tracking-[0.3em] md:text-5xl">
            Impressum & Datenschutz
          </h1>

          <div className="space-y-16 text-neutral-800">
            {/* Impressum */}
            <section>
              <h2 className="mb-6 text-sm font-light uppercase tracking-[0.2em]">Angaben gemäß § 5 TMG</h2>
              <p className="text-justify text-base font-light leading-relaxed">
                A. Marmor Ponzo UG<br />
                Andreas Ponzo<br />
                Helmholtzstr. 25<br />
                10587 Berlin
              </p>
            </section>

            <section>
              <h2 className="mb-6 text-sm font-light uppercase tracking-[0.2em]">Kontakt</h2>
              <p className="text-justify text-base font-light leading-relaxed">
                Telefon: 030 54824291<br />
                E-Mail:{" "}
                <a href="mailto:info@marmorponzo.de" className="underline">
                  info@marmorponzo.de
                </a>
              </p>
            </section>

            <section>
              <h2 className="mb-6 text-sm font-light uppercase tracking-[0.2em]">Umsatzsteuer-ID</h2>
              <p className="text-justify text-base font-light leading-relaxed">
                Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz: <br /> DE278795438
              </p>
            </section>

            <section>
              <h2 className="mb-6 text-sm font-light uppercase tracking-[0.2em]">
                Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
              </h2>
              <p className="text-justify text-base font-light leading-relaxed">
                Andreas Ponzo<br />
                Helmholtzstr. 25<br />
                10587 Berlin
              </p>
            </section>

            {/* Haftungsausschluss */}
            <section>
              <h2 className="mb-6 text-sm font-light uppercase tracking-[0.2em]">Haftungsausschluss</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="mb-3 text-sm font-normal uppercase tracking-wider">Haftung für Inhalte</h3>
                  <p className="text-justify font-light leading-relaxed">
                    Die Inhalte dieser Website wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit
                    und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
                  </p>
                </div>

                <div>
                  <h3 className="mb-3 text-sm font-normal uppercase tracking-wider">Haftung für Links</h3>
                  <p className="text-justify font-light leading-relaxed">
                    Diese Website enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben.
                    Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
                    verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber verantwortlich.
                  </p>
                </div>
              </div>
            </section>

            {/* Urheberrecht */}
            <section>
              <h2 className="mb-6 text-sm font-light uppercase tracking-[0.2em]">Urheberrecht</h2>
              <p className="text-justify font-light leading-relaxed">
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen
                Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
                Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
              </p>
            </section>

            {/* Datenschutz */}
            <section>
              <h2 className="mb-6 text-sm font-light uppercase tracking-[0.2em]">Datenschutzerklärung</h2>
              <div className="space-y-6 text-base font-light leading-relaxed text-justify">
                <p>
                  Der Schutz Ihrer persönlichen Daten ist uns ein besonderes Anliegen. Wir behandeln Ihre personenbezogenen
                  Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser
                  Datenschutzerklärung.
                </p>

                <h3 className="text-sm font-normal uppercase tracking-wider mt-8">1. Verantwortliche Stelle</h3>
                <p>
                  Verantwortlich im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:<br />
                  <strong>A. Marmor Ponzo UG – Andreas Ponzo</strong><br />
                  Helmholtzstr. 25, 10587 Berlin<br />
                  E-Mail: info@marmorponzo.de
                </p>

                <h3 className="text-sm font-normal uppercase tracking-wider mt-8">2. Erhebung und Speicherung personenbezogener Daten</h3>
                <p>
                  Diese Website dient ausschließlich der Präsentation unserer Arbeiten und Leistungen. Wir erheben keine
                  personenbezogenen Daten, verwenden keine Cookies und keine Analysetools. Beim Besuch dieser Website
                  werden automatisch technische Daten (z.&nbsp;B. Browsertyp, Betriebssystem, Uhrzeit des Zugriffs)
                  verarbeitet, um die Seite anzuzeigen. Diese sogenannten Server-Logfiles werden automatisch vom
                  Hosting-Anbieter erhoben und nach kurzer Zeit gelöscht.
                </p>

                <h3 className="text-sm font-normal uppercase tracking-wider mt-8">3. Kontaktaufnahme per E-Mail</h3>
                <p>
                  Wenn Sie uns per E-Mail kontaktieren, werden Ihre Angaben inklusive der von Ihnen angegebenen
                  Kontaktdaten zwecks Bearbeitung der Anfrage gespeichert. Diese Daten geben wir nicht ohne Ihre
                  Einwilligung weiter.
                </p>

                <h3 className="text-sm font-normal uppercase tracking-wider mt-8">4. Ihre Rechte</h3>
                <p>
                  Sie haben jederzeit das Recht auf Auskunft über Ihre gespeicherten personenbezogenen Daten, deren
                  Herkunft und Empfänger sowie den Zweck der Datenverarbeitung, sowie ein Recht auf Berichtigung, Sperrung
                  oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich
                  jederzeit unter der im Impressum angegebenen Adresse an uns wenden.
                </p>

                <h3 className="text-sm font-normal uppercase tracking-wider mt-8">5. Hosting</h3>
                <p>
                  Beim Besuch der Seite werden technische Verbindungsdaten automatisch an Server unseres Hosting-Anbieters
                  übermittelt. Die Verarbeitung dieser Daten erfolgt gemäß Art.&nbsp;6 Abs.&nbsp;1 lit.&nbsp;f DSGVO auf
                  Grundlage unseres berechtigten Interesses an einer sicheren und effizienten Bereitstellung unseres
                  Online-Angebots.
                </p>

                <p className="mt-8 text-sm text-neutral-600">
                  Letzte Aktualisierung: Oktober 2025
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>
  )
}
