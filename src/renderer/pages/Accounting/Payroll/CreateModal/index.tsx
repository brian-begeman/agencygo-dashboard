import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Divider, Stack } from '@mui/material';
import dayjs, { Dayjs } from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { StaticDateRangePicker } from '@mui/x-date-pickers-pro/StaticDateRangePicker';
import { PickersShortcutsItem } from '@mui/x-date-pickers/PickersShortcuts';
import { DateRange } from '@mui/x-date-pickers-pro';


const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 700,
  borderRadius: '10px',
  bgcolor: '#121212',
  color: '#fff',
  boxShadow: 24,
  p: 2,
};

export default function CreateInvoiceModal({ open, setOpen }: any) {
  const handleClose = () => setOpen(false);
  const shortcutsItems: PickersShortcutsItem<DateRange<Dayjs>>[] = [
    {
      label: 'This Week',
      getValue: () => {
        const today = dayjs();
        return [today.startOf('week'), today.endOf('week')];
      },
    },
    {
      label: 'Last Week',
      getValue: () => {
        const today = dayjs();
        const prevWeek = today.subtract(7, 'day');
        return [prevWeek.startOf('week'), prevWeek.endOf('week')];
      },
    },
    {
      label: 'Last 7 Days',
      getValue: () => {
        const today = dayjs();
        return [today.subtract(7, 'day'), today];
      },
    },
    {
      label: 'Current Month',
      getValue: () => {
        const today = dayjs();
        return [today.startOf('month'), today.endOf('month')];
      },
    },
    {
      label: 'Next Month',
      getValue: () => {
        const today = dayjs();
        const startOfNextMonth = today.endOf('month').add(1, 'day');
        return [startOfNextMonth, startOfNextMonth.endOf('month')];
      },
    },
    { label: 'Reset', getValue: () => [null, null] },
  ];
  return (
    <Modal
      sx={{backdropFilter:"blur(4px)"}}
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            margin: '10px 0px',
          }}
        >
        
         
        </Box>
        <Divider sx={{ bgcolor: '#292929' }} />
        <LocalizationProvider  dateAdapter={AdapterDayjs}>
      <StaticDateRangePicker
        slotProps={{
          shortcuts: {
            items: shortcutsItems,
          },
          actionBar: { actions: [] },
        }}
        calendars={2}
      />
    </LocalizationProvider>
        <Box
          display={'flex'}
          alignItems={'center'}
          justifyContent={'flex-end'}
          gap={'8px'}
          padding={'20px 10px'}
        >
          <Button
            sx={{ color: '#fff', textTransform: 'capitalize' }}
            onClick={handleClose}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            sx={{ color: '#fff', textTransform: 'capitalize' }}
            onClick={handleClose}
          >
            Apply
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}
