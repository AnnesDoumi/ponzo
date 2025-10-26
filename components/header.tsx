"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { Instagram, Menu, X } from "lucide-react"

export function Header() {
  const [open, setOpen] = useState(false)
  const drawerRef = useRef<HTMLDivElement | null>(null)

  // Scroll-Lock auf <html> (stabiler als auf body)
  useEffect(() => {
    const html = document.documentElement
    if (open) html.classList.add("overflow-hidden")
    else html.classList.remove("overflow-hidden")
    return () => html.classList.remove("overflow-hidden")
  }, [open])

  // ESC schließt Menü
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false) }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [])

  return (
      <header className="fixed inset-x-0 top-0 z-[70] border-b border-neutral-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-12">
          <div className="flex h-16 md:h-20 items-center justify-between">
            {/* Logo + Wortmarke */}
            <Link href="/" className="flex items-center gap-3 md:gap-4">
            <span className="relative block h-10 w-32 sm:h-11 sm:w-36 md:h-14 md:w-48">
              <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1000194301-6pGUSXh2QcUtB8p3SYpx1KegqLwtcX.jpg"
                  alt="Marmor Ponzo"
                  fill
                  className="object-contain object-left"
                  priority
              />
            </span>
              <span className="hidden md:inline text-lg font-light uppercase tracking-[0.18em]">
              A. Ponzo Marmor
            </span>
            </Link>

            {/* Desktop-Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <Link href="/" className="navlink text-[0.95rem] font-light uppercase tracking-[0.16em]">Start</Link>
              <Link href="/uber-uns" className="navlink text-[0.95rem] font-light uppercase tracking-[0.16em]">Über Uns</Link>
              <Link href="/impressum" className="navlink text-[0.95rem] font-light uppercase tracking-[0.16em]">Impressum</Link>
              <a
                  href="https://instagram.com/marmorponzo"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="p-1 transition-transform duration-200 hover:scale-110"
              >
                <Instagram className="h-6 w-6" />
              </a>
            </nav>

            {/* Mobile: Burger */}
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

        {/* ===== Mobile Overlay + Drawer (voll deckend, keine Transparenz-Bugs) ===== */}
        {/* Overlay: separate Ebene über Seite UND Header */}
        <div
            className={`md:hidden fixed inset-0 z-[60] transition-opacity ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
            aria-hidden={!open}
            onClick={() => setOpen(false)}
            style={{ backgroundColor: "rgba(0,0,0,0.45)" }} // solider Dimmer
        />

        {/* Drawer: eigene Ebene noch darüber */}
        <div
            id="mobile-nav"
            ref={drawerRef}
            role="dialog"
            aria-modal="true"
            className={`md:hidden fixed right-0 top-0 z-[80] h-full w-[88%] max-w-[380px] bg-white shadow-2xl border-l border-neutral-200
                    transition-transform duration-300 ease-out ${open ? "translate-x-0" : "translate-x-full"}`}
            onClick={(e) => e.stopPropagation()}
        >
          {/* Drawer-Header */}
          <div className="flex items-center justify-between h-16 px-5 border-b border-neutral-200">
            <span className="text-base font-light uppercase tracking-[0.18em]">Menü</span>
            <button aria-label="Menü schließen" className="p-2" onClick={() => setOpen(false)}>
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Links */}
          <nav className="px-5 py-6 space-y-1">
            <Link href="/" className="block navlink text-base font-light uppercase tracking-[0.18em] py-3" onClick={() => setOpen(false)}>Start</Link>
            <div className="h-[1.5px] bg-neutral-200" />
            <Link href="/uber-uns" className="block navlink text-base font-light uppercase tracking-[0.18em] py-3" onClick={() => setOpen(false)}>Über Uns</Link>
            <div className="h-[1.5px] bg-neutral-200" />
            <Link href="/impressum" className="block navlink text-base font-light uppercase tracking-[0.18em] py-3" onClick={() => setOpen(false)}>Impressum</Link>

            <div className="pt-4">
              <a
                  href="https://instagram.com/marmorponzo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                  aria-label="Instagram"
              >
                <Instagram className="h-6 w-6" />
                <span className="text-sm tracking-wide">Instagram</span>
              </a>
            </div>
          </nav>
        </div>
      </header>
  )
}
