"use client"

import { portfolioImages } from "@/lib/portfolio-data"
import Image from "next/image"
import { useEffect, useState } from "react"

export default function Home() {
    const [visible, setVisible] = useState<Set<number>>(new Set([0, 1]))

    useEffect(() => {
        const io = new IntersectionObserver(
            (entries) => {
                setVisible((prev) => {
                    const next = new Set(prev)
                    let changed = false
                    for (const e of entries) {
                        const idx = Number(e.target.getAttribute("data-index") || -1)
                        if (idx >= 0 && e.isIntersecting && !next.has(idx)) {
                            next.add(idx)
                            changed = true
                        }
                    }
                    return changed ? next : prev
                })
            },
            { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
        )
        document.querySelectorAll<HTMLElement>('[data-observe="image"]').forEach((n) => io.observe(n))
        return () => io.disconnect()
    }, [])

    return (
        <main className="min-h-screen bg-white">
            {/* Weniger Abstand unter dem Header */}
            <section className="pt-8 md:pt-12 lg:pt-16" />

            {/* Masonry-Galerie */}
            <section className="pb-16 md:pb-24">
                <div className="mx-auto max-w-[1320px] px-4 sm:px-6 md:px-10">
                    {/* Masonry per CSS Columns */}
                    <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 [column-fill:_balance]">
                        {portfolioImages.map((item, index) => (
                            <figure
                                key={index}
                                data-index={index}
                                data-observe="image"
                                className={`mb-5 break-inside-avoid overflow-hidden rounded-2xl shadow-sm transition duration-500 ${
                                    visible.has(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
                                }`}
                            >
                                <Image
                                    src={item.src}
                                    alt={item.title}
                                    width={1200}
                                    height={800}
                                    className="w-full h-auto object-cover"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    priority={index < 2}
                                />
                            </figure>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    )
}
