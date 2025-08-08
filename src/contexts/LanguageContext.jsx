/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

// Language mapping between URL codes and translation folder names
const languageMapping = {
  en: 'English',
  km: 'Khmer', 
  zh: 'Chinese'
};

// Language configurations
const languages = [
  { code: 'en', name: 'English', displayName: 'English', flag: '/EnFlag.webp', lang: 'en' },
  { code: 'km', name: 'Khmer', displayName: 'ខ្មែរ', flag: '/KHFlag.webp', lang: 'km' },
  { code: 'zh', name: 'Chinese', displayName: '中文', flag: '/CnFlag.webp', lang: 'zh' }
];

export const LanguageProvider = ({ children }) => {
  const { lang } = useParams();
  const navigate = useNavigate();
  const [currentLanguage, setCurrentLanguage] = useState(languageMapping[lang] || 'English');
  const [translations, setTranslations] = useState({});

  const supportedLanguages = {
    en: 'English',
    km: 'ខ្មែរ',
    zh: '中文'
  };

  const loadTranslations = async (language, section) => {
    try {
      const translation = await import(`../assets/translations/${language}/${section}.json`);
      setTranslations(prev => ({
        ...prev,
        [`${language}_${section}`]: translation.default
      }));
      return translation.default;
    } catch (error) {
      console.error(`Failed to load translation for ${language}/${section}:`, error);
      return null;
    }
  };

  const getTranslation = (section) => {
    return translations[`${currentLanguage}_${section}`] || {};
  };

  const changeLanguage = async (newLangCode) => {
    const newLanguage = languageMapping[newLangCode];
    if (!newLanguage) return;

    setCurrentLanguage(newLanguage);
    
    // Navigate to new language URL
    navigate(`/${newLangCode}`, { replace: true });
    
    // Set HTML lang attribute for proper font rendering
    const selectedLang = languages.find(lang => lang.code === newLangCode);
    if (selectedLang) {
      document.documentElement.lang = selectedLang.lang;
    }
    
    // Save language preference to localStorage
    localStorage.setItem('preferred-language', newLanguage);
    
    // Preload all translations for the selected language
    const sections = ['navbar', 'sectionA', 'sectionB', 'sectionC', 'footer'];
    for (const section of sections) {
      await loadTranslations(newLanguage, section);
    }
  };

  // Update language when URL parameter changes
  useEffect(() => {
    if (lang && languageMapping[lang]) {
      const newLanguage = languageMapping[lang];
      if (newLanguage !== currentLanguage) {
        setCurrentLanguage(newLanguage);
        
        // Set HTML lang attribute
        const selectedLang = languages.find(l => l.code === lang);
        if (selectedLang) {
          document.documentElement.lang = selectedLang.lang;
        }
      }
    }
  }, [lang, currentLanguage]);

  // Load initial translations
  useEffect(() => {
    const loadInitialTranslations = async () => {
      const sections = ['navbar', 'sectionA', 'sectionB', 'sectionC', 'footer'];
      for (const section of sections) {
        await loadTranslations(currentLanguage, section);
      }
    };
    loadInitialTranslations();
  }, [currentLanguage]);

  // Get current language code from current language name
  const getCurrentLanguageCode = () => {
    return Object.keys(languageMapping).find(key => languageMapping[key] === currentLanguage) || 'en';
  };

  // Effect to add or remove Khmer font class
  useEffect(() => {
    if (currentLanguage === 'km') {
      document.body.classList.add('khmer-font');
    } else {
      document.body.classList.remove('khmer-font');
    }
  }, [currentLanguage]);

  return (
    <LanguageContext.Provider 
      value={{
        currentLanguage,
        currentLanguageCode: getCurrentLanguageCode(),
        changeLanguage,
        supportedLanguages,
        languages,
        loadTranslations,
        getTranslation
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};
