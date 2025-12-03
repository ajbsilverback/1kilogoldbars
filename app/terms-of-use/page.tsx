import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Use | 1KiloGoldBars.com',
  description: 'Terms of use for 1KiloGoldBars.com - Please read these terms before using our website.',
  alternates: {
    canonical: 'https://www.1kilogoldbars.com/terms-of-use',
  },
}

export default function TermsOfUsePage() {
  return (
    <div className="py-12 md:py-20 bg-[#F9FAFB]">
      <div className="max-w-4xl mx-auto px-4 md:px-6">
        <div className="bg-white rounded-xl shadow-sm p-6 md:p-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Terms of Use
          </h1>
          
          <div className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-gray-900 prose-p:text-gray-700 prose-p:leading-relaxed">
            <p className="text-gray-500 mb-8">
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>

            <h2>Acceptance of Terms</h2>
            <p>
              By accessing and using 1KiloGoldBars.com, you agree to be bound by these Terms of Use. 
              If you do not agree to these terms, please do not use this website.
            </p>

            <h2>Educational Purpose</h2>
            <p>
              The information provided on this website is for educational and informational purposes only. 
              It should not be considered financial, investment, tax, or legal advice. Always consult with 
              qualified professionals before making investment decisions.
            </p>

            <h2>No Investment Advice</h2>
            <p>
              1KiloGoldBars.com does not provide personalized investment recommendations. The content 
              on this site represents general information about gold and precious metals and should not 
              be relied upon as the basis for investment decisions.
            </p>

            <h2>Price Information</h2>
            <p>
              Gold prices and market data displayed on this website are provided for informational 
              purposes only and may be delayed or inaccurate. Do not rely on this data for trading 
              or transaction decisions.
            </p>

            <h2>Intellectual Property</h2>
            <p>
              All content on this website, including text, graphics, and design, is the property of 
              1KiloGoldBars.com and is protected by copyright laws.
            </p>

            <h2>Limitation of Liability</h2>
            <p>
              1KiloGoldBars.com shall not be liable for any direct, indirect, incidental, or 
              consequential damages arising from your use of this website or reliance on any 
              information provided herein.
            </p>

            <h2>Changes to Terms</h2>
            <p>
              We reserve the right to modify these terms at any time. Continued use of the website 
              after changes constitutes acceptance of the modified terms.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
