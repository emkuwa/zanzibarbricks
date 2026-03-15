import PriceCalculator from './PriceCalculator'
import { useLanguage } from '../context/LanguageContext'
import { tr } from '../data/translations'
import { BRICK_5_PRICES_BY_AREA, BRICK_6_PRICES_BY_AREA, BRICK_4_PRICES_BY_AREA, MIN_ORDER, DESTINATIONS, formatTsh } from '../data/pricing'

export default function Products() {
  const { language } = useLanguage()
  const t = (key, reps) => tr(language, key, reps)

  return (
    <section id="products" className="section-padding bg-sand-light/20 scroll-mt-20">
      <div className="container-wide">
        <h2 className="font-display font-bold text-2xl sm:text-3xl text-ocean text-center mb-2">
          {t('pricesOrder')}
        </h2>
        <p className="text-ocean-dark/80 text-center text-sm mb-6">
          {t('minOrderPcs', { min: MIN_ORDER })}
        </p>

        <div className="max-w-4xl mx-auto rounded-2xl border-2 border-ocean/20 bg-white p-6 sm:p-8 shadow-sm mb-8">
          <h3 className="font-display font-semibold text-ocean text-center mb-4 text-lg">
            {t('brickPricesByArea')}
          </h3>
          <div className="space-y-6">
            <div>
              <p className="text-ocean-dark/90 text-sm font-semibold mb-1">{t('brickSize5')}</p>
              <p className="text-ocean-dark/70 text-xs mb-2">{t('brick5Use')}</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {DESTINATIONS.map((area) => (
                  <div key={area} className="rounded-lg bg-sand-light/30 py-2 px-3 flex justify-between items-center text-sm">
                    <span className="text-ocean-dark/90">{area}</span>
                    <span className="font-display font-bold text-ocean">{formatTsh(BRICK_5_PRICES_BY_AREA[area])}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="text-ocean-dark/90 text-sm font-semibold mb-1">{t('brickSize6')}</p>
              <p className="text-ocean-dark/70 text-xs mb-2">{t('brick6Use')}</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {DESTINATIONS.map((area) => (
                  <div key={area} className="rounded-lg bg-sand-light/30 py-2 px-3 flex justify-between items-center text-sm">
                    <span className="text-ocean-dark/90">{area}</span>
                    <span className="font-display font-bold text-ocean">{formatTsh(BRICK_6_PRICES_BY_AREA[area])}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="text-ocean-dark/90 text-sm font-semibold mb-1">{t('brickSize4')}</p>
              <p className="text-ocean-dark/70 text-xs mb-2">{t('brick4Use')}</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {DESTINATIONS.map((area) => (
                  <div key={area} className="rounded-lg bg-sand-light/30 py-2 px-3 flex justify-between items-center text-sm">
                    <span className="text-ocean-dark/90">{area}</span>
                    <span className="font-display font-bold text-ocean">{formatTsh(BRICK_4_PRICES_BY_AREA[area])}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <p className="text-center text-ocean-dark/70 text-xs mt-4">{t('freeDeliveryAreas')}</p>
        </div>

        <PriceCalculator />
      </div>
    </section>
  )
}
