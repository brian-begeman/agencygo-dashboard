import { Box, MenuItem, Select, Stack, Typography } from '@mui/material';
import { useState } from 'react';
import Overview from './Overview';
import ButtonGroup from 'renderer/components/ButtonGroup';
import CreatorPerformance from './CreatorPerformance';
import theme from 'renderer/styles/muiTheme';
import DatePickerSvg from 'renderer/assets/svg/DatePickerSvg';

const pageButton = [
  { id: 1, title: 'Overview', component: <Overview /> },
  { id: 2, title: 'Creator Performance', component: <CreatorPerformance /> },
];

const timeButton = [
  { id: 1, title: 'Hour', link: '' },
  { id: 2, title: 'Days', link: '' },
  { id: 3, title: 'Weeks', link: '' },
  { id: 4, title: 'Months', link: '' },
];

function CreaterReports() {
  const [activeButton, setActiveButton] = useState(1);
  const [activeTime, setActiveTime] = useState(1);

  return (
    <Box
      sx={{ padding: '10px ' }}
      gap="10px"
      display="flex"
      flexDirection="column"
    >
      <Stack
        display="flex"
        direction="row"
        justifyContent="space-between"
        sx={{
          borderRadius: '16px',
          padding: '15px',
          background: 'black',
        }}
      >
        <ButtonGroup
          tabButton={pageButton}
          activeButton={activeButton}
          setActiveButton={setActiveButton}
        />
        <Box display="flex" gap="10px" alignItems="center">
          <Box
            display="flex"
            flexDirection="row"
            alignItems="center"
            gap="5px"
            border="2px solid #292929"
            padding="6px 8px"
            borderRadius="4px"
          >
            <Typography> 2023 - 07 - 29 </Typography>
            <Typography> -&gt; </Typography>
            <Typography>2023 - 07 - 29</Typography>
            <DatePickerSvg />
          </Box>
          <Select
            id="offer-expiration"
            value={'Gross Earnings'}
            onChange={() => {}}
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
              value={'Gross Earnings'}
              sx={{ fontWeight: 500, fontSize: '8px' }}
            >
              Gross Earnings
            </MenuItem>
          </Select>
          <Select
            id="offer-expiration"
            value={'All Creators'}
            onChange={() => {}}
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
              value={'All Creators'}
              sx={{ fontWeight: 500, fontSize: '11px' }}
            >
              All Creators
            </MenuItem>
          </Select>
        </Box>
        <ButtonGroup
          tabButton={timeButton}
          activeButton={activeTime}
          setActiveButton={setActiveTime}
        />
      </Stack>
      {activeButton === 1 ? <Overview /> : <CreatorPerformance />}
    </Box>
  );
}

export default CreaterReports;
