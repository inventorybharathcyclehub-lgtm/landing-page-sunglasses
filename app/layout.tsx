import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'SPORTVIO — Premium Kids Sports Sunglasses | UV400 Protection',
    template: '%s | SPORTVIO',
  },
  description:
    'Premium UV400 sports sunglasses designed for active kids aged 4–14. Shop direct from ₹899. Bulk & wholesale orders welcome across India.',
  keywords: [
    'kids sports sunglasses',
    'UV protection sunglasses for kids',
    'children sports eyewear India',
    'premium kids sunglasses',
    'sports sunglasses buy online India',
    'kids cycling sunglasses',
    'UV400 kids glasses',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    siteName: 'SPORTVIO',
  },
  twitter: {
    card: 'summary_large_image',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-slate-950 text-white font-sans">
        {children}
      </body>
    </html>
  )
}
