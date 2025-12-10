import { Routes, Route } from 'react-router-dom';

import { ROUTES } from './routes';

import CompaniesList from '@/modules/companies/pages/CompaniesList';
import CompanyProfile from '@/modules/companies/pages/CompanyProfile';
import MainLayout from '@/modules/core/layout/MainLayout';
import About from '@/modules/core/pages/About';
import Home from '@/modules/core/pages/Home';
import NotFound from '@/modules/core/pages/NotFound';
import UserProfile from '@/modules/users/pages/UserProfile';
import UsersList from '@/modules/users/pages/UsersList';

const AppRouter = () => {
  return (
    <Routes>
      <Route
        path={ROUTES.HOME}
        element={<MainLayout />}
      >
        <Route
          index
          element={<Home />}
        />

        <Route
          path={ROUTES.ABOUT}
          element={<About />}
        />

        <Route
          path={ROUTES.USERS}
          element={<UsersList />}
        />
        <Route
          path={ROUTES.USER_PROFILE}
          element={<UserProfile />}
        />

        <Route
          path={ROUTES.COMPANIES}
          element={<CompaniesList />}
        />
        <Route
          path={ROUTES.COMPANY_PROFILE}
          element={<CompanyProfile />}
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
