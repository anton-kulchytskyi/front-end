import { CssBaseline, Container } from '@mui/material';
import HomePage from './pages/HomePage';

export default function App() {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg">
        <HomePage />
      </Container>
    </>
  );
}
