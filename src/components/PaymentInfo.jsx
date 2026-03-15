import { useLanguage } from '../context/LanguageContext'
import { tr } from '../data/translations'

export default function PaymentInfo() {
  const { language } = useLanguage()
  const t = (key) => tr(language, key)

  return (
    <section id="payment" className="section-padding bg-white scroll-mt-20">
      <div className="container-wide max-w-3xl">
        <h2 className="font-display font-bold text-2xl text-ocean text-center mb-6">
          {t('howToPay')}
        </h2>
        <p className="text-ocean-dark/80 text-center text-sm mb-8">
          {t('howToPayIntro')}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-xl border border-sand-light bg-sand-light/20 p-6">
            <h3 className="font-display font-semibold text-ocean mb-3 flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
              {t('bankDeposit')}
            </h3>
            <p className="text-ocean-dark/90 text-sm font-medium mb-1">{t('bankDetails')}</p>
            <p className="text-ocean-dark/80 text-sm">{t('bankBranch')}</p>
            <p className="text-ocean-dark/70 text-xs mt-2">{t('bankReceipt')}</p>
          </div>
          <div className="rounded-xl border border-sand-light bg-sand-light/20 p-6">
            <h3 className="font-display font-semibold text-ocean mb-3 flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v2M9 15v2m0 4h.01M17 15v2m0 4h.01M9 15h6m-6 2h.01M15 15h6m-6 2h.01" />
              </svg>
              {t('cashOnDelivery')}
            </h3>
            <p className="text-ocean-dark/80 text-sm">{t('cashOnDeliveryDesc')}</p>
          </div>
          <div className="rounded-xl border border-sand-light bg-sand-light/20 p-6">
            <h3 className="font-display font-semibold text-ocean mb-3 flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              </svg>
              {t('cashAtOffice')}
            </h3>
            <p className="text-ocean-dark/90 text-sm font-medium mb-1">{t('bankDetails')}</p>
            <p className="text-ocean-dark/80 text-sm">{t('officeAddress')}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
