import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';
import {
  ACCEPTED_LANGUAGES,
  DEFAULT_LANGUAGE,
} from '../../src/shared/constants';

const ns = [
  'auth',
  'employees',
  'roles',
  'settings',
  'table',
  'translation',
  'content',
  'requests',
];
const supportedLngs = ACCEPTED_LANGUAGES;
const resources = ns.reduce((acc, n) => {
  supportedLngs.forEach((lng) => {
    if (!acc[lng]) acc[lng] = {};
    acc[lng] = {
      ...acc[lng],
      [n]: require(`../../public/locales/${lng}/${n}.json`),
    };
  });
  return acc;
}, {});

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: DEFAULT_LANGUAGE,
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    resources,
    detection: {
      convertDetectedLanguage: (lng: string) => {
        return lng.split('-')[0].toLowerCase() || DEFAULT_LANGUAGE;
      },
    },
  });

export default i18n;
