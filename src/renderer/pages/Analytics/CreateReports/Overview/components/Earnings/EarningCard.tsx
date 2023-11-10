import { Divider, Stack, Typography, useTheme } from '@mui/material';
import { ReactNode } from 'react';
import theme from 'renderer/styles/muiTheme';

interface $Props {
  title: string;
  amount: string;
  icon?: ReactNode;
}

export default function EarningsRecordCard({ title, amount, icon }: $Props) {
  const theme = useTheme();
  const isDarkTheme = theme.palette.mode === 'dark';
  
  return (
    <Stack
      flexDirection="row"
      borderRadius="16px"
      gap="15px"
      alignItems="center"
      height="140px"
      sx={{
        padding: '16px',
        border: `1px solid ${theme.palette.primary.contrastText}`,
      }}
    >
      <Stack spacing="10px" minWidth="130px">
        <Typography
          color={isDarkTheme ? '#fff' : '#000'}
          fontWeight="600"
          fontSize="12px"
        >
          {title}
        </Typography>
        <Typography
          color={isDarkTheme ? '#fff' : '#000'}
          fontSize="40px"
          fontWeight={700}
        >
          {amount}
        </Typography>
      </Stack>
      {icon && (
        <Divider
          orientation="vertical"
          sx={{
            display: 'flex',
            backgroundColor: theme.palette.primary.contrastText,
            width: '1px',
            marginRight: '25px',
          }}
          component="div"
        />
      )}
      {icon}
    </Stack>
  );
}
