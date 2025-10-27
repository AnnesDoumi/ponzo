// HIER KÖNNEN SIE EINFACH NEUE BILDER HINZUFÜGEN
// Fügen Sie einfach ein neues Objekt mit src, title und optional location hinzu

export interface PortfolioImage {
  src: string
  title: string
  location?: string
  // Neu (optional): Wenn du Maße einträgst, nutzt Next/Image exakt dieses Seitenverhältnis
  width?: number
  height?: number
}

export const portfolioImages: PortfolioImage[] = [
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-10-26%20at%2017.48.38-bWe0ntgGHBkbAUzbmauLPkMY4etqXJ.jpeg", title: "Küche mit Rosso Levanto", location: "Privatresidenz" },
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4-Kqvqk83JcsYbbTMVif1BcninhPwNms.jpeg", title: "Verde Guatemala Boden", location: "Wohnbereich" },
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/8-DkwsqnFWnjTiBEq0u9KfVHZPA12gPS.jpeg", title: "Calacatta Waschtisch", location: "Badezimmer" },
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/10-l4Tor4NdRAnksXVuw1X0x4zFHaSCVd.jpeg", title: "Travertin Waschbecken", location: "Gäste-WC" },
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/11-QIg6k6NkhZYoXxP5f0LslBZjE0GHy9.jpeg", title: "Statuario Dusche", location: "Master Bad" },
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3-yiwDFmMmWs0mCVo9V0jKXNFiAWFsH7.jpeg", title: "Carrara Küchenrückwand", location: "Moderne Küche" },
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/16-9kaD98uLP56H8CiJfSbvefb53UciKI.jpeg", title: "Calacatta Kücheninsel", location: "Offene Küche" },
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/13-TA3VC6WxB2e5yhRnReXOJNwiOTC8TP.jpeg", title: "Bianco Carrara Flur", location: "Eingangsbereich" },
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5-z9vRrNEkEby7DIKeASn5fO27ZZj4QZ.jpeg", title: "Travertin Treppe", location: "Treppenhaus" },
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-10-26%20at%2017.47.35-sq5FBzxk5XSAZaMhvaaUc3tClZMAwS.jpeg", title: "Weißer Marmorboden", location: "Wohnbereich" },
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/15-ojuuQBISiYjsDi1A3SeJjj4qKq4Agh.jpeg", title: "Marmorkamin", location: "Wohnzimmer" },
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6-WIE32fySwrbVzR3dic9RDewK0J4D3K.jpeg", title: "Verde Guatemala Küche", location: "Exklusive Küche" },
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/9-Orfxz8hpbkv00XkEtJ55lyebjtGTHt.jpeg", title: "Beige Marmor Bad", location: "Badezimmer" },
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/17-mfVxLF14p3j6tphGWypuShGNh2H4iU.jpeg", title: "Carrara Wellness Bad", location: "Master Badezimmer" },
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-Oshd3Tyb26dhEWbuyeuywZSyGxdwy2.jpeg", title: "Holzmaserung Marmor", location: "Luxus Badezimmer" },
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7-FePatFmvVnaCAcWp7KI7FG5z8kmDOY.jpeg", title: "Calacatta Kücheninsel", location: "Designer Küche" },
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/14-EfNPMFhMTfDBgnnd4iudeUdS078g63.jpeg", title: "Schachbrett Marmorboden", location: "Eingangsbereich" },
]
