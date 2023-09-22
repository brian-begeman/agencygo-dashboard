import React from 'react';
import { TableCell, TableRow, Typography, Button, Stack } from '@mui/material';

import FilterTable from 'renderer/components/Filter/FilterTable';
import theme from 'renderer/styles/muiTheme';
import EyeViewSvg from 'renderer/assets/svg/EyeViewSvg';
import DownloadSvg from 'renderer/assets/svg/DownloadIconSvg';
import classes from './styles.module.css';

const billingTableHeaders = [
  'Category',
  'Amount',
  'Type',
  'Status',
  'Date',
  'Invoice',
];

const withdrawalTableHeaders = [
  'Initiator',
  'Medium',
  'Date',
  'Status',
  'Invoice',
];
const walletData = [
  {
    initiator: 'Subscription',
    medium: 'Bitsafe',
    date: '22/09/2023',
    status: 'Successful',
    invoice: 'Admin/Owner',
  },
  {
    initiator: 'Withdrawal',
    medium: 'Bitsafe',
    date: '21/09/2023',
    status: 'Pending',
    invoice: 'Admin',
  },
  {
    initiator: 'Withdrawal',
    medium: 'Paypal',
    date: '20/09/2023',
    status: 'Failed',
    invoice: 'Admin',
  },
];

const getCode = (status: string): string => {
  const colorCodes = {
    Successful: '#37DE8F',
    Pending: '#FEC84A',
    Failed: '#04A1FF',
  };
  return colorCodes[status as keyof typeof colorCodes];
};

function Wallet() {
  return (
    <div className={classes.billing}>
      <div className={classes.billingHeader}>
        <div className={classes.buttonWrapper}>
          <Button variant="contained" color="secondary">
            <Typography fontWeight={500} fontSize="14px" sx={{ color: '#fff' }}>
              Withdraw Requests
            </Typography>
          </Button>
          <Button variant="contained">
            <Typography fontWeight={500} fontSize="14px" sx={{ color: '#fff' }}>
              Payment Method
            </Typography>
          </Button>
        </div>
      </div>
      <div className={classes.balanceWrapper}>
        <div className={classes.balanceText}>$0.00</div>
      </div>
      <div className={classes.billingTableWrapper}>
        <div className={classes.headingText}>Transaction History</div>
        <FilterTable tableHeaders={billingTableHeaders}>
          <>
            {walletData.map(
              ({ initiator, medium, type, status, date }, index) => (
                <TableRow
                  key={index}
                  sx={{
                    '&:last-child td, &:last-child th': { border: 0 },
                  }}
                >
                  <TableCell
                    sx={{
                      borderColor: theme.palette.primary.contrastText,
                    }}
                    scope="row"
                  >
                    <Typography variant="h6" fontSize="18px" color="#fff">
                      {initiator}
                    </Typography>
                  </TableCell>
                  <TableCell
                    sx={{
                      borderColor: theme.palette.primary.contrastText,
                      color: '#fff',
                    }}
                  >
                    {medium}
                  </TableCell>
                  <TableCell
                    sx={{
                      borderColor: theme.palette.primary.contrastText,
                      color: '#fff',
                    }}
                  >
                    {type}
                  </TableCell>
                  <TableCell
                    sx={{
                      borderColor: theme.palette.primary.contrastText,
                      color: getCode(status),
                    }}
                  >
                    {status}
                  </TableCell>
                  <TableCell
                    sx={{
                      borderColor: theme.palette.primary.contrastText,
                      color: '#fff',
                    }}
                  >
                    {date}
                  </TableCell>
                  <TableCell
                    sx={{
                      borderColor: theme.palette.primary.contrastText,
                    }}
                  >
                    <Stack spacing={4} direction="row" alignItems="center">
                      <EyeViewSvg />
                      <DownloadSvg />
                    </Stack>
                  </TableCell>
                </TableRow>
              )
            )}
          </>
        </FilterTable>
      </div>
      <div className={classes.withdrawalTableWrapper}>
        <div className={classes.headingText}>Withdrawal Requests</div>
        <FilterTable tableHeaders={withdrawalTableHeaders}>
          <>
            {walletData.map(({ initiator, medium, status, date }, index) => (
              <TableRow
                key={index}
                sx={{
                  '&:last-child td, &:last-child th': { border: 0 },
                }}
              >
                <TableCell
                  sx={{
                    borderColor: theme.palette.primary.contrastText,
                  }}
                  scope="row"
                >
                  <Typography variant="h6" fontSize="18px" color="#fff">
                    {initiator}
                  </Typography>
                </TableCell>
                <TableCell
                  sx={{
                    borderColor: theme.palette.primary.contrastText,
                    color: '#fff',
                  }}
                >
                  {medium}
                </TableCell>
                <TableCell
                  sx={{
                    borderColor: theme.palette.primary.contrastText,
                    color: '#fff',
                  }}
                >
                  {date}
                </TableCell>

                <TableCell
                  sx={{
                    borderColor: theme.palette.primary.contrastText,
                    color: getCode(status),
                  }}
                >
                  {status}
                </TableCell>

                <TableCell
                  sx={{
                    borderColor: theme.palette.primary.contrastText,
                  }}
                >
                  <Stack spacing={4} direction="row" alignItems="center">
                    <EyeViewSvg />
                    <DownloadSvg />
                  </Stack>
                </TableCell>
              </TableRow>
            ))}
          </>
        </FilterTable>
      </div>
    </div>
  );
}

export default Wallet;
