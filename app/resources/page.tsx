import type { Metadata } from 'next'
import Link from 'next/link'
import { resources } from '@/data/resources'
import ResourceCard from '@/components/ResourceCard'
import PrimaryCTA from '@/components/PrimaryCTA'

export const metadata: Metadata = {
  title: 'Gold Investing Resources & Education | 1KiloGoldBars.com',
  description: 'Comprehensive educational resources on gold investing, 1 kilo gold bars, gold market fundamentals, and Goldbacks. Expert insights for precious metals investors.',
  alternates: {
    canonical: 'https://www.1kilogoldbars.com/resources',
  },
}

const keyTakeaways = [
  'Learn gold investing fundamentals: spot prices, premiums, bid/ask spreads, and how dealers price physical gold.',
  'Compare 1 kilo gold bars to smaller bars and coins to find the right format for your investment goals.',
  'Understand storage options from home safes to professional vaults, with security and cost trade-offs.',
  'Discover how gold serves as an inflation hedge and portfolio diversifier with no counterparty risk.',
  'Explore Goldbacks—innovative small-denomination physical gold currency available in multiple US states.',
]

const faqs = [
  {
    question: 'What topics do these gold investing resources cover?',
    answer: 'Our resources cover gold market fundamentals (spot prices, premiums, bid/ask), investment strategies, kilo bar advantages, storage options, inflation hedging, physical gold vs ETFs, dealer evaluation, and Goldbacks educational content.',
  },
  {
    question: 'Are these resources suitable for beginner gold investors?',
    answer: 'Yes, our articles are written for investors at all levels. We explain fundamental concepts clearly while also providing depth for experienced investors. Start with "Understanding Gold Spot, Bid, Ask & Premiums" for a solid foundation.',
  },
  {
    question: 'How do I choose between different gold investment formats?',
    answer: 'Consider your investment size, storage capabilities, and liquidity needs. Our "1 Kilo Gold Bars vs 1 oz Coins" article provides a detailed comparison. Kilo bars offer lowest premiums but require larger capital; coins offer flexibility for smaller investments.',
  },
  {
    question: 'What are Goldbacks and why are they included here?',
    answer: 'Goldbacks are small-denomination physical gold notes containing actual 24-karat gold. They complement traditional gold bars and coins by enabling everyday transactions with gold. Our Knowledge Base covers each state series and their unique designs.',
  },
]

export default function ResourcesPage() {
  const goldMarketArticles = resources.filter(r => r.category === 'Gold Market & Investing')
  const goldbacksArticles = resources.filter(r => r.category === 'Goldbacks Knowledge Base')

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': 'https://www.1kilogoldbars.com/resources/#webpage',
        url: 'https://www.1kilogoldbars.com/resources',
        name: 'Gold Investing Resources & Education | 1KiloGoldBars.com',
        description: 'Comprehensive educational resources on gold investing, 1 kilo gold bars, and Goldbacks.',
        isPartOf: {
          '@id': 'https://www.1kilogoldbars.com/#website',
        },
        breadcrumb: {
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Home',
              item: 'https://www.1kilogoldbars.com',
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'Resources',
              item: 'https://www.1kilogoldbars.com/resources',
            },
          ],
        },
      },
      {
        '@type': 'CollectionPage',
        '@id': 'https://www.1kilogoldbars.com/resources/#collection',
        name: 'Gold Investing Resources',
        description: 'Educational articles about gold investing, market fundamentals, and Goldbacks.',
        url: 'https://www.1kilogoldbars.com/resources',
        mainEntity: {
          '@type': 'ItemList',
          itemListElement: resources.map((resource, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            url: `https://www.1kilogoldbars.com/resources/${resource.slug}`,
            name: resource.title,
          })),
        },
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://www.1kilogoldbars.com/resources/#faq',
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
      <section className="py-12 md:py-20 bg-gradient-to-br from-[#1A1A1A] via-[#2C2C2C] to-[#1A1A1A]">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <nav className="mb-6" aria-label="Breadcrumb">
              <ol className="flex items-center justify-center gap-2 text-sm text-gray-400">
                <li><Link href="/" className="hover:text-[#D4AF37]">Home</Link></li>
                <li>/</li>
                <li className="text-gray-300">Resources</li>
              </ol>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Gold Investing <span className="gold-shimmer">Resources</span>
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              Expand your knowledge with our comprehensive collection of educational articles 
              covering gold investing fundamentals, market insights, and the innovative world of Goldbacks.
            </p>
          </div>
        </div>
      </section>

      {/* Key Takeaways */}
      <section className="py-10 md:py-14 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="bg-gradient-to-br from-[#FFFDF7] to-[#FFF9E6] border border-[#D4AF37]/20 rounded-2xl p-6 md:p-8">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-[#D4AF37]/10 flex items-center justify-center">
                <svg className="w-5 h-5 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </span>
              What You&apos;ll Learn in Our Resource Library
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

      {/* Gold Market & Investing Section */}
      <section className="py-12 md:py-20 bg-[#F9FAFB]">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="mb-10">
            <div className="flex items-center gap-4 mb-4">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                Gold Market & <span className="text-[#D4AF37]">Investing</span>
              </h2>
              <div className="flex-1 h-[2px] bg-gradient-to-r from-[#D4AF37] to-transparent"></div>
            </div>
            <p className="text-gray-600 max-w-2xl leading-relaxed">
              Master the fundamentals of gold investing with insights on pricing, storage, 
              dealer evaluation, and strategic allocation for your portfolio.
            </p>
          </div>

          {/* Featured Articles Checklist */}
          <div className="bg-white rounded-xl p-6 mb-8 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4">Popular Starting Points:</h3>
            <ul className="grid md:grid-cols-2 gap-3">
              <li>
                <Link href="/resources/understanding-gold-spot-bid-ask-premiums" className="flex items-center gap-2 text-gray-700 hover:text-[#D4AF37]">
                  <span className="w-5 h-5 rounded bg-[#D4AF37]/10 flex items-center justify-center">
                    <svg className="w-3 h-3 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                  Understanding Spot, Bid, Ask & Premiums
                </Link>
              </li>
              <li>
                <Link href="/resources/are-1-kilo-gold-bars-smart-investment-2025" className="flex items-center gap-2 text-gray-700 hover:text-[#D4AF37]">
                  <span className="w-5 h-5 rounded bg-[#D4AF37]/10 flex items-center justify-center">
                    <svg className="w-3 h-3 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                  Are 1 Kilo Gold Bars a Smart Investment?
                </Link>
              </li>
              <li>
                <Link href="/resources/how-gold-protects-against-inflation" className="flex items-center gap-2 text-gray-700 hover:text-[#D4AF37]">
                  <span className="w-5 h-5 rounded bg-[#D4AF37]/10 flex items-center justify-center">
                    <svg className="w-3 h-3 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                  How Gold Protects Against Inflation
                </Link>
              </li>
              <li>
                <Link href="/resources/how-to-evaluate-gold-dealers" className="flex items-center gap-2 text-gray-700 hover:text-[#D4AF37]">
                  <span className="w-5 h-5 rounded bg-[#D4AF37]/10 flex items-center justify-center">
                    <svg className="w-3 h-3 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                  How to Evaluate Gold Dealers
                </Link>
              </li>
            </ul>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {goldMarketArticles.map((resource) => (
              <ResourceCard
                key={resource.slug}
                title={resource.title}
                category={resource.category}
                excerpt={resource.excerpt}
                slug={resource.slug}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Goldbacks Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="mb-10">
            <div className="flex items-center gap-4 mb-4">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                Goldbacks <span className="text-[#D4AF37]">Knowledge Base</span>
              </h2>
              <div className="flex-1 h-[2px] bg-gradient-to-r from-[#D4AF37] to-transparent"></div>
            </div>
            <p className="text-gray-600 max-w-2xl leading-relaxed">
              Discover the innovative world of Goldbacks—small-denomination gold currency 
              designed for everyday transactions. Learn about each state series and their unique designs.
            </p>
          </div>

          {/* What are Goldbacks */}
          <div className="bg-gradient-to-br from-[#1A1A1A] to-[#2C2C2C] rounded-xl p-6 mb-8">
            <h3 className="font-semibold text-white mb-3">What Are Goldbacks?</h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Goldbacks are voluntary local currencies containing actual 24-karat gold. Each note contains 
              a precise amount of gold (1/1000 oz per denomination unit) sealed between protective layers. 
              They&apos;re designed for everyday transactions, filling a niche that traditional gold bars and coins cannot.
            </p>
            <Link href="/resources/history-of-goldbacks" className="text-[#D4AF37] text-sm hover:underline">
              Learn the full history of Goldbacks →
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {goldbacksArticles.map((resource) => (
              <ResourceCard
                key={resource.slug}
                title={resource.title}
                category={resource.category}
                excerpt={resource.excerpt}
                slug={resource.slug}
              />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-16 bg-[#F9FAFB]">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
            Questions About Our <span className="text-[#D4AF37]">Resources</span>
          </h2>
          <div className="max-w-4xl mx-auto space-y-5">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm"
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-[#1A1A1A] via-[#2C2C2C] to-[#1A1A1A]">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
            Ready to Track Gold Prices?
          </h2>
          <p className="text-gray-300 mb-10 leading-relaxed">
            Monitor real-time gold spot prices and market movements with our{' '}
            <Link href="/gold-prices" className="text-[#D4AF37] hover:underline">live price charts</Link>.
          </p>
          <PrimaryCTA
            primaryLabel="View Live Gold Prices"
            primaryHref="/gold-prices"
            secondaryLabel="Learn About 1 Kilo Gold Bars"
            secondaryHref="/"
          />
        </div>
      </section>
    </>
  )
}
