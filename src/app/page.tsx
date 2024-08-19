import { Container, Typography } from '@mui/material';
import HanoiSimulator from './components/HanoiSimulator';

export default function Home() {
  return (
    <Container maxWidth="md">
      <Typography variant="h3" align="center" gutterBottom>
        Simulador de Torres de Hanoi
      </Typography>
      <HanoiSimulator />
    </Container>
  );
}
