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

  const { userData } = useContext(AuthContext);
  const checkRole = () => {
    if (
      userData?.user?.role === 'manager' ||
      userData?.user?.role === 'admin'
    ) {
      return true;
    }
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
          <TimesheetReportsTable refresh={refresh} />
        </Stack>
      </Box>

      {checkRole() &&
        <Stack
          sx={{ bgcolor: isDarkTheme ? '#121212' : '#EAF1FF' }}
          padding="15px 10px 12px 10px"
        >
        <AttendanceTrackTable refresh={refresh} shiftDuration={shiftDuration} />
      </Stack>}

    </>
  );
}
