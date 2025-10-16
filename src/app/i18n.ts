// i18n.ts
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import common_fr from "../../public/locales/fr/comon.json";
import common_en from "../../public/locales/en/comon.json";
import common_es from "../../public/locales/es/comon.json";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      fr: { common: common_fr },
      en: { common: common_en },
      es: { common: common_es },
    },
    lng: "fr",
    fallbackLng: "fr",
    defaultNS: "common",
    interpolation: { escapeValue: false },
  });

export default i18n;
