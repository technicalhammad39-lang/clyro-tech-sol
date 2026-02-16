import { JsonLd } from "@/components/seo/json-ld"

const faqItems = [
  {
    question: "Do you provide AI automation services for business workflows?",
    answer:
      "Yes. We map your processes, identify automation wins, and deliver workflow automation for businesses with measurable time savings.",
  },
  {
    question: "Can you build an AI chatbot development for websites project?",
    answer:
      "We build AI chatbots that feel human, integrate with your data, and support lead capture, sales, and AI customer support chatbot use cases.",
  },
  {
    question: "Do you offer voice assistant development in Pakistan?",
    answer:
      "We build voice assistants and custom AI assistant for business workflows, including Gemini API integration services and desktop automation.",
  },
]

export function HomeFaq() {
  return (
    <section className="relative py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="rounded-[2rem] border border-border/50 glass-strong p-8 lg:p-10">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground">Frequently asked</h2>
          <p className="mt-2 text-sm text-muted-foreground max-w-2xl">
            Honest answers about delivery, timelines, and what makes Clyro Tech Solutions different.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {faqItems.map((item) => (
              <div key={item.question} className="rounded-2xl border border-border/40 bg-secondary/30 p-5">
                <p className="text-sm font-semibold text-foreground">{item.question}</p>
                <p className="mt-2 text-sm text-muted-foreground">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqItems.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: item.answer,
            },
          })),
        }}
      />
    </section>
  )
}
