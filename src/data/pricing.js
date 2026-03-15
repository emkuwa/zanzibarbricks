// Single source for all prices and contact. All brick prices include FREE delivery.

export const WHATSAPP_NUMBER = '255716002790'

// 5" brick: price per brick by area (free delivery)
export const BRICK_5_PRICES_BY_AREA = {
  Paje: 1200,
  Bwejuu: 1300,
  Jambiani: 1300,
  Makunduchi: 1350,
  Michamvi: 1300,
}

// 6" brick: price per brick by area (free delivery)
export const BRICK_6_PRICES_BY_AREA = {
  Paje: 2300,
  Bwejuu: 2400,
  Jambiani: 2400,
  Makunduchi: 2400,
  Michamvi: 2400,
}

// 4" brick: price per brick by area (free delivery)
export const BRICK_4_PRICES_BY_AREA = {
  Paje: 1400,
  Bwejuu: 1500,
  Jambiani: 1500,
  Makunduchi: 1550,
  Michamvi: 1500,
}

export const MIN_ORDER = 200

export const DESTINATIONS = Object.keys(BRICK_5_PRICES_BY_AREA)

export const PAYMENT_OPTIONS = [
  { id: 'bank', label: 'Bank deposit (send receipt via WhatsApp)' },
  { id: 'cod', label: 'Cash on delivery' },
  { id: 'office', label: 'Cash at office' },
]

export function getPricePerBrick(brickType, destination) {
  if (brickType === '5"') return BRICK_5_PRICES_BY_AREA[destination] ?? 0
  if (brickType === '6"') return BRICK_6_PRICES_BY_AREA[destination] ?? 0
  if (brickType === '4"') return BRICK_4_PRICES_BY_AREA[destination] ?? 0
  return 0
}

// Bulk discount: 1% when purchase >= 4m TSH
export const BULK_DISCOUNT_THRESHOLD = 4_000_000
export const BULK_DISCOUNT_PERCENT = 1

export function calcTotal(brickType, qty, destination) {
  if (!qty || qty < MIN_ORDER) return null
  const price = getPricePerBrick(brickType, destination)
  if (!price) return null
  return price * qty
}

export function calcTotalWithDiscount(brickType, qty, destination) {
  const subtotal = calcTotal(brickType, qty, destination)
  if (subtotal == null) return null
  const hasDiscount = subtotal >= BULK_DISCOUNT_THRESHOLD
  const discountAmount = hasDiscount ? Math.round(subtotal * (BULK_DISCOUNT_PERCENT / 100)) : 0
  return { subtotal, discountPercent: hasDiscount ? BULK_DISCOUNT_PERCENT : 0, discountAmount, total: subtotal - discountAmount }
}

export function formatTsh(n) {
  return new Intl.NumberFormat('en-TZ', { maximumFractionDigits: 0 }).format(n) + ' TSH'
}
