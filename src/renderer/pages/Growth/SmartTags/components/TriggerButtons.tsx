import { Button, Stack } from '@mui/material';
import { useContext } from 'react';
import theme from 'renderer/styles/muiTheme';
import { MyContext } from '../context/context';

export default function TriggerButtons() {

  const {submit}=useContext(MyContext)
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
      <Button sx={{ color: '#fff', background: theme.palette.primary.main }}
      onClick={submit}
      >
        Save
      </Button>
    </Stack>
  );
}
