import Dashboard from 'renderer/components/Dashboard';
import SearchInput from 'renderer/components/SearchInput';
import { useEffect, useState } from 'react';
import managers from 'renderer/utils/managerSuiteConstant';
import ProfilePic from 'renderer/assets/png/profile.jpg';
import UserCardWImage from 'renderer/components/UserCardWImage';
import PageTopbar from 'renderer/components/PageTopbar';
import PageAside from 'renderer/components/PageAside';
import styles from './styles.module.css';
import localisation from '../../components/localisation.json';
import { Box, CircularProgress, Grid, Stack, Typography } from '@mui/material';
import useDataCreators from '../ManageCreators/hooks/useData';
import { useParams } from 'react-router-dom';

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

export default function ManagerSuite() {
  const agencyId = localStorage.getItem('AgencyId');

  const [search, setSearch] = useState('');

  const {
    creators,
    isLoading,
    refetch,
    selectedCreator,
    setSelectedCreator,
    handleSearch,
  } = useDataCreators();
  useEffect(() => {
    handleSearch(agencyId);
  }, [agencyId]);
  const { page } = useParams();

  const onSearch = (value: string) => {
    setSearch(value);
  };

  function onclick(creator: any) {
    setSelectedCreator(creator);
  }

  useEffect(() => {
    console.log('send event?')
    console.log(selectedCreator);
    if (selectedCreator && selectedCreator.email && selectedCreator.password) {
      console.log('for sure');
      window.electron.ipcRenderer.sendMessage('piev-event', {
        page,
        bounds: getDivBounds('browser-view'),
        // Remove later
        creatorId: selectedCreator.id,
        email: selectedCreator.email,
        password: selectedCreator.password,
        // creatorId: creator._id,
        // proxy: creator.proxy.creds,
        // page,
      });
    }
  }, [page, selectedCreator]);

  return (
    <Dashboard>
      <section className={styles.wrapper}>
        <PageTopbar>
          <PageTopbar.HeaderText>
            {localisation.onlyFansManagerSuite}{` `}
            <span style={{ textTransform: 'capitalize' }}>{page}</span>
            <Box />
          </PageTopbar.HeaderText>
        </PageTopbar>
        {/* <section> */}
        <Box display="flex" gap="5px" padding="6px">
          <Stack display={'flex'}>
            <PageAside className={styles.usersMenu}>
              <div className={styles.search}>
              <SearchInput
                  value={search}
                  onUpdateSearch={onSearch}
                  onSearch={() => {
                    refetch();
                  }}
                >
                  <SearchInput.ReloadButton onRefresh={() => {}} />
                </SearchInput>
              </div>
              {isLoading ? (
                <div
                  style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    // height: '60vh',
                  }}
                >
                  <CircularProgress />
                </div>
              ) : creators?.length > 0 ? (
                creators
                  // .filter(
                  //   (c) =>
                  //     c.proxy !== null &&
                  //     c?.proxy?.hasOwnProperty('creds') &&
                  //     c?.proxy?.hasOwnProperty('proxyUser')
                  // )
                  .map((c) => (
                    <UserCardWImage
                      id={c.id}
                      name={c.creatorName}
                      autoRelink={c?.autoRelink}
                      profileImage={ProfilePic}
                      // profileImage={c.imageSrc}
                      notificationCount={0}
                      messageCount={0}
                      selected={selectedCreator?._id === c._id}
                      onClick={() => onclick(c)}
                    />
                  ))
              ) : (
                <div
                  style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  No chat Found Start Chatting
                </div>
              )}
            </PageAside>
          </Stack>
          <Stack flex={1}>
            <div
              style={{
                width: '100%',
                // height: '100vh',
                background: '#000',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flex: 1
              }}
              id="browser-view"
            >
              <CircularProgress />
              <Typography
                variant="h3"
                color="#fff"
                fontSize={'18px'}
                marginLeft={'20px'}
                fontWeight={500}
              >
                Please wait, Logging you in...
              </Typography>
            </div>
          </Stack>
        </Box>
      </section>
    </Dashboard>
  );
}
