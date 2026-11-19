import ca from './ca.json';
import en from './en.json';
import es from './es.json';

/** Idiomas soportados. El primero es el idioma por defecto. */
export const languages = {
  es: 'Español',
  ca: 'Català',
  en: 'English',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'es';

/** Estructura de las cadenas de traducción (tipada a partir del castellano). */
export type UIStrings = typeof es;

const translations: Record<Lang, UIStrings> = { es, ca, en };

/**
 * Obtiene el código de idioma a partir de la URL de Astro.
 * Rutas: `/` (es, por defecto), `/ca/`, `/en/`.
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
 * El idioma por defecto (es) no lleva prefijo (prefixDefaultLocale: false).
 * Los idiomas con prefijo terminan en `/` (`/ca/`, `/en/`): es la URL final
 * que sirve Cloudflare Pages y la que lista el sitemap, así que canonical,
 * hreflang y enlaces internos evitan la redirección 308 de `/ca` a `/ca/`.
 */
export function localizedPath(lang: Lang, path = ''): string {
  const clean = path.replace(/^\//, '');
  if (lang === defaultLang) return `/${clean}`;
  return `/${lang}/${clean}`;
}
