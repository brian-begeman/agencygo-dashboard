import { Box, Stack } from '@mui/material';
import SearchUsers from 'renderer/components/SearchUsers';
import InvoicingTopContainer from './InvoicingTopContainer';
import Payouts from './Payouts';

export default function Invoicing() {
  return (
    <Box display="flex" gap="5px" padding={"6px"} sx={{background:'#121212'}}>
      <Stack width={'25%'}>
        <SearchUsers />
      </Stack>
      <Stack width={"75%"} display="flex" gap="10px" padding={"10px"} sx={{background:'#0c0c0c'}}>
        <InvoicingTopContainer />
        <Payouts/>
      </Stack>
    </Box>
  );
}
