import { Box, Container, Typography } from '@mui/material';
import theme from 'renderer/styles/muiTheme';

export default function Earnings() {
  return (
    <Container sx={{ borderRadius: '16px' }}>
      <Typography color="#AAAAAA" fontSize="22px" fontWeight="600">
        Creators Earnings Overview
      </Typography>
      <Box sx={{ border: `1px solid ${theme.palette.primary.contrastText}` }} />
    </Container>
  );
}
