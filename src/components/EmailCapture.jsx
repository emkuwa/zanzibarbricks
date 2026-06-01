import { useState } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { tr } from '../data/translations'

export default function EmailCapture() {
  const { language } = useLanguage()
  const t = (key) => tr(language, key)
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle') // idle | success | error

  const handleSubmit = (e) => {
    e.preventDefault()
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!re.test(email)) {
      setStatus('error')
      return
    }
    setStatus('success')
    setEmail('')
    setTimeout(() => setStatus('idle'), 4000)
  }

  return (
    <section className="bg-ocean py-12">
      <div className="container-wide text-center">
        <h2 className="font-display font-bold text-2xl text-white">{t('emailCaptureTitle')}</h2>
        <p className="mt-2 text-sand-light/90">{t('emailCaptureDesc')}</p>
        <form onSubmit={handleSubmit} className="mt-6 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => { setEmail(e.target.value); setStatus('idle') }}
            placeholder={t('emailPlaceholder')}
            className="flex-1 px-4 py-3 rounded-xl border border-white/20 bg-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-accent"
            required
          />
          <button
            type="submit"
            className="px-6 py-3 rounded-xl bg-accent text-white font-semibold hover:bg-accent-dark transition-colors whitespace-nowrap"
          >
            {t('emailSend')}
          </button>
        </form>
        {status === 'success' && (
          <p className="mt-3 text-green-300 text-sm">{t('emailSuccess')}</p>
        )}
        {status === 'error' && (
          <p className="mt-3 text-red-300 text-sm">{t('emailError')}</p>
        )}
      </div>
    </section>
  )
}
