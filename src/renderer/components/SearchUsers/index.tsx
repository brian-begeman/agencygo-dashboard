import { useState } from 'react';
import SearchInput from 'renderer/components/SearchInput';
import managers from 'renderer/utils/managerSuiteConstant';
import UserCardWImage from 'renderer/components/UserCardWImage';
import styles from './styles.module.css';

export default function SearchUsers() {
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
