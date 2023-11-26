import { KeyboardArrowUp } from '@mui/icons-material';
import { Box, Divider, Stack, Typography, useTheme, Grid } from '@mui/material';
import EarningsCard from 'renderer/components/EarningsCard';
import ButtonGroup from 'renderer/components/ButtonGroup';
import { useState } from 'react';
import SubscriptionSvg from 'renderer/assets/svg/NewMessageSvg';
import NewMessageSvg from 'renderer/assets/svg/NewMessageSvg';
import ChatSvg from 'renderer/assets/svg/ChatSvg';
import WalletSvg from 'renderer/assets/svg/WalletSvg';
import PersonSvg from 'renderer/assets/svg/Person';
import StreamSvg from 'renderer/assets/svg/Stream';
import { TotalEarningsChart } from './Chart';

const earningsInitJson = [
  {
    title: 'Subscriptions ($)',
    amount: '44.44',
    icon: <SubscriptionSvg />,
  },
  {
    title: 'Post ($)',
    amount: '3444.30',
    icon: <ChatSvg />,
  },
  {
    title: 'Messages ($)',
    amount: '432.00',
    icon: <NewMessageSvg />,
  },
  {
    title: 'Tips ($)',
    amount: '45.46',
    icon: <WalletSvg />,
  },
  {
    title: 'Referrals ($)',
    amount: '780.43',
    icon: <PersonSvg />,
  },
  {
    title: 'Streams ($)',
    amount: '5634.34',
    icon: <StreamSvg />,
  },
];

const timeButton = [
  { id: 1, title: 'Yesterday' },
  { id: 2, title: 'Today' },
  { id: 3, title: 'This Week' },
  { id: 4, title: 'Today' },
  { id: 5, title: 'This Month' },
];

export default function Earnings() {
  const [activeButton, setActiveButton] = useState(1);
  const theme = useTheme();
  const isDarkTheme = theme.palette.mode === 'dark';

  return (
    <Box
      padding="16px"
      sx={{
        borderRadius: '16px',
        backgroundColor: isDarkTheme ? '#0C0C0C' : '#fff',
      }}
    >
      <Box marginBottom="10px" display="flex" justifyContent="space-between">
        <Typography fontWeight="600" fontSize="22px">
          Creators Earnings Overview
        </Typography>
        <ButtonGroup
          tabButton={timeButton}
          activeButton={activeButton}
          setActiveButton={setActiveButton}
        />
      </Box>
      <Stack flexDirection="row" gap="20px">
        <Grid spacing={3} container>
          <Grid item md={5}>
            <Box
              padding={3}
              borderRadius={2}
              sx={{
                background: '#181818',
              }}
            >
              <Grid container spacing={1}>
                {earningsInitJson.map((item) => (
                  <Grid item md={6}>
                    <EarningsCard
                      key={item.title}
                      title={item.title}
                      amount={item.amount}
                    />
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Grid>

          <Grid item md={7}>
            <Box
              borderRadius="16px"
              sx={{
                padding: '32px',
                minWidth: '250px',
                background: '#181818',
              }}
            >
              <Box
                sx={{
                  marginBottom: 5,
                }}
              >
                <Stack flexDirection="row" alignItems="center" marginBottom={2}>
                  <Typography>Total Earnings</Typography>
                  <KeyboardArrowUp
                    sx={{
                      color: theme.palette.primary.light,
                      marginLeft: '30px',
                      fontSize: '14px',
                    }}
                  />
                  <Typography color={theme.palette.info.main} fontSize="14px">
                    12.7%
                  </Typography>
                </Stack>
                <Typography variant="h3" fontWeight="700" fontSize={'36px'}>
                  $473.44
                </Typography>
              </Box>
              <TotalEarningsChart />
            </Box>
          </Grid>
        </Grid>
      </Stack>
    </Box>
  );
}
