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

const BookkeepingTable = () => {
  return (
    <TableAccordion>
      <TableData/>
    </TableAccordion>
  );
};

export default BookkeepingTable;

const TableData = ()=>{
  return(
    <TableContainer>
    <Table
      sx={{
        minWidth: 650,
        borderRadius: 16,
        border: '1px solid #292929',
      }}
      aria-label="simple table"
    >
      <TableHead sx={{ bgcolor: '#121212' }}>
        <TableRow>
          <TableCell sx={{ color: '#AAAAAA' }}>Employee</TableCell>
          <TableCell sx={{ color: '#AAAAAA' }}>Role</TableCell>
          <TableCell sx={{ color: '#AAAAAA' }}>Hourly Pay</TableCell>
          <TableCell sx={{ color: '#AAAAAA' }}>Commission earned</TableCell>
          <TableCell sx={{ color: '#AAAAAA' }}>Bonuses</TableCell>
          <TableCell sx={{ color: '#AAAAAA' }}>Date paid</TableCell>
          <TableCell sx={{ color: '#AAAAAA' }}>Status</TableCell>
          <TableCell sx={{ color: '#AAAAAA' }}>Total Hours</TableCell>
          <TableCell sx={{ color: '#AAAAAA' }}>Total Compensation</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {tableData.map((row) => (
          <TableRow
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell sx={{ color: '#FFFFFF' }}> {row.employee} </TableCell>
            <TableCell sx={{ color: '#FFFFFF' }}>{row.role}</TableCell>
            <TableCell sx={{ color: '#FFFFFF'  }}>
              <Box sx={{display:'flex',justifyContent:'center',gap:'14px'}}>
              <Typography>{row.hourlyPay}</Typography>
              <EditIconSvg />
              </Box>
            </TableCell>
            <TableCell sx={{ color: '#FFFFFF' }}>
            <Box sx={{display:'flex',justifyContent:'center',gap:'14px'}}>
              <Typography>{row.commissionEarned}</Typography>
              <EditIconSvg />
              </Box>
            </TableCell>
            <TableCell sx={{ color: '#FFFFFF'  }}>
            <Box sx={{display:'flex',justifyContent:'center',gap:'14px'}}>
              <Typography>{row.bonuses}</Typography>
              <EditIconSvg />
              </Box>
            </TableCell>
            <TableCell sx={{ color: '#FFFFFF' }}>{row.datePaid}</TableCell>
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
            <TableCell sx={{ color: '#FFFFFF' }}>{row.totalHours}</TableCell>
            <TableCell sx={{ color: '#FFFFFF' }}>
              {row.totalCompensation}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  )
}