import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

import translationEN from 'data/locales/translationEN.json';
import translationUA from 'data/locales/translationUA.json';

const resources = {
  en: {
    translation: translationEN,
  },
  ua: {
    translation: translationUA,
  },
} as const;

i18n.use(Backend).use(LanguageDetector).use(initReactI18next).init({ resources, fallbackLng: 'en' });
