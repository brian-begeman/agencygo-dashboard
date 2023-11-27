import React, { useState, useEffect, useContext } from 'react';
import './style.css'; // Make sure you have an Attendance.css file
import { Box, Button, Typography, useTheme } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { createAttendance, updateAttendance } from 'services/attendance';
import { AuthContext } from 'renderer/contexts/AuthContext';
import moment from 'moment';

// ProgressBar Component
const ProgressBar = ({ time, isOnBreak }) => {
  // Assuming a 9-hour shift for simplicity, from 10am to 7pm (9 hours or 32400 seconds)
  const shiftStart = 10 * 60 * 60; // 10am in seconds
  const shiftEnd = 19 * 60 * 60; // 7pm in seconds
  const shiftDuration = shiftEnd - shiftStart;
  const timeWorked = time - shiftStart;
  const progressPercentage = Math.min((timeWorked / shiftDuration) * 100, 100);

  // Helper function to determine the color of each segment
  const segmentColor = (index, segments) => {
    const segmentTime = shiftDuration / segments;
    if (index < timeWorked / segmentTime) {
      return isOnBreak ? 'red' : 'green';
    } else if (index < time / segmentTime) {
      return isOnBreak ? 'red' : 'green';
    }
    return 'grey';
  };

  // Create segments for the progress bar
  const segments = 20; // Change this to increase/decrease the number of segments
  const progressBarSegments = Array.from({ length: segments }, (_, index) => (
    <div
      key={index}
      className={`progress-segment ${segmentColor(index, segments)}`}
    />
  ));

  return (
    <>
      <div className="shift-txt">Shift</div>
      <div className="progress-bar">
        {progressBarSegments}
        <div
          className="progress-bar-time"
          style={{ width: `${progressPercentage}%` }}
        />
      </div>
      <div className="progress-bar-bottom">
        <span>10am</span>
        <span>7pm</span>
      </div>
    </>
  );
};

// Attendance Component
const Attendance = () => {
  const [isClockedIn, setClockedIn] = useState(false);
  const [isOnBreak, setOnBreak] = useState(false);
  const [timerActive, setTimerActive] = useState(false);

  const [time, setTime] = useState(0);
  const [progress, setProgress] = useState(0);

  const [notesArray, setNotesArray] = useState([]);
  const [breaksArray, setBreaksArray] = useState([]);
  const [createData, setCreateData] = useState({
    startDateTime: '',
    endDateTime: '',
    notes: '',
  });
  const [breakTimerActive, setBreakTimerActive] = useState(false);
  const [breakTime, setBreakTime] = useState(0);
  const [breakProgress, setBreakProgress] = useState(0);

  const shiftStart = 10 * 60 * 60; // 10am in seconds
  const shiftEnd = 19 * 60 * 60; // 7pm in seconds
  const shiftDuration = shiftEnd - shiftStart;
  const totalSegments = 21;
  const segmentTime = shiftDuration / totalSegments;

  // State Functions
  const setStateFn = (setState, key, value) => {
    setState((prevState) => {
      return { ...prevState, [key]: value };
    });
  };
  const saveNotes = () => {
    setNotesArray([...notesArray, createData.notes]);
  };
  const saveBreaks = () => {
    console.log('breakTime==>', breakTime);
    console.log('breaksArray==>', breaksArray);

    if (breakTime === 0) {
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
    let interval = null;

    if (timerActive) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
        setProgress((prevTime) => prevTime + 1);
      }, 1000);
    } else {
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

  useEffect(() => {
    let interval = null;
    if (breakTimerActive) {
      interval = setInterval(() => {
        setBreakProgress((prevProgress) => {
          const newProgress = prevProgress + 100 / totalSegments;
          return newProgress > 100 ? 100 : newProgress;
        });
      }, segmentTime * 1000); // Update every segmentTime seconds
    }

    if (breakProgress >= 100) {
      clearInterval(interval); // Stop the interval when progress reaches 100%
    }

    return () => clearInterval(interval);
  }, [breakTimerActive]);

  const clockIn = () => {
    setClockedIn(true);
    setTimerActive(true);
    createAttendanceData();
    setStateFn(setCreateData, 'startDateTime', moment().format());
  };
  const clockOut = () => {
    setClockedIn(false);
    setTimerActive(false);
    setStateFn(setCreateData, 'endDateTime', moment().format());
    saveBreaks();
  };
  const startBreak = () => {
    setOnBreak(true);
    setTimerActive(false);
    setBreakTimerActive(true);
  };
  const endBreak = () => {
    setOnBreak(false);
    setTimerActive(true);
    setBreakTimerActive(false);
    saveBreaks();
  };

  // Convert seconds into hours, minutes, and seconds
  const formatTime = (seconds) => {
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
      console.log('Response', response);
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
        <ProgressBar time={time} isOnBreak={isOnBreak} />
      </div>
    </Box>
  );
};

export default Attendance;
