import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import { tr } from '../data/translations'
import SEO from '../components/SEO'
import { FAQ_TITLE, FAQ_DESCRIPTION } from '../data/seo'

const FAQ_ITEMS = [1, 2, 3, 4, 5, 6]

export default function FaqPage() {
  const { language } = useLanguage()
  const t = (key) => tr(language, key)

  return (
    <>
      <SEO title={FAQ_TITLE} description={FAQ_DESCRIPTION} />
      <div className="section-padding bg-white">
        <div className="container-wide max-w-3xl">
          <h1 className="font-display font-bold text-3xl text-ocean mb-2">{t('faqTitle')}</h1>
          <p className="text-ocean-dark/80 text-sm mb-8">{t('faqIntro')}</p>

          <dl className="space-y-6">
            {FAQ_ITEMS.map((i) => (
              <div key={i} className="rounded-xl border border-sand-light bg-sand-light/10 p-5">
                <dt className="font-semibold text-ocean-dark mb-2">{t(`faq${i}q`)}</dt>
                <dd className="text-ocean-dark/90 text-sm leading-relaxed">{t(`faq${i}a`)}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/#calculator"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-accent text-white font-semibold hover:bg-accent-dark transition-colors"
            >
              {t('getPrice')}
            </Link>
            <Link
              to="/order"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl border-2 border-ocean text-ocean font-semibold hover:bg-ocean/5 transition-colors"
            >
              {t('navOrder')}
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
