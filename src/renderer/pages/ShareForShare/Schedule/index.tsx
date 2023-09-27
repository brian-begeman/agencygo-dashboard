import { Stack, Typography } from '@mui/material';
import { useState } from 'react';
import SearchUsers from 'renderer/components/SearchUsers';
import { format } from 'date-fns';
import theme from 'renderer/styles/muiTheme';

export default function Schedule() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <>
      <SearchUsers />
      <Stack gap="22px" marginLeft="32px" marginRight="16px" marginTop="16px">
        <Stack direction="row" justifyContent="space-between">
          <Typography color="#fff" fontSize="16px" fontWeight={500}>
            S4S Schedule
          </Typography>
          <Typography
            color={theme.palette.primary.main}
            fontSize="16px"
            fontWeight={500}
          >
            {format(selectedDate, 'dd MMMM, yyyy')}
          </Typography>
        </Stack>
      </Stack>
    </>
  );
}
