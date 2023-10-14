import {
  Box,
  ButtonBase,
  Stack,
  TableCell,
  TableRow,
  Typography,
} from '@mui/material';
import Dashboard from 'renderer/components/Dashboard';
import PageTopbar from 'renderer/components/PageTopbar';
import AddIcon from '@mui/icons-material/Add';
import Filter from 'renderer/components/Filter';
import FilterTable from 'renderer/components/Filter/FilterTable';
import { KeyboardArrowDown } from '@mui/icons-material';
import theme from 'renderer/styles/muiTheme';
import Avatar from 'renderer/assets/svg/AvatarSvg';
import Activated from 'renderer/assets/svg/ActivatedSvg';
import DeactivatedSvg from 'renderer/assets/svg/DeactivatedSvg';
import { useState, useEffect } from 'react';
import useMutation from 'renderer/hooks/useMutation';
import styles from './styles.module.css';
import AddEmployeeModal from './AddEmployeeModal';
import useDataEmployees from './hooks/useData';
import fetchReq from 'utils/fetch';

const employeesTableHeaders = [
  'Employees',
  'Assigned Creators',
  'Role',
  'Status',
  'Operations',
];

export default function ManageEmployees() {
  const [OpenAddEmployee, setOpenAddEmployee] = useState(false);
  const [formType, setFormType] = useState<'add' | 'edit'>('add');
  const {
    agencies,
    refetch,
    employees,
    selectedEmployee,
    setSelectedEmployee,
    data,
  } = useDataEmployees();
  const [group, setgroup] = useState([]);
  const [people, setPeople] = useState([]);
  const [activeGroup, setactiveGroup] = useState('');

  useEffect(() => {
    // console.log(agencies,"this is the agency variable.")
    let endpoint = 'agency';
    let options = {
      method: 'GET' as 'GET',
      headers: {
        'content-type': 'application/json',
      },
      withAuth: true,
    };
    fetchReq(endpoint, options)
      .then((response) => response.json())
      .then((res) => {
        setgroup(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  useEffect(() => {
  let endPoint = 'employee/' + activeGroup;
  let options = {
    method: 'GET' as 'GET',
    headers: {
      'content-type': 'application/json',
    },
    withAuth: true,
  };
  fetchReq(endPoint, options)
    .then((response) => response.json())
    .then((res) => {
      setPeople(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
  }, [activeGroup]);
  // const { mutate: mutateDelete } = useMutation({
  //   key: 'delete-employee',
  // });

  return (
    <Dashboard>
      <section className={styles.wrapper}>
        <PageTopbar>
          <Stack
            alignItems="center"
            direction="row"
            marginBottom="20px"
            width="100%"
          >
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
                text="Add Employee"
                onClick={() => setOpenAddEmployee(true)}
                endIcon={
                  <AddIcon
                    sx={{ color: '#fff', marginTop: 0, fontSize: '14px' }}
                  />
                }
              />
            </Box>
          </Stack>
          <Stack flexDirection="row" sx={{ position: 'absolute', bottom: 0 }}>
            {group?.map((link: any, index: number) => (
              <PageTopbar.Button
                key={index}
                color="secondary"
                text={link.agencyName}
                isActiveLink={link._id == activeGroup ? true : false}
                onClick={() => {
                  setactiveGroup(link._id);
                }}
                isLink
              />
            ))}
          </Stack>
        </PageTopbar>
        <Stack direction="row" spacing={5} sx={{ height: '100%' }}>
          <Filter />
          <FilterTable
            isEmptyContent={!people.length}
            tableHeaders={employeesTableHeaders}
          >
            <>
            {people.map(
                ({
                  name,
                  assignedCreators,
                  role,
                  status,
                  email,
                  roleRaw,
                  id,
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
                      {status == 'active' ? <Activated /> : <DeactivatedSvg />}
                    </TableCell>
                    <TableCell
                      sx={{
                        borderColor: theme.palette.primary.contrastText,
                      }}
                      align="right"
                    >
                      <Stack spacing={4} direction="row" alignItems="center">
                        <ButtonBase
                          onClick={() => {
                            setSelectedEmployee({
                              name,
                              role: roleRaw,
                              email,
                              id,
                            });
                            setFormType('edit');
                            setOpenAddEmployee(true);
                          }}
                        >
                          <Typography variant="body1" color="#fff">
                            Edit
                          </Typography>
                        </ButtonBase>
                        <ButtonBase
                          onClick={() => {
                            // mutateDelete(
                            //   { id },
                            //   {
                            //     onSuccess: () => {
                            //       refetch();
                            //     },
                            //   }
                            // );
                          }}
                        >
                          <Typography variant="body1" color="#FF0000">
                            Delete
                          </Typography>
                        </ButtonBase>
                        <ButtonBase>
                          <Typography variant="body1" color="#fff">
                            More
                          </Typography>
                        </ButtonBase>
                      </Stack>
                    </TableCell>
                  </TableRow>
                )
              )}
            </>
          </FilterTable>
        </Stack>
      </section>
      <AddEmployeeModal
        open={OpenAddEmployee}
        setOpen={setOpenAddEmployee}
        refetch={refetch}
        type={formType}
        selectedEmployee={selectedEmployee}
      />
    </Dashboard>
  );
}
