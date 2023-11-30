import React, { useEffect, useState } from 'react';
import { useTheme } from '@emotion/react';
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import moment from 'moment';
import CreateIcon from '@mui/icons-material/Create';

import { getAllTimeSheets } from 'services/attendance';
import { AttendanceTrackData } from '../Types/index.types';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DemoItem } from '@mui/x-date-pickers/internals/demo';
import { DatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs, { Dayjs } from 'dayjs';

const AttendenceTrackTable = ({ refresh }: { refresh: boolean }) => {
  const theme = useTheme();
  const isDarkTheme = theme.palette.mode === 'dark';

  const [attedndanceTrackData, setAttendanceTrackData] = useState([]);
  const [timevalue, setTimeValue] = useState<Dayjs | null>(dayjs(new Date()));

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const sec = Math.floor(seconds % 60);
    return `${hours.toString().padStart(2, '0')}:${minutes
      .toString()
      .padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
  };

  const getData = async () => {
    try {
      const response = await getAllTimeSheets();
      if (response.ack === 1) {
        setAttendanceTrackData(response.data);
      }
    } catch (error) {}
  };

  useEffect(() => {
    getData();
  }, [refresh]);

  return (
    <Box>
      <div className="attendance-container">
        <div className="attendence-tbl-head">
          <div className="attendance-header mb-0">Timesheet Reports</div>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <div
              style={{
                borderRadius: 5,
                paddingRight: 5,
              }}
            >
              <DemoItem>
                <DatePicker
                  className="timesheet-reports-date-picker"
                  sx={{
                    bgcolor: isDarkTheme ? '#121212' : '#EAF1FF',
                    maxWidth: '200px',
                  }}
                  value={timevalue}
                  onChange={(newValue) => {
                    setTimeValue(moment(newValue.$d).format('YYYY-MM-DD'));
                  }}
                />
              </DemoItem>
            </div>
          </LocalizationProvider>
        </div>

        <TableContainer style={{ maxHeight: 300 }}>
          <Table
            className="timesheet-table"
            sx={{
              minWidth: 650,
              borderRadius: 16,
              border: '1px solid #292929',
            }}
            aria-label="simple table"
          >
            <TableHead sx={{ bgcolor: isDarkTheme ? '#292929' : '#EAF1FF' }}>
              <TableRow>
                <TableCell>Date</TableCell>
                <TableCell>User Name</TableCell>
                <TableCell>Total Hours</TableCell>
                <TableCell>Break Hours</TableCell>
                <TableCell>Edit Log</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {attedndanceTrackData &&
                attedndanceTrackData?.map((e: AttendanceTrackData, i) => {
                  return (
                    <TableRow
                      sx={{
                        '& td, & th': {
                          borderTop: 0,
                          borderRight: 0,
                          borderLeft: 0,
                          borderColor: '#333',
                        },
                      }}
                    >
                      <TableCell sx={{ color: '#FFFFFF' }}>
                        {moment(e.startDateTime).format('DD/MM/YYYY')}
                      </TableCell>
                      <TableCell sx={{ color: '#FFFFFF' }}>
                        {'username'}
                      </TableCell>
                      <TableCell sx={{ color: '#FFFFFF' }}>
                        {formatTime(e.totalHours)}Hrs
                      </TableCell>
                      <TableCell sx={{ color: '#FFFFFF' }}>
                        {formatTime(e.breakHours)}Hrs
                      </TableCell>
                      <TableCell sx={{ color: '#04A1FF' }}>
                        <Box
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                          }}
                        >
                          <Box sx={{ cursor: 'pointer', color: '#04A1FF' }}>
                            <CreateIcon style={{ color: '#04A1FF' }} />
                          </Box>
                        </Box>
                      </TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </Box>
  );
};

export default AttendenceTrackTable;
