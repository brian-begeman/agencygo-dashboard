import { Button, Stack, TableCell, TableRow, Typography } from '@mui/material';
import Dashboard from 'renderer/components/Dashboard';
import PageTopbar from 'renderer/components/PageTopbar';
import AddIcon from '@mui/icons-material/Add';
import Filter from 'renderer/components/Filter';
import FilterTable from 'renderer/components/Filter/FilterTable';
import OnlyFansSvg from 'Assets/svg/OnlyFansSvg';
import theme from 'renderer/styles/muiTheme';
import Avatar from 'Assets/svg/avatarSvg';
import DeactivatedSvg from 'Assets/svg/DeactivatedSvg';
import Activated from 'Assets/svg/ActivatedSvg';
import styles from './styles.module.css';

const creatorsTableHeaders = [
  'Creators',
  'Gender',
  'Internal Notes',
  'Platform',
  'Employees',
  'Proxy',
  'Status',
  'Operations',
];

const creatorsTableData = [
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

export default function ManageCreators() {
  return (
    <Dashboard>
      <section className={styles.wrapper}>
        <PageTopbar>
          <PageTopbar.HeaderText>Manage Creator</PageTopbar.HeaderText>
          <Button
            variant="contained"
            color="primary"
            sx={{
              marginLeft: 'auto',
              width: 'max-content',
              height: '32px',
              borderRadius: '3px',
              boxShadow: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '5px',
            }}
          >
            <Typography
              sx={{
                fontSize: '10px',
                fontWeight: 500,
                color: '#fff',
                marginTop: '2px',
              }}
            >
              Add Creator
            </Typography>
            <AddIcon sx={{ color: '#fff', marginTop: 0, fontSize: '14px' }} />
          </Button>
        </PageTopbar>
        <Stack direction="row" spacing={5} sx={{ minHeight: '76.5vh' }}>
          <Filter />
          <FilterTable tableHeaders={creatorsTableHeaders}>
            <>
              {creatorsTableData.map(
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
                      <Typography
                        component="small"
                        color="#fff"
                        fontSize="11px"
                      >
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
            </>
          </FilterTable>
        </Stack>
      </section>
    </Dashboard>
  );
}
