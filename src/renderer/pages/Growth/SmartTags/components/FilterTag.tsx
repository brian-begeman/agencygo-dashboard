import { ErrorOutline } from '@mui/icons-material';
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Stack,
  Typography,
} from '@mui/material';
import theme from 'renderer/styles/muiTheme';

export default function FilterTag() {
  return (
    <Stack flexDirection="row" justifyContent="space-between" marginTop="32px">
      <Stack flexDirection="row" gap="16px" alignItems="center">
        <Box
          sx={{
            border: `1px solid ${theme.palette.primary.contrastText}`,
            borderRadius: '4px',
          }}
        >
          <Button
            variant="text"
            sx={{ background: theme.palette.secondary.light }}
          >
            <Typography
              fontWeight={600}
              fontSize="14px"
              color="#fff"
              padding="5px 10px"
            >
              Total Spent
            </Typography>
          </Button>
          <Button variant="text">
            <Typography
              fontWeight={600}
              fontSize="14px"
              color="#fff"
              padding="5px 10px"
            >
              Last 30 days spend
            </Typography>
          </Button>
        </Box>
        <ErrorOutline sx={{ color: theme.palette.secondary.contrastText }} />
      </Stack>
      <FormGroup>
        <FormControlLabel
          control={<Checkbox sx={{ color: '#fff' }} />}
          label="Add expired fans"
        />
      </FormGroup>
    </Stack>
  );
}
