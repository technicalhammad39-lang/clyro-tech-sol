import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Clyro Tech Solutions - Premium AI Software & Development",
    short_name: "Clyro Tech",
    description:
      "Premium AI software, apps & source code ready to launch. High-performance AI tools, SaaS products, websites, and custom development solutions.",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a0a",
    theme_color: "#1e96ff",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  }
}
