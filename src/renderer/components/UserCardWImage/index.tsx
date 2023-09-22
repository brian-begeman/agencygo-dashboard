import Avatar from 'renderer/assets/svg/AvatarSvg';
import { IconButton, Stack } from '@mui/material';
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
    <Stack spacing={2} direction="row" className={styles.card}>
      {profileImage !== '' ? (
        <img
          src={profileImage}
          alt={name.split(' ')?.[0]}
          className={styles.image}
        />
      ) : (
        <Avatar />
      )}

      <h3 className={styles.title}>{name}</h3>
      {notificationCount && (
        <IconButton className={styles.icon}>
          <span className={styles.iconText}>{notificationCount}</span>
          <Message />
        </IconButton>
      )}
      {messageCount && (
        <IconButton className={styles.icon}>
          <span className={styles.iconText}>{messageCount}</span>
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
