import ca from './ca.json';
import en from './en.json';
import es from './es.json';

/** Idiomas soportados. El primero es el idioma por defecto. */
export const languages = {
  ca: 'Català',
  en: 'English',
  es: 'Español',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'ca';

/** Estructura de las cadenas de traducción (tipada a partir del catalán). */
export type UIStrings = typeof ca;

const translations: Record<Lang, UIStrings> = { ca, en, es };

/**
 * Obtiene el código de idioma a partir de la URL de Astro.
 * Rutas: `/` (ca), `/en`, `/es`.
 */
export function getLangFromUrl(url: URL): Lang {
  const [, segment] = url.pathname.split('/');
  if (segment in languages) return segment as Lang;
  return defaultLang;
}

/** Devuelve el objeto de cadenas de traducción para un idioma dado. */
export function useTranslations(lang: Lang): UIStrings {
  return translations[lang] ?? translations[defaultLang];
}

/**
 * Construye una ruta con el prefijo de idioma correcto.
 * El idioma por defecto (ca) no lleva prefijo (prefixDefaultLocale: false).
 */
export function localizedPath(lang: Lang, path = ''): string {
  const clean = path.replace(/^\//, '');
  if (lang === defaultLang) return `/${clean}`;
  return `/${lang}/${clean}`.replace(/\/$/, '') || `/${lang}`;
}
