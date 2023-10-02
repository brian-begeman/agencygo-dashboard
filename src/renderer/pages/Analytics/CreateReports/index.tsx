import { Box, Stack } from '@mui/material';
import { useState } from 'react';
import Overview from './Overview';
import ButtonGroup from 'renderer/components/ButtonGroup';
import CreatorPerformance from './CreatorPerformance';

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
