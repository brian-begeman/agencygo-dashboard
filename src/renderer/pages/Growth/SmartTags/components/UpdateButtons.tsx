import { Box, Button, Stack, Typography, useTheme } from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditNoteIcon from '@mui/icons-material/EditNote';
import theme from 'renderer/styles/muiTheme';

export default function UpdateButtons() {
  const theme = useTheme();
  const isDarkTheme = theme.palette.mode === 'dark';
  return (
    <Stack
      direction="row"
      gap="10px"
      alignItems="center"
      justifyContent="start"
    >
      <Box>
        <Button
          variant="text"
          startIcon={
            <DeleteOutlineIcon
              sx={{
                display: 'flex',
                alignItems: 'center',
                color: theme.palette.error.main,
                width: ' 16px',
                height: '16px',
              }}
            />
          }
        >
          <Typography
            fontWeight={500}
            fontSize="14px"
            fontFamily={'Arimo'}
            sx={{ color: theme.palette.error.main }}
            textTransform={'none'}
          >
            Delete
          </Typography>
        </Button>
      </Box>
      <Box>
        <Button
          variant="text"
          startIcon={
            <EditNoteIcon
              sx={{
                display: 'flex',
                alignItems: 'center',
                color: isDarkTheme ? '#ffff' : '#000',
              }}
            />
          }
        >
          <Typography
            fontWeight={500}
            fontSize="14px"
            fontFamily={'Arimo'}
            sx={{ color: isDarkTheme ? '#ffff' : '#000' }}
            textTransform={'none'}
          >
            Edit
          </Typography>
        </Button>
      </Box>
    </Stack>
  );
}
