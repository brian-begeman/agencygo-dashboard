import { Box, Container } from '@mui/material';
import ShiftTable from './ShiftTable';

export default function HomePage() {
  return (
    <Container maxWidth="lg" sx={{ height: '100vh', width: '100vw' }}>
      <ShiftTable />
    </Container>
  );
}
