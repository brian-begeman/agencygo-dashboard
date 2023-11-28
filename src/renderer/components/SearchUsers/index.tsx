import { useContext, useEffect, useState } from 'react';
import SearchInput from 'renderer/components/SearchInput';
import UserCardWImage from 'renderer/components/UserCardWImage';
import styles from './styles.module.css';
import { useTheme } from '@mui/material';

import ProfilePic from 'renderer/assets/png/profile.jpg';
import { MyInvoiceContext } from 'renderer/pages/Accounting/Invoicing/context/context';
import { agencyCreatorSplit, randomNumber } from 'renderer/pages/Accounting/Invoicing';

interface Props {
  allUsers: [];
  getUsers: ()=>{}
}

export default function SearchUsers({allUsers, getUsers}: Props) {
  const [search, setSearch] = useState('');
  const [filteredUsers, setFilteredUsers] = useState<any>([]);
  const {data, setData } = useContext<any>(MyInvoiceContext);
  const theme = useTheme();
  const isDarkTheme = theme.palette.mode === 'dark';

  useEffect(()=>{
    setFilteredUsers(allUsers??[])
    const length = allUsers.length;
    if (length > 0) {
      // Automatically set the first user in the list as the default selected user
      setData({
        ...(allUsers[length-length] as {}), 
        currentModalBalance: data?.currentModalBalance?? randomNumber(25000, 1000),
        agencyPer: data?.agencyPer?? agencyCreatorSplit()});
    }
  }, [allUsers])

  const getUsers = async () => {
    try {
      const response = await fetch('http://localhost:3000/users');
      if (response.ok) {
        const data = await response.json();
        setAllUsers(data?.data);
      } else {
        console.error('Failed to fetch users');
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    // Fetch all users when the component mounts
    getUsers();
  }, []);

  const [selectName, setSelectName] = useState<any>('');

  return (
    <aside
      className={styles.aside}
      style={{
        backgroundColor: isDarkTheme ? '#0C0C0C' : '#fff',
        borderColor: isDarkTheme ? '#292929' : '#EAF1FF',
      }}
    >
      <div className={styles.search}>
        <SearchInput
          value={search}
          onUpdateSearch={onSearch}
          onSearch={() => {}}
        >
          <SearchInput.ReloadButton onRefresh={getUsers} />
        </SearchInput>
      </div>
      {allUsers.map((item: any, index: any) => (
        <div
          style={{
            background: item?.firstName === selectName ? '#04A1FF' : '',
          }}
          key={item?._id}
        >
          <UserCardWImage
            data={item}
            id={item._id}
            name={`${item?.firstName} ${item?.lastName}`}
            notificationCount={item?.notificationCount}
            messageCount={item?.messageCount}
            key={item?._id} // Use a unique key, such as _id
            profileImage={''}
            selected={false}
            onClick={() => {}}
            autoRelink={false}
            selectName={setSelectName}
          />
        </div>
      ))}
    </aside>
  );
}
