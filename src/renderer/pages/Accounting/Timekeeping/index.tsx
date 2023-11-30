import { useContext, useEffect, useState } from 'react';
import { Box, Stack, useTheme } from '@mui/material';

import AttendenceTrackTable from './AttendenceTrackTable';
import TimeSheetTable from './TimeSheetTable';
import Attendance from './Attendance';
import HeaderBar from './HeaderBar';
import { AuthContext } from 'renderer/contexts/AuthContext';

export default function Timekeeping() {
  const theme = useTheme();
  const isDarkTheme = theme.palette.mode === 'dark';

  const [refresh, setRefresh] = useState(false);
  const toggleRefresh = () => {
    setRefresh(!refresh);
  };

  const shiftStart = 10 * 60 * 60; // 10am in seconds
  const shiftEnd = 19 * 60 * 60; // 7pm in seconds
  const shiftDuration = shiftEnd - shiftStart;

  return (
    <>
      <Stack sx={{ bgcolor: isDarkTheme ? '#121212' : '#EAF1FF' }}>
        <HeaderBar />
      </Stack>

      <Box
        display="flex"
        gap="10px"
        padding="15px 10px 12px 10px"
        sx={{ background: isDarkTheme ? '#121212' : '#EAF1FF' }}
      >
        <Stack
          width={'30%'}
          sx={{ background: isDarkTheme ? '#121212' : '#EAF1FF' }}
        >
          <Attendance
            toggleRefresh={toggleRefresh}
            shiftDuration={shiftDuration}
          />
        </Stack>

        <Stack
          width={'70%'}
          sx={{ background: isDarkTheme ? '#121212' : '#EAF1FF' }}
        >
          <AttendenceTrackTable refresh={refresh} />
        </Stack>
      </Box>

      <Stack
        sx={{ bgcolor: isDarkTheme ? '#121212' : '#EAF1FF' }}
        padding="15px 10px 12px 10px"
      >
        <TimeSheetTable refresh={refresh} shiftDuration={shiftDuration} />
      </Stack>
    </>
  );
}
