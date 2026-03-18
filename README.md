# Zanzibar Bricks

Web app for **Zanzibar Bricks**: brick supply and delivery in Paje, Bwejuu, Jambiani, Makunduchi, Michamvi. Customers see prices, get a total, and order via WhatsApp.

## Run

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Auto-push to GitHub

To have every edit automatically committed and pushed to GitHub:

```bash
npm run auto-push
```

Leave this running in a terminal while you work. After 15 seconds without new changes, it runs `git add .`, `git commit`, and `git push`. Stop with Ctrl+C.

- **This project only.** For other Cursor projects, copy `scripts/watch-and-push.js` and add `"auto-push": "node scripts/watch-and-push.js"` to their `package.json` scripts.

## Change prices & contact

**One place only:** `src/data/pricing.js`

- `BRICK_PRICES` — per brick (5", 6", 4")
- `DELIVERY_FEES` — per area (Paje, Bwejuu, etc.)
- `MIN_ORDER` — minimum pieces
- `WHATSAPP_NUMBER` — for order button and calculator

All prices on the site come from this file.

## Structure

```
src/
├── data/pricing.js    # All prices + WhatsApp number
├── components/
│   ├── Layout.jsx
│   ├── Header.jsx
│   ├── Footer.jsx
│   ├── Hero.jsx
│   ├── AboutShort.jsx
│   ├── ServiceAreas.jsx
│   ├── Products.jsx      # Pricing table + calculator
│   ├── PriceCalculator.jsx
│   └── WhatsAppButton.jsx
├── pages/
│   ├── HomePage.jsx     # Hero → Prices → Areas → About
│   └── OrderPage.jsx    # Same prices, order via WhatsApp
├── App.jsx
├── main.jsx
└── index.css
```

## Flow

1. **Home:** Hero → Prices (table + calculator) → Service areas → Short about.
2. **Get price:** Choose brick type, qty, destination → total shown → “Share order via WhatsApp”.
3. **Order page:** Same options + name/phone → total → “Send order via WhatsApp”.
4. Floating WhatsApp button for quick contact.

## SEO

- **index.html:** Meta title, description, keywords, canonical, Open Graph, Twitter Card, theme-color, JSON-LD (LocalBusiness).
- **Per page:** Order page uses its own title and description via `src/components/SEO.jsx`.
- **Subdomain:** Site is set for **https://bricks.zanzibaba.com**. Alternatives: `tofali.zanzibaba.com`, `zanzibarbricks.zanzibaba.com`. Configure DNS (CNAME or A record for the chosen subdomain).
- **Before going live:** Add `public/og-image.jpg` (1200×630 px) for social sharing. To use a different subdomain, update `SITE_URL` in `src/data/seo.js` and find-replace in `index.html`.
