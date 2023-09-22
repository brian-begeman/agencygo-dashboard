import { Box, Button, Divider, Stack, Switch, Typography } from '@mui/material';
import { useState } from 'react';
import SearchInput from 'renderer/components/SearchInput';
import managers from 'renderer/utils/managerSuiteConstant';
import UserCardWImage from 'renderer/components/UserCardWImage';
import { ErrorOutline } from '@mui/icons-material';
import theme from 'renderer/styles/muiTheme';
import SettingSvg from 'renderer/assets/svg/SettingSvg';
import UserCircleAddSvg from 'renderer/assets/svg/UserCircleAddSvg';
import { useNavigate } from 'react-router-dom';
import styles from './styles.module.css';

function Aside() {
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

function AutoFollow() {
  const navigate = useNavigate();

  const onOpenScanDetails = () =>
    navigate('/growth?activeNav=auto-follow&sublink=scan-details');

  return (
    <>
      <Aside />
      <Box marginLeft="32px" marginRight="16px" marginTop="16px">
        <Stack direction="row" justifyContent="space-between">
          <Stack direction="row" gap="16px" alignItems="center">
            <Typography color="#fff" fontWeight={700} fontSize="22px">
              Expired Fans Overview
            </Typography>
            <ErrorOutline
              sx={{ color: theme.palette.secondary.contrastText }}
            />
          </Stack>
          <SettingSvg />
        </Stack>
        <Stack
          direction="row"
          gap="16px"
          alignItems="center"
          marginY="32px"
          justifyContent="space-between"
        >
          <Typography color="#fff" fontWeight={600} fontSize="14px">
            Followed 0 expired fans for Joan Adams
          </Typography>
          <Button variant="text" onClick={onOpenScanDetails}>
            <Typography
              color={theme.palette.primary.main}
              fontWeight={600}
              fontSize="14px"
            >
              Details
            </Typography>
          </Button>
        </Stack>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          padding="16px"
          borderRadius="4px"
          sx={{ background: theme.palette.primary.dark }}
        >
          <Stack gap="16px" alignItems="start">
            <Stack
              direction="row"
              gap="16px"
              alignItems="flex-start"
              justifyContent="start"
            >
              <Typography fontWeight={600} fontSize="18px">
                Automatically follow expired fans
              </Typography>
              <ErrorOutline
                sx={{ color: theme.palette.secondary.contrastText }}
              />
            </Stack>
            <Typography color="#fff" fontWeight={600} fontSize="14px">
              Automatically follow expired fans every day without any additional
              effort. (Recommended)
            </Typography>
          </Stack>
          <Switch />
        </Stack>
        <Stack
          gap="5px"
          padding="16px"
          borderRadius="4px"
          marginTop="32px"
          sx={{ border: `1px solid ${theme.palette.primary.contrastText}` }}
        >
          <Typography color="#fff" fontWeight={600} fontSize="18px">
            Manually Follow Expired Fans
          </Typography>
          <Typography color="#fff" fontWeight={600} fontSize="14px">
            Search for expired fans and select which fans you wish to subscribe
            to.
          </Typography>
          <Stack direction="row" marginY="16px">
            <Button
              variant="contained"
              sx={{ background: theme.palette.primary.main }}
              startIcon={<UserCircleAddSvg />}
            >
              <Typography
                fontWeight={600}
                fontSize="14px"
                color="#fff"
                padding="5px 10px"
              >
                Search Expired Fans
              </Typography>
            </Button>
            <Button variant="text">
              <Typography
                fontWeight={600}
                fontSize="14px"
                color={theme.palette.secondary.contrastText}
                padding="5px 10px"
              >
                Show scan details
              </Typography>
            </Button>
          </Stack>
          <Typography fontWeight={400} fontSize="11px" color="#fff">
            Last scanned on Aug 26 2023, 06:30 am
          </Typography>
          <Divider
            sx={{ background: '#fff', height: '1px', marginTop: '32px' }}
          />
        </Stack>
      </Box>
    </>
  );
}

export default AutoFollow;
