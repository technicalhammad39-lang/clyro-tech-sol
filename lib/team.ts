export type TeamMember = {
  name: string
  title: string
  bio: string
  experience: string
  highlights: string[]
  specialties: string[]
  image: {
    src: string
    width: number
    height: number
    alt: string
  }
}

export const teamMembers: TeamMember[] = [
  {
    name: "Hammad",
    title: "Founder & Owner",
    bio: "Founder at Clyro Tech Solutions focused on premium AI products, automation systems, and fast, reliable web applications.",
    experience: "AI & Web Development",
    highlights: [
      "Architects AI-driven automation and workflow systems for modern businesses.",
      "Ships production-grade web apps with performance, security, and scalability in mind.",
      "Builds SaaS products from concept to launch-ready delivery.",
    ],
    specialties: ["AI Systems", "Web Apps", "SaaS", "Automation", "API Engineering", "Product UX"],
    image: {
      src: "/hammad.jpg",
      width: 1751,
      height: 1884,
      alt: "Hammad - Founder & Owner",
    },
  },
  {
    name: "Muhammad Junaid",
    title: "Co-Founder & Partner",
    bio: "Co-founder focused on product delivery, engineering execution, and shipping clean, polished experiences end-to-end.",
    experience: "Product Delivery & Full-Stack",
    highlights: [
      "Leads full-stack delivery with clear milestones and reliable execution.",
      "Aligns product strategy, UX, and engineering to ship premium results.",
      "Partners with clients to refine scope and deliver on-time launches.",
    ],
    specialties: ["Full-Stack", "UI/UX", "Product Strategy", "Client Success", "Frontend", "Delivery Ops"],
    image: {
      src: "/junaid.jpeg",
      width: 1080,
      height: 1080,
      alt: "Muhammad Junaid - Co-Founder & Partner",
    },
  },
]
