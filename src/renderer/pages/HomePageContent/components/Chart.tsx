import { Chart as ChartJS, Filler } from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(Filler);

export function TotalEarningsChart() {
  return (
    <Line
      style={{ width: '100%' }}
      options={{
        plugins: { legend: { display: false } },
        scales: {
          y: {
            suggestedMin: 50,
            suggestedMax: 100,
            grid: {
              color: '#111',
            },
            ticks: {
              // Include a dollar sign in the ticks and ensure two decimal places
              callback: function (value, index, values) {
                return '$' + value.toFixed(2);
              },
            },
          },
          x: {
            grid: {
              display: false,
            },
          },
        },
      }}
      data={{
        labels: [
          '1 Aug',
          '7 Aug',
          '14 Aug',
          '21 Aug',
          '28 Aug',
          '1 Sep',
          '7 Sep',
        ],
        datasets: [
          {
            label: 'Amount Earned',
            data: [65, 59, 62, 70, 72, 67, 70],
            tension: 0.3,
            borderWidth: 0,
            fill: true,
            backgroundColor(context, options) {
              const chart = context.chart;
              const { chartArea, ctx } = chart;
              if (!chartArea) {
                return;
              }
              const gradient = ctx.createLinearGradient(
                0,
                chartArea.bottom,
                0,
                chartArea.top
              );

              gradient.addColorStop(0, '#44FA04');
              gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
              return gradient;
            },
          },
        ],
      }}
    />
  );
}

export function ChatterSalesChart() {
  return (
    <Line
      style={{ width: '100%', height: '400px' }}
      options={{
        plugins: { legend: { display: false } },
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            suggestedMin: 50,
            suggestedMax: 100,
            grid: {
              display: false,
            },
            ticks: {
              // Include a dollar sign in the ticks and ensure two decimal places
              callback: function (value, index, values) {
                return '$' + value.toFixed(2);
              },
            },
          },
          x: {
            grid: {
              display: false,
            },
          },
        },
      }}
      data={{
        labels: [
          '1 Aug',
          '7 Aug',
          '14 Aug',
          '21 Aug',
          '28 Aug',
          '4 Sep',
          '11 Sep',
          '18 Sep',
          '25 Sep',
          '2 Oct',
        ],

        datasets: [
          {
            label: 'Amount Earned',
            data: [65, 59, 62, 70, 72, 75, 68, 66, 71, 74],
            tension: 0.3,
            borderWidth: 0,
            fill: true,
            backgroundColor(context, options) {
              const chart = context.chart;
              const { chartArea, ctx } = chart;
              if (!chartArea) {
                return;
              }
              const gradient = ctx.createLinearGradient(
                0,
                chartArea.bottom,
                0,
                chartArea.top
              );
              gradient.addColorStop(0, '#04A1FF');
              gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
              return gradient;
            },
          },
        ],
      }}
    />
  );
}
