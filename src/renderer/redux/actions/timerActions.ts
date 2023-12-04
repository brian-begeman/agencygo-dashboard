import {
  SET_TOTAL_WORK_TIME,
  SET_TOTAL_BREAK_TIME,
  CLOCK_OUT,
} from '../actionTypes';

export const setTotalWorkTime = () => ({
  type: SET_TOTAL_WORK_TIME,
});

export const setTotalBreakTime = () => ({
  type: SET_TOTAL_BREAK_TIME,
});

export const setClockOut = () => ({
  type: CLOCK_OUT,
});
