import { Button, Stack, Typography } from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditNoteIcon from '@mui/icons-material/EditNote';
import theme from 'renderer/styles/muiTheme';

export default function UpdateButtons() {
  return (
    <Stack
      direction="row"
      gap="20px"
      alignItems="center"
      justifyContent="start"
    >
      <Button
        variant="text"
        startIcon={
          <DeleteOutlineIcon
            sx={{
              display: 'flex',
              alignItems: 'center',
              color: theme.palette.error.main,
            }}
          />
        }
      >
        <Typography
          fontWeight={500}
          fontSize="12px"
          sx={{ color: theme.palette.error.main }}
        >
          Delete
        </Typography>
      </Button>
      <Button
        variant="text"
        startIcon={
          <EditNoteIcon
            sx={{
              display: 'flex',
              alignItems: 'center',
              color: '#fff',
            }}
          />
        }
      >
        <Typography fontWeight={500} fontSize="12px" sx={{ color: '#fff' }}>
          Edit
        </Typography>
      </Button>
    </Stack>
  );
}
