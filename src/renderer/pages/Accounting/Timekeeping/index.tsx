import { useContext, useEffect, useState } from 'react';
import { Box, Stack, useTheme } from '@mui/material';

import Attendance from './Attendance';
import HeaderBar from './HeaderBar';
import { AuthContext } from 'renderer/contexts/AuthContext';
import AttendanceTrackTable from './AttendanceTrackTable';
import TimesheetReportsTable from './TimesheetReportsTable';
import moment from 'moment';

export default function Timekeeping() {
  const theme = useTheme();
  const isDarkTheme = theme.palette.mode === 'dark';

  const [refresh, setRefresh] = useState(false);
  const toggleRefresh = () => {
    setRefresh(moment().toISOString());
  };

  const shiftStart = 10 * 60 * 60; // 10am in seconds
  const shiftEnd = 19 * 60 * 60; // 7pm in seconds

  const shiftDuration = shiftEnd - shiftStart;
  const [isDisable, setIsDisable] = useState(true);

  return (
    <>
      <Stack sx={{ bgcolor: isDarkTheme ? '#121212' : '#EAF1FF' }}>
        <HeaderBar isDisable={isDisable} setIsDisable={setIsDisable} />
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
          <TimesheetReportsTable refresh={refresh} isDisable={isDisable} />
        </Stack>
      </Box>

      <Stack
        sx={{ bgcolor: isDarkTheme ? '#121212' : '#EAF1FF' }}
        padding="15px 10px 12px 10px"
      >
        <AttendanceTrackTable refresh={refresh} shiftDuration={shiftDuration} />
      </Stack>
    </>
  );
}
