import { Stack } from '@mui/material';
import Dashboard from 'renderer/components/Dashboard';
import theme from 'renderer/styles/muiTheme';
import ShiftTable from './components/ShiftTable';
import { ChartLine } from './components/Chart';
import Earnings from './components/Earnings';

export default function HomePage() {
  return (
    <Dashboard>
      <Stack
        width="98%"
        padding="16px"
        gap="16px"
        minHeight="95%"
        marginBottom="20px"
        sx={{
          marginInline: 'auto',
          borderRadius: '16px',
          backgroundColor: theme.palette.primary.contrastText,
        }}
      >
        <Earnings />
        <ShiftTable />
        <ChartLine />
      </Stack>
    </Dashboard>
  );
}
