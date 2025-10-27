import type React from "react"
import type { Metadata } from "next"
import { Cormorant_Garamond } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/ui/Footer"

const cormorant = Cormorant_Garamond({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600"],
    display: "swap",
})

export const metadata: Metadata = {
    metadataBase: new URL("https://marmorponzo.de"), // <--- deine echte Domain hier
    title: "Marmor Ponzo - Portfolio",
    description: "Exklusive Marmor- und Natursteinarbeiten",
    icons: {
        icon: [
            { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
            { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
            { url: "/favicon.ico" },
        ],
        apple: [
            { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
            // optional – falls du die Datei zusätzlich ablegst:
            { url: "/apple-touch-icon-precomposed.png", sizes: "180x180", type: "image/png" },
        ],
    },
    openGraph: {
        title: "Marmor Ponzo – Portfolio",
        description: "Exklusive Marmor- und Natursteinarbeiten von A. Ponzo",
        siteName: "Marmor Ponzo",
        images: [
            {
                url: "/apple-touch-icon.png", // für OG reicht auch dein Logo
                width: 1200,
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
        images: ["/apple-touch-icon.png"],
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
