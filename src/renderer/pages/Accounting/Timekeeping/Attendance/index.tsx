import React, { useState, useEffect } from 'react';
import './style.css'; // Make sure you have an Attendance.css file
import { Box, Button, Typography, useTheme } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import moment from 'moment';

import {
  createAttendance,
  updateAttendance,
  updateNotes,
} from 'services/attendance';
import { $props, CreateData, TimeLine } from '../Types/index.types';
import ProgressBar from '../Timebar';

// Attendance Component
const Attendance = ({ toggleRefresh, shiftDuration }: $props) => {
  const [isClockedIn, setClockedIn] = useState(false);
  const [isOnBreak, setOnBreak] = useState(false);
  const [timerActive, setTimerActive] = useState(false);
  const [time, setTime] = useState(0);
  const [breaksArray, setBreaksArray] = useState<number[]>([]);
  const [createData, setCreateData] = useState<CreateData>({
    startDateTime: moment(),
    endDateTime: moment(),
    notes: '',
    attendanceData: {},
  });
  const [breakTimerActive, setBreakTimerActive] = useState(false);
  const [breakTime, setBreakTime] = useState<number>(0);
  const [timeline, setTimeline] = useState<TimeLine[]>([]);

  const nowTime = `${moment().format('YYYY-MM-DD HH:mm:ss')}`;

  // State Functions
  const setStateFn = (setState: Function, key: string, value: any) => {
    setState((prevState: any) => {
      return { ...prevState, [key]: value };
    });
  };

  const saveBreaks = () => {
    if (breaksArray.length === 0) {
      setBreaksArray([...breaksArray, breakTime]);
    } else {
      setBreaksArray([
        ...breaksArray,
        breakTime - breaksArray[breaksArray.length - 1],
      ]);
    }
  };

  // Clock in timer
  useEffect(() => {
    let interval: any = null;

    if (timerActive) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
      setStateFn(setCreateData, 'endDateTime', nowTime);
    } else {
      clearInterval(interval);
    }
    if (time === shiftDuration) {
      updateAttendanceData({});
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timerActive]);

  // Break timer
  useEffect(() => {
    let interval: null | any = null;
    if (breakTimerActive) {
      interval = setInterval(() => {
        setBreakTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [breakTimerActive]);

  const clockIn = () => {
    setClockedIn(true);
    setTimerActive(true);
    createAttendanceData();
    setStateFn(setCreateData, 'startDateTime', nowTime);
    setTimeline([
      ...timeline,
      {
        startTime: new Date(),
        type: 'working',
        endTime: null,
      },
    ]);
  };
  const clockOut = () => {
    setClockedIn(false);
    setTimerActive(false);
    saveBreaks();
    timeline[timeline.length - 1].endTime = new Date();
    // timeline[timeline.length - 1] = {
    //   ...timeline[timeline.length - 1],
    //   endTime: new Date(),
    // };
    setTimeline([...timeline]);
    updateAttendanceData({ timeline });

    toggleRefresh();
  };
  const startBreak = () => {
    setOnBreak(true);
    setTimerActive(false);
    setBreakTimerActive(true);
    timeline[timeline.length - 1].endTime = new Date();

    // timeline[timeline.length - 1] = {
    //   ...timeline[timeline.length - 1],
    //   endTime: new Date(),
    // };
    let newTimeLine: TimeLine = {
      startTime: new Date(),
      type: 'break',
      endTime: null,
    };
    setTimeline([...timeline, newTimeLine]);
  };
  const endBreak = () => {
    setOnBreak(false);
    setTimerActive(true);
    setBreakTimerActive(false);
    saveBreaks();
    timeline[timeline.length - 1].endTime = new Date();
    // timeline[timeline.length - 1] = {
    //   ...timeline[timeline.length - 1],
    //   endTime: new Date(),
    // };
    setTimeline([
      ...timeline,
      {
        startTime: new Date(),
        type: 'working',
        endTime: null,
      },
    ]);
    updateAttendanceData({ timeline });
  };

  // Convert seconds into hours, minutes, and seconds
  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const sec = Math.floor(seconds % 60);
    return `${hours.toString().padStart(2, '0')}:${minutes
      .toString()
      .padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
  };

  const theme = useTheme();
  const isDarkTheme = theme.palette.mode === 'dark';

  const createAttendanceData = async () => {
    const payload = {
      startDateTime: createData.startDateTime,
      breakTime: breaksArray,
      notes: createData.notes,
      totalHours: time,
      breakHours: breakTime,
      timeLine: timeline,
    };
    try {
      const response = await createAttendance(payload);
      if (response.ack === 1) {
        setStateFn(setCreateData, 'attendanceData', response.data.data);
      }
    } catch (error) {}
  };
  const updateAttendanceData = async ({
    timeline,
  }: {
    timeline?: TimeLine[];
  }) => {
    const payload = {
      startDateTime: moment(createData.startDateTime).format(
        'YYYY-MM-DD HH:mm:ss'
      ),
      endDateTime: moment(createData.endDateTime).isValid()
        ? moment(createData.endDateTime).format('YYYY-MM-DD HH:mm:ss')
        : null,
      ...(timeline &&
        timeline.length > 0 && {
          breakTime: timeline
            .filter((e) => e.type === 'break')
            .map((e) => ({ startTime: e.startTime, endTime: e.endTime })),
        }),
      totalHours: time,
      breakHours: breakTime,
      timeLine: timeline,
    };
    try {
      await updateAttendance(payload, createData.attendanceData._id);
    } catch (error) {}
  };
  const updateNotesData = async () => {
    try {
      const payload = {
        notes: createData.notes,
      };
      const response = await updateNotes(
        payload,
        createData.attendanceData._id
      );
      if (response.ack === 1) {
        toggleRefresh();
      }
    } catch (error) {
      console.log('Error', error);
    }
  };
  const saveNotes = () => {
    updateNotesData();
  };

  return (
    <Box className="attendance-container">
      <div className="attendance-header">Attendance</div>
      <div className="attendence-layout">
        {!isClockedIn && (
          <div className="clock-in">
            <Button
              variant="contained"
              color="success"
              onClick={clockIn}
              startIcon={
                <AccessTimeIcon
                  sx={{ color: '#fff', marginTop: 0, fontSize: '14px' }}
                />
              }
            >
              <Typography
                style={{
                  textTransform: 'none',
                  color: '#fff',
                  fontSize: '14px',
                }}
              >
                Clock In
              </Typography>
            </Button>
          </div>
        )}
        {isClockedIn && !isOnBreak && (
          <>
            <div className="clock-out-btn-container">
              <Button
                variant="contained"
                color="error"
                onClick={clockOut}
                startIcon={
                  <AccessTimeIcon
                    sx={{ color: '#fff', marginTop: 0, fontSize: '14px' }}
                  />
                }
              >
                <Typography
                  style={{
                    textTransform: 'none',
                    color: '#fff',
                    fontSize: '14px',
                  }}
                >
                  Clock Out
                </Typography>
              </Button>
              <button className="start-break" onClick={startBreak}>
                Start Break
              </button>
            </div>
          </>
        )}
        {isOnBreak && (
          <div className="end-break-container">
            <button className="end-break" onClick={endBreak}>
              End Break
            </button>
          </div>
        )}
        <div className="add-notes" style={{ padding: 5 }}>
          <input
            type="text"
            placeholder="Add time sheet notes"
            style={{ fontSize: 12 }}
            value={createData.notes}
            onChange={(e) => setStateFn(setCreateData, 'notes', e.target.value)}
          />
          <button className="add-note" onClick={saveNotes}>
            Add note
          </button>
        </div>
        <div className="timer">{formatTime(time)} Hrs</div>
        <div className="date">17 Oct 2023</div>
        <div className="checked-in-msg">early by 6am</div>
        <div className="shift-txt">Shift</div>
        <ProgressBar timeline={timeline} shiftDuration={shiftDuration} />
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
            fontSize: 12,
          }}
        >
          <span>10am</span>
          <span>7pm</span>
        </div>
      </div>
    </Box>
  );
};

export default Attendance;
