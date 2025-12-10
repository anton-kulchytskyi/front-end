import { BrowserRouter } from 'react-router-dom';

import AppRouter from './router/AppRouter';
import { ThemeModeProvider } from './theme/context/ThemeContext';

import { AppRouter } from '@/router';
import { theme } from '@/theme/theme';

const App = () => {
  return (
    <ThemeModeProvider>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </ThemeModeProvider>
  );
};

App.displayName = 'App';

export default App;
