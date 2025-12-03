'use client'

import { useEffect } from 'react'

export default function MonexTableWidget() {
  useEffect(() => {
    const containerId = '797295b4-1ec7-4732-ae8c-d37569df73c3'
    const container = document.getElementById(containerId)
    
    if (container && !container.hasChildNodes()) {
      const script = document.createElement('script')
      script.async = true
      script.src = `https://widget.nfusionsolutions.com/custom/monex/script/table/2/a0fa8f6f-0b7b-4d1a-bb3f-045d29d8aee5/${containerId}`
      
      const firstScript = document.getElementsByTagName('script')[0]
      firstScript.parentNode?.insertBefore(script, firstScript)
    }
  }, [])

  return (
    <div className="bg-white">
      <div 
        id="797295b4-1ec7-4732-ae8c-d37569df73c3" 
        style={{ width: '100%', minHeight: '300px' }}
      />
      <div className="px-4 py-3 bg-gray-50 border-t border-gray-100">
        <em>
          <small className="text-gray-500">
            Prices provided by{' '}
            <a 
              href="https://www.monex.com/liveprices/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#D4AF37] hover:text-[#B8962E] hover:underline"
            >
              Monex
            </a>
          </small>
        </em>
      </div>
    </div>
  )
}
