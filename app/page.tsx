"use client"

import { portfolioImages } from "@/lib/portfolio-data"
import Image from "next/image"
import { useEffect, useMemo, useState } from "react"

type Dim = { w: number; h: number }
const BLUR = "data:image/gif;base64,R0lGODlhAQABAAAAACw="

// dein „Featured“ erkennen (17.jpeg)
const FEATURED_MATCH = (src: string) =>
    /\/17[\-\.]/i.test(src) || src.toLowerCase().endsWith("17.jpeg")

// Breakpoints wie Tailwind: 1 / 2 / 3 Spalten
const useColCount = () => {
    const [cols, setCols] = useState(1)
    useEffect(() => {
        const calc = () => {
            const w = window.innerWidth
            if (w >= 1024) setCols(3)     // lg
            else if (w >= 640) setCols(2) // sm
            else setCols(1)
        }
        calc()
        window.addEventListener("resize", calc)
        return () => window.removeEventListener("resize", calc)
    }, [])
    return cols
}

// effektive Höhe in "Einheiten" (Seitenverhältnis genügt)
const effHeight = (d?: Dim) => (d ? d.h / d.w : 0.75) // Fallback ~4:3

export default function Home() {
    const colCount = useColCount()

    // natürliche Maße pro Bild (key=src)
    const [dims, setDims] = useState<Record<string, Dim>>({})

    // Featured + Rest bestimmen (stabile Reihenfolge)
    const { featured, rest } = useMemo(() => {
        const f = portfolioImages.find((it) => FEATURED_MATCH(it.src)) ?? portfolioImages[0]
        const r = portfolioImages.filter((it) => it.src !== f.src)
        return { featured: f, rest: r }
    }, [])

    // Masonry-Packing: immer in die Spalte mit der kleinsten akkumulierten Höhe
    const columns = useMemo(() => {
        const cols: typeof portfolioImages[] = Array.from({ length: colCount }, () => [])
        const heights: number[] = Array.from({ length: colCount }, () => 0)

        if (colCount === 1) {
            // mobil: einfach normal sortiert, Featured zuerst
            cols[0].push(featured, ...rest)
            return cols
        }

        // Featured fest in die "mittlere" Spalte oben
        const mid = Math.floor(colCount / 2)
        cols[mid].push(featured)
        heights[mid] += effHeight(dims[featured.src])

        // Rest nacheinander immer in die kürzeste Spalte
        for (const item of rest) {
            let target = 0
            for (let i = 1; i < colCount; i++) if (heights[i] < heights[target]) target = i
            cols[target].push(item)
            heights[target] += effHeight(dims[item.src])
        }

        return cols
    }, [colCount, dims, featured, rest])

    // Für schnelleres Above-the-Fold: priorisiere je Spalte die ersten 2–3 Bilder
    const prioritySet = useMemo(() => {
        const s = new Set<string>()
        columns.forEach((col) => col.slice(0, 3).forEach((it) => s.add(it.src)))
        return s
    }, [columns])

    // Bildkachel (mit Skeleton + Block-Image -> kein Baseline-Gap)
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
                            placeholder="blur"
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
                                onLoadingComplete={(img) => {
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
            {/* kompakter Abstand unter dem Header */}
            <section className="pt-8 md:pt-12 lg:pt-16" />

            <section className="pb-16 md:pb-24">
                <div className="mx-auto max-w-[1320px] px-4 sm:px-6 md:px-10">
                    {/* echtes Masonry: colCount Spalten als Flex-Stacks */}
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
