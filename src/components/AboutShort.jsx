import { useLanguage } from '../context/LanguageContext'
import { tr } from '../data/translations'

export default function AboutShort() {
  const { language } = useLanguage()
  const t = (key) => tr(language, key)

  return (
    <section id="about" className="section-padding bg-white scroll-mt-20">
      <div className="container-narrow max-w-3xl text-center">
        <h2 className="font-display font-bold text-2xl text-ocean mb-4">{t('aboutUs')}</h2>
        <p className="text-ocean-dark/90 leading-relaxed mb-4">
          {t('aboutIntro')}
        </p>
        <p className="text-ocean-dark/80 text-sm leading-relaxed">
          {t('aboutBrickTypes')}
        </p>
      </div>
    </section>
  )
}
