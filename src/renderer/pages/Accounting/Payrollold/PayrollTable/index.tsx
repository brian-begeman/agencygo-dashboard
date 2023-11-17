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
import EditIconSvg from 'renderer/assets/svg/EditIconSvg';
import TableAccordion from '../TableAccordion';

const tableData = [
  {
    id: 1,
    employee: 'Joan Adams',
    role: 'Admin',
    hourlyPay: '$14',
    commissionEarned: '$134',
    bonuses: '$14',
    datePaid: '',
    status: 'Unpaid',
    totalHours: '58 hrs',
    totalCompensation: '$1,435.05',
  },
  {
    id: 2,
    employee: 'Zain',
    role: 'Admin',
    hourlyPay: '$12',
    commissionEarned: '$145',
    bonuses: '$13',
    datePaid: '',
    status: 'Unpaid',
    totalHours: '53 hrs',
    totalCompensation: '$1,435.05',
  },
  {
    id: 3,
    employee: 'Shah',
    role: 'Manager',
    hourlyPay: '$14',
    commissionEarned: '$142',
    bonuses: '$16',
    datePaid: 'Sep 24, 2023',
    status: 'Paid',
    totalHours: '56 hrs',
    totalCompensation: '$1,435.05',
  },
  {
    id: 4,
    employee: 'Damilare',
    role: 'Manager',
    hourlyPay: '$17',
    commissionEarned: '$101',
    bonuses: '$14',
    datePaid: 'Sep 24, 2023',
    status: 'Paid',
    totalHours: '50 hrs',
    totalCompensation: '$1,435.05',
  },
  {
    id: 5,
    employee: 'Eloghosa',
    role: 'Employee',
    hourlyPay: '$10',
    commissionEarned: '$146',
    bonuses: '$34',
    datePaid: 'Sep 24, 2023',
    status: 'Paid',
    totalHours: '49 hrs',
    totalCompensation: '$1,435.05',
  },
];

const PayrollTable = () => {
  return (
    <TableAccordion>
      <TableData/>
    </TableAccordion>
  );
};

export default PayrollTable;

const TableData = ()=>{

const theme = useTheme();
const isDarkTheme = theme.palette.mode === 'dark';


  return (
    <TableContainer
      sx={{
        border: `1px solid ${isDarkTheme ?theme.palette.secondary.light: 'transparent'}`,
        background: isDarkTheme ? '#000' : '#fff',
      }}
    >
      <Table aria-label="simple table">
        <TableHead
          sx={{
            background: isDarkTheme ? '#121212' : '#EAF1FF',
          }}
        >
          <TableRow>
            <TableCell>Employee</TableCell>
            <TableCell>Role</TableCell>
            <TableCell>Hourly Pay</TableCell>
            <TableCell>Commission earned</TableCell>
            <TableCell>Bonuses</TableCell>
            <TableCell>Date paid</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Total Hours</TableCell>
            <TableCell>Total Compensation</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row) => (
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell> {row.employee} </TableCell>
              <TableCell>{row.role}</TableCell>
              <TableCell>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '14px',
                  }}
                >
                  <Typography>{row.hourlyPay}</Typography>
                  <EditIconSvg />
                </Box>
              </TableCell>
              <TableCell>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '14px',
                  }}
                >
                  <Typography>{row.commissionEarned}</Typography>
                  <EditIconSvg />
                </Box>
              </TableCell>
              <TableCell>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '14px',
                  }}
                >
                  <Typography>{row.bonuses}</Typography>
                  <EditIconSvg />
                </Box>
              </TableCell>
              <TableCell>{row.datePaid}</TableCell>
              <TableCell
                sx={{
                  color: row.status === 'Unpaid' ? '#FEC84A' : '#37DE8F',
                }}
              >
                <Typography
                  sx={{
                    width: 'fit-content',
                    padding: '4px 10px',
                    borderRadius: '14px',
                    fontSize: '12px',
                    background: row.status === 'Unpaid' ? '#473200' : '#072718',
                  }}
                >
                  {row.status}
                </Typography>
              </TableCell>
              <TableCell>{row.totalHours}</TableCell>
              <TableCell>{row.totalCompensation}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
