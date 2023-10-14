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
  const { employees, setSelectedEmployee } = useDataEmployees();
  const [id, setId] = useState('');
  // const { mutate: mutateDelete } = useMutation({
  //   key: 'delete-employee',
  // });
  const [open, setOpen] = useState(false);
  const [openAssignCreatorModal, setOpenAssignCreatorModal] = useState(false);
  const [assigneeName,setAssigneeName] = useState<string>('')
  const handleActivate = (id: string) => {
    console.log(id, 'handleActivate??????????????');
  };
  const handleResetPassword = (id: string) => {
    setOpen(!open);
    console.log(id, 'handleResetPassword??????????????????');
  };
  const handleDelete = (id: string) => {
    console.log(id, 'handleDelete?????????????????');
  };

  const getOptions = (activated?: boolean,name?:string) => {
    setAssigneeName(name)
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

  return (
    <section>
      <Stack direction="row" spacing={5} sx={{ height: '100%' }}>
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
                        width: '300px',
                      }}
                      onClick={() =>
                        setOpenAssignCreatorModal(!openAssignCreatorModal)
                      }
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
                      align="right"
                    >
                      <Stack
                        spacing={4}
                        direction="row"
                        alignItems="center"
                        justifyContent={'end'}
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
                            <Box onClick={() => setId(id)}>
                              <MenuButton
                                title="More"
                                tabData={getOptions(activated,name)}
                                id={id}
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
      </Stack>
      {open && <ResetPasswordModal open={open} setOpen={setOpen} />}
      {openAssignCreatorModal && (
        <AssignCreatorModal
          name={assigneeName}
          open={openAssignCreatorModal}
          setOpen={setOpenAssignCreatorModal}
        />
      )}
    </section>
  );
}
