import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import EarningsRecordCard from '../Earnings/EarningCard';
import ArchiveAddSvg from 'renderer/assets/svg/ArchiveAddSvg';
import WalletAddSvg from 'renderer/assets/svg/WalletAddSvg';
import UserAdd from 'renderer/assets/svg/UserAddSvg';
import SubtitleSvg from 'renderer/assets/svg/SubtitleSvg';

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
  return (
    <Box
      display="flex"
      flexDirection="column"
      bgcolor="black"
      padding="20px"
      borderRadius="16px"
      gap="15px"
    >
      <Typography fontSize="22px">Creator Statistics </Typography>
      <Box display="flex" width="fit-content" gap="10px">
        {earningsInitJson.map((item) => (
          <EarningsRecordCard
            key={item.title}
            icon={item.icon}
            title={item.title}
            amount={item.amount}
          />
        ))}
      </Box>
      <TableContainer>
        <Table
          sx={{
            minWidth: 650,
            borderRadius: 16,
            border: '1px solid #292929',
          }}
          aria-label="simple table"
        >
          <TableHead sx={{ bgcolor: '#292929' }}>
            <TableRow>
              <TableCell sx={{ color: '#FFFFFF' }}>Creator</TableCell>
              <TableCell align="right" sx={{ color: '#FFFFFF' }}>
                Active Fans
              </TableCell>
              <TableCell align="right" sx={{ color: '#FFFFFF' }}>
                Expired Fans
              </TableCell>
              <TableCell align="right" sx={{ color: '#FFFFFF' }}>
                New Fans
              </TableCell>
              <TableCell align="right" sx={{ color: '#FFFFFF' }}>
                Message Earnings
              </TableCell>
              <TableCell align="right" sx={{ color: '#FFFFFF' }}>
                Total Earnings
              </TableCell>
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
                  sx={{ color: '#FFFFFF', padding: '25px 10px' }}
                >
                  {row.creator}
                </TableCell>
                <TableCell component="th" scope="row" sx={{ color: '#FFFFFF' }}>
                  {row.activeFans}
                </TableCell>
                <TableCell align="right" sx={{ color: '#FFFFFF' }}>
                  {row.expiredFans}
                </TableCell>
                <TableCell align="right" sx={{ color: '#FFFFFF' }}>
                  {row.newFans}
                </TableCell>
                <TableCell align="right" sx={{ color: '#FFFFFF' }}>
                  {row.messageEarnings}
                </TableCell>
                <TableCell align="right" sx={{ color: '#FFFFFF' }}>
                  {row.totalEarnings}
                </TableCell>
                <TableCell align="right" sx={{ color: '#FFFFFF' }}>
                  {row.refunded}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
