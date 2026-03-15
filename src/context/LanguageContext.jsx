import { createContext, useContext, useState, useEffect } from 'react'

const STORAGE_KEY = 'zanzibarbricks-lang'

const LanguageContext = createContext({ language: 'en', setLanguage: () => {} })

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState('en')

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved === 'en' || saved === 'sw') setLanguageState(saved)
  }, [])

  const setLanguage = (lang) => {
    if (lang !== 'en' && lang !== 'sw') return
    setLanguageState(lang)
    localStorage.setItem(STORAGE_KEY, lang)
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}
