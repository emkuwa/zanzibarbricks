import { useLanguage } from '../context/LanguageContext'
import { tr } from '../data/translations'
import { DESTINATIONS } from '../data/pricing'

export default function ServiceAreas() {
  const { language } = useLanguage()
  const t = (key) => tr(language, key)

  return (
    <section id="service-areas" className="section-padding bg-ocean text-white scroll-mt-20">
      <div className="container-wide">
        <h2 className="font-display font-bold text-2xl text-center mb-6">{t('serviceAreas')}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {DESTINATIONS.map((name) => (
            <div
              key={name}
              className="flex items-center gap-3 rounded-xl bg-white/10 backdrop-blur px-5 py-4 border border-white/20"
            >
              <svg className="w-6 h-6 text-accent shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              </svg>
              <span className="font-medium">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
