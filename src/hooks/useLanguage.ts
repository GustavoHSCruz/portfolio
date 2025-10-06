import { useState, useEffect } from 'react';
import { Language, translations } from '../data/portfolio-data';

export function useLanguage() {
  const [language, setLanguage] = useState<Language>('en'); // Default to English

  useEffect(() => {
    // Check for saved language preference
    const savedLanguage = localStorage.getItem('portfolio-language') as Language;
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'pt')) {
      setLanguage(savedLanguage);
    }
  }, []);

  const changeLanguage = (newLanguage: Language) => {
    setLanguage(newLanguage);
    localStorage.setItem('portfolio-language', newLanguage);
  };

  const t = translations[language];

  return {
    language,
    changeLanguage,
    t,
    isEnglish: language === 'en',
    isPortuguese: language === 'pt'
  };
}