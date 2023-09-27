import { Box, Button, Typography } from '@mui/material';

function AboutGo() {
  return (
    <Box sx={{ textAlign: 'center', marginTop: '150px' }}>
      <Typography fontWeight={700} fontSize="53px" sx={{ color: '#fff' }}>
        AgencyGO
      </Typography>
      <Typography fontWeight={600} fontSize="34px" sx={{ color: '#fff' }}>
        version 2.0.4
      </Typography>
      <Button sx={{ backgroundColor: '#04A1FF', color: 'white', gap: '10px' }}>
        Check Update
      </Button>
    </Box>
  );
}

export default AboutGo;
