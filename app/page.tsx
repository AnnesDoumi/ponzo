"use client"

import { portfolioImages } from "@/lib/portfolio-data"
import Image from "next/image"
import { useEffect, useState } from "react"

export default function Home() {
    // sanfter Fade-in per IO
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

        document
            .querySelectorAll<HTMLElement>('[data-observe="image"]')
            .forEach((n) => io.observe(n))

        return () => io.disconnect()
    }, [])

    return (
        <main className="min-h-screen bg-white">
            {/* kompakter Abstand unter dem Header */}
            <section className="pt-8 md:pt-12 lg:pt-16" />

            {/* CSS Columns Masonry: schnell & ruckelfrei */}
            <section className="pb-16 md:pb-24">
                <div className="mx-auto max-w-[1320px] px-4 sm:px-6 md:px-10">
                    <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 [column-fill:_balance]">
                        {portfolioImages.map((item, index) => {
                            const hasTitle = item.title && item.title.toLowerCase() !== "none"
                            return (
                                <figure
                                    key={item.src + index}
                                    data-index={index}
                                    data-observe="image"
                                    className={[
                                        "mb-5 break-inside-avoid overflow-hidden rounded-2xl shadow-sm transition duration-500",
                                        visible.has(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3",
                                    ].join(" ")}
                                    title={hasTitle ? item.title : undefined}
                                >
                                    {/* neutrales Laden ohne bunten Blur */}
                                    <Image
                                        src={item.src}
                                        alt={hasTitle ? item.title : ""}
                                        // feste Intrinsic-Maße für ruhiges Layout; h-auto hält das echte Seitenverhältnis
                                        width={1200}
                                        height={800}
                                        className="block w-full h-auto object-cover"
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                        priority={index < 2}
                                        loading={index < 2 ? "eager" : "lazy"}
                                        // kein Next-Blur -> keine grellen Farben
                                        placeholder="empty"
                                    />
                                </figure>
                            )
                        })}
                    </div>
                </div>
            </section>
        </main>
    )
}
