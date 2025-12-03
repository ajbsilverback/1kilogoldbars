import Image from 'next/image'
import Link from 'next/link'
import PrimaryCTA from '@/components/PrimaryCTA'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '1 Kilo Gold Bars: Pure Investment-Grade Gold | 1KiloGoldBars.com',
  description: 'Discover 1 kilo gold bars - the ultimate choice for serious gold investors. Learn about 99.99% purity, LBMA-approved mints, and long-term storage strategies.',
  alternates: {
    canonical: 'https://www.1kilogoldbars.com',
  },
}

const keyTakeaways = [
  '1 kilo gold bars contain 32.15 troy ounces of 99.99% pure gold, meeting LBMA Good Delivery standards.',
  'Kilo bars offer the lowest premiums per ounce compared to smaller bars and coins, typically 1-3% over spot price.',
  'Storage efficiency makes kilo bars ideal for long-term investors—more gold per unit of vault space reduces ongoing fees.',
  'LBMA-approved refiners (PAMP Suisse, Valcambi, Heraeus) ensure global liquidity and instant recognition.',
  'Physical gold provides a hedge against inflation with no counterparty risk, unlike ETFs or paper gold.',
]

const features = [
  {
    title: 'Investment-Grade Purity',
    description: '99.99% pure gold (four nines fine) meets the highest international standards for investment-grade bullion.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: 'Globally Recognized Mints',
    description: 'LBMA-approved refiners like PAMP Suisse, Valcambi, and Heraeus ensure authenticity and global liquidity.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Efficient Long-Term Storage',
    description: 'Kilo bars maximize gold per unit of storage space, reducing vault fees and handling costs over time.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
  },
]

const whyInvest = [
  'Lower premiums per ounce compared to smaller bars and coins',
  'Recognized by dealers and institutions worldwide',
  'Tangible asset with no counterparty risk',
  'Hedge against inflation and currency devaluation',
  'Private and portable wealth storage',
  'High liquidity in the global precious metals market',
]

const faqs = [
  {
    question: 'What is a 1 kilo gold bar?',
    answer: 'A 1 kilo gold bar is a rectangular bar of investment-grade gold weighing exactly 1 kilogram (32.15 troy ounces). These bars are refined to 99.99% purity (four nines fine) and produced by LBMA-approved mints. Each bar is stamped with its weight, purity, refiner hallmark, and unique serial number.',
  },
  {
    question: 'Are 1 kilo gold bars a good investment for long-term wealth?',
    answer: 'Yes, 1 kilo gold bars are excellent for long-term wealth preservation. They offer the lowest premiums over spot price (typically 1-3%), efficient storage, and high liquidity. Serious investors often choose kilo bars as the core of their physical gold holdings because they maximize gold per dollar invested.',
  },
  {
    question: 'What are the pros and cons of 1 kilo gold bars?',
    answer: 'Pros include lowest premiums, storage efficiency, global recognition, and strong resale value. Cons include the large unit size (harder to liquidate partially), higher absolute cost per bar, and the need for secure storage. For investors who can commit to the full kilo, the advantages typically outweigh the drawbacks.',
  },
  {
    question: 'How much does a 1 kilo gold bar cost?',
    answer: 'The price of a 1 kilo gold bar equals the current gold spot price multiplied by 32.15 troy ounces, plus a dealer premium of 1-3%. For example, if spot gold is $2,000 per ounce, a kilo bar would cost approximately $64,300-$66,200 depending on the refiner and dealer.',
  },
  {
    question: 'Where can I store a 1 kilo gold bar safely?',
    answer: 'Options include home safes (TL-15 or TL-30 rated), bank safe deposit boxes, and professional precious metals vault storage. Professional vaults offer the highest security with insurance included, while home storage provides immediate access. Many investors use a combination of methods.',
  },
  {
    question: 'What makes a gold bar "LBMA approved"?',
    answer: 'LBMA (London Bullion Market Association) approval means the refiner meets strict quality standards for gold purity, bar dimensions, and manufacturing processes. LBMA-approved bars are accepted worldwide by dealers, banks, and exchanges, ensuring maximum liquidity when you sell.',
  },
]

export default function HomePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': 'https://www.1kilogoldbars.com/#webpage',
        url: 'https://www.1kilogoldbars.com',
        name: '1 Kilo Gold Bars: Pure Investment-Grade Gold | 1KiloGoldBars.com',
        description: 'Comprehensive guide to 1 kilo gold bars for serious investors. Learn about purity, premiums, storage, and why kilo bars are the preferred format for wealth preservation.',
        isPartOf: {
          '@id': 'https://www.1kilogoldbars.com/#website',
        },
        about: {
          '@type': 'Thing',
          name: '1 Kilo Gold Bars',
        },
        mainEntity: {
          '@id': 'https://www.1kilogoldbars.com/#product',
        },
      },
      {
        '@type': 'WebSite',
        '@id': 'https://www.1kilogoldbars.com/#website',
        url: 'https://www.1kilogoldbars.com',
        name: '1KiloGoldBars.com',
        description: 'Independent educational resource for gold investors focusing on 1 kilo gold bars, live gold prices, and precious metals market education.',
        publisher: {
          '@type': 'Organization',
          '@id': 'https://www.1kilogoldbars.com/#organization',
          name: '1KiloGoldBars.com',
          url: 'https://www.1kilogoldbars.com',
        },
      },
      {
        '@type': 'Organization',
        '@id': 'https://www.1kilogoldbars.com/#organization',
        name: '1KiloGoldBars.com',
        url: 'https://www.1kilogoldbars.com',
      },
      {
        '@type': 'Product',
        '@id': 'https://www.1kilogoldbars.com/#product',
        name: '1 Kilo Gold Bar',
        description: 'Investment-grade 1 kilo gold bar with 99.99% purity from LBMA-approved mints. Contains 32.15 troy ounces of pure gold.',
        image: 'https://www.1kilogoldbars.com/1-kilo-gold-bar-hero.png',
        brand: {
          '@type': 'Brand',
          name: '1KiloGoldBars.com',
        },
        weight: {
          '@type': 'QuantitativeValue',
          value: '1',
          unitCode: 'KGM',
        },
        material: 'Gold',
        additionalProperty: [
          {
            '@type': 'PropertyValue',
            name: 'Purity',
            value: '99.99%',
          },
          {
            '@type': 'PropertyValue',
            name: 'Troy Ounces',
            value: '32.15',
          },
          {
            '@type': 'PropertyValue',
            name: 'Standard',
            value: 'LBMA Good Delivery',
          },
        ],
        offers: {
          '@type': 'Offer',
          priceCurrency: 'USD',
          price: '0.00',
          availability: 'https://schema.org/InStock',
          url: 'https://www.1kilogoldbars.com',
        },
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://www.1kilogoldbars.com/#faq',
        mainEntity: faqs.map(faq => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-[#1A1A1A] via-[#2C2C2C] to-[#000000]">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `radial-gradient(circle at 20% 30%, rgba(212, 175, 55, 0.3) 0%, transparent 40%),
                           radial-gradient(circle at 80% 70%, rgba(212, 175, 55, 0.2) 0%, transparent 40%)`,
        }} />
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6 py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                <span className="text-white">1 Kilo Gold Bars:</span>
                <br />
                <span className="gold-shimmer">Pure Investment-Grade Gold</span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Discover the premier choice for serious gold investors. 99.99% pure gold from 
                LBMA-approved mints, designed for efficient long-term wealth preservation.
              </p>
              
              <PrimaryCTA
                primaryLabel="View Live Gold Prices"
                primaryHref="/gold-prices"
                secondaryLabel="Explore Resources"
                secondaryHref="/resources"
              />
            </div>
            
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96">
                <div className="absolute inset-0 bg-[#D4AF37] rounded-full blur-[100px] opacity-30 animate-pulse" />
                <Image
                  src="/1-kilo-gold-bar-hero.png"
                  alt="1 Kilo Gold Bar - Investment Grade 99.99% Pure Gold"
                  fill
                  className="object-contain drop-shadow-[0_20px_50px_rgba(212,175,55,0.3)]"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Takeaways - GEO Optimized */}
      <section className="py-10 md:py-14 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="bg-gradient-to-br from-[#FFFDF7] to-[#FFF9E6] border border-[#D4AF37]/20 rounded-2xl p-6 md:p-8">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-[#D4AF37]/10 flex items-center justify-center">
                <svg className="w-5 h-5 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              Key Takeaways: 1 Kilo Gold Bars at a Glance
            </h2>
            <ul className="space-y-3">
              {keyTakeaways.map((point, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#D4AF37] flex items-center justify-center mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-gray-700 leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Features Section - Question-Based Heading */}
      <section className="py-16 md:py-24 bg-[#F9FAFB]">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose <span className="text-[#D4AF37]">1 Kilo Gold Bars?</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              The preferred format for institutional investors and serious collectors worldwide.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition-shadow duration-300 border-t-4 border-[#D4AF37] text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#D4AF37]/10 text-[#D4AF37] mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">
              Want to dive deeper into gold investing fundamentals?
            </p>
            <Link 
              href="/resources" 
              className="text-[#D4AF37] font-medium hover:text-[#B8962E] hover:underline"
            >
              Explore our comprehensive gold investing resources →
            </Link>
          </div>
        </div>
      </section>

      {/* Why Invest Section - Question Heading */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Should You Invest in <span className="text-[#D4AF37]">Physical Gold?</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Gold has served as a store of value for thousands of years. In today&apos;s uncertain 
                economic environment, 1 kilo gold bars offer a compelling way to preserve wealth.
                Learn more about <Link href="/resources/how-gold-protects-against-inflation" className="text-[#D4AF37] hover:underline">how gold protects against inflation</Link>.
              </p>
              
              <ul className="space-y-4">
                {whyInvest.map((point, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#D4AF37]/10 flex items-center justify-center mt-0.5">
                      <svg className="w-4 h-4 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-gray-700 leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
              
              <p className="mt-8 text-gray-600">
                Unsure whether to choose bars or coins? Read our detailed comparison: {' '}
                <Link href="/resources/1-kilo-gold-bars-vs-1-oz-coins" className="text-[#D4AF37] hover:underline">
                  1 Kilo Gold Bars vs 1 oz Coins
                </Link>.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-[#1A1A1A] to-[#2C2C2C] rounded-2xl p-8 shadow-xl">
              <h3 className="text-xl font-semibold text-white mb-6">
                Quick Facts: 1 Kilo Gold Bar Specifications
              </h3>
              <dl className="space-y-1">
                <div className="flex justify-between py-4 border-b border-gray-700">
                  <dt className="text-gray-400">Weight</dt>
                  <dd className="text-white font-medium">1 Kilogram (32.15 troy oz)</dd>
                </div>
                <div className="flex justify-between py-4 border-b border-gray-700">
                  <dt className="text-gray-400">Purity</dt>
                  <dd className="text-[#D4AF37] font-medium">99.99% (Four Nines Fine)</dd>
                </div>
                <div className="flex justify-between py-4 border-b border-gray-700">
                  <dt className="text-gray-400">Dimensions</dt>
                  <dd className="text-white font-medium">~117 × 53 × 9 mm</dd>
                </div>
                <div className="flex justify-between py-4 border-b border-gray-700">
                  <dt className="text-gray-400">Standards</dt>
                  <dd className="text-white font-medium">LBMA Good Delivery</dd>
                </div>
                <div className="flex justify-between py-4">
                  <dt className="text-gray-400">Typical Premium</dt>
                  <dd className="text-white font-medium">1-3% over spot</dd>
                </div>
              </dl>
              <p className="mt-6 text-sm text-gray-400">
                Track current prices on our <Link href="/gold-prices" className="text-[#D4AF37] hover:underline">live gold prices page</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - GEO Optimized */}
      <section className="py-16 md:py-24 bg-[#F9FAFB]">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions About <span className="text-[#D4AF37]">1 Kilo Gold Bars</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Expert answers to the most common questions about investing in 1 kilo gold bars.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-5">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-lg font-semibold text-[#B8962E] mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
          
          <div className="mt-10 text-center">
            <p className="text-gray-600">
              Have more questions? Explore our{' '}
              <Link href="/resources" className="text-[#D4AF37] hover:underline font-medium">
                complete resource library
              </Link>{' '}
              for in-depth articles on gold investing.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#1A1A1A] via-[#2C2C2C] to-[#1A1A1A]">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Learn More About Gold Investing?
          </h2>
          <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Check <Link href="/gold-prices" className="text-[#D4AF37] hover:underline">live gold prices</Link>, 
            explore our <Link href="/resources" className="text-[#D4AF37] hover:underline">educational resources</Link>, 
            and make informed decisions about your precious metals portfolio.
          </p>
          <PrimaryCTA
            primaryLabel="View Live Gold Prices"
            primaryHref="/gold-prices"
            secondaryLabel="Explore Resources"
            secondaryHref="/resources"
          />
        </div>
      </section>
    </>
  )
}
