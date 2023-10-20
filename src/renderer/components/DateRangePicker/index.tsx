import { useState } from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
// import 'react-date-range/dist/styles.css';
// import 'react-date-range/dist/theme/default.css';
import { DateRangePicker } from 'react-date-range';
import { addDays, subDays } from 'date-fns';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  boxShadow: 24,
  p: 4,
};

type CalendarProps = {
  open?: boolean;
  setOpen?: any;
  onChange?: any;
};

const DatePicker = ({ onChange }: any) => {
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
    <div>
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

DatePicker.propTypes = {
  onChange: PropTypes.func,
};

export default function Calendar({
  open = false,
  setOpen,
  onChange,
}: CalendarProps) {
  const handleClose = () => setOpen(false);
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <DatePicker onChange={onChange} />
      </Box>
    </Modal>
  );
}
