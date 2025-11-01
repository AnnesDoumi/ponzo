// app/layout.tsx
import type React from "react"
import type {Metadata} from "next"
import {Cormorant_Garamond, Inter} from "next/font/google"
import "./globals.css"
import {Header} from "@/components/header"
import {Footer} from "@/components/ui/Footer"

const cormorant = Cormorant_Garamond({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600"],
    display: "swap",
    preload: true,
})

// Inter nur als Variable (für Zahlen)
const interNum = Inter({
    subsets: ["latin"],
    weight: ["400", "500"],
    display: "swap",
    variable: "--font-num",
})

export const metadata: Metadata = {
    metadataBase: new URL("https://marmorponzo.de"),
    title: "Marmor Ponzo - Portfolio",
    description: "Exklusive Marmor- und Natursteinarbeiten",
    icons: {
        icon: [
            {url: "/favicon-32x32.png", sizes: "32x32", type: "image/png"},
            {url: "/favicon-16x16.png", sizes: "16x16", type: "image/png"},
            {url: "/favicon.ico"},
        ],
        apple: [
            {url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png"},
            {url: "/apple-touch-icon-precomposed.png", sizes: "180x180", type: "image/png"},
        ],
    },
    openGraph: {
        title: "Marmor Ponzo – Portfolio",
        description: "Exklusive Marmor- und Natursteinarbeiten von A. Ponzo",
        siteName: "Marmor Ponzo",
        images: [{url: "/apple-touch-icon.png", width: 1200, height: 630, alt: "Marmor Ponzo Logo"}],
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

export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html lang="de" className={`${cormorant.className} ${interNum.variable} antialiased`}>
        <body>
        <Header/>
        <div className="pt-24 md:pt-28">{children}</div>
        <Footer/>
        </body>
        </html>
    )
}
