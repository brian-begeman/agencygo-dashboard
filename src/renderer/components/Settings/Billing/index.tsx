import FilterTable from 'renderer/components/Filter/FilterTable';
import { Box, Button, TableCell, TableRow, Typography } from '@mui/material';
import theme from 'renderer/styles/muiTheme';
import ChevronSettingNav from 'renderer/assets/svg/ChevronSettingNav';
import classes from './styles.module.css';
import SubscriptionBilling from './SubscriptionBilling';
import { useState } from 'react';
import SettingBilling from './SettingBilling/Index';

interface TabProps {
  handleTabChange: (name: string) => void;
}

function Billing(props: TabProps) {
  const { handleTabChange } = props;
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
      InvoiceID: '-',
      Period: 'Female',
      ChargeFee: 'Female',
      Discount: 'Admin/Owner',
      WalletPayment: 'Admin/Owner',
      NetGain: 'Admin/Owner',
      Operations: 'More',
    },
    {
      InvoiceID: '-',
      Period: 'Female',
      ChargeFee: 'Female',
      Discount: 'Admin',
      WalletPayment: 'Admin',
      NetGain: 'Admin',
      Operations: 'More',
    },
    {
      InvoiceID: '-',
      Period: 'Male',
      ChargeFee: 'Male',
      Discount: 'Admin',
      WalletPayment: 'Admin',
      NetGain: 'Admin',
      Operations: 'More',
    },
  ];

  return (
    <div className={classes.wrapper}>
      <div className={classes.prefernceWrapper}>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button
            sx={{
              backgroundColor: '#292929',
              color: 'white',
              marginRight: '6px',
            }}
            onClick={() => handleTabChange('SettingBilling')}
          >
            Setting
          </Button>
          <Button
            sx={{ backgroundColor: '#04A1FF', color: 'white' }}
            onClick={() => handleTabChange('SubscribeBilling')}
          >
            Subscription
          </Button>
        </Box>
        <FilterTable tableHeaders={billingTableHeaders}>
          <>
            {billingData.map(
              (
                {
                  InvoiceID,
                  Period,
                  ChargeFee,
                  Discount,
                  WalletPayment,
                  NetGain,
                  Operations,
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
                      {InvoiceID}
                    </Typography>
                  </TableCell>
                  <TableCell
                    sx={{
                      borderColor: theme.palette.primary.contrastText,
                      color: '#fff',
                    }}
                  >
                    {Period}
                  </TableCell>
                  <TableCell
                    sx={{
                      borderColor: theme.palette.primary.contrastText,
                      color: '#fff',
                    }}
                  >
                    {ChargeFee}
                  </TableCell>
                  <TableCell
                    sx={{
                      borderColor: theme.palette.primary.contrastText,
                      color: '#fff',
                    }}
                  >
                    {Discount}
                  </TableCell>
                  <TableCell
                    sx={{
                      borderColor: theme.palette.primary.contrastText,
                      color: '#fff',
                    }}
                  >
                    {WalletPayment}
                  </TableCell>
                  <TableCell
                    sx={{
                      borderColor: theme.palette.primary.contrastText,
                      color: '#fff',
                    }}
                  >
                    {NetGain}
                  </TableCell>
                  <TableCell
                    sx={{
                      borderColor: theme.palette.primary.contrastText,
                      color: theme.palette.info.main,
                    }}
                  >
                    {Operations}
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

function Wallet() {
  const [activeTab, setActiveTab] = useState('Billing');

  const renderTab = (
    tabName: string,
    handleTabChange: (name: string) => void
  ) => {
    switch (tabName) {
      case 'Billing':
        return <Billing handleTabChange={handleTabChange} />;
      case 'SubscribeBilling':
        return <SubscriptionBilling handleTabChange={handleTabChange} />;
      case 'SettingBilling':
        return <SettingBilling />;

      default:
        return <h5>Not found</h5>;
    }
  };

  const handleTabChange = (name: string) => {
    setActiveTab(name);
  };

  return <>{renderTab(activeTab, handleTabChange)}</>;
}

export default Wallet;
