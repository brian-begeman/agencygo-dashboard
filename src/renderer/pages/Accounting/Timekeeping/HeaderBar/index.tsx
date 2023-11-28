import React, { useState } from 'react';
import { useTheme } from '@emotion/react';
import { Box, Button, ButtonGroup, Typography } from '@mui/material';

const HeaderBar = () => {
  const theme = useTheme();
  const isDarkTheme = theme.palette.mode === 'dark';

  const [isDisable, setIsDisable] = useState(true);
  return (
    <Box
      className="timekeep-topbar"
      sx={{ bgcolor: isDarkTheme ? '#000' : '#fff' }}
    >
      <div>TimeKeeping</div>
      <div>
        <ButtonGroup sx={{ bgcolor: isDarkTheme ? '#121212' : '#EAF1FF' }}>
          <Button
            variant="contained"
            color="primary"
            sx={{
              marginLeft: 'auto',
              width: 'max-content',
              height: '32px',
              borderRadius: '3px',
              boxShadow: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '5px',
            }}
            disabled={isDisable}
            onClick={() => setIsDisable(!isDisable)}
          >
            <Typography
              sx={{
                fontSize: '10px',
                fontWeight: 500,
                color: '#fff',
                marginTop: '2px',
              }}
            >
              Employees
            </Typography>
          </Button>
          <Button
            variant="contained"
            color="primary"
            sx={{
              marginLeft: 'auto',
              width: 'max-content',
              height: '32px',
              borderRadius: '3px',
              boxShadow: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '5px',
            }}
            disabled={!isDisable}
            onClick={() => setIsDisable(!isDisable)}
          >
            <Typography
              sx={{
                fontSize: '10px',
                fontWeight: 500,
                color: '#fff',
                marginTop: '2px',
              }}
            >
              Manager
            </Typography>
          </Button>
        </ButtonGroup>
      </div>
    </Box>
  );
};

export default HeaderBar;
