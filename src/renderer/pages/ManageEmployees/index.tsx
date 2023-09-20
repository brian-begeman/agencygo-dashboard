import { Box, Stack, TableCell, TableRow, Typography } from '@mui/material';
import Dashboard from 'renderer/components/Dashboard';
import PageTopbar from 'renderer/components/PageTopbar';
import AddIcon from '@mui/icons-material/Add';
import Filter from 'renderer/components/Filter';
import FilterTable from 'renderer/components/Filter/FilterTable';
import { KeyboardArrowDown } from '@mui/icons-material';
import theme from 'renderer/styles/muiTheme';
import Avatar from 'Assets/svg/AvatarSvg';
import Activated from 'Assets/svg/ActivatedSvg';
import DeactivatedSvg from 'Assets/svg/DeactivatedSvg';
import styles from './styles.module.css';

const links = [
  { text: 'Diamond Lifestyle Group', isActive: true },
  { text: 'Hot n Spicy Group', isActive: false },
  { text: 'Gud Energy Group', isActive: false },
];

const employeesTableHeaders = [
  'Employees',
  'Assigned Creators',
  'Role',
  'Status',
  'Operations',
];

const employeesTableData = [
  {
    name: 'Joan Adams',
    imageSrc: '',
    assignedCreators: 'Female',
    role: 'Admin/Owner',
    activated: true,
  },
  {
    name: 'Chris Jean-Baptiste',
    imageSrc: '',
    assignedCreators: 'Female',
    role: 'Admin',
    activated: true,
  },
  {
    name: 'Joan Adams',
    imageSrc: '',
    assignedCreators: 'Male',
    role: 'Admin',
    activated: false,
  },
];

export default function ManageEmployees() {
  return (
    <Dashboard>
      <section className={styles.wrapper}>
        <PageTopbar>
          <Stack alignItems="center" direction="row">
            <PageTopbar.HeaderText>Manage Employees</PageTopbar.HeaderText>
            <Box
              sx={{
                display: 'flex',
                marginLeft: 'auto',
                alignItems: 'center',
                gap: '15px',
              }}
            >
              <PageTopbar.Button
                color="secondary"
                text="Batch Operations"
                endIcon={
                  <KeyboardArrowDown
                    sx={{ color: '#fff', marginTop: 0, fontSize: '14px' }}
                  />
                }
              />
              <PageTopbar.Button
                color="primary"
                text="Add Creator"
                endIcon={
                  <AddIcon
                    sx={{ color: '#fff', marginTop: 0, fontSize: '14px' }}
                  />
                }
              />
            </Box>
          </Stack>
          <Stack flexDirection="row" sx={{ position: 'absolute', bottom: 0 }}>
            {links.map((link) => (
              <PageTopbar.Button
                key={link.text}
                color="secondary"
                text={link.text}
                isActiveLink={link.isActive}
                isLink
              />
            ))}
          </Stack>
        </PageTopbar>
        <Stack direction="row" spacing={5} sx={{ height: '76.5vh' }}>
          <Filter wrapperClassName={styles.filter} />
          <FilterTable tableHeaders={employeesTableHeaders}>
            <>
              {employeesTableData.map(
                ({ name, assignedCreators, role, activated }) => (
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
                    >
                      {assignedCreators}
                    </TableCell>
                    <TableCell
                      sx={{
                        borderColor: theme.palette.primary.contrastText,
                        color: '#fff',
                      }}
                    >
                      {role}
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
