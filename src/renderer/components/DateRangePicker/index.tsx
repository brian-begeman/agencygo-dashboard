import { useState } from 'react';
import PropTypes from 'prop-types';

import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { DateRangePicker } from 'react-date-range';
import { addDays, subDays } from 'date-fns';

const Calendar = ({ onChange }: any) => {
  const [state, setState] = useState([
    {
      startDate: subDays(new Date(), 7),
      endDate: addDays(new Date(), 1),
      key: 'selection',
    },
  ]);

  const handleOnChange = (ranges: any) => {
    const { selection } = ranges;
    onChange(selection);
    setState([selection]);
  };

  return (
    <div style={{ position: 'absolute', background: 'black',width:'50%',boxShadow:' 2px 0px 10px gray' }}>
      <DateRangePicker
        maxDate={new Date()}
        onChange={handleOnChange}
        moveRangeOnFirstSelection={false}
        months={2}
        ranges={state}
        direction="horizontal"
      />
    </div>
  );
};

Calendar.propTypes = {
  onChange: PropTypes.func,
};

export default Calendar;
