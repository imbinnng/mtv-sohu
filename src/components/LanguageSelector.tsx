'use client';

import { useState } from 'react';
import { useTranslation } from '@/lib/i18n';
import { ChevronDown, Globe } from 'lucide-react';

export default function LanguageSelector() {
  const { locale, setLocale } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'zh', name: '中文', flag: '🇨🇳' },
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'ja', name: '日本語', flag: '🇯🇵' }
  ];

  const currentLanguage = languages.find(lang => lang.code === locale) || languages[0];

  const handleLanguageChange = (newLocale: string) => {
    setLocale(newLocale as any);
    setIsOpen(false);
  };

  return (
    <div className="dropdown dropdown-end">
      <div
        tabIndex={0}
        role="button"
        className="btn btn-ghost btn-circle"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Globe className="w-5 h-5" />
      </div>
      <ul
        tabIndex={0}
        className={`dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 mt-2 ${
          isOpen ? 'show' : ''
        }`}
      >
        {languages.map((language) => (
          <li key={language.code}>
            <button
              onClick={() => handleLanguageChange(language.code)}
              className={`flex items-center gap-3 p-2 rounded-lg hover:bg-base-200 ${
                locale === language.code ? 'bg-base-200 font-semibold' : ''
              }`}
            >
              <span className="text-xl">{language.flag}</span>
              <span>{language.name}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}