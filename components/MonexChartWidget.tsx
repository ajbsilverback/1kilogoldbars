'use client'

import { useEffect } from 'react'

export default function MonexChartWidget() {
  useEffect(() => {
    const containerId = '475a1e90-7ecc-4a36-a85b-ef15136924bb'
    const container = document.getElementById(containerId)
    
    if (container && !container.hasChildNodes()) {
      const script = document.createElement('script')
      script.async = true
      script.src = `https://widget.nfusionsolutions.com/custom/monex/script/chart/1/a0fa8f6f-0b7b-4d1a-bb3f-045d29d8aee5/${containerId}?selected=gold`
      
      const firstScript = document.getElementsByTagName('script')[0]
      firstScript.parentNode?.insertBefore(script, firstScript)
    }
  }, [])

  return (
    <div className="bg-white">
      <div 
        id="475a1e90-7ecc-4a36-a85b-ef15136924bb" 
        style={{ width: '100%', height: '400px' }}
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
