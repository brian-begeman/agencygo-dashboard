import React, { useContext, useEffect, useState } from 'react';
import { useTheme } from '@emotion/react';
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
import CreateIcon from '@mui/icons-material/Create';

import { getAllTimeSheets } from 'services/attendance';
import { AttendanceTrackData } from '../Types/index.types';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DemoItem } from '@mui/x-date-pickers/internals/demo';
import { DatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs, { Dayjs } from 'dayjs';
import { AuthContext } from 'renderer/contexts/AuthContext';
import TimesheetEditModal from '../EditModal';
import { getAllTimlineData, getAllTimlineDataAll } from 'services/timeline';

const AttendenceTrackTable = ({ refresh }: { refresh: boolean }) => {
  const theme = useTheme();
  const isDarkTheme = theme.palette.mode === 'dark';
  const { userData } = useContext(AuthContext);

  const [attedndanceTrackData, setAttendanceTrackData] = useState([]);
  const [timevalue, setTimeValue] = useState(null);
  const [showEdit, setShowEdit] = useState(false);
  const [editData, setEditData] = useState({});

  const handleClose = (e) => {
    setEditData(e);
    setShowEdit(!showEdit);
  };

  const checkRole = () => {
    if (
      userData?.user?.role === 'manager' ||
      userData?.user?.role === 'admin'
    ) {
      return true;
    }
  };

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
      const response = await getAllTimlineDataAll();
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

          <div
            style={{
              padding: '2px 12px',
            }}
            className="timesheet-reports-date-picker"
          >
            <LocalizationProvider dateAdapter={AdapterDayjs}>
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
            </LocalizationProvider>
          </div>
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
                {checkRole() && <TableCell>Edit Log</TableCell>}
              </TableRow>
            </TableHead>
            <TableBody>
              {attedndanceTrackData &&
                attedndanceTrackData.map((e, i) => {
                  console;
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
                        {moment(e.startTime).format('DD/MM/YYYY')}
                      </TableCell>
                      <TableCell sx={{ color: '#FFFFFF' }}>
                        {`${e?.user?.[0]?.firstName} ${e?.user?.[0]?.lastName}`}
                      </TableCell>
                      <TableCell sx={{ color: '#FFFFFF' }}>
                        {e.type == 'working' ? formatTime(e.total) : '00:00:00'}
                        Hrs
                      </TableCell>
                      <TableCell sx={{ color: '#FFFFFF' }}>
                        {e.type == 'break' ? formatTime(e.total) : '00:00:00'}
                        Hrs
                      </TableCell>
                      {checkRole() && (
                        <TableCell sx={{ color: '#04A1FF' }}>
                          <Box
                            sx={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: '10px',
                            }}
                          >
                            <Box
                              sx={{ cursor: 'pointer', color: '#04A1FF' }}
                              onClick={() => handleClose(e)}
                            >
                              <CreateIcon style={{ color: '#04A1FF' }} />
                            </Box>
                          </Box>
                        </TableCell>
                      )}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      {
        <TimesheetEditModal
          showEdit={showEdit}
          handleClose={handleClose}
          editData={editData}
        />
      }
    </Box>
  );
};

export default AttendenceTrackTable;
