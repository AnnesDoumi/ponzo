import Link from "next/link"

export function Footer() {
    return (
        <footer className="border-t border-neutral-300 bg-white mt-24">
            <div className="mx-auto max-w-6xl px-8 md:px-12 py-10 flex flex-col items-center justify-between gap-4 md:flex-row text-sm text-neutral-700 font-light tracking-[0.1em] uppercase">
                <div className="flex items-center gap-8">
                    <Link
                        href="/kontakt"
                        className="transition-colors hover:text-black hover:tracking-[0.12em]"
                    >
                        Kontakt
                    </Link>
                    <Link
                        href="/impressum"
                        className="transition-colors hover:text-black hover:tracking-[0.12em]"
                    >
                        Impressum & Datenschutz
                    </Link>
                </div>

                <p className="text-xs text-neutral-500 tracking-[0.05em] mt-2 md:mt-0">
                    © {new Date().getFullYear()} A. Ponzo Marmor
                </p>
            </div>
        </footer>
    )
}
