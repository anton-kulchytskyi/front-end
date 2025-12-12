import 'react-i18next';
import { resources, availableNamespaces } from './locales';

type Resources = (typeof resources)['en'];
type Namespaces = (typeof availableNamespaces)[number];

declare module 'react-i18next' {
  interface CustomTypeOptions {
    defaultNS: 'general';
    resources: Resource;
    ns: Namespaces;
  }
}

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'general';
    resources: Resources;
    ns: Namespaces;
  }
}
