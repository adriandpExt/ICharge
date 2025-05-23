import i18n from "i18next";
import { initReactI18next } from "react-i18next";
// import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

import translation from "./locales";

const systemLanguage = navigator.language.replace("-", "");
console.log("System Language", systemLanguage);

const i18nConfig = {
  resources: translation,
  fallbackLng: "en",
  lng: systemLanguage,
  interpolation: {
    escapeValue: false,
  },
};

i18n.use(LanguageDetector).use(initReactI18next).init(i18nConfig);

export default i18n;
