import { en, type Dictionary } from './en';
import { es } from './es';

export type Locale = 'en' | 'es';

export const dictionaries: Record<Locale, Dictionary> = { en, es };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
