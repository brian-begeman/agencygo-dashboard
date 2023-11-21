import { Box, Stack } from '@mui/material';
import BookkeepingTopContainer from './BookkeepingTopContainer';
import BookkeepingTable from './BookkeepingTable';
import { BookkeepingPieCenter } from './BookkeepingPieCenter';

export default function BookKeeping() {
  return (
    <Box display="flex" gap="5px" padding={"6px"} sx={{background:'#121212'}}>
      <Stack width={"100%"} padding={"10px"} sx={{background:'#0c0c0c'}}>
        <BookkeepingTopContainer/>
        <BookkeepingPieCenter/>
        <BookkeepingTable/>
      </Stack>
    </Box>
  );
}
