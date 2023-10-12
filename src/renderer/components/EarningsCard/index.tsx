import { Divider, Stack, Typography } from '@mui/material';
import { ReactNode } from 'react';
import theme from 'renderer/styles/muiTheme';

interface $Props {
  title: string;
  amount: string;
  icon?: ReactNode;
}

export default function EarningsCard({ title, amount, icon }: $Props) {
  return (
    <Stack
      flexDirection="row"
      borderRadius="16px"
      alignItems="center"
      justifyContent={'space-between'}
      sx={{
        padding: '32px',
        border: `1px solid ${theme.palette.primary.contrastText}`,
      }}
    >
      <Stack spacing="10px" minWidth="60%">
        <Typography
          color={theme.typography.h5.color}
          fontWeight="600"
          fontSize="14px"
        >
          {title}
        </Typography>
        <Typography
          color={theme.typography.h5.color}
          fontSize="36px"
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
          }}
          component="div"
        />
      )}
      {icon}
    </Stack>
  );
}
