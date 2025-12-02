import { Routes, Route } from 'react-router-dom';

import { MainLayout } from '@/layout';
import {
  Home,
  About,
  Users,
  UserProfile,
  Companies,
  CompanyProfile,
  NotFound,
} from '@/pages';
import { ROUTES } from '@/router';

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
          element={<Users />}
        />
        <Route
          path={ROUTES.USER_PROFILE}
          element={<UserProfile />}
        />
        <Route
          path={ROUTES.COMPANIES}
          element={<Companies />}
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

AppRouter.displayName = 'AppRouter';

export default AppRouter;
