import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Divider, Switch, styled } from '@mui/material';
import { InputWithLabel } from 'renderer/components/Settings/Wallet/Common/ModalComponents';
import { useState } from 'react';

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

export default function CustomInvoiceModal({ open, setOpen }: any) {
  const handleClose = () => setOpen(false);
  const frequencyFilter = ['Daily', 'Weekly', 'Biweekly', 'Monthly', 'Yearly'];
  return (
    <Modal
      sx={{ backdropFilter: 'blur(4px)' }}
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
          <Typography> Create Invoice </Typography>
          <Typography onClick={handleClose} sx={{ cursor: 'pointer' }}>
            X
          </Typography>
        </Box>
        <Divider sx={{ bgcolor: '#292929' }} />
        <Box
          display={'flex'}
          justifyContent={'space-between'}
          alignItems={'end'}
        >
          <Box>
            <Typography fontSize={'18px'}>To</Typography>
            <Typography sx={{ fontSize: '14px' }}>
              Client name
              <br />
              Address here
              <br />
              client@email.com
            </Typography>
          </Box>
          <Box>
            <Typography sx={{ fontSize: '14px' }}>
              Invoice No. 001 <br />
              04, Sep 2023
            </Typography>
          </Box>
        </Box>
        <Box
          display={'flex'}
          justifyContent={'space-between'}
          gap={'8px'}
          margin={'12px 0px'}
        >
          <InputWithLabel
            label="Company name"
            inputIdentifierName="name"
            placeholder="AgencyGo"
            inputStyle={{
              border: '1px solid #292929',
              backgroundColor: '#0C0C0C',
            }}
          />
          <InputWithLabel
            label="Amount"
            inputIdentifierName="amount"
            placeholder="$1,203"
            inputStyle={{
              border: '1px solid #292929',
              backgroundColor: '#0C0C0C',
            }}
          />
        </Box>
        <Box
          display={'flex'}
          justifyContent={'space-between'}
          alignItems={'center'}
          margin={'8px 0px'}
        >
          <Typography>Recurring invoice</Typography>
          <AntSwitch
            defaultChecked
            inputProps={{ 'aria-label': 'ant design' }}
          />
        </Box>
        <Box
          display={'flex'}
          justifyContent={'space-between'}
          alignItems={'center'}
          margin={'8px 0px'}
        >
          <Typography>Recurring Timeline</Typography>
          <AntSwitch
            defaultChecked
            inputProps={{ 'aria-label': 'ant design' }}
          />
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'end',
            margin: '12px 0px',
          }}
        >
          <Box>
            <Typography>Pick frequency</Typography>
            <Box sx={{ borderRadius: '10px' }}>
              <FrequencySelector frequencyFilter={frequencyFilter} />
            </Box>
          </Box>
        </Box>
        <Box
          display={'flex'}
          justifyContent={'space-between'}
          alignItems={'center'}
          margin={'8px 0px'}
        >
          <Typography>Automatic Email notification</Typography>
          <AntSwitch
            defaultChecked
            inputProps={{ 'aria-label': 'ant design' }}
          />
        </Box>
        <Box
          display={'flex'}
          justifyContent={'space-between'}
          alignItems={'center'}
          margin={'8px 0px'}
        >
          <Typography>Automatic Text notification</Typography>
          <AntSwitch
            defaultChecked
            inputProps={{ 'aria-label': 'ant design' }}
          />
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'end !important',
            margin: '12px 0px',
          }}
        >
          <Box>
          <InputWithLabel
            label="Enter Number"
            inputIdentifierName="number"
            placeholder="+1 (209) - 424- 23"
            inputStyle={{
              border: '1px solid #292929',
              backgroundColor: '#0C0C0C',
              width: '100%',
            }}
          />
          </Box>
        </Box>
        <Box
          display={'flex'}
          alignItems={'center'}
          justifyContent={'flex-end'}
          gap={'8px'}
          padding={'50px 10px 10px'}
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
          >
            Create Invoice
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}

const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 28,
  height: 16,
  padding: 0,
  display: 'flex',
  '&:active': {
    '& .MuiSwitch-thumb': {
      width: 15,
    },
    '& .MuiSwitch-switchBase.Mui-checked': {
      transform: 'translateX(9px)',
    },
  },
  '& .MuiSwitch-switchBase': {
    padding: 2,
    '&.Mui-checked': {
      transform: 'translateX(12px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#177ddc' : '#1890ff',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
    width: 12,
    height: 12,
    borderRadius: 6,
    transition: theme.transitions.create(['width'], {
      duration: 200,
    }),
  },
  '& .MuiSwitch-track': {
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor:
      theme.palette.mode === 'dark'
        ? 'rgba(255,255,255,.35)'
        : 'rgba(0,0,0,.25)',
    boxSizing: 'border-box',
  },
}));

const FrequencySelector = ({ frequencyFilter }: any) => {
  const [selected, setSelected] = useState(1);
  return (
    <Box sx={{ display: 'flex',border:"1px solid #04A1FF", width: 'fit-content',borderRadius:"10px",overflow:"hidden" }}>
      {frequencyFilter.map((data: string, index: number) => (
        <Box
          sx={{
            bgcolor: index + 1 === selected ? '#04A1FF' : 'transparent',
            cursor: 'pointer',
            padding: '8px 10px',
            border: '1px solid #04A1FF',
          }}
          onClick={() => setSelected(index + 1)}
        >
          {data}
        </Box>
      ))}
    </Box>
  );
};
