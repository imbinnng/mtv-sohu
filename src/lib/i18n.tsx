'use client';

import {createContext, useContext, useState, useEffect, ReactNode} from 'react';

export type Locale = 'zh' | 'en' | 'ja';

interface Translations {
  [key: string]: string | Translations;
}

interface TranslationContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string, fallback?: string) => string;
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

// Global translations storage
const translations: Record<Locale, Translations> = {
  zh: {},
  en: {},
  ja: {}
};

export function TranslationProvider({children}: {children: ReactNode}) {
  const [locale, setLocaleState] = useState<Locale>(() => {
    // Get locale from localStorage or browser preference
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('locale') as Locale;
      if (saved && ['zh', 'en', 'ja'].includes(saved)) {
        return saved;
      }
      
      const browserLocale = navigator.language.split('-')[0] as Locale;
      return ['zh', 'en', 'ja'].includes(browserLocale) ? browserLocale : 'zh';
    }
    return 'zh';
  });

  const [translationsLoaded, setTranslationsLoaded] = useState(false);

  useEffect(() => {
    const loadTranslations = async () => {
      try {
        // Import all translation files
        const [zhTranslations, enTranslations, jaTranslations] = await Promise.all([
          import('../../messages/locales/zh.json'),
          import('../../messages/locales/en.json'),
          import('../../messages/locales/ja.json')
        ]);
        
        translations.zh = zhTranslations.default;
        translations.en = enTranslations.default;
        translations.ja = jaTranslations.default;
        
        console.log('Translations loaded for locale:', locale);
        console.log('Available translations:', Object.keys(translations));
        setTranslationsLoaded(true);
      } catch (error) {
        console.error('Failed to load translations:', error);
        setTranslationsLoaded(true);
      }
    };

    loadTranslations();
  }, []);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    if (typeof window !== 'undefined') {
      localStorage.setItem('locale', newLocale);
      // Reload page to update all text
      window.location.reload();
    }
  };

  const t = (key: string, fallback?: string): string => {
    const keys = key.split('.');
    let value: any = translations[locale];
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        return fallback || key;
      }
    }
    
    return typeof value === 'string' ? value : fallback || key;
  };

  if (!translationsLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <TranslationContext.Provider value={{locale, setLocale, t}}>
      {children}
    </TranslationContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(TranslationContext);
  if (context === undefined) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }
  return context;
}

// Export types for use in components
export type {TranslationContextType};