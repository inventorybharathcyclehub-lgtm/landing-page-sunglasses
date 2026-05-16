import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'

export const metadata: Metadata = {
  title: 'Policies — SPORTVIO',
  description: 'SPORTVIO return policy, shipping policy, privacy policy, and terms of service.',
}

const policies = [
  {
    id: 'returns',
    title: 'Return & Refund Policy',
    icon: '↩️',
    content: [
      {
        heading: '30-Day Happy Guarantee',
        text: 'We stand behind every pair we sell. If you\'re not completely satisfied within 30 days of receiving your order, we\'ll arrange a free pickup and issue a full refund — no questions asked.',
      },
      {
        heading: 'What We Accept',
        text: 'Returns accepted for: defective/damaged products, wrong item sent, or if your child simply doesn\'t love it. Products must be unused and in original packaging for style-based returns.',
      },
      {
        heading: 'How to Return',
        text: 'WhatsApp us at +91 98765 43210 with your Order ID and reason for return. We arrange a pickup within 48 hours. Refund is processed within 5–7 business days to your original payment method.',
      },
      {
        heading: 'Exchanges',
        text: 'We\'re happy to exchange for a different size or colour. WhatsApp us and we\'ll sort it out within 24 hours. Shipping for exchange is free on us.',
      },
      {
        heading: 'Non-Returnable Items',
        text: 'Personalised/customised orders (gift engravings, academy co-branded products) cannot be returned unless defective.',
      },
    ],
  },
  {
    id: 'shipping',
    title: 'Shipping Policy',
    icon: '🚚',
    content: [
      {
        heading: 'Free Delivery',
        text: 'Free standard delivery on all orders across India. No minimum order value required.',
      },
      {
        heading: 'Delivery Timeline',
        text: 'Metro cities (Bengaluru, Mumbai, Delhi, Chennai, Hyderabad, Pune): 2–4 business days. Tier 2 & 3 cities: 4–7 business days. Remote areas: 7–10 business days.',
      },
      {
        heading: 'Order Processing',
        text: 'Orders placed before 2 PM (Mon–Sat) are processed and dispatched the same day. Orders placed after 2 PM or on Sundays/public holidays are dispatched the next business day.',
      },
      {
        heading: 'Tracking',
        text: 'A tracking link is sent to your WhatsApp/email within 24 hours of dispatch. You can also track your order at sportvio.in/track.',
      },
      {
        heading: 'Cash on Delivery (COD)',
        text: 'COD available across India for orders up to ₹5,000. COD orders may take 1–2 days longer to process.',
      },
      {
        heading: 'Bulk/Wholesale Shipping',
        text: 'B2B orders of 100+ units are dispatched via surface freight within 5–7 business days. Tracking details provided via WhatsApp.',
      },
    ],
  },
  {
    id: 'privacy',
    title: 'Privacy Policy',
    icon: '🔒',
    content: [
      {
        heading: 'Information We Collect',
        text: 'When you place an order, we collect your name, phone number, email, and delivery address. We also collect feedback you submit through our feedback form.',
      },
      {
        heading: 'How We Use Your Information',
        text: 'To process and deliver your order, to send order updates via WhatsApp/SMS/email, to call you for post-purchase feedback (we personally call each customer), and to send you information about new products if you have opted in.',
      },
      {
        heading: 'Data Storage & Security',
        text: 'Your data is stored securely. We do not sell or share your personal information with third parties except as required to process your delivery (courier partners) or payment.',
      },
      {
        heading: 'WhatsApp Communication',
        text: 'By placing an order, you consent to receiving order updates and our post-purchase feedback call via WhatsApp. You may opt out at any time by replying STOP to our WhatsApp messages.',
      },
      {
        heading: 'Cookies',
        text: 'We use cookies to improve your browsing experience. You may disable cookies in your browser settings, though some website features may not function correctly.',
      },
      {
        heading: 'Contact for Privacy Queries',
        text: 'For any privacy-related concerns, email us at privacy@sportvio.in or WhatsApp +91 98765 43210.',
      },
    ],
  },
  {
    id: 'terms',
    title: 'Terms of Service',
    icon: '📋',
    content: [
      {
        heading: 'Acceptance of Terms',
        text: 'By placing an order on our website or via WhatsApp/phone, you agree to these terms. If you do not agree, please do not place an order.',
      },
      {
        heading: 'Product Descriptions',
        text: 'We make every effort to accurately describe our products. Product colours may vary slightly from photographs due to screen settings. UV400 certification applies to all lenses in our range.',
      },
      {
        heading: 'Pricing',
        text: 'All prices are in Indian Rupees (₹) inclusive of GST. Prices may change without prior notice. The price shown at checkout is the final price you pay. No additional charges.',
      },
      {
        heading: 'Payment',
        text: 'We accept UPI (GPay, PhonePe, Paytm), Credit/Debit Cards (Visa, Mastercard, RuPay), Net Banking, and Cash on Delivery. Payments are processed securely.',
      },
      {
        heading: 'Governing Law',
        text: 'These terms are governed by the laws of India. Any disputes are subject to the jurisdiction of courts in [City], India.',
      },
      {
        heading: 'Contact',
        text: 'For any concerns about these terms, email legal@sportvio.in or WhatsApp +91 98765 43210.',
      },
    ],
  },
]

export default function PoliciesPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-slate-950 pt-28 pb-24">
        <div className="section-container">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
              Our <span className="gradient-text">Policies</span>
            </h1>
            <p className="mt-4 text-slate-400 text-lg">
              We believe in complete transparency. Here's everything you need to know about how we operate.
            </p>
            {/* Quick nav */}
            <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
              {policies.map(({ id, title, icon }) => (
                <a key={id} href={`#${id}`} className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-300 hover:text-white px-4 py-2 rounded-full text-sm font-medium transition-all">
                  {icon} {title.split(' ')[0]}
                </a>
              ))}
            </div>
          </div>

          <div className="max-w-3xl mx-auto space-y-12">
            {policies.map(({ id, title, icon, content }) => (
              <section key={id} id={id} className="scroll-mt-24">
                <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 bg-orange-500/20 border border-orange-500/30 rounded-2xl flex items-center justify-center text-2xl">
                      {icon}
                    </div>
                    <h2 className="text-2xl font-black text-white">{title}</h2>
                  </div>
                  <div className="space-y-6">
                    {content.map(({ heading, text }) => (
                      <div key={heading}>
                        <h3 className="text-orange-400 font-bold text-sm uppercase tracking-wider mb-2">{heading}</h3>
                        <p className="text-slate-300 leading-relaxed">{text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            ))}
          </div>

          <div className="text-center mt-16">
            <p className="text-slate-400 mb-4">Have a question not covered here?</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://wa.me/919876543210?text=Hi%2C%20I%20have%20a%20question%20about%20your%20policies"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                💬 WhatsApp Us
              </a>
              <Link href="/" className="text-slate-400 hover:text-white text-sm transition-colors">
                ← Back to Home
              </Link>
            </div>
          </div>
        </div>
      </main>
      <footer className="bg-slate-950 border-t border-white/10 py-8">
        <div className="section-container text-center">
          <p className="text-slate-500 text-sm">© 2026 SPORTVIO. All rights reserved. Last updated: May 2026.</p>
        </div>
      </footer>
    </>
  )
}
