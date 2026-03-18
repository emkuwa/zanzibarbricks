import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import { tr } from '../data/translations'

const navKeys = [
  { to: '/', key: 'navHome' },
  { to: '/#calculator', key: 'navPrices' },
  { to: '/#payment', key: 'navPayment' },
  { to: '/order', key: 'navOrder' },
  { to: '/faq', key: 'navFaq' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { language, setLanguage } = useLanguage()
  const t = (key, reps) => tr(language, key, reps)

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-sand-light shadow-sm">
      <div className="container-wide section-padding py-4">
        <div className="flex items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <span className="font-display font-bold text-xl text-ocean">Zanzibar Bricks</span>
          </Link>

          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center rounded-lg border border-sand-light overflow-hidden">
              <button
                type="button"
                onClick={() => setLanguage('en')}
                className={`px-3 py-1.5 text-sm font-medium ${language === 'en' ? 'bg-ocean text-white' : 'bg-white text-ocean-dark/80 hover:bg-sand-light/30'}`}
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => setLanguage('sw')}
                className={`px-3 py-1.5 text-sm font-medium ${language === 'sw' ? 'bg-ocean text-white' : 'bg-white text-ocean-dark/80 hover:bg-sand-light/30'}`}
              >
                SW
              </button>
            </div>
            <nav className="flex items-center gap-6">
              {navKeys.map(({ to, key }) => (
                <Link
                  key={to}
                  to={to}
                  className="text-ocean-dark/80 hover:text-ocean font-medium transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {t(key)}
                </Link>
              ))}
              <Link
                to="/#calculator"
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-accent text-white font-semibold hover:bg-accent-dark transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {t('getPrice')}
              </Link>
            </nav>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <div className="flex items-center rounded-lg border border-sand-light overflow-hidden">
              <button
                type="button"
                onClick={() => setLanguage('en')}
                className={`px-2 py-1 text-xs font-medium ${language === 'en' ? 'bg-ocean text-white' : 'bg-white text-ocean-dark/80'}`}
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => setLanguage('sw')}
                className={`px-2 py-1 text-xs font-medium ${language === 'sw' ? 'bg-ocean text-white' : 'bg-white text-ocean-dark/80'}`}
              >
                SW
              </button>
            </div>
            <button
              type="button"
              className="p-2 rounded-lg text-ocean hover:bg-sand-light transition-colors"
              aria-label="Toggle menu"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {mobileOpen && (
          <nav className="md:hidden mt-4 pt-4 border-t border-sand-light flex flex-col gap-2">
            {navKeys.map(({ to, key }) => (
              <Link
                key={to}
                to={to}
                className="py-2 text-ocean-dark/80 hover:text-ocean font-medium"
                onClick={() => setMobileOpen(false)}
              >
                {t(key)}
              </Link>
            ))}
            <Link
              to="/#calculator"
              className="mt-2 inline-flex justify-center px-5 py-2.5 rounded-lg bg-accent text-white font-semibold"
              onClick={() => setMobileOpen(false)}
            >
              {t('getPrice')}
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
