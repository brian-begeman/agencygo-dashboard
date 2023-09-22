import { useState } from 'react';
import SearchInput from 'renderer/components/SearchInput';
import managers from 'renderer/utils/managerSuiteConstant';
import UserCardWImage from 'renderer/components/UserCardWImage';
import { Box } from '@mui/material';
import styles from './styles.module.css';
import UpdateButtons from './components/UpdateButtons';
import FilterTag from './components/FilterTag';
import FilterGrid from './components/FilterGrid';
import TriggerButtons from './components/TriggerButtons';
import SmartBar from './components/SmartBar';

function Aside() {
  const [search, setSearch] = useState('');

  const onSearch = (value: string) => {
    setSearch(value);
  };

  return (
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
  );
}
function SmartTags() {
  return (
    <>
      <Aside />
      <Box marginLeft="32px" marginRight="16px" marginTop="16px">
        <UpdateButtons />
        <FilterTag />
        <FilterGrid />
        <TriggerButtons />
        <SmartBar />
      </Box>
    </>
  );
}

export default SmartTags;
