import type { TFunction } from 'i18next';

import type { Namespaces } from './locales';

/**
 * Universal t() function that works with any namespace
 */
export type AnyTFunction = TFunction<Namespaces, undefined>;
