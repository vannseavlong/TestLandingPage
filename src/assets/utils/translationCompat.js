// Migration utility to help components use the new LanguageContext
// This provides the same interface as the old TranslationContext
import { useLanguage } from '../../contexts/LanguageContext.jsx';

export const useTranslation = () => {
  const { getTranslation } = useLanguage();
  return { getTranslation };
};
