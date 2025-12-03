import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { resources, getResourceBySlug, getAllResourceSlugs } from '@/data/resources'
import PrimaryCTA from '@/components/PrimaryCTA'
import Link from 'next/link'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllResourceSlugs().map((slug) => ({
    slug,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const resource = getResourceBySlug(slug)
  
  if (!resource) {
    return {
      title: 'Resource Not Found | 1KiloGoldBars.com',
    }
  }

  return {
    title: `${resource.title} | 1KiloGoldBars.com`,
    description: resource.excerpt,
    alternates: {
      canonical: `https://www.1kilogoldbars.com/resources/${slug}`,
    },
    openGraph: {
      type: 'article',
      title: resource.title,
      description: resource.excerpt,
      url: `https://www.1kilogoldbars.com/resources/${slug}`,
      publishedTime: resource.date,
      authors: ['1KiloGoldBars.com Research Team'],
    },
  }
}

export default async function ResourcePage({ params }: PageProps) {
  const { slug } = await params
  const resource = getResourceBySlug(slug)

  if (!resource) {
    notFound()
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': `https://www.1kilogoldbars.com/resources/${slug}/#article`,
        headline: resource.title,
        description: resource.excerpt,
        datePublished: resource.date,
        dateModified: resource.date,
        author: {
          '@type': 'Organization',
          '@id': 'https://www.1kilogoldbars.com/#organization',
          name: '1KiloGoldBars.com Research Team',
          url: 'https://www.1kilogoldbars.com',
        },
        publisher: {
          '@type': 'Organization',
          '@id': 'https://www.1kilogoldbars.com/#organization',
          name: '1KiloGoldBars.com',
          url: 'https://www.1kilogoldbars.com',
        },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': `https://www.1kilogoldbars.com/resources/${slug}`,
        },
        isPartOf: {
          '@id': 'https://www.1kilogoldbars.com/#website',
        },
        about: {
          '@type': 'Thing',
          name: resource.category,
        },
        articleSection: resource.category,
        inLanguage: 'en-US',
      },
      {
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
          {
            '@type': 'ListItem',
            position: 3,
            name: resource.title,
            item: `https://www.1kilogoldbars.com/resources/${slug}`,
          },
        ],
      },
    ],
  }

  // Get related articles (same category, excluding current)
  const relatedArticles = resources
    .filter(r => r.category === resource.category && r.slug !== slug)
    .slice(0, 3)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="py-10 md:py-16 bg-[#F9FAFB]">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          {/* Breadcrumb */}
          <nav className="mb-8" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-sm text-gray-500">
              <li>
                <Link href="/" className="hover:text-[#D4AF37] transition-colors">
                  Home
                </Link>
              </li>
              <li className="text-gray-400">/</li>
              <li>
                <Link href="/resources" className="hover:text-[#D4AF37] transition-colors">
                  Resources
                </Link>
              </li>
              <li className="text-gray-400">/</li>
              <li className="text-gray-700 truncate max-w-[200px]">{resource.title}</li>
            </ol>
          </nav>

          {/* Header */}
          <header className="mb-10">
            <div className="mb-5">
              <span className="inline-flex items-center px-3 py-1 text-xs font-medium text-[#B8962E] bg-[#D4AF37]/10 rounded-full">
                {resource.category}
              </span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight">
              {resource.title}
            </h1>

            {/* TL;DR Box */}
            <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-[#D4AF37]">
              <p className="text-sm font-semibold text-[#D4AF37] uppercase tracking-wide mb-2">
                TL;DR Summary
              </p>
              <p className="text-gray-700 leading-relaxed">
                {resource.tldr}
              </p>
            </div>
          </header>

          {/* Content */}
          <div 
            className="bg-white rounded-xl shadow-sm p-6 md:p-10 article-content"
            dangerouslySetInnerHTML={{ __html: formatContent(resource.content) }}
          />

          {/* CTAs */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <PrimaryCTA
              primaryLabel="View Live Gold Prices"
              primaryHref="/gold-prices"
              secondaryLabel="Learn About 1 Kilo Gold Bars"
              secondaryHref="/"
            />
          </div>
        </div>
      </article>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="py-14 md:py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 md:px-6">
            <div className="flex items-center gap-4 mb-10">
              <h2 className="text-2xl font-bold text-gray-900">
                Related <span className="text-[#D4AF37]">Articles</span>
              </h2>
              <div className="flex-1 h-[2px] bg-gradient-to-r from-[#D4AF37] to-transparent"></div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {relatedArticles.map((article) => (
                <Link 
                  key={article.slug}
                  href={`/resources/${article.slug}`}
                  className="group bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow border border-gray-100"
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-[#D4AF37] transition-colors leading-snug">
                    {article.title}
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-2 leading-relaxed">
                    {article.excerpt}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}

function formatContent(content: string): string {
  const lines = content.trim().split('\n')
  const result: string[] = []
  let i = 0

  while (i < lines.length) {
    const line = lines[i].trim()

    // Skip empty lines
    if (!line) {
      i++
      continue
    }

    // H2 Header
    if (line.startsWith('## ')) {
      result.push(`<h2>${formatInline(line.slice(3))}</h2>`)
      i++
      continue
    }

    // H3 Header
    if (line.startsWith('### ')) {
      result.push(`<h3>${formatInline(line.slice(4))}</h3>`)
      i++
      continue
    }

    // Unordered list
    if (line.startsWith('- ')) {
      const listItems: string[] = []
      while (i < lines.length && lines[i].trim().startsWith('- ')) {
        listItems.push(`<li>${formatInline(lines[i].trim().slice(2))}</li>`)
        i++
      }
      result.push(`<ul>${listItems.join('')}</ul>`)
      continue
    }

    // Ordered list
    if (/^\d+\.\s/.test(line)) {
      const listItems: string[] = []
      while (i < lines.length && /^\d+\.\s/.test(lines[i].trim())) {
        const text = lines[i].trim().replace(/^\d+\.\s/, '')
        listItems.push(`<li>${formatInline(text)}</li>`)
        i++
      }
      result.push(`<ol>${listItems.join('')}</ol>`)
      continue
    }

    // Table
    if (line.startsWith('|')) {
      const tableRows: string[] = []
      let isFirstRow = true
      while (i < lines.length && lines[i].trim().startsWith('|')) {
        const rowLine = lines[i].trim()
        // Skip separator row
        if (rowLine.includes('---')) {
          i++
          continue
        }
        const cells = rowLine.split('|').filter(c => c.trim())
        const tag = isFirstRow ? 'th' : 'td'
        tableRows.push(`<tr>${cells.map(c => `<${tag}>${formatInline(c.trim())}</${tag}>`).join('')}</tr>`)
        isFirstRow = false
        i++
      }
      result.push(`<table>${tableRows.join('')}</table>`)
      continue
    }

    // Regular paragraph - collect consecutive non-empty, non-special lines
    const paragraphLines: string[] = []
    while (
      i < lines.length &&
      lines[i].trim() &&
      !lines[i].trim().startsWith('## ') &&
      !lines[i].trim().startsWith('### ') &&
      !lines[i].trim().startsWith('- ') &&
      !/^\d+\.\s/.test(lines[i].trim()) &&
      !lines[i].trim().startsWith('|')
    ) {
      paragraphLines.push(lines[i].trim())
      i++
    }
    if (paragraphLines.length > 0) {
      result.push(`<p>${formatInline(paragraphLines.join(' '))}</p>`)
    }
  }

  return result.join('\n')
}

function formatInline(text: string): string {
  return text
    // Links with nofollow: [text](url){nofollow}
    .replace(/\[([^\]]+)\]\(([^)]+)\)\{nofollow\}/g, '<a href="$2" rel="nofollow" target="_blank">$1</a>')
    // Regular links: [text](url)
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank">$1</a>')
    // Bold
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    // Italic
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
}
