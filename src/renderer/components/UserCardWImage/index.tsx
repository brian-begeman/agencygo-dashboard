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
}
export default function UserCardWImage({
  name,
  profileImage,
  notificationCount,
  messageCount,
}: $Props) {
  return (
    <Stack
      spacing={2}
      direction="row"
      flexShrink={0}
      flexWrap="wrap"
      className={styles.card}
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

      <Typography variant="h3" color="#fff" fontSize={'14px'} fontWeight={500}>
        {name}
      </Typography>
      {notificationCount && (
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
      )}
    </Stack>
  );
}
