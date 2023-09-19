import { Container } from '@mui/material';
import ShiftTable from './components/ShiftTable';
import { ChartLine } from './components/Chart';
import Earnings from './components/Earnings';

export default function HomePage() {
  return (
    <Container maxWidth="lg" sx={{ height: '100vh', width: '100vw' }}>
      <Earnings />
      <ShiftTable />
      <ChartLine />
    </Container>
  );
}
