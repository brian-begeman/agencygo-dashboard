import { Divider, Stack, Typography } from '@mui/material';
import { ReactNode } from 'react';
import theme from 'renderer/styles/muiTheme';

interface $Props {
  title: string;
  amount: string;
  icon?: ReactNode;
}

export default function EarningsRecordCard({ title, amount, icon }: $Props) {
  return (
    <Stack
      flexDirection="row"
      borderRadius="16px"
      gap="15px"
      alignItems="center"
      height="120px"
      sx={{
        padding: '12px',
        border: `1px solid ${theme.palette.primary.contrastText}`,
      }}
    >
      <Stack spacing="32px" minWidth="130px">
        <Typography color="#fff" fontWeight="600" fontSize="12px">
          {title}
        </Typography>
        <Typography
          color={theme.palette.secondary.contrastText}
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
