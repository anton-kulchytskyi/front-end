// --- EN ---
import aboutEN from './en/aboutPage.json';
import companiesEN from './en/companiesPage.json';
import companyProfileEN from './en/companyProfile.json';
import footerEN from './en/footer.json';
import generalEN from './en/general.json';
import homeEN from './en/homePage.json';
import navEN from './en/nav.json';
import userProfileEN from './en/userProfile.json';
import usersEN from './en/usersPage.json';
// --- UK ---
import aboutUK from './uk/aboutPage.json';
import companiesUK from './uk/companiesPage.json';
import companyProfileUK from './uk/companyProfile.json';
import footerUK from './uk/footer.json';
import generalUK from './uk/general.json';
import homeUK from './uk/homePage.json';
import navUK from './uk/nav.json';
import userProfileUK from './uk/userProfile.json';
import usersUK from './uk/usersPage.json';

export const resources = {
  en: {
    general: generalEN,
    nav: navEN,
    homePage: homeEN,
    aboutPage: aboutEN,
    usersPage: usersEN,
    companiesPage: companiesEN,
    companyProfile: companyProfileEN,
    userProfile: userProfileEN,
    footer: footerEN,
  },
  uk: {
    general: generalUK,
    nav: navUK,
    homePage: homeUK,
    aboutPage: aboutUK,
    usersPage: usersUK,
    companiesPage: companiesUK,
    companyProfile: companyProfileUK,
    userProfile: userProfileUK,
    footer: footerUK,
  },
} as const;

export const availableNamespaces = Object.keys(resources.en) as Array<
  keyof typeof resources.en
>;

export type Namespaces = (typeof availableNamespaces)[number];
