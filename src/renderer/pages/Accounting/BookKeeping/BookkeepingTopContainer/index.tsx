import {
  Box,
  Button,
  MenuItem,
  Select,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import theme from 'renderer/styles/muiTheme';

const BookkeepingTopContainer = () => {
  const [selectData, setSelectedData] = useState('Current invoice settings');
  return (
    <Box margin={'10px 0px'}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography fontSize="22px">Book Keeping</Typography>
        <Button
          variant="contained"
          sx={{ color: '#fff', textTransform: 'capitalize' }}
        >
          Export
        </Button>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'end',margin:'20px 0px' }}>
        <Box display={'flex'} gap={'10px'}>
          <Select
            id="current-invoice-settings"
            value={'Weekly'}
            onChange={(e) => setSelectedData(e.target.value)}
            sx={{
              color: theme.palette.secondary.contrastText,
              width: 'fit-content',
              '.MuiOutlinedInput-notchedOutline': {
                borderColor: theme.palette.secondary.light,
              },
              height: 'fit-content',
              padding: '0px 0px',
              ' & .css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input':
                {
                  padding: '4px 8px',
                },
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: theme.palette.secondary.contrastText,
              },
              '&:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: theme.palette.secondary.contrastText,
              },
              '.MuiSvgIcon-root': {
                fill: 'white !important',
              },
              input: {
                backgroundColor: theme.palette.secondary.contrastText,
              },
            }}
          >
            <MenuItem
              value={'Weekly'}
              sx={{ fontWeight: 500, fontSize: '11px' }}
            >
              Weekly
            </MenuItem>
            <MenuItem
              value={'Biweekly'}
              sx={{ fontWeight: 500, fontSize: '11px' }}
            >
              Biweekly
            </MenuItem>
            <MenuItem
              value={'Monthly'}
              sx={{ fontWeight: 500, fontSize: '11px' }}
            >
              Monthly
            </MenuItem>
            <MenuItem
              value={'Annually'}
              sx={{ fontWeight: 500, fontSize: '11px' }}
            >
              Annually
            </MenuItem>
          </Select>
          <Select
            id="current-invoice-settings"
            value={'Roles'}
            onChange={(e) => setSelectedData(e.target.value)}
            sx={{
              color: theme.palette.secondary.contrastText,
              width: 'fit-content',
              '.MuiOutlinedInput-notchedOutline': {
                borderColor: theme.palette.secondary.light,
              },
              height: 'fit-content',
              padding: '0px 0px',
              ' & .css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input':
                {
                  padding: '4px 8px',
                },
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: theme.palette.secondary.contrastText,
              },
              '&:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: theme.palette.secondary.contrastText,
              },
              '.MuiSvgIcon-root': {
                fill: 'white !important',
              },
              input: {
                backgroundColor: theme.palette.secondary.contrastText,
              },
            }}
          >
            <MenuItem
              value={'Roles'}
              sx={{ fontWeight: 500, fontSize: '11px' }}
            >
              Roles
            </MenuItem>
            <MenuItem
              value={'Admin'}
              sx={{ fontWeight: 500, fontSize: '11px' }}
            >
              Admin
            </MenuItem>
            <MenuItem
              value={'Manager'}
              sx={{ fontWeight: 500, fontSize: '11px' }}
            >
              Manager
            </MenuItem>
            <MenuItem
              value={'Employee'}
              sx={{ fontWeight: 500, fontSize: '11px' }}
            >
              Employee
            </MenuItem>
          </Select>
          <Select
            id="current-invoice-settings"
            value={'Status'}
            onChange={(e) => setSelectedData(e.target.value)}
            sx={{
              color: theme.palette.secondary.contrastText,
              width: 'fit-content',
              '.MuiOutlinedInput-notchedOutline': {
                borderColor: theme.palette.secondary.light,
              },
              height: 'fit-content',
              padding: '0px 0px',
              ' & .css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input':
                {
                  padding: '4px 8px',
                },
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: theme.palette.secondary.contrastText,
              },
              '&:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: theme.palette.secondary.contrastText,
              },
              '.MuiSvgIcon-root': {
                fill: 'white !important',
              },
              input: {
                backgroundColor: theme.palette.secondary.contrastText,
              },
            }}
          >
            <MenuItem
              value={'Status'}
              sx={{ fontWeight: 500, fontSize: '11px' }}
            >
              Status
            </MenuItem>
            <MenuItem
              value={'Paid'}
              sx={{ fontWeight: 500, fontSize: '11px' }}
            >
              Paid
            </MenuItem>
            <MenuItem
              value={'Unpaid'}
              sx={{ fontWeight: 500, fontSize: '11px' }}
            >
              Unpaid
            </MenuItem>
          </Select>
        </Box>
      </Box>
    </Box>
  );
};

export default BookkeepingTopContainer;
