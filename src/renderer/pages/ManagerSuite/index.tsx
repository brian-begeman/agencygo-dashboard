import Dashboard from 'renderer/components/Dashboard';
import SearchInput from 'renderer/components/SearchInput';
import { useState } from 'react';
import managers from 'renderer/utils/managerSuiteConstant';
import UserCardWImage from 'renderer/components/UserCardWImage';
import PageTopbar from 'renderer/components/PageTopbar';
import PageAside from 'renderer/components/PageAside';
import styles from './styles.module.css';
import localisation from '../../components/localisation.json';
import {Grid} from '@mui/material'

 const ofusers = [{
  name: 'Joan Adams',
  email : "cheyonlyfans@yahoo.com",
  password : "Congo212",
  creatorId : "cheyonlyfans",
  profileImage: '',
  notificationCount: 3,
    messageCount: 1,
},{
  name: 'Brad Goldborn',
  email : "ankur4736@gmail.com",
  password : "Test@123",
  creatorId : "ankur",
  profileImage: '',
  notificationCount: 3,
    messageCount: 1,
}
]

function getDivBounds(divId:string) {
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
  const [search, setSearch] = useState('');
  const [creators] = useState(ofusers)

  const onSearch = (value: string) => {
    setSearch(value);
  };

  function onclick(creator:any) {    
    window.electron.ipcRenderer.sendMessage('attempt-login',  Object.assign(creator,{
      bounds : getDivBounds("browser-view")
    }));
  }

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
              onSearch={() => {}}
            >
              <SearchInput.ReloadButton onRefresh={() => {}} />
            </SearchInput>
          </div>
          {creators.map(
            (c) => (
              <UserCardWImage
                name={c.name}
                profileImage={c.profileImage}
                notificationCount={c.notificationCount}
                messageCount={c.messageCount}
                onClick={() => onclick(c) }
              />
            )
          )}
          </Grid>
          <Grid xs={8} item>
          <div style={{
          width : "100%",
          height: "100vh",
          background : "red"
        }} id="browser-view">
          
        </div>
          </Grid>
         </Grid>
        </PageAside>
      </section>
    </Dashboard>
  );
}
