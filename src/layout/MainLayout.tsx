import { Box, Container } from '@mui/material';
import { Outlet } from 'react-router-dom';

import Footer from './Footer';
import Navbar from './Navbar';

const MainLayout = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <Navbar />
      <Container
        component="main"
        maxWidth="lg"
        sx={{
          flexGrow: 1,
          py: 4,
        }}
      >
        <Outlet />
      </Container>
      <Footer />
    </Box>
  );
};

MainLayout.displayName = 'MainLayout';

export default MainLayout;
