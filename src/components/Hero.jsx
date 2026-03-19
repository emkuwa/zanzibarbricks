import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import { tr } from '../data/translations'

export default function Hero() {
  const { language } = useLanguage()
  const t = (key) => tr(language, key)

  return (
    <section className="relative min-h-[75vh] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dbocsjsbq/image/upload/v1773876536/Gemini_Generated_Image_qm1zhsqm1zhsqm1z_k0zlu0.png')",
        }}
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-gradient-to-br from-ocean-dark/75 via-ocean/55 to-ocean-light/35"
        aria-hidden
      />

      <div className="relative container-wide section-padding text-center text-white z-10">
        <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl tracking-tight max-w-4xl mx-auto leading-tight">
          {t('heroTitle')}
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-sand-light/95 max-w-2xl mx-auto">
          {t('heroSub')}
        </p>
        <div className="mt-10 flex flex-wrap gap-4 justify-center">
          <Link
            to="/#calculator"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-accent text-white font-semibold text-lg shadow-lg hover:bg-accent-dark transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-ocean-dark"
          >
            {t('heroCta')}
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
          <Link
            to="/order"
            className="inline-flex items-center px-6 py-4 rounded-xl border-2 border-white/80 text-white font-semibold hover:bg-white/10 transition-colors"
          >
            {t('heroOrderForm')}
          </Link>
        </div>
      </div>
    </section>
  )
}
