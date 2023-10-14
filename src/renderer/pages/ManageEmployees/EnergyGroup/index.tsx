import {
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

const employeesTableHeaders = [
  'Employees',
  'Assigned Creators',
  'Role',
  'Status',
  'Operations',
];

export default function EnergyGroup() {
  const [OpenAddEmployee, setOpenAddEmployee] = useState(false);
  const [formType, setFormType] = useState<'add' | 'edit'>('add');
  const {
    employees,
    setSelectedEmployee,
  } = useDataEmployees();
  // const { mutate: mutateDelete } = useMutation({
  //   key: 'delete-employee',
  // });

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
                      {activated ? <Activated /> : <DeactivatedSvg />}
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
  );
}
