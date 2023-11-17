import { Button, Stack } from '@mui/material';
import theme from 'renderer/styles/muiTheme';

export default function TriggerButtons() {
  return (
    <Stack
      marginTop="32px"
      flexDirection="row"
      gap="16px"
      alignItems="center"
      justifyContent="end"
    >
      <Button sx={{ color: '#fff', background: theme.palette.secondary.light }}>
        Cancel
      </Button>
      <Button sx={{ color: '#fff', background: theme.palette.primary.main }}>
        Save
      </Button>
    </Stack>
  );
}
