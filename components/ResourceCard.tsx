import Link from 'next/link'

interface ResourceCardProps {
  title: string
  category: string
  excerpt: string
  slug: string
}

export default function ResourceCard({
  title,
  category,
  excerpt,
  slug,
}: ResourceCardProps) {
  return (
    <article className="group bg-white rounded-xl shadow-md hover:shadow-xl p-6 transition-all duration-300 border border-gray-100 relative overflow-hidden">
      {/* Gold corner accent */}
      <div className="absolute top-0 left-0 w-1 h-12 bg-[#D4AF37]" />
      
      <div className="mb-4">
        <span className="inline-flex items-center px-3 py-1 text-xs font-medium text-[#B8962E] bg-[#D4AF37]/10 rounded-full">
          {category}
        </span>
      </div>
      
      <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-[#D4AF37] transition-colors leading-tight">
        <Link href={`/resources/${slug}`} className="hover:underline underline-offset-4 decoration-[#D4AF37]">
          {title}
        </Link>
      </h3>
      
      <p className="text-sm text-gray-600 mb-5 line-clamp-3 leading-relaxed">
        {excerpt}
      </p>
      
      <Link
        href={`/resources/${slug}`}
        className="inline-flex items-center text-sm font-medium text-[#D4AF37] hover:text-[#B8962E] transition-colors"
      >
        Read Article
        <svg 
          className="ml-1.5 w-4 h-4 transform group-hover:translate-x-1 transition-transform" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    </article>
  )
}
