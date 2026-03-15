import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import { tr } from '../data/translations'
import { DESTINATIONS } from '../data/pricing'

const quickLinkKeys = [
  { to: '/', key: 'navHome' },
  { to: '/#calculator', key: 'navPrices' },
  { to: '/#payment', key: 'navPayment' },
  { to: '/order', key: 'navOrder' },
]

export default function Footer() {
  const { language } = useLanguage()
  const t = (key) => tr(language, key)

  return (
    <footer className="bg-ocean-dark text-white">
      <div className="container-wide section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          <div>
            <h3 className="font-display font-bold text-lg text-white mb-2">Zanzibar Bricks</h3>
            <p className="text-sand-light/90 text-sm">{t('brandOf')}</p>
            <p className="text-sand-light/80 text-xs mt-1">{t('buildingTagline')}</p>
          </div>
          <div>
            <h4 className="font-semibold text-sand uppercase tracking-wider text-xs mb-3">{t('serviceAreas')}</h4>
            <ul className="space-y-1">
              {DESTINATIONS.map((area) => (
                <li key={area}><span className="text-white/80 text-sm">{area}</span></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-sand uppercase tracking-wider text-xs mb-3">{t('links')}</h4>
            <ul className="space-y-1">
              {quickLinkKeys.map(({ to, key }) => (
                <li key={to}>
                  <Link to={to} className="text-white/80 hover:text-sand text-sm transition-colors">{t(key)}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-sand uppercase tracking-wider text-xs mb-3">{t('paymentOfficeFooter')}</h4>
            <p className="text-white/80 text-sm">{t('footerBank')}</p>
            <p className="text-white/80 text-sm mt-1">{t('footerOffice')}</p>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-white/10 text-center text-white/60 text-xs">
          &copy; {new Date().getFullYear()} {t('copyright')}
        </div>
      </div>
    </footer>
  )
}
