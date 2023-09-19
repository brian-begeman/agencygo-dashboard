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
import faker from 'faker';
import theme from 'renderer/styles/muiTheme';
import { Box, TableContainer } from '@mui/material';

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
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
  },
};

const labels = ['0', '1', '2', '3', '4', '5', '6'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1 })),
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
  ],
};

export function ChartLine() {
  return (
    <Box>
      <TableContainer
        sx={{
          border: `1px solid ${theme.palette.primary.contrastText}`,
          borderRadius: '12px',
          marginTop: '16px',
        }}
      >
        <Line options={options} data={data} />
      </TableContainer>
    </Box>
  );
}
