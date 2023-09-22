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
      gap="15px"
      alignItems="center"
      height="120px"
      sx={{
        padding: '32px',
        border: `1px solid ${theme.palette.primary.contrastText}`,
      }}
    >
      <Stack spacing="32px" minWidth="190px">
        <Typography color="#fff" fontWeight="600" fontSize="14px">
          {title}
        </Typography>
        <Typography
          color={theme.palette.secondary.contrastText}
          fontSize="50px"
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
            marginRight: '32px',
          }}
          component="div"
        />
      )}
      {icon}
    </Stack>
  );
}
