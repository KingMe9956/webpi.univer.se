// src/i18n.js
const translations = {
  en: {
    welcome: "Borderless Payments for Tomorrow's Economy",
    fee_calc: "Fee Calculator",
    //... other translations
  },
  es: {
    welcome: "Pagos sin fronteras para la economía del mañana",
    fee_calc: "Calculadora de tarifas",
    //... 
  }
};

class I18n {
  constructor(lang = 'en') {
    this.lang = lang;
    document.documentElement.lang = lang;
  }

  t(key) {
    return translations[this.lang][key] || key;
  }

  switchLanguage(lang) {
    this.lang = lang;
    window.dispatchEvent(new CustomEvent('languageChanged'));
  }
}

export const i18n = new I18n();