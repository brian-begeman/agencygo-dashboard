import {
  Box,
  ButtonBase,
  Stack,
  TableCell,
  TableRow,
  Typography,
} from '@mui/material';
import Filter from 'renderer/components/Filter';
import FilterTable from 'renderer/components/Filter/FilterTable';
import theme from 'renderer/styles/muiTheme';
import Avatar from 'renderer/assets/svg/AvatarSvg';
import Activated from 'renderer/assets/svg/ActivatedSvg';
import DeactivatedSvg from 'renderer/assets/svg/DeactivatedSvg';
import { useState } from 'react';
import useDataEmployees from '../hooks/useData';
import { useLocation } from 'react-router-dom';
import MenuButton from 'renderer/components/MenuButton';
import ResetPasswordModal from './ResetPasswordModal';
import AssignCreatorModal from './AssignCreatorModal';
import fetchReq from 'utils/fetch';

const employeesTableHeaders = [
  'Employees',
  'Assigned Creators',
  'Role',
  'Status',
  'Operations',
];

export default function LifestyleGroup() {
  const location = useLocation();
  const [OpenAddEmployee, setOpenAddEmployee] = useState(false);
  const [formType, setFormType] = useState<'add' | 'edit'>('add');
  const { employees, setSelectedEmployee,refetch } = useDataEmployees();
  const [id, setId] = useState('');
  // const { mutate: mutateDelete } = useMutation({
  //   key: 'delete-employee',
  // });
  const [open, setOpen] = useState(false);
  const [openAssignCreatorModal, setOpenAssignCreatorModal] = useState(false);
  const [assigneeName, setAssigneeName] = useState<string>('');
  const [email, setEmail] = useState<string>('');

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
        console.log(res)
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
        console.log(res,"delete record-----------------")
        refetch()
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
  console.log(employees,':employees===========================')
  return (
    <>
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
              }) => {
                return (
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
                      align="center"
                    >
                      <Stack
                        spacing={4}
                        direction="row"
                        alignItems="center"
                        justifyContent={'start'}
                      >
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
                            {activated ? 'Edit' : 'Delete'}
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
                      </Stack>
                    </TableCell>
                  </TableRow>
                );
              }
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
    </>
  );
}
