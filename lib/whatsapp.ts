// WhatsApp business utilities for Clyro Tech Solutions

const WHATSAPP_NUMBER = "923076924116"

interface ProductInfo {
  name: string
  category?: string
  priceUSD?: string
  pricePKR?: string
  type?: "app-only" | "source-code" | "full"
}

/**
 * Generate WhatsApp message URL for product purchase with USD/PKR pricing
 */
export function generateWhatsAppBuyUrl(product: ProductInfo): string {
  const priceInfo = []
  if (product.priceUSD) priceInfo.push(`USD: ${product.priceUSD}`)
  if (product.pricePKR) priceInfo.push(`PKR: ${product.pricePKR}`)
  
  const message = `Hi Clyro Tech Solutions! 👋

I want to buy this product:

📦 Product: ${product.name}
${product.type ? `📁 Type: ${product.type === "app-only" ? "App Only" : product.type === "source-code" ? "Full Source Code" : "App + Source Code"}` : ""}
${product.category ? `📂 Category: ${product.category}` : ""}
${priceInfo.length > 0 ? `💰 Price: ${priceInfo.join(" / ")}` : ""}

I want to buy this product from Clyro Tech Solutions.

Please provide me with more details and purchase information.

Thank you!`

  const encodedMessage = encodeURIComponent(message)
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`
}

/**
 * Generate WhatsApp message URL for custom project inquiry
 */
export function generateWhatsAppInquiryUrl(projectDetails?: string): string {
  const message = `Hi Clyro Tech Solutions! 👋

I'm interested in a custom project.

${projectDetails ? `Details:\n${projectDetails}` : ""}

Please get in touch with me to discuss further.

Thank you!`

  const encodedMessage = encodeURIComponent(message)
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`
}

/**
 * Generate WhatsApp message URL for general contact
 */
export function generateWhatsAppContactUrl(message?: string): string {
  const defaultMessage = `Hi Clyro Tech Solutions! 👋

${message || "I'd like to get in touch with you."}

Thank you!`

  const encodedMessage = encodeURIComponent(defaultMessage)
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`
}

/**
 * Open WhatsApp with product purchase message
 */
export function buyViaWhatsApp(product: ProductInfo): void {
  const url = generateWhatsAppBuyUrl(product)
  window.open(url, "_blank", "noopener,noreferrer")
}
