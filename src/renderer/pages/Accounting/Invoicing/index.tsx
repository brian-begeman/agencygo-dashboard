import { Box, Stack, useTheme } from '@mui/material';
import SearchUsers from 'renderer/components/SearchUsers';
import InvoicingTopContainer from './InvoicingTopContainer';
import Payouts from './Payouts';

export default function Invoicing() {
const theme = useTheme();
const isDarkTheme = theme.palette.mode === 'dark';


  return (
    <Box display="flex" bgcolor={isDarkTheme ? '#292929' : '#EAF1FF'}>
      <Stack width={'25%'} bgcolor={isDarkTheme ? '#0C0C0C' : '#fff'}>
        <SearchUsers />
      </Stack>
      <Stack width={'75%'} display="flex"  padding={'10px'}>
        <InvoicingTopContainer />
        <Payouts />
      </Stack>
    </Box>
  );
}
