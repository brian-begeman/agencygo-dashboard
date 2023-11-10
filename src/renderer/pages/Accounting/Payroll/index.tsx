import { Box, Stack, useTheme } from '@mui/material';
import PayrollTopContainer from './PayrollTopContainer';
import PayrollTable from './PayrollTable';

export default function Payroll() {
  const theme = useTheme();
  const isDarkTheme = theme.palette.mode === 'dark';

  return (
    <Box
      display="flex"
      gap="5px"
      padding={'6px'}
      bgcolor={isDarkTheme ? '#292929' : '#EAF1FF'}
    >
      <Stack width={'100%'} padding={'10px'}>
        <PayrollTopContainer />
        <PayrollTable />
      </Stack>
    </Box>
  );
}
