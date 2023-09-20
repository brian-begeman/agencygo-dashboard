import {
  Box,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import theme from 'renderer/styles/muiTheme';
import Avatar from 'Assets/svg/AvatarSvg';
import Activated from 'Assets/svg/ActivatedSvg';
import DeactivatedSvg from 'Assets/svg/DeactivatedSvg';
import OnlyFansSvg from 'Assets/svg/OnlyFansSvg';

const rows = [
  {
    name: 'Joan Adams',
    imageSrc: '',
    gender: 'Female',
    internalNotes: '-',
    platform: {
      name: 'OnlyFans',
      icon: <OnlyFansSvg />,
      linked: true,
    },
    employees: 'Chrissie',
    proxy: {
      name: 'OnlyManager Proxy',
      ipAddress: '107.175.227.145',
    },
    activated: true,
  },
  {
    name: 'Chris Jean-Baptiste',
    imageSrc: '',
    gender: 'Female',
    internalNotes: '-',
    platform: {
      name: 'OnlyFans',
      icon: <OnlyFansSvg />,
      linked: true,
    },
    employees: 'Chrissie',
    proxy: {
      name: 'OnlyManager Proxy',
      ipAddress: '107.175.227.145',
    },
    activated: true,
  },
  {
    name: 'Joan Adams',
    imageSrc: '',
    gender: 'Female',
    internalNotes: '-',
    platform: {
      name: 'OnlyFans',
      icon: <OnlyFansSvg />,
      linked: true,
    },
    employees: 'Chrissie',
    proxy: {
      name: 'OnlyManager Proxy',
      ipAddress: '107.175.227.145',
    },
    activated: false,
  },
];

export default function ShiftTable() {
  return (
    <Box
      padding="16px"
      sx={{ backgroundColor: theme.palette.secondary.main }}
      borderRadius="16px"
    >
      <Box marginBottom="10px">
        <Typography>My Shifts</Typography>
      </Box>
      <TableContainer
        sx={{
          borderRadius: '16px',
          border: `1px solid ${theme.palette.primary.contrastText}`,
        }}
      >
        <Table aria-label="manage creators table">
          <TableHead
            sx={{
              background: theme.palette.primary.contrastText,
              color: '#fff',
            }}
          >
            <TableRow>
              <TableCell sx={{ color: '#fff' }}>Creators</TableCell>
              <TableCell sx={{ color: '#fff' }} align="right">
                Gender
              </TableCell>
              <TableCell sx={{ color: '#fff' }} align="right">
                Internal Notes
              </TableCell>
              <TableCell sx={{ color: '#fff' }}>Platform</TableCell>
              <TableCell sx={{ color: '#fff' }} align="right">
                Employees
              </TableCell>
              <TableCell sx={{ color: '#fff' }}>Proxy</TableCell>
              <TableCell sx={{ color: '#fff' }}>Status</TableCell>
              <TableCell sx={{ color: '#fff' }}>Operations</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(
              ({
                name,
                gender,
                internalNotes,
                platform,
                employees,
                proxy,
                activated,
              }) => (
                <TableRow
                  key={name}
                  sx={{
                    '&:last-child td, &:last-child th': { border: 0 },
                  }}
                >
                  <TableCell
                    sx={{
                      borderColor: theme.palette.primary.contrastText,
                    }}
                    scope="row"
                  >
                    <Stack spacing={4} direction="row" alignItems="center">
                      <Avatar />
                      <Typography variant="h6" fontSize="18px" color="#fff">
                        {name}
                      </Typography>
                    </Stack>
                  </TableCell>
                  <TableCell
                    sx={{
                      borderColor: theme.palette.primary.contrastText,
                      color: '#fff',
                    }}
                    align="right"
                  >
                    {gender}
                  </TableCell>
                  <TableCell
                    sx={{
                      borderColor: theme.palette.primary.contrastText,
                      color: '#fff',
                    }}
                  >
                    {internalNotes}
                  </TableCell>
                  <TableCell
                    sx={{
                      borderColor: theme.palette.primary.contrastText,
                    }}
                  >
                    <Stack
                      alignItems="center"
                      flexDirection="row"
                      spacing={2}
                      color="#fff"
                    >
                      {platform.icon}
                      {platform.name}
                    </Stack>
                    <Typography component="small" color="#fff" fontSize="11px">
                      {platform.linked ? 'Linked' : 'Not Linked'}
                    </Typography>
                  </TableCell>
                  <TableCell
                    sx={{
                      borderColor: theme.palette.primary.contrastText,
                      color: '#fff',
                    }}
                  >
                    {employees}
                  </TableCell>
                  <TableCell
                    sx={{
                      borderColor: theme.palette.primary.contrastText,
                    }}
                  >
                    <Typography color="#fff" fontSize="14px">
                      {proxy.name}
                    </Typography>
                    <Typography color="#fff" fontSize="11px">
                      {proxy.ipAddress}
                    </Typography>
                  </TableCell>
                  <TableCell
                    sx={{
                      borderColor: theme.palette.primary.contrastText,
                    }}
                  >
                    {activated ? <Activated /> : <DeactivatedSvg />}
                  </TableCell>
                  <TableCell
                    sx={{
                      borderColor: theme.palette.primary.contrastText,
                    }}
                    align="right"
                  >
                    <Stack spacing={4} direction="row" alignItems="center">
                      <Typography variant="body1" color="#fff">
                        Edit
                      </Typography>
                      <Typography variant="body1" color="#fff">
                        More
                      </Typography>
                    </Stack>
                  </TableCell>
                </TableRow>
              )
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
