import React from 'react';
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { DemoItem } from '@mui/x-date-pickers/internals/demo';
import { useTheme } from '@emotion/react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import CreateIcon from '@mui/icons-material/Create';

const TimeSheetTable = () => {
  const ProgressBar = () => {
    const segments = 21; // Change this to increase/decrease the number of segments
    const arr2 = Array(segments).fill('');
    let pp = false;

    return (
      <>
        <div className="progress" style={{ display: 'flex' }}>
          {arr2.map(() => {
            return (
              <div style={{ display: 'flex' }}>
                <div
                  className="progress-bar progress-bar-stripped"
                  style={{
                    width: 10,
                    backgroundColor: pp ? 'gray' : '#66b400',
                    height: 2,
                  }}
                ></div>
                <div
                  className="progress-bar progress-bar-stripped"
                  style={{
                    width: 10,
                    backgroundColor: 'rgb(141, 3, 72)',
                    height: 2,
                  }}
                ></div>
              </div>
            );
          })}
        </div>
      </>
    );
  };

  const theme = useTheme();
  const isDarkTheme = theme.palette.mode === 'dark';

  return (
    <div className="timesheet-container">
      <div className="timesheet-date-section-container">
        <div className="attendance-header mb-0">Todays Timesheet</div>
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
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell sx={{ color: '#FFFFFF' }}>
                Monday,16,2023 10:43am
              </TableCell>
              <TableCell sx={{ color: '#FFFFFF' }}>
                <ProgressBar />
              </TableCell>
              <TableCell sx={{ color: '#FFFFFF' }}>8:43 pm</TableCell>
              <TableCell sx={{ color: '#FFFFFF' }}>06:59:04 Hrs</TableCell>

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
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default TimeSheetTable;
