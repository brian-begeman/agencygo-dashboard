import Dashboard from 'renderer/components/Dashboard';
import SearchInput from 'renderer/components/SearchInput';
import { useState } from 'react';
import managers from 'renderer/utils/managerSuiteConstant';
import UserCardWImage from 'renderer/components/UserCardWImage';
import styles from './styles.module.css';

export default function ManagerSuite() {
  const [search, setSearch] = useState('');

  const onSearch = (value: string) => {
    setSearch(value);
  };

  return (
    <Dashboard>
      <section className={styles.wrapper}>
        <header className={styles.header}>
          <h1 className={styles.headerText}>OnlyFans Manager Suite</h1>
        </header>
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
              />
            )
          )}
        </aside>
      </section>
    </Dashboard>
  );
}
