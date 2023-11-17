import { ErrorOutline } from '@mui/icons-material';
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Stack,
  Typography,
  useTheme,
} from '@mui/material';
import theme from 'renderer/styles/muiTheme';

export default function FilterTag() {
  const theme = useTheme();
  const isDarkTheme = theme.palette.mode === 'dark';

  return (
    <Stack flexDirection="row" justifyContent="space-between" marginTop="32px">
      <Stack flexDirection="row" gap="16px" alignItems="center">
        <Box
          sx={{
            border: `1px solid ${theme.palette.primary.contrastText}`,
            borderRadius: '4px',
            backgroundColor: isDarkTheme ? '#000' : '#fff',
          }}
        >
          <Button
            variant="text"
            sx={{ backgroundColor: isDarkTheme ? '#292929' : '#EAF1FF' }}
          >
            <Typography
              fontWeight={600}
              fontSize="12px"
              color={isDarkTheme ? '#fff' : '#000'}
            >
              Total Spent
            </Typography>
          </Button>
          <Button variant="text">
            <Typography
              fontWeight={600}
              fontSize="12px"
              color={isDarkTheme ? '#fff' : '#000'}
            >
              Last 30 days spend
            </Typography>
          </Button>
        </Box>
        <ErrorOutline
          sx={{ fontSize: '18px', color: theme.palette.secondary.contrastText }}
        />
      </Stack>
      <FormGroup>
        <FormControlLabel
          control={<Checkbox sx={{ color: '#fff' }} />}
          sx={{ '& .MuiFormControlLabel-label': { fontSize: '12px' } }}
          label="Add expired fans"
        />
      </FormGroup>
    </Stack>
  );
}
