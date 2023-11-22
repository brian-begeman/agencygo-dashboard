import React, { useState, useEffect } from 'react';
import './style.css'; // Make sure you have an Attendance.css file

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
      return 'red';
    }
    return 'grey';
  };

  // Create segments for the progress bar
  const segments = 9; // Change this to increase/decrease the number of segments
  const progressBarSegments = Array.from({ length: segments }, (_, index) => (
    <div
      key={index}
      className={`progress-segment ${segmentColor(index, segments)}`}
    />
  ));

  return (
    <div className="progress-bar">
      {progressBarSegments}
      <div className="progress-bar-time" style={{ width: `${progressPercentage}%` }} />
    </div>
  );
};

// Attendance Component
const Attendance = () => {
  const [isClockedIn, setClockedIn] = useState(false);
  const [isOnBreak, setOnBreak] = useState(false);
  const [time, setTime] = useState(0);
  const [timerActive, setTimerActive] = useState(false);

  useEffect(() => {
    let interval = null;

    if (timerActive) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timerActive]);

  const clockIn = () => {
    setClockedIn(true);
    setTimerActive(true);
  };

  const clockOut = () => {
    setClockedIn(false);
    setTimerActive(false);
  };

  const startBreak = () => {
    setOnBreak(true);
    setTimerActive(false);
  };

  const endBreak = () => {
    setOnBreak(false);
    setTimerActive(true);
  };

  // Convert seconds into hours, minutes, and seconds
  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const sec = Math.floor(seconds % 60);
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
  };

  return (
    <div className="attendance-container">
      <div className="attendance-header">Attendance</div>
      {!isClockedIn && <button className="clock-in" onClick={clockIn}>Clock In</button>}
      {isClockedIn && !isOnBreak && (
        <>
          <button className="clock-out" onClick={clockOut}>Clock Out</button>
          <button className="start-break" onClick={startBreak}>Start Break</button>
        </>
      )}
      {isOnBreak && <button className="end-break" onClick={endBreak}>End Break</button>}
      <button className="add-note">Add note</button>
      <div className="timer">{formatTime(time)} Hrs</div>
      <div className="date">17 Oct 2023</div>
      <ProgressBar time={time} isOnBreak={isOnBreak} />
    </div>
  );
};

export default Attendance;
