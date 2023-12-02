import React, { useContext, useState } from 'react';
import { useTheme } from '@emotion/react';
import { Box, Button, ButtonGroup, Typography } from '@mui/material';
import { AuthContext } from 'renderer/contexts/AuthContext';

const HeaderBar = ({ tab, setTab }) => {
  const theme = useTheme();
  const isDarkTheme = theme.palette.mode === 'dark';
  const { userData } = useContext(AuthContext);
  console.log('userData?.user?.role', userData?.user?.role);

  const checkRole = () => {
    if (
      userData?.user?.role === 'manager' ||
      userData?.user?.role === 'admin'
    ) {
      return true;
    }
  };

  return (
    <Box
      className="timekeep-topbar"
      sx={{ bgcolor: isDarkTheme ? '#000' : '#fff' }}
    >
      <div>TimeKeeping</div>
      {checkRole() && (
        <div>
          <ButtonGroup sx={{ bgcolor: isDarkTheme ? '#121212' : '#EAF1FF' }}>
            <Button
              variant="contained"
              sx={{
                marginLeft: 'auto',
                width: 'max-content',
                height: '32px',
                borderRadius: '3px',
                boxShadow: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '5px',
                bgcolor: tab === "Employee" ? '#000' : '#2196f3',
              }}
              disabled={tab === "Employee"}
              onClick={() => setTab("Employee")}
            >
              <Typography
                sx={{
                  fontSize: '10px',
                  fontWeight: 500,
                  color: '#fff',
                  marginTop: '2px',
                }}
              >
                Employee
              </Typography>
            </Button>
            <Button
              variant="contained"
              sx={{
                marginLeft: 'auto',
                width: 'max-content',
                height: '32px',
                borderRadius: '3px',
                boxShadow: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '5px',
                bgcolor: tab === "Manager" ? '#000' : '#2196f3',
              }}
              disabled={tab === "Manager"}
              onClick={() => setTab("Manager")}
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
      )}
    </Box>
  );
};

export default HeaderBar;
