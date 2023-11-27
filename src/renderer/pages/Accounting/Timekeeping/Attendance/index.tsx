import React, { useState, useEffect, useContext } from 'react';
import './style.css'; // Make sure you have an Attendance.css file
import { Box, Button, Typography, useTheme } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { createAttendance, updateAttendance } from 'services/attendance';
import { AuthContext } from 'renderer/contexts/AuthContext';
import moment from 'moment';

// ProgressBar Component
const ProgressBar = ({ timeline, shiftDuration }) => {
  let progressedWidth = 0;
  return (
    <>
      <div style={{ width: '100%' }}>
        {timeline.map((t) => {
          if (t.endTime != null) {
            const widthDiff = t.endTime - t.startTime;
            const width = (widthDiff / 1000 / shiftDuration) * 100;

            progressedWidth += width;
            return (
              <div
                style={{
                  width: `${width}%`,
                  borderTop: 'dashed',
                  float: 'left',
                  borderColor: t.type == 'break' ? 'red' : 'green',
                }}
              ></div>
            );
          } else {
            const widthDiff: number = new Date().valueOf() - t.startTime;
            const width = (widthDiff / 1000 / shiftDuration) * 100;
            progressedWidth += width;
            return (
              <div
                style={{
                  width: `${width}%`,
                  borderTop: 'dashed',
                  float: 'left',
                  borderColor: t.type == 'break' ? 'red' : 'green',
                }}
              ></div>
            );
          }
        })}
      </div>

      <div
        style={{
          width: `${100 - progressedWidth}%`,
          borderTop: 'dashed',
          float: 'left',
          borderColor: 'gray',
        }}
      ></div>
    </>
  );
};

// Attendance Component
const Attendance = ({ attendanceHandler }) => {
  interface TimeLine {
    startTime: Date;
    type: 'working' | 'break';
    endTime: Date | null;
  }
  const [isClockedIn, setClockedIn] = useState(false);
  const [isOnBreak, setOnBreak] = useState(false);
  const [timerActive, setTimerActive] = useState(false);

  const [time, setTime] = useState(0);
  const [progress, setProgress] = useState(0);

  const [notesArray, setNotesArray] = useState<String[]>([]);
  const [breaksArray, setBreaksArray] = useState([]);
  const [createData, setCreateData] = useState({
    startDateTime: '',
    endDateTime: '',
    notes: '',
    attendanceData: {},
  });
  const [breakTimerActive, setBreakTimerActive] = useState(false);
  const [breakTime, setBreakTime] = useState(0);
  const [breakProgress, setBreakProgress] = useState(0);
  const [timeline, setTimeline] = useState<TimeLine[]>([]);

  const shiftStart = 10 * 60 * 60; // 10am in seconds
  const shiftEnd = 19 * 60 * 60; // 7pm in seconds
  const shiftDuration = shiftEnd - shiftStart;
  const totalSegments = 21;
  const segmentTime = shiftDuration / totalSegments;
  const nowTime = `${moment().format('YYYY-MM-DD HH:mm:ss')}`;

  // State Functions
  const setStateFn = (setState: Function, key: string, value: any) => {
    setState((prevState: any) => {
      return { ...prevState, [key]: value };
    });
  };

  const saveNotes = () => {
    const newNotes = [...notesArray, createData.notes];
    setNotesArray(newNotes);
    setStateFn(setCreateData, 'notes', '');
    updateAttendanceData(true, newNotes);
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
        setProgress((prevTime) => prevTime + 1);
      }, 1000);
      setStateFn(setCreateData, 'endDateTime', nowTime);
    } else {
      clearInterval(interval);
    }
    if (time === shiftDuration) {
      updateAttendanceData();
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timerActive]);

  // Break timer
  useEffect(() => {
    let interval = null;
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
    updateAttendanceData();
  };
  const startBreak = () => {
    setOnBreak(true);
    setTimerActive(false);
    setBreakTimerActive(true);
    timeline[timeline.length - 1] = {
      ...timeline[timeline.length - 1],
      endTime: new Date(),
    };
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
    updateAttendanceData();
    timeline[timeline.length - 1] = {
      ...timeline[timeline.length - 1],
      endTime: new Date(),
    };
    setTimeline([
      ...timeline,
      {
        startTime: new Date(),
        type: 'working',
        endTime: null,
      },
    ]);
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

  // Api Calls
  const { userData } = useContext(AuthContext);

  const createAttendanceData = async () => {
    const payload = {
      employeeId: userData?._id ?? '654de7f6af3ec91f3cbd0000',
      startDateTime: createData.startDateTime,
      breakTime: breaksArray,
      notes: notesArray,
      totalHours: time,
      breakHours: breakTime,
    };
    try {
      const response = await createAttendance(payload);
      if (response.ack === 1) {
        setStateFn(setCreateData, 'attendanceData', response.data.data);
        attendanceHandler(response.data.data);
      }
    } catch (error) {
      console.log('Error', error);
    }
  };
  const updateAttendanceData = async (isNote = false, notes: String[] = []) => {
    const payload = {
      employeeId: userData?._id ?? '654de7f6af3ec91f3cbd0000',
      startDateTime: moment(createData.startDateTime).format(
        'YYYY-MM-DD HH:mm:ss'
      ),
      endDateTime: moment(createData.endDateTime).isValid()
        ? moment(createData.endDateTime).format('YYYY-MM-DD HH:mm:ss')
        : null,
      breakTime: timeline
        .filter((e) => e.type === 'break')
        .map((e) => ({ startTime: e.startTime, endTime: e.endTime })),
      notes: isNote ? notes : notesArray,
      totalHours: time,
      breakHours: breakTime,
    };
    try {
      const response = await updateAttendance(
        payload,
        createData.attendanceData._id
      );
      if (response.ack === 1) {
        attendanceHandler(response.data);
      }
    } catch (error) {
      console.log('Error', error);
    }
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
          <button
            className="add-note"
            onClick={() => saveNotes(createData.notes)}
          >
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
