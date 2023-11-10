import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  useTheme,
} from '@mui/material';
import EarningsRecordCard from '../Earnings/EarningCard';
import ArchiveAddSvg from 'renderer/assets/svg/ArchiveAddSvg';
import WalletAddSvg from 'renderer/assets/svg/WalletAddSvg';
import UserAdd from 'renderer/assets/svg/UserAddSvg';
import SubtitleSvg from 'renderer/assets/svg/SubtitleSvg';
import { ErrorOutline } from '@mui/icons-material';
import theme from 'renderer/styles/muiTheme';

const tabledata = [
  {
    id: 1,
    creator: 'Jane',
    activeFans: '120 + 90.98%',
    expiredFans: '120 0.00%',
    newFans: '120 + 90.98%',
    messageEarnings: '$1,234.00 + 90.98%',
    totalEarnings: '$1,234.00 + 90.98%',
    refunded: '$1,234.00 + 90.98%',
  },
  {
    id: 2,
    creator: 'Dick',
    activeFans: '120 + 90.98%',
    expiredFans: '120 0.00%',
    newFans: '120 + 90.98%',
    messageEarnings: '$1,234.00 + 90.98%',
    totalEarnings: '$1,234.00 + 90.98%',
    refunded: '$1,234.00 + 90.98%',
  },
  {
    id: 3,
    creator: 'Chrissy',
    activeFans: '120 + 90.98%',
    expiredFans: '120 0.00%',
    newFans: '120 + 90.98%',
    messageEarnings: '$1,234.00 + 90.98%',
    totalEarnings: '$1,234.00 + 90.98%',
    refunded: '$1,234.00 + 90.98%',
  },
  {
    id: 4,
    creator: 'Chrissy',
    activeFans: '120 + 90.98%',
    expiredFans: '120 0.00%',
    newFans: '120 + 90.98%',
    messageEarnings: '$1,234.00 + 90.98%',
    totalEarnings: '$1,234.00 + 90.98%',
    refunded: '$1,234.00 + 90.98%',
  },
];

const earningsInitJson = [
  {
    title: 'Subscriptions ($)',
    amount: '44.44',
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

export default function CreatorStatistics() {
  const theme = useTheme();
  const isDarkTheme = theme.palette.mode === 'dark';
  return (
    <Box
      display="flex"
      flexDirection="column"
      bgcolor={isDarkTheme ? '#000' : '#fff'}
      padding="20px"
      borderRadius="16px"
      gap="15px"
    >
      <Typography
        fontSize="22px"
        display="flex"
        alignItems="center"
        gap="3px"
        color={isDarkTheme ? '#fff' : '#000'}
      >
        Creator Statistics
        <ErrorOutline sx={{ color: theme.palette.secondary.contrastText }} />
      </Typography>
      <Box
        display="flex"
        width="fit-content"
        gap="10px"
       
      >
        {earningsInitJson.map((item) => (
          <EarningsRecordCard
            key={item.title}
            icon={item.icon}
            title={item.title}
            amount={item.amount}
          />
        ))}
      </Box>
      <Box
        sx={{
          minWidth: 60,
        }}
      >
        <TableContainer
          sx={{
            minWidth: 650,
            border: `1px solid ${theme.palette.primary.contrastText}`,
            borderRadius: '16px',
          }}
        >
          <Table>
            <TableHead
              sx={{
                background: isDarkTheme ? '#ffffff33' : '#EAF1FF',
                color: '#fff',
              }}
            >
              <TableRow>
                <TableCell>Creator</TableCell>
                <TableCell align="right">Active Fans</TableCell>
                <TableCell align="right">Expired Fans</TableCell>
                <TableCell align="right">New Fans</TableCell>
                <TableCell align="right">Message Earnings</TableCell>
                <TableCell align="right">Total Earnings</TableCell>
                <TableCell align="right" sx={{ color: '#FFFFFF' }}>
                  Refunded
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tabledata.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell
                    component="th"
                    scope="row"
                    sx={{ padding: '25px 10px' }}
                  >
                    {row.creator}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {row.activeFans}
                  </TableCell>
                  <TableCell align="right">{row.expiredFans}</TableCell>
                  <TableCell align="right">{row.newFans}</TableCell>
                  <TableCell align="right">{row.messageEarnings}</TableCell>
                  <TableCell align="right">{row.totalEarnings}</TableCell>
                  <TableCell align="right">{row.refunded}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
}
