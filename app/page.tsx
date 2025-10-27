"use client"

import { portfolioImages } from "@/lib/portfolio-data"
import Image from "next/image"
import { useEffect, useMemo, useState } from "react"

type Dim = { w: number; h: number }
// Sanft neutralgrauer Blur – subtil, ohne Farbton
const BLUR =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR4nGNgYAAAAAMAAWgmWQ0AAAAASUVORK5CYII="


// Dein Featured-Bild erkennen (17.jpeg)
const FEATURED_MATCH = (src: string) =>
    /\/17[\-\.]/i.test(src) || src.toLowerCase().endsWith("17.jpeg")

// Breakpoints: 1 / 2 / 3 Spalten
const useColCount = () => {
    const [cols, setCols] = useState(1)
    useEffect(() => {
        const calc = () => {
            const w = window.innerWidth
            if (w >= 1024) setCols(3)
            else if (w >= 640) setCols(2)
            else setCols(1)
        }
        calc()
        window.addEventListener("resize", calc)
        return () => window.removeEventListener("resize", calc)
    }, [])
    return cols
}

// Effektive Höhe anhand Seitenverhältnis
const effHeight = (d?: Dim) => (d ? d.h / d.w : 0.75) // Fallback 4:3

export default function Home() {
    const colCount = useColCount()
    const [dims, setDims] = useState<Record<string, Dim>>({})

    // Featured + Rest aufteilen
    const { featured, rest } = useMemo(() => {
        const f = portfolioImages.find((it) => FEATURED_MATCH(it.src)) ?? portfolioImages[0]
        const r = portfolioImages.filter((it) => it.src !== f.src)
        return { featured: f, rest: r }
    }, [])

    // Masonry-Verteilung
    const columns = useMemo(() => {
        const cols: typeof portfolioImages[] = Array.from({ length: colCount }, () => [])
        const heights: number[] = Array.from({ length: colCount }, () => 0)

        if (colCount === 1) {
            cols[0].push(featured, ...rest)
            return cols
        }

        // Featured zentriert
        const mid = Math.floor(colCount / 2)
        cols[mid].push(featured)
        heights[mid] += effHeight(dims[featured.src])

        // Rest verteilt nach kürzester Spalte
        for (const item of rest) {
            let target = 0
            for (let i = 1; i < colCount; i++) if (heights[i] < heights[target]) target = i
            cols[target].push(item)
            heights[target] += effHeight(dims[item.src])
        }

        return cols
    }, [colCount, dims, featured, rest])

    // Priorisierte Bilder (oberste pro Spalte)
    const prioritySet = useMemo(() => {
        const s = new Set<string>()
        columns.forEach((col) => col.slice(0, 3).forEach((it) => s.add(it.src)))
        return s
    }, [columns])

    // Einzelnes Bild
    const Figure = ({ src, title }: { src: string; title: string }) => {
        const dim = dims[src]
        const hasTitle = title && title.toLowerCase() !== "none"
        const priority = prioritySet.has(src)

        return (
            <figure className="overflow-hidden rounded-2xl shadow-sm leading-none">
                <div className="relative w-full">
                    {dim ? (
                        <Image
                            src={src}
                            alt={hasTitle ? title : ""}
                            width={dim.w}
                            height={dim.h}
                            className="block w-full h-auto object-cover"
                            sizes={colCount === 1 ? "100vw" : colCount === 2 ? "50vw" : "33vw"}
                            priority={priority}
                            onLoad={(e) => e.currentTarget.classList.remove("opacity-0")}
                            blurDataURL={BLUR}
                        />
                    ) : (
                        <div className="relative w-full">
                            <div className="skeleton w-full aspect-[4/3]" />
                            <Image
                                src={src}
                                alt={hasTitle ? title : ""}
                                fill
                                className="object-cover invisible"
                                sizes={colCount === 1 ? "100vw" : colCount === 2 ? "50vw" : "33vw"}
                                priority={priority}
                                placeholder="blur"
                                blurDataURL={BLUR}
                                onLoad={(event) => {
                                    const img = event.currentTarget
                                    const w = img.naturalWidth || 1
                                    const h = img.naturalHeight || 1
                                    setDims((prev) => (prev[src] ? prev : { ...prev, [src]: { w, h } }))
                                }}
                            />
                        </div>
                    )}
                </div>
            </figure>
        )
    }

    return (
        <main className="min-h-screen bg-white">
            <section className="pt-8 md:pt-12 lg:pt-16" />

            <section className="pb-16 md:pb-24">
                <div className="mx-auto max-w-[1320px] px-4 sm:px-6 md:px-10">
                    <div
                        className={`grid gap-5 md:gap-7 lg:gap-8`}
                        style={{
                            gridTemplateColumns:
                                colCount === 1 ? "1fr" : colCount === 2 ? "1fr 1fr" : "1fr 1fr 1fr",
                        }}
                    >
                        {columns.map((col, i) => (
                            <div key={i} className="flex flex-col gap-5 md:gap-7 lg:gap-8">
                                {col.map((it) => (
                                    <Figure key={it.src} src={it.src} title={it.title} />
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    )
}
