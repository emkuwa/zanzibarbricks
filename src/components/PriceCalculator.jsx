import { useState, useMemo } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { tr } from '../data/translations'
import { BRICK_5_PRICES_BY_AREA, BRICK_6_PRICES_BY_AREA, BRICK_4_PRICES_BY_AREA, MIN_ORDER, DESTINATIONS, formatTsh, getPricePerBrick, WHATSAPP_NUMBER, calcTotalWithDiscount, BULK_DISCOUNT_THRESHOLD } from '../data/pricing'

const PAYMENT_KEYS = { bank: 'paymentBank', cod: 'paymentCOD', office: 'paymentOffice' }

export default function PriceCalculator() {
  const { language } = useLanguage()
  const t = (key, reps) => tr(language, key, reps)

  const [brickType, setBrickType] = useState('5"')
  const [qty, setQty] = useState(MIN_ORDER)
  const [destination, setDestination] = useState('Paje')
  const [payment, setPayment] = useState('bank')

  const result = useMemo(() => calcTotalWithDiscount(brickType, qty, destination), [brickType, qty, destination])
  const pricePerBrick = getPricePerBrick(brickType, destination)
  const priceByArea = brickType === '5"' ? BRICK_5_PRICES_BY_AREA : brickType === '6"' ? BRICK_6_PRICES_BY_AREA : BRICK_4_PRICES_BY_AREA
  const paymentLabel = t(PAYMENT_KEYS[payment] || 'paymentBank')

  const displayTotal = result?.total ?? 0
  const whatsappMessage = result != null
    ? `Hello, I would like to order bricks:\n• Type: ${brickType} bricks\n• Quantity: ${qty} pcs\n• Destination: ${destination}\n• Total: ${formatTsh(displayTotal)} (free delivery)${result.discountAmount ? `\n• Discount: ${result.discountPercent}% bulk (from ${formatTsh(BULK_DISCOUNT_THRESHOLD)})` : ''}\n• Payment: ${paymentLabel}\n\nPlease confirm.`
    : 'Hello, I would like to order bricks for my construction project in Zanzibar.'
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`

  const qtyNum = parseInt(qty, 10) || 0
  const qtyValid = qtyNum >= MIN_ORDER

  return (
    <div id="calculator" className="max-w-2xl mx-auto rounded-2xl border-2 border-ocean/30 bg-white p-6 sm:p-8 shadow-lg scroll-mt-20">
      <h3 className="font-display font-bold text-xl text-ocean mb-6 text-center">
        {t('getYourPrice')}
      </h3>
      <p className="text-ocean-dark/70 text-center text-xs mb-4">
        {t('discountBulkFrom', { amount: formatTsh(BULK_DISCOUNT_THRESHOLD) })}
      </p>
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-ocean mb-2">{t('brickType')}</label>
          <select
            value={brickType}
            onChange={(e) => setBrickType(e.target.value)}
            className="w-full rounded-xl border border-sand-light bg-white px-4 py-3 text-ocean-dark focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none"
          >
            <option value='5"'>{t('brickOption', { size: '5' })}</option>
            <option value='6"'>{t('brickOption', { size: '6' })}</option>
            <option value='4"'>{t('brickOption', { size: '4' })}</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-ocean mb-2">{t('quantityMin', { min: MIN_ORDER })}</label>
          <input
            type="number"
            min={MIN_ORDER}
            value={qty}
            onChange={(e) => setQty(e.target.value)}
            className="w-full rounded-xl border border-sand-light bg-white px-4 py-3 text-ocean-dark focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none"
          />
          {!qtyValid && qtyNum > 0 && (
            <p className="text-accent text-sm mt-1">{t('minOrderIs', { min: MIN_ORDER })}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-ocean mb-2">{t('area')}</label>
          <select
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className="w-full rounded-xl border border-sand-light bg-white px-4 py-3 text-ocean-dark focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none"
          >
            {DESTINATIONS.map((d) => (
              <option key={d} value={d}>
                {d} — {formatTsh(priceByArea[d])}/brick
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-ocean mb-2">{t('payment')}</label>
          <select
            value={payment}
            onChange={(e) => setPayment(e.target.value)}
            className="w-full rounded-xl border border-sand-light bg-white px-4 py-3 text-ocean-dark focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none"
          >
            <option value="bank">{t('paymentBank')}</option>
            <option value="cod">{t('paymentCOD')}</option>
            <option value="office">{t('paymentOffice')}</option>
          </select>
        </div>

        {result != null && qtyValid && (
          <div className="rounded-xl bg-ocean/10 border border-ocean/20 p-6 space-y-2">
            <div className="flex justify-between text-ocean-dark">
              <span>{t('bricksLine')} ({qty} × {formatTsh(pricePerBrick)})</span>
              <span>{formatTsh(result.subtotal)}</span>
            </div>
            <div className="flex justify-between text-ocean-dark text-sm">
              <span>{t('delivery')}</span>
              <span className="text-accent font-medium">{t('deliveryFree')}</span>
            </div>
            {result.discountAmount > 0 && (
              <div className="flex justify-between text-ocean-dark text-sm">
                <span>{t('discountBulk', { amount: formatTsh(BULK_DISCOUNT_THRESHOLD) })}</span>
                <span className="text-accent font-medium">−{result.discountPercent}% (−{formatTsh(result.discountAmount)})</span>
              </div>
            )}
            <div className="flex justify-between font-display font-bold text-ocean text-lg pt-2 border-t border-ocean/20">
              <span>{t('priceDue')}</span>
              <span>{formatTsh(result.total)}</span>
            </div>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => { if (typeof gtag !== 'undefined') gtag('event', 'click', { event_category: 'WhatsApp', event_label: 'Calculator Submit' }) }}
              className="mt-4 flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-[#25D366] text-white font-semibold hover:opacity-90 transition-opacity"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              {t('shareOrderWhatsApp')}
            </a>
          </div>
        )}
      </div>
    </div>
  )
}
