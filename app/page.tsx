"use client"

import { portfolioImages } from "@/lib/portfolio-data"
import Image from "next/image"
import { useEffect, useState } from "react"

export default function Home() {
    const [visibleImages, setVisibleImages] = useState<Set<number>>(new Set([0, 1]))

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                setVisibleImages((prev) => {
                    const next = new Set(prev)
                    let changed = false
                    for (const entry of entries) {
                        const idx = Number(entry.target.getAttribute("data-index") || -1)
                        if (idx >= 0 && entry.isIntersecting && !next.has(idx)) {
                            next.add(idx)
                            changed = true
                        }
                    }
                    return changed ? next : prev
                })
            },
            { threshold: 0.2, rootMargin: "0px 0px -10% 0px" }
        )
        document.querySelectorAll<HTMLElement>('[data-observe="image"]').forEach((n) =>
            observer.observe(n)
        )
        return () => observer.disconnect()
    }, [])

    return (
        <main className="min-h-screen bg-white">
            {/* --- Galerie --- */}
            <section className="pb-16 md:pb-24">
                <div className="mx-auto max-w-[1320px] px-6 md:px-8 lg:px-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7 lg:gap-8">
                        {portfolioImages.map((item, index) => {
                            const isVisible = visibleImages.has(index)
                            return (
                                <figure
                                    key={index}
                                    data-index={index}
                                    data-observe="image"
                                    className={`figure transition duration-500 ${
                                        isVisible
                                            ? "opacity-100 translate-y-0"
                                            : "opacity-0 translate-y-3"
                                    }`}
                                >
                                    <div className="relative aspect-[3/2] w-full">
                                        <Image
                                            src={item.src || "/placeholder.svg"}
                                            alt={item.title}
                                            fill
                                            className="object-cover"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            priority={index < 2}
                                        />
                                    </div>
                                </figure>
                            )
                        })}
                    </div>
                </div>
            </section>
        </main>
    )
}
