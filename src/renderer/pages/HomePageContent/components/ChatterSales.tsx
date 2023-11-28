import { ChatterSalesChart } from './Chart';
import { Box, Typography } from '@mui/material';

const ChatterSales = () => {
  return (
    <Box
      padding="16px"
      borderRadius={2}
      sx={{
        background: '#181818',
      }}
    >
      <Box marginBottom="10px" display="flex" justifyContent="space-between">
        <Typography fontWeight="600" fontSize="22px">
          Chatter Sales
        </Typography>
      </Box>
      <Box>
        <ChatterSalesChart />
      </Box>
    </Box>
  );
};

export default ChatterSales;
