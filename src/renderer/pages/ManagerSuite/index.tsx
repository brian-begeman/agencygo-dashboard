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
import { CircularProgress, Grid } from '@mui/material';
import useDataCreators from '../ManageCreators/hooks/useData';
import axios from 'axios';
import { API_URL } from 'config';

const ofusers = [
  {
    name: 'Joan Adams',
    email: 'cheyonlyfans@yahoo.com',
    password: 'Congo212',
    creatorId: 'cheyonlyfans',
    profileImage: '',
    notificationCount: 3,
    messageCount: 1,
  },
  {
    name: 'Brad Goldborn',
    email: 'ankur4736@gmail.com',
    password: 'Test@123',
    creatorId: 'ankur',
    profileImage: '',
    notificationCount: 3,
    messageCount: 1,
  },
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
  +useEffect(() => {
    handleSearch(agencyId);
  }, [agencyId]);

  const onSearch = (value: string) => {
    setSearch(value);
  };
  console.log('creators', creators);

  function onclick(creator: any) {
    console.log(creator);
    window.electron.ipcRenderer.sendMessage('remove-browser-view');
    window.electron.ipcRenderer.sendMessage(
      'attempt-login',
      Object.assign(creator, {
        bounds: getDivBounds('browser-view'),
        // Remove later
        email : "ankur4736@gmail.com",
        password: "Test@123",
        creatorId: Math.random().toString(36).substring(2)
      })
    );
  }
  console.log('creators', creators);
  return (
    <Dashboard>
      <section className={styles.wrapper}>
        <PageTopbar>
          <PageTopbar.HeaderText>
            {localisation.onlyFansManagerSuite}
          </PageTopbar.HeaderText>
        </PageTopbar>
        <PageAside>
          <Grid container>
            <Grid xs={4} item>
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
                    height: '60vh',
                  }}
                >
                  <CircularProgress />
                </div>
              ) : creators?.length > 0 ? (
                creators.map((c) => (
                  <UserCardWImage
                    name={c.creatorName}
                    autoRelink={c?.autoRelink}
                    profileImage={ProfilePic}
                    // profileImage={c.imageSrc}
                    notificationCount={0}
                    messageCount={0}
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
                    height: '60vh',
                  }}
                >
                  No chat Found Start Chatting
                </div>
              )}
            </Grid>
            <Grid xs={8} item>
              <div
                style={{
                  width: '100%',
                  height: '100vh',
                  background: '#000',
                }}
                id="browser-view"
              ></div>
            </Grid>
          </Grid>
        </PageAside>
      </section>
    </Dashboard>
  );
}
