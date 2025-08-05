/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useState, useEffect } from 'react';

const TranslationContext = createContext();

const languages = [
  { code: 'en', name: 'English', displayName: 'English', flag: '/EnFlag.png', lang: 'en' },
  { code: 'km', name: 'ខ្មែរ', displayName: 'ខ្មែរ', flag: '/KHFlag.png', lang: 'km' },
  { code: 'zh', name: '中文', displayName: '中文', flag: '/CnFlag.png', lang: 'zh' }
];

export const useTranslation = () => {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }
  return context;
};

export const TranslationProvider = ({ children }) => {
  // Load saved language from localStorage or default to 'en'
  const [currentLanguage, setCurrentLanguage] = useState(() => {
    const savedLanguage = localStorage.getItem('preferred-language');
    return savedLanguage && languages.find(lang => lang.code === savedLanguage) ? savedLanguage : 'en';
  });
  const [translations, setTranslations] = useState({});

  const loadTranslations = async (language, section) => {
    // Only allow 'en', 'km', 'zh' for language
    const langCode = ['en', 'km', 'zh'].includes(language) ? language : 'en';
    try {
      const translation = await import(`../translations/${langCode}/${section}.json`);
      setTranslations(prev => ({
        ...prev,
        [`${langCode}_${section}`]: translation.default
      }));
      return translation.default;
    } catch (error) {
      console.error(`Failed to load translation for ${langCode}/${section}:`, error);
      return null;
    }
  };

  const getTranslation = (section) => {
    return translations[`${currentLanguage}_${section}`] || {};
  };

  const changeLanguage = async (language) => {
    // Only allow 'en', 'km', 'zh' for language
    const langCode = ['en', 'km', 'zh'].includes(language) ? language : 'en';
    setCurrentLanguage(langCode);
    // Save language preference to localStorage
    localStorage.setItem('preferred-language', langCode);
    // Set HTML lang attribute for proper font rendering
    const selectedLang = languages.find(lang => lang.code === langCode);
    if (selectedLang) {
      document.documentElement.lang = selectedLang.lang;
    }
    // Preload all translations for the selected language
    const sections = ['navbar', 'sectionA', 'sectionB', 'sectionC', 'footer'];
    for (const section of sections) {
      await loadTranslations(langCode, section);
    }
  };

  // Load initial translations
  useEffect(() => {
    const loadInitialTranslations = async () => {
      // Set initial HTML lang attribute
      const selectedLang = languages.find(lang => lang.code === currentLanguage);
      if (selectedLang) {
        document.documentElement.lang = selectedLang.lang;
      }
      const sections = ['navbar', 'sectionA', 'sectionB', 'sectionC', 'footer'];
      for (const section of sections) {
        await loadTranslations(currentLanguage, section);
      }
    };
    loadInitialTranslations();
  }, [currentLanguage]);

  return (
    <TranslationContext.Provider value={{
      currentLanguage,
      changeLanguage,
      loadTranslations,
      getTranslation,
      languages
    }}>
      {children}
    </TranslationContext.Provider>
  );
};
