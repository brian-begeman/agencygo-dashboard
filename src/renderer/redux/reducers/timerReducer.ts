import {
  SET_TOTAL_WORK_TIME,
  SET_TOTAL_BREAK_TIME,
  CLOCK_OUT,
} from '../actionTypes';

interface TimerState {
  workTime: number;
  breakTime: number;
}

const initialState: TimerState = {
  workTime: 0,
  breakTime: 0,
};

const timerReducer = (state = initialState, action: any) => {
  const { type, payload } = action;
  switch (type) {
    case SET_TOTAL_WORK_TIME:
      return { ...state, workTime: state.workTime + 1 };
    case SET_TOTAL_BREAK_TIME:
      return { ...state, breakTime: state.breakTime + 1 };
    case CLOCK_OUT:
      return { ...state, workTime: 0, breakTime: 0 };
    default:
      return state;
  }
};

export default timerReducer;
