// HIER KÖNNEN SIE EINFACH NEUE BILDER HINZUFÜGEN
// Fügen Sie einfach ein neues Objekt mit src, title und optional width/height hinzu

export interface PortfolioImage {
  src: string
  title: string
  // Neu (optional): Wenn du Maße einträgst, nutzt Next/Image exakt dieses Seitenverhältnis
  width?: number
  height?: number
}

export const portfolioImages: PortfolioImage[] = [
  { src: "/22.jpeg", title: "none" },
  { src: "/4.jpeg", title: "none" },
  { src: "/8.jpeg", title: "none" },
  { src: "/10.jpeg", title: "none" },
  { src: "/11.jpeg", title: "none" },
  { src: "/3.jpeg", title: "none" },
  { src: "/16.jpeg", title: "none" },
  { src: "/13.jpeg", title: "none" },
  { src: "/5.jpeg", title: "none" },
  { src: "/WhatsApp Image 2025-10-26 at 17.48.38.jpeg", title: "none" },
  { src: "/15.jpeg", title: "none" },
  { src: "/6.jpeg", title: "none" },
  { src: "/9.jpeg", title: "none" },
  { src: "/17.jpeg", title: "none" },
  { src: "/2.jpeg", title: "none" },
  { src: "/7.jpeg", title: "none" },
  { src: "/14.jpeg", title: "none" },
  { src: "/100.jpeg", title: "none" },


  // ✅ Lokale Bilder aus /public: OHNE /public-Präfix und ohne Leerzeichen
  { src: "/1000194281.jpg", title: "none" },
  { src: "/1000194282.jpg", title: "none" },
  { src: "/1000194283.jpg", title: "none" },
  { src: "/1000194502.jpg", title: "none" },
  { src: "/1000194503.jpg", title: "none" },
  { src: "/1000194504.jpg", title: "none" },
  { src: "/1000194505.jpg", title: "none" },
  { src: "/1000194506.jpg", title: "none" },
  { src: "/WhatsApp Image 2025-10-27 at 14.06.12.jpeg", title: "none" },
  { src: "/WhatsApp Image 2025-10-27 at 14.05.27.jpeg", title: "none" },
  { src: "/WhatsApp Image 2025-10-27 at 14.05.23.jpeg", title: "none" },

]
