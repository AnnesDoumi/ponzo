// components/header.tsx
"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"

export function Header() {
  const [open, setOpen] = useState(false)

  // Scroll-Lock auf <html>, wenn Drawer offen
  useEffect(() => {
    const html = document.documentElement
    if (open) html.classList.add("overflow-hidden")
    else html.classList.remove("overflow-hidden")
    return () => html.classList.remove("overflow-hidden")
  }, [open])

  return (
      <header className="fixed inset-x-0 top-0 z-[70] bg-white border-b border-black-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-12">
          {/* Header-Höhe = Logo-Höhe (keine extra Paddings) */}
          <div className="grid grid-cols-[auto_1fr_auto] items-center h-16 sm:h-18 md:h-20 lg:h-24">
            {/* Logo links */}
            <Link href="/" className="flex items-center">
            <span className="relative block h-16 sm:h-[72px] md:h-20 lg:h-24 w-auto aspect-[3/2]">
              <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1000194301-6pGUSXh2QcUtB8p3SYpx1KegqLwtcX.jpg"
                  alt="Marmor Ponzo"
                  fill
                  className="object-contain object-left"
                  priority
              />
            </span>
            </Link>

            {/* Titel */}
            <div className="flex justify-center">
              <Link
                  href="/"
                  className="text-sm sm:text-base md:text-lg font-light uppercase tracking-[0.18em] text-neutral-900"
              >
                A. Ponzo Marmor UG
              </Link>
            </div>

            {/* Rechts: Desktop-Navi / Mobile-Burger */}
            <div className="flex items-center">
              <nav className="hidden md:flex items-center gap-8">
                <Link href="/" className="navlink text-[0.95rem] font-light uppercase tracking-[0.16em]">
                  Start
                </Link>
                <Link href="/uber-uns" className="navlink text-[0.95rem] font-light uppercase tracking-[0.16em]">
                  Über Uns
                </Link>
                <Link href="/kontakt" className="navlink text-[0.95rem] font-light uppercase tracking-[0.16em]">
                  Kontakt
                </Link>

                <a
                    href="https://instagram.com/marmorponzo"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="p-1 transition-transform duration-200 hover:scale-110"
                >
                  {/* PNG aus /public – stabil auf Android */}
                  <Image
                      src="/instagram_logo.svg.png"
                      alt="Instagram"
                      width={24}
                      height={24}
                      loading="eager"
                      decoding="async"
                      priority={false}
                      className="block object-contain"
                  />
                </a>
              </nav>

              {/* Burger */}
              <button
                  className="md:hidden inline-flex items-center justify-center p-2"
                  aria-label={open ? "Menü schließen" : "Menü öffnen"}
                  aria-expanded={open}
                  aria-controls="mobile-nav"
                  onClick={() => setOpen(v => !v)}
              >
                {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
              </button>
            </div>
          </div>
        </div>

        {/* Overlay */}
        <div
            className={`md:hidden fixed inset-0 z-[60] transition-opacity ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
            onClick={() => setOpen(false)}
            style={{ backgroundColor: "rgba(0,0,0,0.45)" }}
        />

        {/* Drawer */}
        <div
            id="mobile-nav"
            role="dialog"
            aria-modal="true"
            className={`md:hidden fixed right-0 top-0 z-[80] h-full w-[88%] max-w-[380px] bg-white shadow-2xl border-l border-neutral-200 transition-transform duration-300 ease-out ${open ? "translate-x-0" : "translate-x-full"}`}
            style={{ willChange: "transform", contain: "paint" }}
            onClick={e => e.stopPropagation()}
        >
          <div className="flex items-center justify-between h-16 px-5 border-b border-neutral-200">
            <span className="text-base font-light uppercase tracking-[0.18em]">Menü</span>
            <button aria-label="Menü schließen" className="p-2" onClick={() => setOpen(false)}>
              <X className="h-6 w-6" />
            </button>
          </div>

          <nav className="px-5 py-6 space-y-1">
            <Link href="/" className="block navlink text-base font-light uppercase tracking-[0.18em] py-3" onClick={() => setOpen(false)}>
              Start
            </Link>
            <div className="h-[1.5px] bg-neutral-200" />
            <Link href="/uber-uns" className="block navlink text-base font-light uppercase tracking-[0.18em] py-3" onClick={() => setOpen(false)}>
              Über Uns
            </Link>
            <div className="h-[1.5px] bg-neutral-200" />
            <Link href="/kontakt" className="block navlink text-base font-light uppercase tracking-[0.18em] py-3" onClick={() => setOpen(false)}>
              Kontakt
            </Link>

            <div className="pt-4">
              <a
                  href="https://instagram.com/marmorponzo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 transition-transform hover:scale-105"
                  aria-label="Instagram"
              >
                {/* Im Drawer bewusst <img> für maximale Android-Robustheit */}
                <img
                    src="/instagram_logo.svg.png"
                    alt="Instagram"
                    width={24}
                    height={24}
                    decoding="async"
                    fetchPriority="low"
                    style={{ display: "block" }}
                />
                <span className="text-sm tracking-wide">Instagram</span>
              </a>
            </div>
          </nav>
        </div>
      </header>
  )
}
