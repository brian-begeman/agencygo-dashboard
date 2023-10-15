import {
  Box,
  ButtonBase,
  Stack,
  TableCell,
  TableRow,
  Typography,
} from '@mui/material';
import Avatar from 'renderer/assets/svg/AvatarSvg';
import Dashboard from 'renderer/components/Dashboard';
import PageTopbar from 'renderer/components/PageTopbar';
import AddIcon from '@mui/icons-material/Add';
import { useState, useEffect } from 'react';
import styles from './styles.module.css';
import { KeyboardArrowDown } from '@mui/icons-material';
import AddEmployeeModal from './AddEmployeeModal';
import useDataEmployees from './hooks/useData';
import Filter from 'renderer/components/Filter';
import FilterTable from 'renderer/components/Filter/FilterTable';
import theme from 'renderer/styles/muiTheme';
import Activated from 'renderer/assets/svg/ActivatedSvg';
import DeactivatedSvg from 'renderer/assets/svg/DeactivatedSvg';
import MenuButton from 'renderer/components/MenuButton';
import ResetPasswordModal from './components/ResetPasswordModal';
import AssignCreatorModal from './components/AssignCreatorModal';
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
  const [id, setId] = useState('');
  const [open, setOpen] = useState(false);
  const [openAssignCreatorModal, setOpenAssignCreatorModal] = useState(false);
  const [assigneeName, setAssigneeName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const {
    agencies,
    refetch,
    employees,
    selectedEmployee,
    setSelectedEmployee,
    setEmployees,
    setSelectedAgency,
    selectedAgency,
  } = useDataEmployees();
  const [group, setgroup] = useState([]);

  useEffect(() => {
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
    refetch();
  }, [selectedAgency]);

  // const { mutate: mutateDelete } = useMutation({
  //   key: 'delete-employee',
  // });

  const handleActivate = (id: string) => {
    const data = {
      to: email,
    };
    let endpoint = `email/${id}`;
    let options = {
      method: 'POST' as 'POST',
      headers: {
        'content-type': 'application/json',
      },
      withAuth: true,
      body: JSON.stringify(data),
    };
    fetchReq(endpoint, options)
      .then((response) => response.json())
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log('Error occured: ', err);
      });
  };

  const handleResetPassword = (id: string) => {
    setOpen(!open);
  };

  const handleDelete = (id: string) => {
    let endpoint = `employee/${id}`;
    let options = {
      method: 'DELETE' as 'DELETE',
      headers: {
        'content-type': 'application/json',
      },
      withAuth: true,
    };
    fetchReq(endpoint, options)
      .then((response) => response.json())
      .then((res) => {
        refetch();
      })
      .catch((err) => {
        console.log('Error occured: ', err);
      });
  };

  const getOptions = (activated?: boolean) => {
    const tabData = [
      {
        title: activated == true ? 'Deactivate' : 'Activate',
        function: handleActivate,
      },
      { title: 'Reset Password', function: handleResetPassword },
      { title: 'Delete', function: handleDelete },
    ];

    return tabData;
  };

  const handleClick = (id: string, email: string) => {
    setId(id);
    setEmail(email);
  };

  return (
    <Dashboard>
      <section className={styles.wrapper}>
        <PageTopbar>
          <Stack
            alignItems="center"
            direction="row"
            marginBottom="20px"
            width="100%"
            justifyContent="space-between"
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
                isActiveLink={link._id == selectedAgency?.id ? true : false}
                onClick={() => {
                  setSelectedAgency({ id: link._id });
                }}
                isLink
              />
            ))}
          </Stack>
        </PageTopbar>
        <Stack direction="row" spacing={1} sx={{ height: '100%' }}>
          <Filter />
          <FilterTable
            isEmptyContent={!employees.length}
            tableHeaders={employeesTableHeaders}
          >
            <>
              {employees.map(
                ({
                  name,
                  assignedCreators,
                  role,
                  activated,
                  email,
                  roleRaw,
                  id,
                }) => (
                  <TableRow
                    key={id}
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
                      <Stack spacing={1} direction="row" alignItems="center">
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
                        width: '300px',
                      }}
                      onClick={() => {
                        setAssigneeName(name);
                        setId(id);
                        setOpenAssignCreatorModal(!openAssignCreatorModal);
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
                      {activated ? (
                        <Activated />
                      ) : (
                        <Box
                          display={'flex'}
                          gap={'10px'}
                          alignItems={'center'}
                        >
                          <DeactivatedSvg />
                          <Typography color={'#fff'}>Resend</Typography>
                        </Box>
                      )}
                    </TableCell>
                    <TableCell
                      sx={{
                        borderColor: theme.palette.primary.contrastText,
                      }}
                    >
                      <Stack spacing={1} direction="row" alignItems="center">
                        {activated ? (
                          <>
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
                            <ButtonBase>
                              <Typography variant="body1" color="#fff">
                                <Box onClick={() => handleClick(id, email)}>
                                  <MenuButton
                                    title="More"
                                    tabData={getOptions(activated)}
                                    id={id}
                                    status={activated}
                                  />
                                </Box>
                              </Typography>
                            </ButtonBase>
                          </>
                        ) : (
                          <ButtonBase onClick={()=>handleDelete(id)}>
                            <Typography variant="body1" color="#fff">
                              Delete
                            </Typography>
                          </ButtonBase>
                        )}
                      </Stack>
                    </TableCell>
                  </TableRow>
                )
              )}
            </>
          </FilterTable>
          {open && (
            <ResetPasswordModal
              open={open}
              setOpen={setOpen}
              email={email}
              id={id}
            />
          )}
          {openAssignCreatorModal && (
            <AssignCreatorModal
              name={assigneeName}
              open={openAssignCreatorModal}
              setOpen={setOpenAssignCreatorModal}
              id={id}
            />
          )}
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
