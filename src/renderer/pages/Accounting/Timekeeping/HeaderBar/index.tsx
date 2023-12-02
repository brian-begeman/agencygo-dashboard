import React, { useContext, useState } from 'react';
import { useTheme } from '@emotion/react';
import { Box, Button, ButtonGroup, Typography } from '@mui/material';
import { AuthContext } from 'renderer/contexts/AuthContext';

const HeaderBar = ({ tab, setTab }) => {
  const theme = useTheme();
  const isDarkTheme = theme.palette.mode === 'dark';
  const { userData } = useContext(AuthContext);
  console.log('userData?.user?.role', userData?.user?.role);

  return (
    <Box
      className="timekeep-topbar"
      sx={{ bgcolor: isDarkTheme ? '#000' : '#fff' }}
    >
      <div>TimeKeeping</div>
    </Box>
  );
};

export default HeaderBar;
