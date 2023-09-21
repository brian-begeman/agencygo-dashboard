import { Box, Stack } from '@mui/material';
import Dashboard from 'renderer/components/Dashboard';
import PageTopbar from 'renderer/components/PageTopbar';
import { useState } from 'react';
import SearchInput from 'renderer/components/SearchInput';
import managers from 'renderer/utils/managerSuiteConstant';
import UserCardWImage from 'renderer/components/UserCardWImage';
import styles from './styles.module.css';
import UpdateButtons from './components/UpdateButtons';
import FilterTag from './components/FilterTag';
import FilterGrid from './components/FilterGrid';
import TriggerButtons from './components/TriggerButtons';
import SmartBar from './components/SmartBar';

const links = [
  { text: 'Smart Tags', isActive: true },
  { text: 'Auto Follow', isActive: false },
  { text: 'Profile Promotion', isActive: false },
  { text: 'Trial Links', isActive: false },
  { text: 'Tracking Links', isActive: false },
  { text: 'Scripts', isActive: false },
];

export default function ManageEmployees() {
  const [search, setSearch] = useState('');

  const onSearch = (value: string) => {
    setSearch(value);
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
          >
            <PageTopbar.HeaderText>Growth</PageTopbar.HeaderText>
          </Stack>
          <Stack flexDirection="row" sx={{ position: 'absolute', bottom: 0 }}>
            {links.map((link) => (
              <PageTopbar.Button
                key={link.text}
                color="secondary"
                text={link.text}
                isActiveLink={link.isActive}
                isLink
              />
            ))}
          </Stack>
        </PageTopbar>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: '416px 1fr',
            height: '100%',
          }}
        >
          <aside className={styles.aside}>
            <div className={styles.search}>
              <SearchInput
                value={search}
                onUpdateSearch={onSearch}
                onSearch={() => {}}
              >
                <SearchInput.ReloadButton onRefresh={() => {}} />
              </SearchInput>
            </div>
            {managers.map(
              ({ name, profileImage, notificationCount, messageCount }) => (
                <UserCardWImage
                  name={name}
                  profileImage={profileImage}
                  notificationCount={notificationCount}
                  messageCount={messageCount}
                  key={name}
                />
              )
            )}
          </aside>
          <Box marginLeft="32px" marginRight="16px" marginTop="16px">
            <UpdateButtons />
            <FilterTag />
            <FilterGrid />
            <TriggerButtons />
            <SmartBar />
          </Box>
        </Box>
      </section>
    </Dashboard>
  );
}
