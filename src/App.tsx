import { BrowserRouter } from 'react-router-dom';

import AppRouter from './router/AppRouter';
import { ThemeModeProvider } from './theme/context/ThemeContext';

export default function App() {
  return (
    <ThemeModeProvider>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </ThemeModeProvider>
  );
}
