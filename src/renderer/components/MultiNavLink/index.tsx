import { Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { KeyboardArrowRight } from '@mui/icons-material';

interface $Props {
  steps: {
    label: string;
    link: string;
  }[];
}

export default function MultiNavLink({ steps }: $Props) {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      width="max-content"
      marginBottom="16px"
    >
      {steps.map(({ label, link }, index) => (
        <Stack key={label} flexDirection="row" alignItems="center" spacing={2}>
          <Link to={link}>
            <Typography
              color="#fff"
              fontSize="10px"
              fontWeight={500}
              sx={{
                textDecoration:
                  steps.length - 1 !== index ? 'underline' : 'auto',
              }}
            >
              {label}
            </Typography>
          </Link>
          {steps.length - 1 !== index && (
            <KeyboardArrowRight
              sx={{ color: '#292929', marginTop: '0 !important' }}
            />
          )}
        </Stack>
      ))}
    </Stack>
  );
}
