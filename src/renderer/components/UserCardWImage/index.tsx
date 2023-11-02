import Avatar from 'renderer/assets/svg/AvatarSvg';
import { IconButton, Stack, Typography } from '@mui/material';
import Message from 'renderer/assets/svg/messageSvg';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import styles from './styles.module.css';

interface $Props {
  name: string;
  profileImage: string;
  notificationCount?: number;
  messageCount?: number;
  onClick: any;
  autoRelink: boolean;
}
export default function UserCardWImage({
  name,
  autoRelink,
  profileImage,
  notificationCount,
  messageCount,
  onClick,
}: $Props) {
  return (
    <Stack
      // spacing={1}
      direction="row"
      flexShrink={0}
      flexWrap="wrap"
      className={styles.card}
    >
      <div
        onClick={onClick}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-around',
          cursor: 'pointer',
        }}
      >
        {profileImage !== '' ? (
          <img
            src={profileImage}
            alt={name.split(' ')?.[0]}
            className={styles.image}
          />
        ) : (
          <Avatar />
        )}
        <div>

        <Typography
          variant="h3"
          color="#fff"
          fontSize={'14px'}
          fontWeight={500}
          >
          {name}
        </Typography>
           
        
          {/* <Typography
            variant="h3"
            color="green"
            fontSize={'14px'}
            fontWeight={500}
          >
            {autoRelink ? 'Linked' : 'Not linked'}
          </Typography> */}
        </div>
        {/* {notificationCount && (
          <IconButton className={styles.icon}>
            <Typography color={'#fff'} fontSize={'14px'} fontWeight={400}>
              {notificationCount}
            </Typography>
            <Message />
          </IconButton>
        )}
        {messageCount && (
          <IconButton className={styles.icon}>
            <Typography color={'#fff'} fontSize={'14px'} fontWeight={400}>
              {messageCount}
            </Typography>
            <NotificationsNoneIcon
              sx={{
                color: '#AAAAAA',
                width: '18px',
                height: '18px',
              }}
            />
          </IconButton>
        )} */}
      </div>
    </Stack>
  );
}
