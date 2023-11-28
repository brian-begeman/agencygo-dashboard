import React, { useEffect, useState } from 'react';
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import moment from 'moment';
import { useTheme } from '@emotion/react';
import { DatePicker } from '@mui/x-date-pickers';
import CreateIcon from '@mui/icons-material/Create';
import { DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

import ProgressBar from '../Timebar';
import { getEmpAttendance } from 'services/attendance';
import { $trackprops, AttendanceTimeSheet } from '../Types/index.types';

const TimeSheetTable = ({ refresh, shiftDuration }: $trackprops) => {
  const theme = useTheme();
  const isDarkTheme = theme.palette.mode === 'dark';

  const [attedndanceTrackData, setAttendanceTrackData] = useState([]);
  const [valueLeft, setValueLeft] = useState(null);
  const [valueRight, setValueRight] = useState(null);
  const [both, setBoth] = useState(false);

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
      const response = await getEmpAttendance(valueLeft, valueRight);
      if (response.ack === 1) {
        setAttendanceTrackData(response.data);
      }
    } catch (error) {
      console.log('Error', error);
    }
  };
  const filterData = () => {
    if (valueLeft !== null && valueRight !== null) {
      setBoth(!both);
    }
  };
  useEffect(() => {
    getData();
  }, [both, refresh]);

  return (
    <div className="timesheet-container">
      <div className="timesheet-date-section-container">
        <div className="attendance-header mb-0">Attendance Track</div>
        <div className="timesheet-date-section">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <DemoItem>
                <DatePicker
                  className="left-date-picker"
                  slotProps={{
                    textField: { variant: 'standard' },
                  }}
                  sx={{
                    bgcolor: isDarkTheme ? '#121212' : '#EAF1FF',
                    maxWidth: '200px',
                  }}
                  value={valueLeft}
                  onChange={(newValue) => {
                    setValueLeft(moment(newValue.$d).format('YYYY-MM-DD'));
                    filterData();
                  }}
                />
              </DemoItem>
              <ArrowRightAltIcon style={{ marginRight: 19 }} />
              <DemoItem>
                <DatePicker
                  className="right-date-picker"
                  slotProps={{
                    textField: { variant: 'standard' },
                  }}
                  sx={{
                    bgcolor: isDarkTheme ? '#121212' : '#EAF1FF',
                    maxWidth: '200px',
                  }}
                  value={valueRight}
                  onChange={(newValue) => {
                    setValueRight(moment(newValue.$d).format('YYYY-MM-DD'));
                    filterData();
                  }}
                />
              </DemoItem>
            </div>
          </LocalizationProvider>
        </div>
      </div>

      <TableContainer>
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
              <TableCell>Check-in</TableCell>
              <TableCell>Time Sheet Notes</TableCell>
              <TableCell>Check-out Hours</TableCell>
              <TableCell>Total Hours</TableCell>
              <TableCell>Edit Log</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {attedndanceTrackData &&
              attedndanceTrackData?.map((e: AttendanceTimeSheet, i) => {
                return (
                  <TableRow
                    // sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
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
                      {moment(e.startDateTime).format('dddd, DD, YYYY h:mma')}
                    </TableCell>
                    <TableCell sx={{ color: '#FFFFFF' }}>
                      <ProgressBar
                        timeline={e.timeLine}
                        shiftDuration={shiftDuration}
                      />
                    </TableCell>
                    <TableCell sx={{ color: '#FFFFFF' }}>
                      {moment(e.endDateTime).format('h:mma')}
                    </TableCell>
                    <TableCell sx={{ color: '#FFFFFF' }}>
                      {formatTime(e.totalHours)}Hrs
                    </TableCell>

                    <TableCell sx={{ color: '#04A1FF' }}>
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '10px',
                        }}
                      >
                        <Box sx={{ cursor: 'pointer' }}>
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
  );
};

export default TimeSheetTable;
