import { Box, Stack, useTheme } from '@mui/material';
import SearchUsers from 'renderer/components/SearchUsers';
import InvoicingTopContainer from './InvoicingTopContainer';
import Payouts from './Payouts';
import Wrapper from './context/Wrapper';

export default function Invoicing() {
  const theme = useTheme();
  const isDarkTheme = theme.palette.mode === 'dark';

  return (
    <Wrapper>
      <Box
        display="flex"
        gap="5px"
        padding={'6px'}
        bgcolor={isDarkTheme ? '#292929' : '#EAF1FF'}
      >
        <Stack width={'25%'}>
          <SearchUsers />
        </Stack>
        <Stack width={'75%'} display="flex" gap="10px" padding={'10px'}>
          <InvoicingTopContainer />
          <Payouts />
        </Stack>
      </Box>
    </Wrapper>
  );
}
