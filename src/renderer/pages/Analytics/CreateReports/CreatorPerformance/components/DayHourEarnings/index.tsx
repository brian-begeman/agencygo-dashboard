import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Scatter } from 'react-chartjs-2';
import faker from 'faker';
import { Box, Typography } from '@mui/material';
import theme from 'renderer/styles/muiTheme';
import { ErrorOutline } from '@mui/icons-material';

ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend);

export const options = {
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

export const data = {
  datasets: [
    {
      label: 'A dataset',
      data: Array.from({ length: 100 }, () => ({
        x: faker.datatype.number({ min: 10, max: 50 }),
        y: faker.datatype.number({ min: 1, max: 5 }),
      })),
      backgroundColor: 'rgba(255, 99, 132, 1)',
    },
  ],
};

export default function DayHourEarnings() {
  return (
    <Box
      borderRadius="16px"
      bgcolor="var(--color-background)"
      padding="20px"
      display="flex"
      flexDirection="column"
      gap="20px"
    >
      <Typography fontSize="22px" display='flex' alignItems="center" gap='3px'>
        Day - Hour Earnings
        <ErrorOutline sx={{ color: theme.palette.secondary.contrastText }}/>
      </Typography>
      <Scatter options={options} data={data} />
    </Box>
  );
}
