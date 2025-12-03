import Link from 'next/link'

interface PrimaryCTAProps {
  primaryLabel: string
  primaryHref: string
  secondaryLabel?: string
  secondaryHref?: string
}

export default function PrimaryCTA({
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
}: PrimaryCTAProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
      <Link
        href={primaryHref}
        className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-[#1A1A1A] bg-[#D4AF37] rounded-full shadow-lg hover:bg-[#E8D48A] hover:shadow-xl hover:shadow-yellow-500/20 transform hover:-translate-y-0.5 transition-all duration-200"
      >
        {primaryLabel}
        <svg 
          className="ml-2 w-5 h-5" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      </Link>
      
      {secondaryLabel && secondaryHref && (
        <Link
          href={secondaryHref}
          className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-[#D4AF37] bg-transparent border-2 border-[#D4AF37] rounded-full hover:bg-[#D4AF37]/10 hover:text-[#B8962E] transition-all duration-200"
        >
          {secondaryLabel}
        </Link>
      )}
    </div>
  )
}
