import { BrowserRouter } from 'react-router-dom';

import AppRouter from './router/AppRouter';
import { ThemeModeProvider } from './theme/context/ThemeContext';

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
