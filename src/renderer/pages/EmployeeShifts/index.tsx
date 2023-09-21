import Dashboard from 'renderer/components/Dashboard';
import SearchInput from 'renderer/components/SearchInput';
import { useState } from 'react';
import managers from 'renderer/utils/managerSuiteConstant';
import UserCardWImage from 'renderer/components/UserCardWImage';
import SectionHeader from 'renderer/components/Dashboard/components/SectionHeader';
import EmployeeShiftsBox from 'renderer/components/Dashboard/components/EmployeeShifts';
import styles from './styles.module.css';
import localisation from '../../components/localisation.json';

export default function EmployeeShifts() {
  const [search, setSearch] = useState('');

  const onSearch = (value: string) => {
    setSearch(value);
  };

  return (
    <Dashboard>
      <section className={styles.wrapper}>
        <SectionHeader title={localisation.employeeShifts} />
        <div className={styles.innerWrapper}>
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
          <EmployeeShiftsBox />
        </div>
      </section>
    </Dashboard>
  );
}
