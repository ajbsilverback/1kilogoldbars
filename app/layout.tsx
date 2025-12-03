import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.1kilogoldbars.com'),
  title: '1KiloGoldBars.com | 1 Kilo Gold Bars & Gold Market Education',
  description: 'Independent insights on 1 kilo gold bars, live gold prices, and gold market education.',
  keywords: ['1 kilo gold bar', 'gold bars', 'gold investment', 'gold prices', 'physical gold', 'gold bullion'],
  authors: [{ name: '1KiloGoldBars.com Research Team' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.1kilogoldbars.com',
    siteName: '1KiloGoldBars.com',
    title: '1KiloGoldBars.com | 1 Kilo Gold Bars & Gold Market Education',
    description: 'Independent insights on 1 kilo gold bars, live gold prices, and gold market education.',
    images: [
      {
        url: 'https://www.1kilogoldbars.com/1-kilo-gold-bar-hero.png',
        width: 800,
        height: 800,
        alt: '1 Kilo Gold Bar',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '1KiloGoldBars.com | 1 Kilo Gold Bars & Gold Market Education',
    description: 'Independent insights on 1 kilo gold bars, live gold prices, and gold market education.',
    images: ['https://www.1kilogoldbars.com/1-kilo-gold-bar-hero.png'],
  },
  alternates: {
    canonical: 'https://www.1kilogoldbars.com',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen flex flex-col antialiased bg-[#F9FAFB] text-gray-900">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
