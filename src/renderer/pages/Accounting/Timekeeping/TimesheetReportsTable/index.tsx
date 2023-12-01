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

import {
  getAllTimeSheets,
  getAttendanceByFilter,
  updateTimesheet,
} from 'services/attendance';
import { AttendanceTrackData } from '../Types/index.types';

import dayjs, { Dayjs } from 'dayjs';
import { AuthContext } from 'renderer/contexts/AuthContext';
import TimesheetEditModal from '../EditModal';
import { getAllTimlineData, getAllTimlineDataAll } from 'services/timeline';

import { DatePicker } from '@mui/x-date-pickers';
import { DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

const TimesheetReportsTable = ({
  refresh,
  isDisable,
}: {
  refresh: boolean;
  isDisable: boolean;
}) => {
  const theme = useTheme();
  const isDarkTheme = theme.palette.mode === 'dark';
  const { userData } = useContext(AuthContext);

  const [attedndanceTrackData, setAttendanceTrackData] = useState([]);
  const [showEdit, setShowEdit] = useState(false);
  const [editData, setEditData] = useState({});

  const [valueLeft, setValueLeft] = useState(null);
  const [valueRight, setValueRight] = useState(null);

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
      let isEmp = false;
      if (checkRole()) {
        if (isDisable) {
          isEmp = true;
        } else {
          isEmp = false;
        }
      } else {
        isEmp = true;
      }

      const response = await getAttendanceByFilter(
        valueLeft,
        valueRight,
        isEmp
      );
      if (response.ack === 1) {
        setAttendanceTrackData(response.data);
      }
    } catch (error) {}
  };

  const updatetimeSheetData = async (payload) => {
    try {
      const response = await updateTimesheet(payload);
    } catch (err) {
      console.log('Error');
    }
  };

  useEffect(() => {
    getData();
  }, [refresh, isDisable]);

  useEffect(() => {
    if (valueLeft && valueRight) {
      getData();
    }
  }, [valueLeft, valueRight]);

  console.log('attedndanceTrackData', attedndanceTrackData);

  return (
    <Box>
      <div className="attendance-container">
        <div className="attendence-tbl-head">
          <div className="attendance-header mb-0">Timesheet Reports</div>

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
                    }}
                  />
                </DemoItem>
              </div>
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
                        {`${e?.users?.[0]?.firstName} ${e?.users?.[0]?.lastName}`}
                      </TableCell>
                      <TableCell sx={{ color: '#FFFFFF' }}>
                        {formatTime(e.totalHours) ?? '00:00:00'}
                        Hrs
                      </TableCell>
                      <TableCell sx={{ color: '#FFFFFF' }}>
                        {formatTime(e.breakHours) ?? '00:00:00'}
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

      <TimesheetEditModal
        showEdit={showEdit}
        handleClose={handleClose}
        editData={editData}
        getData={getData}
      />
    </Box>
  );
};

export default TimesheetReportsTable;
