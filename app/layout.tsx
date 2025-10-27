import type React from "react"
import type { Metadata } from "next"
import { Cormorant_Garamond } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer} from "@/components/ui/Footer"

const cormorant = Cormorant_Garamond({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600"],
    display: "swap",
})

// Deine bestehende Logo-URL (kannst du später auf /public/logo.jpg ändern)
const LOGO_URL =
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1000194301-6pGUSXh2QcUtB8p3SYpx1KegqLwtcX.jpg"

export const metadata: Metadata = {
    title: "Marmor Ponzo - Portfolio",
    description: "Exklusive Marmor- und Natursteinarbeiten",

    // Favicon / App Icons
    icons: {
        icon: [
            { url: LOGO_URL },           // Standard Favicon
        ],
        shortcut: [{ url: LOGO_URL }],
        apple: [{ url: LOGO_URL }],    // iOS Home Screen
    },

    // Social Preview (WhatsApp, iMessage, Twitter/X, Facebook, …)
    openGraph: {
        title: "Marmor Ponzo – Portfolio",
        description: "Exklusive Marmor- und Natursteinarbeiten von A. Ponzo",
        // url: "https://marmorponzo.de", // optional: wenn Domain fix ist, hier setzen
        siteName: "Marmor Ponzo",
        images: [
            {
                url: LOGO_URL,
                width: 1200,  // empfohlene OG-Größe
                height: 630,
                alt: "Marmor Ponzo Logo",
            },
        ],
        locale: "de_DE",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Marmor Ponzo – Portfolio",
        description: "Exklusive Marmor- und Natursteinarbeiten von A. Ponzo",
        images: [LOGO_URL],
    },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="de" className={`${cormorant.className} antialiased`}>
        <body>
        <Header />
        <div className="pt-24 md:pt-28">{children}</div>
        <Footer />
        </body>
        </html>
    )
}
