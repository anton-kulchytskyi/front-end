import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';

import Footer from './Footer';
import Header from './Header';

const MainLayout = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        padding: '20px',
      }}
    >
      <Header />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          padding: 1,
        }}
      >
        <Outlet />
      </Box>

      <Footer />
    </Box>
  );
};

export default MainLayout;
