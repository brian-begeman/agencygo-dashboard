import React from 'react';
import { TableCell, TableRow, Typography, Button } from '@mui/material';

import FilterTable from 'renderer/components/Filter/FilterTable';
import theme from 'renderer/styles/muiTheme';
import classes from './styles.module.css';

const billingTableHeaders = [
  'Invoice ID',
  'Period',
  'Charge Fee',
  'Discount',
  'Wallet Payment',
  'Net Gain',
  'Operations',
];

const billingData = [
  {
    invoiceID: '-',
    period: 'Female',
    chargeFee: 'Female',
    discount: 'Admin/Owner',
    walletPayment: 'Admin/Owner',
    netGain: 'Admin/Owner',
    operations: 'More',
  },
  {
    invoiceID: '-',
    period: 'Female',
    chargeFee: 'Female',
    discount: 'Admin',
    walletPayment: 'Admin',
    netGain: 'Admin',
    operations: 'More',
  },
  {
    invoiceID: '-',
    period: 'Male',
    chargeFee: 'Male',
    discount: 'Admin',
    walletPayment: 'Admin',
    netGain: 'Admin',
    operations: 'More',
  },
];
function Billing() {
  return (
    <div className={classes.billing}>
      <div className={classes.billingHeader}>
        <div className={classes.buttonWrapper}>
          <Button variant="contained" color="secondary">
            <Typography fontWeight={500} fontSize="14px" sx={{ color: '#fff' }}>
              Settings
            </Typography>
          </Button>
          <Button variant="contained">
            <Typography fontWeight={500} fontSize="14px" sx={{ color: '#fff' }}>
              Subscriptions Plans
            </Typography>
          </Button>
        </div>
      </div>
      <div className={classes.billingTableWrapper}>
        <FilterTable tableHeaders={billingTableHeaders}>
          <>
            {billingData.map(
              (
                {
                  invoiceID,
                  period,
                  chargeFee,
                  discount,
                  walletPayment,
                  netGain,
                  operations,
                },
                index
              ) => (
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
                      {invoiceID}
                    </Typography>
                  </TableCell>
                  <TableCell
                    sx={{
                      borderColor: theme.palette.primary.contrastText,
                      color: '#fff',
                    }}
                  >
                    {period}
                  </TableCell>
                  <TableCell
                    sx={{
                      borderColor: theme.palette.primary.contrastText,
                      color: '#fff',
                    }}
                  >
                    {chargeFee}
                  </TableCell>
                  <TableCell
                    sx={{
                      borderColor: theme.palette.primary.contrastText,
                      color: '#fff',
                    }}
                  >
                    {discount}
                  </TableCell>
                  <TableCell
                    sx={{
                      borderColor: theme.palette.primary.contrastText,
                      color: '#fff',
                    }}
                  >
                    {walletPayment}
                  </TableCell>
                  <TableCell
                    sx={{
                      borderColor: theme.palette.primary.contrastText,
                    }}
                  >
                    <Typography color="#fff" fontSize="14px">
                      {netGain}
                    </Typography>
                  </TableCell>
                  <TableCell
                    sx={{
                      borderColor: theme.palette.primary.contrastText,
                      color: '#37DE8F',
                    }}
                  >
                    {operations}
                  </TableCell>
                </TableRow>
              )
            )}
          </>
        </FilterTable>
      </div>
    </div>
  );
}

export default Billing;
