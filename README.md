# React Frontend — Quiz Management Platform

Frontend application for the Quiz & Company Management System.  
Built using **React**, **TypeScript**, **Vite**, and **Material UI**, following production-grade structure and clean code practices.

## 🚀 Tech Stack

- **React 19**
- **TypeScript**
- **Vite**
- **Material UI (MUI v6)**
- **ESLint (Flat Config)**
- **Prettier**
- **Husky (pre-commit hooks)**
- **Lint-staged**
- **Modern folder-by-feature architecture**

---

## ⚙️ Installation

```bash
npm install
```

---

## ▶️ Running the application

```bash
npm run dev
```

Application will be available at:

```bash
http://localhost:5173
```

---

## 🧹 Code Quality Tools

### 🔍 ESLint

```bash
npm run lint
npm run lint:fix
```

### 🎨 Prettier

```bash
npm run format
npm run format:check
```

---

## 🛡 Pre-commit hooks (Husky)

This project uses **Husky + lint-staged** to maintain code quality.
Before each commit, the following will run automatically:

- ESLint (`eslint --fix`)
- Prettier (`prettier --write`)

This ensures clean and consistent code in every PR.

---

## 🔐 Environment variables

Create `.env` (not committed to git):

Environment variables must start with `VITE_` to be available inside the app.

Template: `.env.sample`:

```bash
VITE_API_URL=
```

---

## 📦 Scripts

```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run lint       # Run ESLint
npm run lint:fix   # Fix lint issues
npm run format     # Format with Prettier
npm run preview    # Preview production build
```

---
