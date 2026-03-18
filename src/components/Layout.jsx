import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

export default function Layout({ children }) {
  const { pathname, hash } = useLocation()

  // Scroll to section when nav uses hash (e.g. /#calculator, /#payment)
  useEffect(() => {
    if (!hash) return
    const id = hash.replace(/^#/, '')
    const headerOffsetPx = 88

    const doScroll = (el) => {
      const rect = el.getBoundingClientRect()
      const scrollTop = window.pageYOffset ?? document.documentElement.scrollTop
      const targetY = rect.top + scrollTop - headerOffsetPx
      window.scrollTo({ top: Math.max(0, targetY), behavior: 'smooth' })
    }

    let attempts = 0
    const maxAttempts = 30
    const tryScroll = () => {
      const el = document.getElementById(id)
      if (el) {
        doScroll(el)
        return
      }
      if (attempts < maxAttempts) {
        attempts += 1
        timeoutId = window.setTimeout(tryScroll, 50)
      }
    }

    // Try immediately (when already on home) and after delay (when coming from /order)
    tryScroll()
    let timeoutId = window.setTimeout(tryScroll, 350)

    return () => {
      if (timeoutId) window.clearTimeout(timeoutId)
    }
  }, [pathname, hash])

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}
