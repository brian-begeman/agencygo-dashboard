import {
  Button,
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
import OnlyFansSvg from 'renderer/assets/svg/OnlyFansSvg';
import theme from 'renderer/styles/muiTheme';
import Avatar from 'renderer/assets/svg/AvatarSvg';
import DeactivatedSvg from 'renderer/assets/svg/DeactivatedSvg';
import Activated from 'renderer/assets/svg/ActivatedSvg';
import { useState } from 'react';
import useMutation from 'renderer/hooks/useMutation';
import styles from './styles.module.css';
import AddCreaterModal from './components/AddCreaterModal';
import useDataCreators from './hooks/useData';

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

export default function ManageCreators() {
  const [openAddCreater, setOpenAddCreater] = useState(false);
  const [formType, setFormType] = useState<'add' | 'edit'>('add');
  const { creators, refetch, selectedCreator, setSelectedCreator } =
    useDataCreators();
  const { mutate: mutateDelete } = useMutation({
    key: 'delete-creator',
  });
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
            onClick={() => {
              setFormType('add');
              setOpenAddCreater(true);
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
        <Stack direction="row" spacing={5} sx={{ height: '100%' }}>
          <Filter />
          <FilterTable
            isEmptyContent={!creators.length}
            tableHeaders={creatorsTableHeaders}
          >
            <>
              {creators.map(
                ({
                  creatorName: name,
                  gender,
                  internalNotes,
                  employees,
                  activated,
                  id,
                  autoRelink,
                  imageSrc,
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
                      {gender === 'male' ? 'Male' : 'Female'}
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
                        OnlyFans
                        <OnlyFansSvg />
                      </Stack>
                      <Typography
                        component="small"
                        color="#fff"
                        fontSize="11px"
                      >
                        Not Linked
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
                        OnlyManager Proxy
                      </Typography>
                      <Typography color="#fff" fontSize="11px">
                        107.175.227.145
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
                        <ButtonBase
                          onClick={() => {
                            setFormType('edit');
                            setSelectedCreator({
                              creatorName: name,
                              autoRelink,
                              gender,
                              id,
                              internalNotes,
                              activated,
                              employees,
                              imageSrc,
                            });
                            setOpenAddCreater(true);
                          }}
                        >
                          <Typography variant="body1" color="#fff">
                            Edit
                          </Typography>
                        </ButtonBase>
                        <ButtonBase
                          onClick={() => {
                            mutateDelete(
                              { id },
                              {
                                onSuccess: () => {
                                  refetch();
                                },
                              }
                            );
                          }}
                        >
                          <Typography variant="body1" color="#FF0000">
                            Delete
                          </Typography>
                        </ButtonBase>
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
      <AddCreaterModal
        setOpen={setOpenAddCreater}
        open={openAddCreater}
        refetch={refetch}
        type={formType}
        selectedCreator={selectedCreator}
      />
    </Dashboard>
  );
}
