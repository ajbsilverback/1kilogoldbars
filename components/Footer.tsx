import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#1A1A1A] border-t-4 border-[#D4AF37]">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-10">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          {/* Logo and Copyright */}
          <div className="text-center md:text-left">
            <Link href="/" className="text-xl font-bold gold-shimmer font-display">
              1KiloGoldBars.com
            </Link>
            <p className="mt-2 text-sm text-gray-400">
              © {currentYear} 1kilogoldbars.com
            </p>
          </div>

          {/* Links */}
          <nav className="flex gap-8" aria-label="Footer navigation">
            <Link 
              href="/privacy-policy" 
              className="text-sm text-gray-400 hover:text-[#D4AF37] transition-colors"
            >
              Privacy Policy
            </Link>
            <Link 
              href="/terms-of-use" 
              className="text-sm text-gray-400 hover:text-[#D4AF37] transition-colors"
            >
              Terms of Use
            </Link>
          </nav>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <p className="text-center md:text-left text-xs text-gray-500 max-w-3xl">
            The information provided on this website is for educational purposes only and should not be 
            considered financial advice. Always consult with a qualified financial advisor before making 
            investment decisions.
          </p>
        </div>
      </div>
    </footer>
  )
}
