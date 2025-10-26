import type React from "react"
import type { Metadata } from "next"
import { Cormorant_Garamond } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"

const cormorant = Cormorant_Garamond({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600"],
    display: "swap",
})

export const metadata: Metadata = {
    title: "Marmor Ponzo - Portfolio",
    description: "Exklusive Marmor- und Natursteinarbeiten",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="de" className={`${cormorant.className} antialiased`}>
        <body>
        <Header />
        <div className="pt-24 md:pt-28">{children}</div>
        </body>
        </html>
    )
}
