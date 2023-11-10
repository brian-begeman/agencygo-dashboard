import {
  Box,
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
import { useEffect, useState } from 'react';
import useMutation from 'renderer/hooks/useMutation';
import styles from './styles.module.css';
import AddCreaterModal from './components/AddCreaterModal';
import useDataCreators from './hooks/useData';
import MenuButton from 'renderer/components/MenuButton';
import fetchReq from 'utils/fetch';
import Overlay from 'renderer/components/Settings/Wallet/Common/Modal';

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

function getDivBounds(divId: string) {
  const div = document.getElementById(divId);
  if (!div) {
    console.error(`Element with id "${divId}" not found.`);
    return null;
  }

  const rect = div.getBoundingClientRect();

  const x = Math.round(rect.left + window.scrollX);
  const y = Math.round(rect.top + window.scrollY);
  const width = Math.round(rect.width);
  const height = Math.round(rect.height);

  return { x, y, width, height };
}

export default function ManageCreators() {
  const [openAddCreater, setOpenAddCreater] = useState(false);
  const [openLinked, setOpenLinked] = useState(false);
  const [formType, setFormType] = useState<'add' | 'edit'>('add');
  const {
    creators,
    refetch,
    selectedCreator,
    setSelectedCreator,
    handleSearch,
  } = useDataCreators();

  // const { mutate: mutateDelete } = useMutation({
  //   key: 'delete-creator',
  // });
  useEffect(() => {
    handleSearch('');
  }, []);
  const handleDelete = (id: string) => {
    let endpoint = `creators/${id}`;
    let options = {
      method: 'DELETE' as 'DELETE',
      headers: {
        'content-type': 'application/json',
      },
    };
    fetchReq(endpoint, options)
      .then((response) => response.json())
      .then((res) => {
        if (res.message == 'creator deleted') refetch();
      })
      .catch((err) => {
        console.log('Error occured: ', err);
      });
  };
  console.log(creators);

  const handleActivate = (id: string, status: boolean) => {
    const data = {
      status: !status,
    };

    let endpoint = `creators/${id}`;
    let options = {
      method: 'PUT' as 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      withAuth: true,
      body: JSON.stringify(data),
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

  const getOptions = (status: boolean) => {
    const tabData = [
      {
        title: status == true ? 'Deactivate' : 'Activate',
        function: handleActivate,
      },
      { title: 'Delete', function: handleDelete },
    ];
    return tabData;
  };
  console.log('creators', creators);

  const handleLinkedAccount = (creator: any) => {
    setOpenLinked(true);
    console.log('creator', creator);
    window.electron.ipcRenderer.sendMessage(
      'attempt-login',
      Object.assign(creator, {
        bounds: getDivBounds('browser-view'),
      })
    );
  };
  const handleAccountClose = () => {
    setOpenLinked(false);
  };
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
        <Stack direction="row" sx={{ height: '90%' }}>
          <Filter handleSearch={handleSearch} refetch={refetch} />
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
                  assignEmployee,
                  activated,
                  status,
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
                        borderColor:theme.palette.primary.contrastText,
                      }}
                      scope="row"
                    >
                      <Stack spacing={1} direction="row" alignItems="center">
                        <Avatar />
                        <Typography variant="h6" fontSize="18px" >
                          {name}
                        </Typography>
                      </Stack>
                    </TableCell>
                    <TableCell
                      sx={{
                        borderColor: theme.palette.primary.contrastText,
                       
                      }}
                      align="right"
                    >
                      {gender === 'male' ? 'Male' : 'Female'}
                    </TableCell>
                    <TableCell
                      sx={{
                        borderColor: theme.palette.primary.contrastText,
                       
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
                        
                      >
                        OnlyFans
                        <OnlyFansSvg />
                      </Stack>
                      <Typography
                        component="small"
                       
                        fontSize="11px"
                      >
                        {autoRelink ? (
                          'Linked'
                        ) : (
                          <Button
                            onClick={() =>
                              handleLinkedAccount({
                                creatorName: name,
                                autoRelink,
                                gender,
                                id,
                                internalNotes,
                                activated,
                                assignEmployee,
                                imageSrc,
                                status,
                              })
                            }
                            size="small"
                          >
                            Link
                          </Button>
                        )}
                      </Typography>
                    </TableCell>
                    <TableCell
                      sx={{
                        borderColor: theme.palette.primary.contrastText,
                       
                      }}
                    >
                      {assignEmployee
                        ?.map((employee: any) => {
                          return `${employee.name} `;
                        })
                        .join(', ')}
                    </TableCell>
                    <TableCell
                      sx={{
                        borderColor: theme.palette.primary.contrastText,
                      }}
                    >
                      <Typography variant="body2">
                        OnlyManager Proxy
                      </Typography>
                      <Typography variant="caption">
                        107.175.227.145
                      </Typography>
                    </TableCell>
                    <TableCell
                      sx={{
                        borderColor: theme.palette.primary.contrastText,
                      }}
                    >
                      {status ? <Activated /> : <DeactivatedSvg />}
                    </TableCell>
                    <TableCell
                      sx={{
                        borderColor: theme.palette.primary.contrastText,
                      }}
                      align="right"
                    >
                      <Stack spacing={2} direction="row" alignItems="center">
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
                              assignEmployee,
                              imageSrc,
                              status,
                            });
                            setOpenAddCreater(true);
                          }}
                        >
                          <Typography variant="body1" >
                            Edit
                          </Typography>
                        </ButtonBase>
                        <ButtonBase>
                          <MenuButton
                            title="More"
                            tabData={getOptions(status)}
                            id={id}
                            status={status}
                          />
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
      <AddCreaterModal
        setOpen={setOpenAddCreater}
        open={openAddCreater}
        refetch={refetch}
        type={formType}
        selectedCreator={selectedCreator}
      />
      <Overlay
        heading="Linked Account"
        open={openLinked}
        handleClose={handleAccountClose}
        style={{
          width: '700px',
          height: '100vh',
        }}
      >
        <div
          style={{
            width: '100%',
            height: '100vh',
            background: '#000',
          }}
          id="browser-view"
        ></div>
      </Overlay>
    </Dashboard>
  );
}
