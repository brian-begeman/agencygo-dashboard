import { Box, Typography } from '@mui/material';
import Dashboard from 'renderer/components/Dashboard';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import styles from './styles.module.css';
import { useState } from 'react';

const links = [
  { id: 1, text: 'Creator Reports', link: 'create-reports' },
  { id: 2, text: 'Chatter Reports', link: 'chatter-reports' },
  { id: 3, text: 'Fan Reports', link: 'fan-reports' },
];

export default function ShareForShare() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(1);
  const handleClick = (val: any) => {
    navigate(val.link);
    setActiveTab(val.id);
  };

  return (
    <Dashboard>
      <section className={styles.wrapper}>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: '200px 1fr',
            color: '#fff',
            height: '100%',
            zIndex: 30,
          }}
        >
          <Box
            sx={{
              bgcolor: 'black',
              position: 'absolute',
              top: 0,
              height: '100vh',
              width: 200,
              zIndex: 10,
              padding: '10px',
            }}
          >
            <Typography sx={{ padding: '20px 0px ' }}>Analytics</Typography>
            {links.map((val) => {
              return (
                <Typography
                  padding="5px 10px"
                  margin="10px 0px"
                  borderRadius={'6px'}
                  fontSize="14px"
                  bgcolor={activeTab === val.id ? '#04A1FF' : ''}
                  onClick={() => handleClick(val)}
                >
                  {val.text}
                </Typography>
              );
            })}
          </Box>
          <Box
            sx={{
              position: 'absolute',
              left: 315,
              background: '#292929',
              height: 'fit-content',
              borderRadius: '16px',
              width: 'calc(100vw - 355px)',
              marginBottom: '100px',
            }}
          >
            <Outlet />
          </Box>
        </Box>
      </section>
    </Dashboard>
  );
}
