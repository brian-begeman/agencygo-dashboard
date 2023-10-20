import { Box, Stack } from '@mui/material';
import PayrollTopContainer from './PayrollTopContainer';
import PayrollTable from './PayrollTable';

export default function Payroll() {
  return (
    <Box display="flex" gap="5px" padding={"6px"} sx={{background:'#121212'}}>
      <Stack width={"100%"} padding={"10px"} sx={{background:'#0c0c0c'}}>
        <PayrollTopContainer/>
        <PayrollTable/>
      </Stack>
    </Box>
  );
}
