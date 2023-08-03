import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslations from "./locales/en/translations.json";
import arTranslations from "./locales/ar/translations.json";
import frTranslations from "./locales/fr/translations.json";

i18n.use(initReactI18next).init({
  fallbackLng: "en",
  lng: "en",
  resources: {
    en: {
      translations: enTranslations,
    },
    ar: {
      translations: arTranslations,
    },
    fr: {
      translations: frTranslations,
    },
  },
  ns: ["translations"],
  defaultNS: "translations",
});

i18n.languages = ["en", "ar", "fr"];

export default i18n;
