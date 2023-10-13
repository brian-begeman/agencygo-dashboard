import { ErrorOutline } from '@mui/icons-material';
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
import ArchiveAddSvg from 'renderer/assets/svg/ArchiveAddSvg';
import theme from 'renderer/styles/muiTheme';
import StatisticsCard from './StatisticsCard';

const tabledata = [
  {
    id: 1,
    employee: 'Chrissy',
    group: 'D-Life Style',
    sales: '$1350.00',
    messagesSent: '0',
    PPVsSent: '0',
    PPVsUnlocked: '0',
    goldenRatio: '450.00%',
    unlockRatio: '450.00%',
    fansChatted: '0',
    words: '1350',
    replyTime: '-',
    scheduledHours: '0 hours',
  },
  {
    id: 1,
    employee: 'James',
    group: 'Spice Life',
    sales: '$150.00',
    messagesSent: '13',
    PPVsSent: '1',
    PPVsUnlocked: '3',
    goldenRatio: '0.00%',
    unlockRatio: '0.00%',
    fansChatted: '3',
    words: '1350',
    replyTime: '-',
    scheduledHours: '2 hours',
  },
];

const statisticsSampleData = [
  {
    title: 'Total Chatter Sales',
    amount: '$12.00',
    icon: <ArchiveAddSvg />,
  },
  {
    title: 'Unlock Rate',
    amount: '12.8%',
    icon: <ArchiveAddSvg />,
  },
  {
    title: 'Average Reply Time',
    amount: '-',
    icon: <ArchiveAddSvg />,
  },
  {
    title: 'Scheduled Hours',
    amount: '-',
    icon: <ArchiveAddSvg />,
  },
 
];

const ChattingStatistics = () => {
  return (
    <Box
      sx={{
        backgroundColor: theme.palette.secondary.main,
        borderRadius: '16px',
        padding: '20px',
        gap: '20px',
      }}
    >
      <Typography fontSize="18px" display="flex" alignItems="center" gap="3px">
        Chatting Statistics
        <ErrorOutline sx={{ color: theme.palette.secondary.contrastText }} />
      </Typography>
      <Box width="fit-content" display={'flex'} flexWrap={'wrap'} margin={'20px 0px'} gap={'20px'}>
          {statisticsSampleData.map((item) => (
            <StatisticsCard
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
            borderRadius: '16px !important',
            border: '1px solid #292929',
          }}
          aria-label="simple table"
        >
          <TableHead sx={{ bgcolor: '#292929' }}>
            <TableRow>
              <TableCell sx={{ color: '#FFFFFF' }}>Employee</TableCell>
              <TableCell align="right" sx={{ color: '#FFFFFF' }}>
                Group
              </TableCell>
              <TableCell align="right" sx={{ color: '#FFFFFF' }}>
                Sales
              </TableCell>
              <TableCell align="right" sx={{ color: '#FFFFFF' }}>
                Messages Sent
              </TableCell>
              <TableCell align="right" sx={{ color: '#FFFFFF' }}>
                PPVs Sent
              </TableCell>
              <TableCell align="right" sx={{ color: '#FFFFFF' }}>
                PPVs Unlocked
              </TableCell>
              <TableCell align="right" sx={{ color: '#FFFFFF' }}>
                Golden Ratio
              </TableCell>
              <TableCell align="right" sx={{ color: '#FFFFFF' }}>
                Unlock Ratio
              </TableCell>
              <TableCell align="right" sx={{ color: '#FFFFFF' }}>
                Fans Chatted
              </TableCell>
              <TableCell align="right" sx={{ color: '#FFFFFF' }}>
                Words
              </TableCell>
              <TableCell align="right" sx={{ color: '#FFFFFF' }}>
                Reply Time
              </TableCell>
              <TableCell align="right" sx={{ color: '#FFFFFF' }}>
                Scheduled Hours
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
                  sx={{ color: '#FFFFFF', fontSize: 14, padding: '20px 10px' }}
                >
                  {row.employee}
                </TableCell>
                <TableCell
                  component="th"
                  scope="row"
                  sx={{ color: '#FFFFFF', fontSize: 12 }}
                >
                  {row.group}
                </TableCell>
                <TableCell
                  align="right"
                  sx={{ color: '#FFFFFF', fontSize: 12 }}
                >
                  {row.sales}
                </TableCell>
                <TableCell
                  align="right"
                  sx={{ color: '#FFFFFF', fontSize: 12 }}
                >
                  {row.messagesSent}
                </TableCell>
                <TableCell
                  align="right"
                  sx={{ color: '#FFFFFF', fontSize: 12 }}
                >
                  {row.PPVsSent}
                </TableCell>
                <TableCell
                  align="right"
                  sx={{ color: '#FFFFFF', fontSize: 12 }}
                >
                  {row.PPVsUnlocked}
                </TableCell>
                <TableCell
                  align="right"
                  sx={{ color: '#37DE8F', fontSize: 12 }}
                >
                  {row.goldenRatio}
                </TableCell>
                <TableCell
                  align="right"
                  sx={{ color: '#37DE8F', fontSize: 12 }}
                >
                  {row.unlockRatio}
                </TableCell>
                <TableCell
                  align="right"
                  sx={{ color: '#FFFFFF', fontSize: 12 }}
                >
                  {row.fansChatted}
                </TableCell>
                <TableCell
                  align="right"
                  sx={{ color: '#FFFFFF', fontSize: 12 }}
                >
                  {row.words}
                </TableCell>
                <TableCell
                  align="right"
                  sx={{ color: '#FFFFFF', fontSize: 12 }}
                >
                  {row.replyTime}
                </TableCell>
                <TableCell
                  align="right"
                  sx={{ color: '#FFFFFF', fontSize: 12 }}
                >
                  {row.scheduledHours}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default ChattingStatistics;
