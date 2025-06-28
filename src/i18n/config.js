const locales = {
  en: () => import('./locales/en.json'),
  es: () => import('./locales/es.json'),
  zh: () => import('./locales/zh.json'),
  ar: () => import('./locales/ar.json')
};

export async function loadLocale(locale = 'en') {
  const module = await locales[locale]();
  return module.default;
}

export function detectLocale(req) {
  return req.acceptsLanguages(Object.keys(locales)) || 'en';
}