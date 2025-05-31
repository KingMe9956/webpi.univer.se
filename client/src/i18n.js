import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Translations
const resources = {
  en: {
    translation: {
      welcome: "Borderless Payments for Tomorrow's Economy",
      fee_calculator: "Fee Calculator",
      // ... more keys
    }
  },
  es: {
    translation: {
      welcome: "Pagos sin fronteras para la economía del mañana",
      fee_calculator: "Calculadora de tarifas",
      // ... more keys
    }
  },
  // Add more languages
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
