import type { Metadata } from 'next'
import Link from 'next/link'
import MonexChartWidget from '@/components/MonexChartWidget'
import MonexTableWidget from '@/components/MonexTableWidget'
import PrimaryCTA from '@/components/PrimaryCTA'

export const metadata: Metadata = {
  title: 'Live Gold Prices & Market Overview | 1KiloGoldBars.com',
  description: 'Track live gold spot prices, bid/ask spreads, and market charts. Understand how gold prices are determined and what drives daily price movements.',
  alternates: {
    canonical: 'https://www.1kilogoldbars.com/gold-prices',
  },
}

const keyTakeaways = [
  'Gold spot price is the current market rate for immediate delivery, quoted in USD per troy ounce.',
  'Bid price is what buyers pay; ask price is what sellers want. The difference is called the spread.',
  'Gold trades nearly 24 hours a day across London, New York, Shanghai, and Tokyo markets.',
  'Physical gold products (bars, coins) trade at a premium above spot price to cover manufacturing and distribution.',
  '1 kilo gold bar price = (spot price × 32.15 troy ounces) + dealer premium (typically 1-3%).',
]

const faqs = [
  {
    question: 'What is the gold spot price?',
    answer: 'The gold spot price is the current market price at which gold can be bought or sold for immediate delivery. It serves as the baseline for pricing gold bars, coins, and other gold products. Dealers add a premium over spot price to cover manufacturing, distribution, and profit margins.',
  },
  {
    question: 'What is the difference between bid and ask prices?',
    answer: 'The bid price is what buyers are willing to pay for gold, while the ask price is what sellers are asking. The difference between them is called the spread. When you buy gold, you pay the ask price; when you sell, you receive the bid price.',
  },
  {
    question: 'How often do gold prices change?',
    answer: 'Gold spot prices change continuously during market hours, reflecting global trading activity. Prices are quoted in real-time through exchanges in London, New York, and Shanghai, updating multiple times per second during active trading.',
  },
  {
    question: 'When do gold markets operate?',
    answer: 'Gold trades nearly 24 hours a day, 5 days a week across global markets. Major trading centers include London (LBMA), New York (COMEX), Shanghai (SGE), and Tokyo (TOCOM). Prices are most active during overlapping trading hours between these markets.',
  },
  {
    question: 'Why do gold prices fluctuate?',
    answer: 'Gold prices move based on supply and demand, influenced by factors including central bank policies, inflation expectations, currency movements (especially the US dollar), geopolitical events, mining production, and investor sentiment toward safe-haven assets.',
  },
  {
    question: 'How are 1 kilo gold bar prices calculated?',
    answer: 'A 1 kilo gold bar price equals the spot price multiplied by 32.15 (troy ounces per kilo), plus a dealer premium. Premiums vary by refiner reputation, market conditions, and dealer inventory. LBMA-approved bars typically command slightly higher premiums due to guaranteed quality.',
  },
]

export default function GoldPricesPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': 'https://www.1kilogoldbars.com/gold-prices/#webpage',
        url: 'https://www.1kilogoldbars.com/gold-prices',
        name: 'Live Gold Prices & Market Overview | 1KiloGoldBars.com',
        description: 'Track live gold spot prices, bid/ask spreads, and historical charts. Understand gold price fundamentals and market dynamics.',
        isPartOf: {
          '@id': 'https://www.1kilogoldbars.com/#website',
        },
        about: {
          '@type': 'Thing',
          name: 'Gold Prices',
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
              name: 'Gold Prices',
              item: 'https://www.1kilogoldbars.com/gold-prices',
            },
          ],
        },
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://www.1kilogoldbars.com/gold-prices/#faq',
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
                <li className="text-gray-300">Gold Prices</li>
              </ol>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Live Gold Prices & <span className="gold-shimmer">Market Overview</span>
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              Track real-time gold spot prices, view historical charts, and stay informed 
              about precious metals market movements. Updated continuously during market hours.
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              Key Takeaways: Understanding Gold Prices
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
            <p className="mt-4 text-sm text-gray-600">
              For a deeper dive, read our guide on{' '}
              <Link href="/resources/understanding-gold-spot-bid-ask-premiums" className="text-[#D4AF37] hover:underline">
                understanding gold spot, bid, ask & premiums
              </Link>.
            </p>
          </div>
        </div>
      </section>

      {/* Chart Widget */}
      <section className="py-10 md:py-14 bg-[#F9FAFB]">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            What Is the Current Gold Price?
          </h2>
          <p className="text-gray-600 mb-6">
            View the live gold price chart below showing real-time spot prices and recent price history.
          </p>
          <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
            <MonexChartWidget />
          </div>
        </div>
      </section>

      {/* Table Widget */}
      <section className="py-10 md:py-14 bg-white">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            How Do Gold Prices Compare to Other Precious Metals?
          </h2>
          <p className="text-gray-600 mb-6">
            Compare current prices for gold, silver, platinum, and palladium in real-time.
          </p>
          <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
            <MonexTableWidget />
          </div>
        </div>
      </section>

      {/* How to Calculate Section */}
      <section className="py-12 md:py-16 bg-[#F9FAFB]">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            How Do You Calculate the Price of a 1 Kilo Gold Bar?
          </h2>
          <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6 md:p-8">
            <p className="text-gray-700 mb-6 leading-relaxed">
              Calculating the price of a 1 kilo gold bar is straightforward once you understand the components:
            </p>
            <ol className="space-y-4 mb-6">
              <li className="flex items-start gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#D4AF37] flex items-center justify-center text-white font-bold text-sm">1</span>
                <div>
                  <strong className="text-gray-900">Find the current spot price</strong>
                  <p className="text-gray-600">Check the gold spot price per troy ounce (shown in the chart above).</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#D4AF37] flex items-center justify-center text-white font-bold text-sm">2</span>
                <div>
                  <strong className="text-gray-900">Multiply by 32.15</strong>
                  <p className="text-gray-600">A kilo bar contains 32.15 troy ounces of gold.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#D4AF37] flex items-center justify-center text-white font-bold text-sm">3</span>
                <div>
                  <strong className="text-gray-900">Add the dealer premium</strong>
                  <p className="text-gray-600">Typically 1-3% for kilo bars from LBMA-approved refiners.</p>
                </div>
              </li>
            </ol>
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-sm text-gray-600">
                <strong>Example:</strong> If spot gold is $2,000/oz, a kilo bar costs approximately: 
                <br />$2,000 × 32.15 = $64,300 + 2% premium = <strong className="text-[#D4AF37]">$65,586</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions About <span className="text-[#D4AF37]">Gold Prices</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Common questions about gold pricing, markets, and how prices are determined.
            </p>
          </div>

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

      {/* Related Resources */}
      <section className="py-12 md:py-16 bg-[#F9FAFB]">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Related Resources
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/resources/understanding-gold-spot-bid-ask-premiums" className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow group">
              <h3 className="font-semibold text-gray-900 group-hover:text-[#D4AF37] mb-2">Understanding Spot, Bid, Ask & Premiums</h3>
              <p className="text-sm text-gray-600">Master the fundamental concepts of gold pricing.</p>
            </Link>
            <Link href="/resources/how-often-should-you-check-gold-prices" className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow group">
              <h3 className="font-semibold text-gray-900 group-hover:text-[#D4AF37] mb-2">How Often Should You Check Gold Prices?</h3>
              <p className="text-sm text-gray-600">Find the right balance for your investment strategy.</p>
            </Link>
            <Link href="/resources/are-1-kilo-gold-bars-smart-investment-2025" className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow group">
              <h3 className="font-semibold text-gray-900 group-hover:text-[#D4AF37] mb-2">Are 1 Kilo Gold Bars a Smart Investment?</h3>
              <p className="text-sm text-gray-600">Analysis of kilo bars for serious investors.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-[#1A1A1A] via-[#2C2C2C] to-[#1A1A1A]">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
            Expand Your Gold Knowledge
          </h2>
          <p className="text-gray-300 mb-10 leading-relaxed">
            Dive deeper into gold investing with our comprehensive educational resources covering 
            storage strategies, dealer evaluation, and more.
          </p>
          <PrimaryCTA
            primaryLabel="Explore Resources"
            primaryHref="/resources"
            secondaryLabel="Learn About 1 Kilo Gold Bars"
            secondaryHref="/"
          />
        </div>
      </section>
    </>
  )
}
