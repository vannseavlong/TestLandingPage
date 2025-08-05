import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../../../contexts/LanguageContext.jsx';
import './LanguageDropdown.css';

const LanguageDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { currentLanguageCode, changeLanguage, languages } = useLanguage();
  const dropdownRef = useRef(null);

  const currentLang = languages.find(lang => lang.code === currentLanguageCode);

  const handleLanguageChange = (langCode) => {
    changeLanguage(langCode);
    setIsOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="language-dropdown" ref={dropdownRef}>
      <button 
        className="language-button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Select language"
      >
        <img 
          src={currentLang?.flag} 
          alt={`${currentLang?.name} flag`}
          className="language-flag-image"
        />
        <span className="language-name">{currentLang?.displayName}</span>
        <span className={`dropdown-arrow ${isOpen ? 'open' : ''}`}>
          <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1.5L7 7.5L13 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      </button>
      
      {isOpen && (
        <div className="language-menu">
          {languages.map((language) => (
            <button
              key={language.code}
              className={`language-option ${currentLanguageCode === language.code ? 'active' : ''}`}
              onClick={() => handleLanguageChange(language.code)}
            >
              <img 
                src={language.flag} 
                alt={`${language.name} flag`}
                className="language-flag-image"
              />
              <span className="language-name">{language.displayName}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageDropdown;
