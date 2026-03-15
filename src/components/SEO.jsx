import { useEffect } from 'react'

export default function SEO({ title, description }) {
  useEffect(() => {
    if (title) document.title = title
    const metaDesc = document.querySelector('meta[name="description"]')
    if (description && metaDesc) metaDesc.setAttribute('content', description)
    const ogDesc = document.querySelector('meta[property="og:description"]')
    if (description && ogDesc) ogDesc.setAttribute('content', description)
    const ogTitle = document.querySelector('meta[property="og:title"]')
    if (title && ogTitle) ogTitle.setAttribute('content', title)
    return () => {
      document.title = 'Zanzibar Bricks – Brick Supplier in Zanzibar'
      const def = 'Order high quality bricks in Zanzibar with free delivery to Paje, Bwejuu, Jambiani, Makunduchi and Michamvi. Reliable construction brick supply for developers and builders.'
      if (metaDesc) metaDesc.setAttribute('content', def)
      if (ogDesc) ogDesc.setAttribute('content', def)
      if (ogTitle) ogTitle.setAttribute('content', 'Zanzibar Bricks – Brick Supplier in Zanzibar')
    }
  }, [title, description])
  return null
}
