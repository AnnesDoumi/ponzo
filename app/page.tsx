"use client"

import { portfolioImages } from "@/lib/portfolio-data"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"

export default function Home() {
  const [visibleImages, setVisibleImages] = useState<Set<number>>(new Set([0, 1]))
  const imageRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const index = Number(entry.target.getAttribute("data-index"))
            if (entry.isIntersecting) {
              setVisibleImages((prev) => new Set(prev).add(index))
            }
          })
        },
        {
          threshold: 0.2,
          rootMargin: "0px 0px -10% 0px",
        },
    )

    imageRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
      <main className="min-h-screen bg-white pt-32 pb-20">
        <div className="mx-auto max-w-[1200px] px-12 md:px-20 lg:px-24">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12 lg:gap-16">
            {portfolioImages.map((item, index) => (
                <div
                    key={index}
                    ref={(el) => {
                      imageRefs.current[index] = el
                    }}
                    data-index={index}
                    className={`transition-all duration-1000 ease-out ${
                        visibleImages.has(index) ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
                    }`}
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Image
                        src={item.src || "/placeholder.svg"}
                        alt={item.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority={index < 2}
                    />
                  </div>
                </div>
            ))}
          </div>
        </div>
      </main>
  )
}
