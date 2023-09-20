import Dashboard from 'renderer/components/Dashboard';
import SearchInput from 'renderer/components/SearchInput';
import { useState } from 'react';
import managers from 'renderer/utils/managerSuiteConstant';
import UserCardWImage from 'renderer/components/UserCardWImage';
import PageTopbar from 'renderer/components/PageTopbar';
import PageAside from 'renderer/components/PageAside';
import styles from './styles.module.css';
import localisation from '../../components/localisation.json';

export default function ManagerSuite() {
  const [search, setSearch] = useState('');

  const onSearch = (value: string) => {
    setSearch(value);
  };

  return (
    <Dashboard>
      <section className={styles.wrapper}>
        <PageTopbar>
          <PageTopbar.HeaderText>
            {localisation.onlyFansManagerSuite}
          </PageTopbar.HeaderText>
        </PageTopbar>
        <PageAside>
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
        </PageAside>
      </section>
    </Dashboard>
  );
}
