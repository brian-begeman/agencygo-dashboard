import {
  Box,
  Button,
  ButtonGroup,
  Stack,
  Typography,
  useTheme,
} from '@mui/material';
import Attendance from './Attendance';
import AttendenceTrackTable from './AttendenceTrackTable';
import TimeSheetTable from './TimeSheetTable';
import { useState } from 'react';

export default function Timekeeping() {
  const theme = useTheme();
  const isDarkTheme = theme.palette.mode === 'dark';
  const [isDisable, setIsDisable] = useState(true);

  const [attandaceData, setAttendanceData] = useState([]);

  const attendanceHandler = (param: any) => {
    console.log('param', param);
    setAttendanceData([param]);
  };

  return (
    <>
      <Stack sx={{ bgcolor: isDarkTheme ? '#121212' : '#EAF1FF' }}>
        <Box
          className="timekeep-topbar"
          sx={{ bgcolor: isDarkTheme ? '#000' : '#fff' }}
        >
          <div>TimeKeeping</div>
          <div>
            <ButtonGroup sx={{ bgcolor: isDarkTheme ? '#121212' : '#EAF1FF' }}>
              <Button
                variant="contained"
                color="primary"
                sx={{
                  marginLeft: 'auto',
                  width: 'max-content',
                  height: '32px',
                  borderRadius: '3px',
                  boxShadow: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px',
                }}
                disabled={isDisable}
                onClick={() => setIsDisable(!isDisable)}
              >
                <Typography
                  sx={{
                    fontSize: '10px',
                    fontWeight: 500,
                    color: '#fff',
                    marginTop: '2px',
                  }}
                >
                  Employees
                </Typography>
              </Button>
              <Button
                variant="contained"
                color="primary"
                sx={{
                  marginLeft: 'auto',
                  width: 'max-content',
                  height: '32px',
                  borderRadius: '3px',
                  boxShadow: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px',
                }}
                disabled={!isDisable}
                onClick={() => setIsDisable(!isDisable)}
              >
                <Typography
                  sx={{
                    fontSize: '10px',
                    fontWeight: 500,
                    color: '#fff',
                    marginTop: '2px',
                  }}
                >
                  Manager
                </Typography>
              </Button>
            </ButtonGroup>
          </div>
        </Box>
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
          <Attendance attendanceHandler={(e) => attendanceHandler(e)} />
        </Stack>

        <Stack
          width={'70%'}
          sx={{ background: isDarkTheme ? '#121212' : '#EAF1FF' }}
        >
          <AttendenceTrackTable attandaceData={attandaceData} />
        </Stack>
      </Box>

      <Stack
        sx={{ bgcolor: isDarkTheme ? '#121212' : '#EAF1FF' }}
        padding="15px 10px 12px 10px"
      >
        <TimeSheetTable attandaceData={attandaceData} />
      </Stack>
    </>
  );
}
