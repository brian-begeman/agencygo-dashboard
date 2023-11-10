import { useState } from 'react';
import SearchInput from 'renderer/components/SearchInput';
import managers from 'renderer/utils/managerSuiteConstant';
import UserCardWImage from 'renderer/components/UserCardWImage';
import styles from './styles.module.css';
import { useTheme } from '@mui/material';
import useQuery from 'renderer/hooks/useQuery';

import ProfilePic from 'renderer/assets/png/profile.jpg';

export default function SearchUsers() {
  const [search, setSearch] = useState('');
    const { isLoading, data } = useQuery({ key: 'get-creator' });
      const [selectedCreator, setSelectedCreator] = useState('');

  const onSearch = (value: string) => {
    setSearch(value);
  };

   const theme = useTheme();
   const isDarkTheme = theme.palette.mode === 'dark';


     const handleCreatorSelection = (creator) => {
       setSelectedCreator(creator);
     };
  return (
    <aside
      className={styles.aside}
      style={{
        backgroundColor: isDarkTheme ? '#000' : '#fff',
        borderColor: isDarkTheme ? '#292929' : '#EAF1FF',
      }}
    >
      <div className={styles.search}>
        <SearchInput
          value={search}
          onUpdateSearch={onSearch}
          onSearch={() => {}}
        >
          <SearchInput.ReloadButton onRefresh={() => {}} />
        </SearchInput>
      </div>
      {data?.data &&
        data.data.map((c) => (
          <UserCardWImage
            key={c._id}
            name={c.creatorName}
            profileImage={ProfilePic}
            notificationCount={0}
            messageCount={0}
            selected={selectedCreator === c._id}
            onClick={() => handleCreatorSelection(c._id)}
          />
        ))}
    </aside>
  );
}
