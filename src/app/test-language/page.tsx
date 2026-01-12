'use client';

import { useTranslation } from '@/lib/i18n';

export default function TestLanguagePage() {
  const { locale, t, setLocale } = useTranslation();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">
        {t('pages.home.title', 'MTV Video - Watch Latest TV Series, Movies & Variety Shows Online')}
      </h1>
      
      <div className="card bg-base-100 shadow-xl p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">
          {t('pages.home.recommended', 'Recommended Shows')}
        </h2>
        <p className="mb-4">
          Current locale: <strong>{locale}</strong>
        </p>
        
        <div className="flex gap-4">
          <button 
            className="btn btn-primary"
            onClick={() => setLocale('zh')}
          >
            中文
          </button>
          <button 
            className="btn btn-primary"
            onClick={() => setLocale('en')}
          >
            English
          </button>
          <button 
            className="btn btn-primary"
            onClick={() => setLocale('ja')}
          >
            日本語
          </button>
        </div>
      </div>

      <div className="card bg-base-100 shadow-xl p-6">
        <h3 className="text-lg font-semibold mb-4">Translation Test</h3>
        <div className="space-y-2">
          <p>Logo: {t('header.logo', 'MTV Video')}</p>
          <p>Search placeholder: {t('header.searchPlaceholder', 'Search videos...')}</p>
          <p>Login: {t('header.login', 'Login')}</p>
          <p>Download: {t('header.download', 'Download')}</p>
          <p>Home: {t('header.categories.home', 'Home')}</p>
          <p>Movies: {t('header.categories.movies', 'Movies')}</p>
        </div>
      </div>
    </div>
  );
}