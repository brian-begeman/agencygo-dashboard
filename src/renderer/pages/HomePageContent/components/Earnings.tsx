import { KeyboardArrowUp } from '@mui/icons-material';
import { Box, Divider, Stack, Typography } from '@mui/material';
import ArchiveAddSvg from 'Assets/svg/ArchiveAddSvg';
import OnlyFansCircleBlue from 'Assets/svg/OnlyFansCircleBlueSvg';
import theme from 'renderer/styles/muiTheme';
import WalletAddSvg from 'Assets/svg/WalletAddSvg';
import UserAdd from 'Assets/svg/UserAddSvg';
import SubtitleSvg from 'Assets/svg/SubtitleSvg';
import EarningsCard from './EarningsCard';
import styles from './styles.module.css';

const earningsInitJson = [
  {
    title: 'Subscriptions ($)',
    amount: '44.44',
    icon: <ArchiveAddSvg />,
  },
  {
    title: 'Post ($)',
    amount: '0.00',
    icon: <ArchiveAddSvg />,
  },
  {
    title: 'Messages ($)',
    amount: '432.00',
    icon: <ArchiveAddSvg />,
  },
  {
    title: 'Tips ($)',
    amount: '6.00',
    icon: <WalletAddSvg />,
  },
  {
    title: 'Referrals ($)',
    amount: '0.00',
    icon: <UserAdd />,
  },
  {
    title: 'Streams ($)',
    amount: '0.00',
    icon: <SubtitleSvg />,
  },
];

export default function Earnings() {
  return (
    <Box
      padding="16px"
      sx={{
        borderRadius: '16px',
        backgroundColor: theme.palette.secondary.main,
      }}
    >
      <Box marginBottom="10px">
        <Typography color="#AAAAAA" fontWeight="600" fontSize="18px">
          Creators Earnings Overview
        </Typography>
      </Box>
      <Stack flexDirection="row" gap="20px">
        <Stack
          spacing={5}
          borderRadius="16px"
          sx={{
            padding: '32px',
            border: `1px solid ${theme.palette.primary.contrastText}`,
            minWidth: '350px',
          }}
        >
          <OnlyFansCircleBlue />
          <Divider
            sx={{ backgroundColor: theme.palette.primary.contrastText }}
          />
          <Stack flexDirection="row" alignItems="center">
            <Typography color="#fff">Total Earnings</Typography>
            <KeyboardArrowUp
              sx={{
                color: theme.palette.primary.light,
                marginLeft: '30px',
                fontSize: '14px',
              }}
            />
            <Typography color={theme.palette.primary.light} fontSize="14px">
              12.7%
            </Typography>
          </Stack>
          <Typography
            variant="h3"
            fontWeight="700"
            color={theme.palette.secondary.contrastText}
          >
            $473.44
          </Typography>
        </Stack>
        <Box width="100%" className={styles.earningsContainer}>
          {earningsInitJson.map((item) => (
            <EarningsCard
              key={item.title}
              icon={item.icon}
              title={item.title}
              amount={item.amount}
            />
          ))}
        </Box>
      </Stack>
    </Box>
  );
}
