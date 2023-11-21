import { Box, Stack } from '@mui/material';
import BookLeftInvoice from './BookLeftInvoice';
import BookRightInvoice from './BookRightInvoice';


export default function BookkeepingTopContainer() {
  return (
    <Box display="flex" justifyContent={'space-between'} gap="5px" padding={"6px"} sx={{background:'#121212'}}>
      <Stack width={"30%"} padding={"10px"} sx={{background:'#0c0c0c'}}>
        {/* <BookkeepingTopContainer/> */}
 <BookLeftInvoice/>
      </Stack>
      <Stack width={"65%"} padding={"10px"} sx={{background:'#0c0c0c'}}>
        {/* <BookkeepingTopContainer/> */}
<BookRightInvoice/>
      </Stack>
    </Box>
  );
}
