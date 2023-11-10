import { Box, Stack, useTheme } from '@mui/material';
import BookkeepingTopContainer from './BookkeepingTopContainer';
import BookkeepingTable from './BookkeepingTable';

export default function BookKeeping() {

   const theme = useTheme();
   const isDarkTheme = theme.palette.mode === 'dark';
  return (
    <Box
      display="flex"
      gap="5px"
      padding={'6px'}
      sx={{ background: isDarkTheme ? '#121212' : '#fff' }}
    >
      <Stack
        width={'100%'}
        padding={'10px'}
        sx={{ background: isDarkTheme ? '#121212' : '#EAF1FF' }}
      >
        <BookkeepingTopContainer />
        <BookkeepingTable />
      </Stack>
    </Box>
  );
}
