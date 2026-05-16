import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default:  'SPORTVIO — Premium Kids Sports Protection | UV400 Sunglasses',
    template: '%s | SPORTVIO',
  },
  description:
    "India's premium kids' sports protection brand. UV400 certified sunglasses from ₹899. Free delivery. COD available. Helmets, guards & cycling gear coming 2026.",
  keywords: ['kids sports sunglasses', 'UV400 kids glasses', 'children sports eyewear India', 'premium kids protection gear'],
  openGraph: { type: 'website', locale: 'en_IN', siteName: 'SPORTVIO' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-bg text-ink font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
