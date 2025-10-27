"use client"

import { portfolioImages } from "@/lib/portfolio-data"
import Image from "next/image"
import { useEffect, useState } from "react"

type Dim = { w: number; h: number }

export default function Home() {
    // natürliche Maße pro Bild (Index -> Dim)
    const [dims, setDims] = useState<Record<number, Dim>>({})
    // sanfter Fade-in
    const [visible, setVisible] = useState<Set<number>>(new Set([0, 1]))

    useEffect(() => {
        const io = new IntersectionObserver(
            (entries) => {
                setVisible((prev) => {
                    const next = new Set(prev)
                    let changed = false
                    for (const e of entries) {
                        const idx = Number(e.target.getAttribute("data-index") || -1)
                        if (idx >= 0 && e.isIntersecting && !next.has(idx)) { next.add(idx); changed = true }
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
            {/* kompakter Abstand unter dem Header */}
            <section className="pt-8 md:pt-12 lg:pt-16" />

            <section className="pb-16 md:pb-24">
                <div className="mx-auto max-w-[1320px] px-4 sm:px-6 md:px-10">
                    {/* Masonry via CSS Columns */}
                    <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 [column-fill:_balance]">
                        {portfolioImages.map((item, index) => {
                            const dim = dims[index]
                            const loaded = !!dim

                            return (
                                <figure
                                    key={index}
                                    data-index={index}
                                    data-observe="image"
                                    className={`mb-5 break-inside-avoid overflow-hidden rounded-2xl shadow-sm transition duration-500 ${
                                        visible.has(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
                                    }`}
                                    title={item.title}
                                >
                                    <div className="relative w-full">
                                        {loaded ? (
                                            <Image
                                                src={item.src}
                                                alt={item.title}
                                                width={dim.w}
                                                height={dim.h}
                                                className="w-full h-auto object-cover"
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                priority={index < 2}
                                            />
                                        ) : (
                                            // Vor dem Laden: transparenter Platzhalter ohne graue Fläche
                                            <div className="relative w-full aspect-[4/3]">
                                                <Image
                                                    src={item.src}
                                                    alt={item.title}
                                                    fill
                                                    className="object-cover"
                                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                    priority={index < 2}
                                                    onLoadingComplete={(img) => {
                                                        const w = img.naturalWidth || 1
                                                        const h = img.naturalHeight || 1
                                                        setDims((prev) => (prev[index] ? prev : { ...prev, [index]: { w, h } }))
                                                    }}
                                                />
                                            </div>
                                        )}
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
