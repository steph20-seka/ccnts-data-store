import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Fichiers de traduction
import translationFR from '../locales/fr/translation';
import translationEN from '../locales/en/translation';
import translationDE from '../locales/de/translation';
import translationES from '../locales/es/translation';

// Langues supportées
export const SUPPORTED_LANGUAGES = {
  fr: {
    code: 'fr',
    name: 'Français',
    flag: '🇫🇷',
    nativeName: 'Français'
  },
  en: {
    code: 'en',
    name: 'English',
    flag: '🇬🇧',
    nativeName: 'English'
  },
  de: {
    code: 'de',
    name: 'Deutsch',
    flag: '🇩🇪',
    nativeName: 'Deutsch'
  },
  es: {
    code: 'es',
    name: 'Español',
    flag: '🇪🇸',
    nativeName: 'Español'
  }
} as const;

export type LanguageCode = keyof typeof SUPPORTED_LANGUAGES;

// Ressources de traduction
const resources = {
  fr: { translation: translationFR },
  en: { translation: translationEN },
  de: { translation: translationDE },
  es: { translation: translationES },
};

// Configuration i18next
i18n
  // Détection automatique de la langue
  .use(LanguageDetector)
  // Intégration React
  .use(initReactI18next)
  // Initialisation
  .init({
    resources,
    fallbackLng: 'fr', // Langue par défaut
    lng: undefined, // Sera détectée automatiquement
    
    // Détection de la langue
    detection: {
      // Ordre de détection
      order: ['localStorage', 'navigator', 'htmlTag'],
      // Clé localStorage
      lookupLocalStorage: 'ccnts_language',
      // Cache
      caches: ['localStorage'],
    },

    interpolation: {
      escapeValue: false, // React échappe déjà les valeurs
    },

    react: {
      useSuspense: false,
    },
  });

export default i18n;