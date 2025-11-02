import Link from "next/link"

export function Footer() {
    return (
        <footer className="border-t border-neutral-300 bg-white mt-24">
            <div
                className="mx-auto max-w-6xl px-6 md:px-12 py-8 md:py-10 flex flex-col items-center gap-4 text-center md:flex-row md:justify-between md:text-left">
                {/* Links (Kontakt) */}
                <div className="order-2 md:order-1">
                    <Link
                        href="/kontakt"
                        className="uppercase tracking-[0.08em] text-[12.5px] md:text-sm text-neutral-700 hover:text-black transition-colors"
                    >
                        Kontakt
                    </Link>
                </div>

                {/* Mitte (Copyright + Website by) */}
                <div className="order-1 md:order-2 flex flex-col items-center">
                    <p className="text-[12px] md:text-sm text-neutral-600">
                        © {new Date().getFullYear()} A. Ponzo Marmor – All Rights Reserved
                    </p>
                    <Link
                        href="https://doumi.tech"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-1 text-[11px] md:text-[12px] text-neutral-400 hover:text-neutral-600 transition-colors"
                    >
                        Webdesign by doumi.tech
                    </Link>
                </div>

                {/* Rechts (Impressum) */}
                <div className="order-3">
                    <Link
                        href="/impressum"
                        className="uppercase tracking-[0.08em] text-[12.5px] md:text-sm text-neutral-700 hover:text-black transition-colors"
                    >
                        Impressum & Datenschutz
                    </Link>
                </div>
            </div>
        </footer>
    )
}
