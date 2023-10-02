import { KeyboardArrowUp } from '@mui/icons-material';
import { Box, Divider, Stack, Typography } from '@mui/material';
import ArchiveAddSvg from 'renderer/assets/svg/ArchiveAddSvg';
import OnlyFansCircleBlue from 'renderer/assets/svg/OnlyFansCircleBlueSvg';
import theme from 'renderer/styles/muiTheme';
import WalletAddSvg from 'renderer/assets/svg/WalletAddSvg';
import UserAdd from 'renderer/assets/svg/UserAddSvg';
import SubtitleSvg from 'renderer/assets/svg/SubtitleSvg';
import styles from '../../styles.module.css';
import EarningsRecordCard from './EarningCard';

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
      padding="10px"
      sx={{
        borderRadius: '16px',
        backgroundColor: theme.palette.secondary.main,
      }}
    >
      <Stack flexDirection="row" gap="10px">
        <Stack
          spacing={3}
          borderRadius="16px"
          sx={{
            padding: '30px',
            height: 'fit-content',
            border: `1px solid ${theme.palette.primary.contrastText}`,
            minWidth: '200px',
          }}
        >
          <OnlyFansCircleBlue />
          <Divider
            sx={{ backgroundColor: theme.palette.primary.contrastText }}
          />
          <Stack flexDirection="row" alignItems="center" gap="20px">
            <Typography color="#fff">Total Earnings</Typography>
            <KeyboardArrowUp
              sx={{
                color: theme.palette.primary.light,
                marginLeft: '20px',
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
        <Box width="fit-content" className={styles.earningsContainer}>
          {earningsInitJson.map((item) => (
            <EarningsRecordCard
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
