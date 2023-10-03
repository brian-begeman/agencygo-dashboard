import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { Box, Typography } from '@mui/material';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top' as const,
    },
  },
};
const labels = ['0', '1', '2', '3', '4', '5', '6'];

const data = {
  labels: labels,
  datasets: [
    {
      data: [55, 59, 60, 55, 56, 55, 52],
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1,
    },
  ],
};

export default function ChargeBacks() {
  return (
    <>
      <Box borderRadius="16px" padding="20px" bgcolor="var(--color-background)">
        <Typography fontSize="22px">Chargebacks</Typography>

        <Box display="flex" flexDirection="column" gap="20px" maxHeight="300px">
          <Line
            options={options}
            data={data}
            style={{ width: '100%', height: '100%' }}
          />
        </Box>
      </Box>
    </>
  );
}
