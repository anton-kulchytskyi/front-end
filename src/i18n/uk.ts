import { type TranslationSchema } from './en';

export const uk: TranslationSchema = {
  general: {
    noResultsTitle: 'Нічого не знайдено',
    noResultsDescription:
      'Спробуйте змінити пошуковий запит або параметри фільтрів і повторіть спробу.',
  },

  nav: {
    home: 'Головна',
    about: 'Про нас',
    users: 'Користувачі',
    companies: 'Компанії',
    signIn: 'Увійти',
  },

  homePage: {
    welcome: 'Ласкаво просимо до Meduzzen',
    subtitle: 'Система для квізів та керування компаніями',
    learnMore: 'Дізнатись більше',
    viewUsers: 'Переглянути користувачів',
  },

  aboutPage: {
    title: 'Про Meduzzen',
    subtitle:
      'Платформа для інтерактивних квізів та ефективного управління компаніями.',
    paragraph1:
      'Meduzzen створено для оптимізації бізнес-процесів та розвитку взаємодії всередині команди через динамічні квізи. Інтуїтивний інтерфейс дозволяє легко створювати та керувати квізами, призначати їх користувачам, відстежувати результати та отримувати корисну аналітику.',
    paragraph2:
      'Система підходить для onboarding-процесів, оцінки навичок та створення захопливого навчального середовища. Meduzzen допомагає ефективніше керувати командою та підвищувати залученість працівників.',
    backToHome: 'Повернутись на головну',
  },

  usersPage: {
    title: 'Користувачі',
    subtitle: 'Перегляд та керування зареєстрованими користувачами.',

    navigation: {
      backToUsers: 'Назад до списку користувачів',
    },
    actions: {
      edit: 'Редагувати',
      delete: 'Видалити',
      createUser: 'Створити нового користувача',
    },

    filters: {
      searchPlaceholder: 'Пошук за ім’ям або email...',
      role: 'Фільтр за роллю',
      status: 'Статус',
    },

    status: {
      all: 'Усі',
      active: 'Активні',
      inactive: 'Неактивні',
    },

    labels: {
      createdAt: 'Створено',
      updatedAt: 'Оновлено',
      id: 'ID',
    },

    roles: {
      admin: 'Адміністратор',
      owner: 'Власник',
      member: 'Учасник',
      user: 'Користувач',
    },

    profile: {
      defaultTitle: 'Завантаження користувача...',
    },
  },

  companiesPage: {
    title: 'Компанії',
    subtitle: 'Перегляньте всі компанії в системі.',

    navigation: {
      backToCompanies: 'Назад до списку компаній',
    },

    actions: {
      createCompany: 'Створити нову компанію',
      edit: 'Редагувати',
      delete: 'Видалити',
    },

    filters: {
      searchPlaceholder: 'Пошук за назвою компанії...',
      visibility: 'Видимість',
    },

    status: {
      all: 'Усі',
      visible: 'Видимі',
      hidden: 'Приховані',
    },

    labels: {
      createdAt: 'Створено',
      updatedAt: 'Оновлено',
      id: 'ID',
      owner: 'Власник',
    },

    profile: {
      defaultTitle: 'Завантаження компанії...',
    },
  },

  footer: {
    copyright: 'Усі права захищено',
    aboutLink: 'Про нас',
    separator: ' · ',
  },
};
