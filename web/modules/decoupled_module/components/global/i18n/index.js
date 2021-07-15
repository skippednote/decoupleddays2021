import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      greeting: "How are you",
    },
  },
  es: {
    translation: {
      greeting: "Comos estas",
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: window.location.pathname.split("/")[1] || "en",
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
