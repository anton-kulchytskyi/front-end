import { Routes, Route } from 'react-router-dom';

import { ROUTES } from './routes';

import CompaniesList from '@/modules/companies/pages/CompaniesList';
import CompanyProfile from '@/modules/companies/pages/CompanyProfile';
import MainLayout from '@/modules/core/layout/MainLayout';
import About from '@/modules/core/pages/About';
import Home from '@/modules/core/pages/Home';
import NotFound from '@/modules/core/pages/NotFound';
import StateDemoPage from '@/modules/core/pages/StateDemoPage';
import UserProfile from '@/modules/users/pages/UserProfile';
import UsersList from '@/modules/users/pages/UsersList';

const AppRouter = () => {
  return (
    <Routes>
      <Route
        path={ROUTES.HOME.path}
        element={<MainLayout />}
      >
        <Route
          index
          element={<Home />}
        />

        <Route
          path={ROUTES.ABOUT.path}
          element={<About />}
        />

        <Route
          path={ROUTES.USERS.path}
          element={<UsersList />}
        />
        <Route
          path={ROUTES.USER_PROFILE.path}
          element={<UserProfile />}
        />

        <Route
          path={ROUTES.COMPANIES.path}
          element={<CompaniesList />}
        />
        <Route
          path={ROUTES.COMPANY_PROFILE.path}
          element={<CompanyProfile />}
        />
        <Route
          path={ROUTES.STATE_DEMO.path}
          element={<StateDemoPage />}
        />

        <Route
          path="*"
          element={<NotFound />}
        />
      </Route>
    </Routes>
  );
};

export default AppRouter;
