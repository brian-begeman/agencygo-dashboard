import { Box, Container } from '@mui/material';
import ShiftTable from './ShiftTable';
import { ChartLine } from './Chart';

export default function HomePage() {
  return (
    <Container maxWidth="lg" sx={{ height: '100vh', width: '100vw' }}>
      <ShiftTable />
      <ChartLine />
    </Container>
  );
}
