import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | 1KiloGoldBars.com',
  description: 'Privacy policy for 1KiloGoldBars.com - Learn how we handle and protect your information.',
  alternates: {
    canonical: 'https://www.1kilogoldbars.com/privacy-policy',
  },
}

export default function PrivacyPolicyPage() {
  return (
    <div className="py-12 md:py-20 bg-[#F9FAFB]">
      <div className="max-w-4xl mx-auto px-4 md:px-6">
        <div className="bg-white rounded-xl shadow-sm p-6 md:p-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Privacy Policy
          </h1>
          
          <div className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-gray-900 prose-p:text-gray-700 prose-p:leading-relaxed">
            <p className="text-gray-500 mb-8">
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>

            <h2>Information We Collect</h2>
            <p>
              1KiloGoldBars.com is an educational website providing information about gold investing 
              and precious metals. We collect minimal information necessary to operate and improve our website.
            </p>

            <h2>Use of Information</h2>
            <p>
              Any information collected is used solely to improve the user experience and provide 
              relevant content about gold investing. We do not sell or share personal information 
              with third parties.
            </p>

            <h2>Third-Party Services</h2>
            <p>
              Our website may include embedded widgets or content from third-party providers for 
              displaying live gold prices and market data. These services may have their own 
              privacy policies.
            </p>

            <h2>Cookies</h2>
            <p>
              We may use cookies to improve website functionality and analyze site usage. You can 
              control cookie settings through your browser preferences.
            </p>

            <h2>Contact</h2>
            <p>
              For questions about this privacy policy, please contact us through the information 
              provided on our website.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
