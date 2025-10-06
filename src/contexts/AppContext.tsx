import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Language, translations } from '../data/portfolio-data';

export type Theme = 'light' | 'dark';
export type ColorScheme = 'blue' | 'purple' | 'green' | 'orange' | 'red';

interface AppContextType {
  // Language
  language: Language;
  changeLanguage: (newLanguage: Language) => void;
  t: typeof translations.en;
  isEnglish: boolean;
  isPortuguese: boolean;
  
  // Theme
  theme: Theme;
  toggleTheme: () => void;
  isDark: boolean;
  isLight: boolean;
  
  // Color Scheme
  colorScheme: ColorScheme;
  changeColorScheme: (newColorScheme: ColorScheme) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

interface AppProviderProps {
  children: ReactNode;
}

export function AppProvider({ children }: AppProviderProps) {
  const [language, setLanguage] = useState<Language>('en');
  const [theme, setTheme] = useState<Theme>('dark');
  const [colorScheme, setColorScheme] = useState<ColorScheme>('blue');

  // Initialize language from localStorage
  useEffect(() => {
    const savedLanguage = localStorage.getItem('portfolio-language') as Language;
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'pt')) {
      setLanguage(savedLanguage);
    }
  }, []);

  // Initialize theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('portfolio-theme') as Theme;
    if (savedTheme && (savedTheme === 'light' || savedTheme === 'dark')) {
      setTheme(savedTheme);
    }
  }, []);

  // Initialize color scheme from localStorage
  useEffect(() => {
    const savedColorScheme = localStorage.getItem('portfolio-color-scheme') as ColorScheme;
    if (savedColorScheme && ['blue', 'purple', 'green', 'orange', 'red'].includes(savedColorScheme)) {
      setColorScheme(savedColorScheme);
    }
  }, []);

  // Apply theme and color scheme to document
  useEffect(() => {
    const root = document.documentElement;
    
    // Apply theme classes
    if (theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
    }
    
    // Apply color scheme classes
    root.classList.remove('scheme-blue', 'scheme-purple', 'scheme-green', 'scheme-orange', 'scheme-red');
    root.classList.add(`scheme-${colorScheme}`);
  }, [theme, colorScheme]);

  const changeLanguage = (newLanguage: Language) => {
    setLanguage(newLanguage);
    localStorage.setItem('portfolio-language', newLanguage);
  };

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('portfolio-theme', newTheme);
  };

  const changeColorScheme = (newColorScheme: ColorScheme) => {
    setColorScheme(newColorScheme);
    localStorage.setItem('portfolio-color-scheme', newColorScheme);
  };

  const value: AppContextType = {
    // Language
    language,
    changeLanguage,
    t: translations[language],
    isEnglish: language === 'en',
    isPortuguese: language === 'pt',
    
    // Theme
    theme,
    toggleTheme,
    isDark: theme === 'dark',
    isLight: theme === 'light',
    
    // Color Scheme
    colorScheme,
    changeColorScheme,
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}

// Mantém compatibilidade com o hook antigo
export function useLanguage() {
  const { language, changeLanguage, t, isEnglish, isPortuguese } = useApp();
  return { language, changeLanguage, t, isEnglish, isPortuguese };
}