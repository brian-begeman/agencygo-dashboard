import { Avatar, Stack, Typography } from '@mui/material';
import styles from './styles.module.css';
import PageAside from 'renderer/components/PageAside';
import SearchInput from 'renderer/components/SearchInput';

function AllUserDataMessage(props: any) {  
  return (
    <PageAside>
      <div className={styles.search}>
        <SearchInput
          value={props.searchTxt}
          onUpdateSearch={() => props.setSearchTxt()}
          onSearch={() => {}}
        >
          <SearchInput.ReloadButton onRefresh={() => {}} />
        </SearchInput>
      </div>
      <div style={{ cursor: 'pointer' }}>
        {props?.userData?.map((data: any, index: any) => {
          return (
            <Stack
              key={index}
              direction="row"
              flexShrink={0}
              flexWrap="wrap"
              className={styles.card}
              onClick={()=>props.handleConversation(data)}
            >
              <Avatar />

              <Typography
                variant="h3"
                color="#fff"
                fontSize={'14px'}
                fontWeight={500}
              >
                {data.friendlyName}
              </Typography>
            </Stack>
          );
        })}
      </div>
    </PageAside>
  );
}

export default AllUserDataMessage;
