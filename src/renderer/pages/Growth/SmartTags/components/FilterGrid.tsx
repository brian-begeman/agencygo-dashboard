import { Grid, Stack, TextField, Typography, useTheme } from '@mui/material';
import theme from 'renderer/styles/muiTheme';
import { arrGenerator } from 'renderer/utils';

const gridData = [
  {
    title: 'Tag 1',
    type: 'input',
  },
  {
    title: '< Total spent <',
    type: 'text',
  },
  {
    title: 'Tag 1',
    type: 'input',
  },
  {
    title: 'Fans: 0 (0%)',
    type: 'text',
  },
];

export default function FilterGrid() {
    const theme = useTheme();
    const isDarkTheme = theme.palette.mode === 'dark';
  return (
    <Grid
      container
      spacing={2}
      marginTop="48px"
      marginLeft={'20px'}

    >
      {arrGenerator(3).map(() =>
        gridData.map((item) => (
          <Grid item xs={3} alignItems="center" key={item.title}>
            {item.type === 'input' ? (
              <Stack flexDirection="row" gap="10px" alignItems="center">
                <Typography fontWeight={500} fontSize="14px">
                  {item.title}
                </Typography>
                <TextField
                  placeholder="0$"
                  size="small"
                  sx={{
                    maxWidth: '160px',
                    height: '40px',
                    border: `1px solid ${theme.palette.secondary.contrastText}`,
                    input: { color: isDarkTheme ? '#fff' : '#000' },
                    backgroundColor: isDarkTheme ? '#292929' : '#EAF1FF',
                  }}
                />
              </Stack>
            ) : (
              <Stack
                flexDirection="row"
                alignItems="center"
                height="100%"
                justifyContent="center"
              >
                <Typography fontWeight={500} fontSize="14px">
                  {item.title}
                </Typography>
              </Stack>
            )}
          </Grid>
        ))
      )}
    </Grid>
  );
}
