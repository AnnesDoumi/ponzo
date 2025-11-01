"use client"

import {portfolioImages} from "@/lib/portfolio-data"
import Image from "next/image"
import {useEffect, useState} from "react"

export default function Home() {
    // sanfter Fade-in per IO (wie gehabt)
    const [visible, setVisible] = useState<Set<number>>(new Set([0, 1]))
    // ultraleichte Lightbox
    const [lightboxSrc, setLightboxSrc] = useState<string | null>(null)
    // merkt sich pro Index die ermittelte Orientierung -> wählt Aspect-Ratio im Mobile-Grid
    const [orient, setOrient] = useState<Record<number, "land" | "port" | "sq">>({})
    const [dims, setDims] = useState<Record<number, { w: number; h: number }>>({})

    const [ratios, setRatios] = useState<Record<number, number>>({})


    useEffect(() => {
        const io = new IntersectionObserver(
            (entries) => {
                setVisible((prev) => {
                    const next = new Set(prev)
                    let changed = false
                    for (const e of entries) {
                        const idx = Number(e.target.getAttribute("data-index") || -1)
                        if (idx >= 0 && e.isIntersecting && !next.has(idx)) {
                            next.add(idx);
                            changed = true
                        }
                    }
                    return changed ? next : prev
                })
            },
            {threshold: 0.15, rootMargin: "0px 0px -10% 0px"}
        )
        document.querySelectorAll<HTMLElement>('[data-observe="image"]').forEach((n) => io.observe(n))
        return () => io.disconnect()
    }, [])

    // Scroll-Lock, wenn Lightbox offen
    useEffect(() => {
        const html = document.documentElement
        if (lightboxSrc) html.classList.add("overflow-hidden")
        else html.classList.remove("overflow-hidden")
        return () => html.classList.remove("overflow-hidden")
    }, [lightboxSrc])

    return (
        <main className="min-h-screen bg-white">
            {/* kompakter Abstand unter dem Header */}
            <section className="pt-8 md:pt-12 lg:pt-16"/>

            <section className="pb-16 md:pb-24">
                <div className="mx-auto max-w-[1320px] px-4 sm:px-6 md:px-10">

                    {/* --- MOBILE: Masonry via CSS Columns (keine Lücken) ------------------- */}
                    <div className="md:hidden columns-2 gap-3 sm:gap-4 [column-fill:_balance]">
                        {portfolioImages.map((item, index) => {
                            const hasTitle = item.title && item.title.toLowerCase() !== "none"
                            return (
                                <figure
                                    key={item.src + index}
                                    data-index={index}
                                    data-observe="image"
                                    className={[
                                        // deine Card-DNA + Masonry-Checks
                                        "figure panel soft-shadow lift transition",
                                        "mb-3 sm:mb-4 break-inside-avoid overflow-hidden",
                                        visible.has(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3",
                                    ].join(" ")}
                                    title={hasTitle ? item.title : undefined}
                                >
                                    <button
                                        type="button"
                                        className="block w-full text-left cursor-zoom-in"
                                        onClick={() => setLightboxSrc(item.src)}
                                        aria-label="Bild in großer Ansicht öffnen"
                                    >
                                        {/* Falls du die echte Ratio per State setzt, lass diesen Wrapper drin: */}
                                        <span
                                            className="relative block w-full rounded-[inherit] overflow-hidden"
                                            style={{aspectRatio: ratios[index] ?? 4 / 3}}  // Fallback bis Maße da sind
                                        >
            <Image
                src={item.src}
                alt={hasTitle ? item.title : ""}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 50vw"
                loading={index < 4 ? "eager" : "lazy"}
                placeholder="empty"
                onLoadingComplete={({naturalWidth, naturalHeight}) => {
                    const r = naturalWidth / naturalHeight
                    setRatios(prev => (prev[index] ? prev : {...prev, [index]: r}))
                }}
            />
          </span>
                                    </button>

                                    {hasTitle && <figcaption className="caption px-3 py-2">{item.title}</figcaption>}
                                </figure>
                            )
                        })}
                    </div>


                    {/* --- AB md: dein schnelles CSS-Columns-Masonry bleibt erhalten ----- */}
                    <div className="hidden md:block">
                        <div className="columns-2 lg:columns-3 gap-5 [column-fill:_balance]">
                            {portfolioImages.map((item, index) => {
                                const hasTitle = item.title && item.title.toLowerCase() !== "none"
                                return (
                                    <figure
                                        key={item.src + index}
                                        data-index={index}
                                        data-observe="image"
                                        className={[
                                            "figure panel soft-shadow lift transition",
                                            "mb-5 break-inside-avoid overflow-hidden",
                                            visible.has(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3",
                                        ].join(" ")}
                                        title={hasTitle ? item.title : undefined}
                                    >
                                       <span className="img-wrap">
    <Image
        src={item.src}
        alt={hasTitle ? item.title : ""}
        width={1200}
        height={800}
        className="block w-full h-auto object-cover"
        sizes="(max-width: 1024px) 50vw, 33vw"
        priority={index < 2}
        loading={index < 2 ? "eager" : "lazy"}
        placeholder="empty"
        /* kein quality hier (siehe Config unten) */
    />
  </span>
                                        {hasTitle && (
                                            <figcaption className="caption px-3 py-2">
                                                {item.title}
                                            </figcaption>
                                        )}
                                    </figure>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Mini-Lightbox ---------------------------------------------------- */}
            {lightboxSrc && (
                <div
                    className="fixed inset-0 z-[95] flex items-center justify-center p-3 sm:p-6 bg-black/75"
                    role="dialog"
                    aria-modal="true"
                    onClick={() => setLightboxSrc(null)}
                >
                    <div
                        className="relative max-w-[92vw] max-h-[86vh] rounded-xl overflow-hidden shadow-2xl bg-black"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img
                            src={lightboxSrc}
                            alt=""
                            className="block max-w-[92vw] max-h-[86vh] object-contain cursor-zoom-out"
                            onClick={() => setLightboxSrc(null)} // ✅ neu hinzugefügt
                        />
                        <button
                            type="button"
                            className="absolute top-2 right-2 px-3 py-1.5 rounded-md bg-white/15 text-white backdrop-blur-sm
             font-light tracking-[0.1em] uppercase text-sm md:text-base"
                            style={{fontFamily: '"Cormorant Garamond", Georgia, serif'}}
                            onClick={() => setLightboxSrc(null)}
                            aria-label="Schließen"
                        >
                            Schließen
                        </button>
                    </div>
                </div>
            )}

        </main>
    )
}
