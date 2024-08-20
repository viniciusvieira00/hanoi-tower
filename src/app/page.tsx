import { Container, Typography, Box } from '@mui/material';
import HanoiSimulator from './components/HanoiSimulator';

export default function Home() {
  return (
    <Box
      sx={{
        backgroundImage: 'url("/danba-three-towers-960x640-1374933435.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Container maxWidth="md" sx={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', borderRadius: 2, p: 4 }}>
        <Typography variant="h3" align="center" gutterBottom>
          Simulador de Torres de Hanoi
        </Typography>
        <HanoiSimulator />
      </Container>
    </Box>
  );
}

