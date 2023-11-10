import { Box, Stack, Typography } from '@mui/material';

interface $Props {
  tabButton: any;
  setActiveButton?: any;
  activeButton?: number;
}
export default function ButtonGroup({
  tabButton,
  setActiveButton,
  activeButton,
}: $Props) {
  return (
    <Box
      display="flex"
      border="1px solid #292929"
      width="fit-content"
      borderRadius="6px"
      sx={{   cursor:'pointer'}}
    >
      {tabButton.map((val: any) => {
        return (
          <Stack
            sx={
              val.id == activeButton
                ? {
                    padding: '8px 12px',
                    background: '#292929',
                    borderRadius: '4px',
                   
                  }
                : { padding: '8px 12px', borderRadius: '4px' }
            }
            onClick={() => setActiveButton(val.id)}
          >
            <Typography color="#FFFFFF" fontSize="14px">
              {val.title}
            </Typography>
          </Stack>
        );
      })}
    </Box>
  );
}
