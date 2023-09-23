import { useState } from 'react';
import SearchInput from 'renderer/components/SearchInput';
import managers from 'renderer/utils/managerSuiteConstant';
import UserCardWImage from 'renderer/components/UserCardWImage';
import {
  Box,
  Button,
  MenuItem,
  Select,
  Stack,
  Switch,
  Typography,
} from '@mui/material';
import { Add } from '@mui/icons-material';
import theme from 'renderer/styles/muiTheme';
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
function ProfilePromotion() {
  return (
    <>
      <Aside />
      <Box marginLeft="32px" marginRight="16px" marginTop="16px">
        <Stack gap="12px">
          <Button
            variant="contained"
            sx={{
              background: theme.palette.primary.main,
              marginLeft: 'auto',
              height: '32px',
              textTransform: 'unset',
            }}
            startIcon={<Add sx={{ color: '#fff' }} />}
          >
            <Typography
              fontWeight={600}
              fontSize="12px"
              color="#fff"
              textTransform="unset"
            >
              Create Promotion
            </Typography>
          </Button>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`1px solid ${theme.palette.primary.contrastText}`}
            paddingBottom="32px"
          >
            <Stack gap="10px">
              <Typography color="#fff" fontSize="18px" fontWeight={700}>
                Auto-activate campaign
              </Typography>
              <Typography color="#fff" fontSize="12px">
                Enable to automatically reactivate your promotions when they
                expire
              </Typography>
              <Box marginTop="10px">
                <Typography
                  color="#fff"
                  fontWeight={400}
                  fontSize="12px"
                  marginBottom="5px"
                >
                  Offer Expiration
                </Typography>
                <Select
                  id="offer-expiration"
                  value={7}
                  onChange={() => {}}
                  sx={{
                    color: theme.palette.secondary.contrastText,
                    width: '200px',
                    '.MuiOutlinedInput-notchedOutline': {
                      borderColor: theme.palette.secondary.contrastText,
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                      borderColor: theme.palette.secondary.contrastText,
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                      borderColor: theme.palette.secondary.contrastText,
                    },
                    '.MuiSvgIcon-root': {
                      fill: 'white !important',
                    },
                    input: {
                      backgroundColor: theme.palette.secondary.contrastText,
                    },
                  }}
                >
                  <MenuItem
                    value={7}
                    sx={{ fontWeight: 400, fontSize: '12px' }}
                  >
                    7 Days
                  </MenuItem>
                </Select>
              </Box>
            </Stack>
            <Switch />
          </Stack>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`1px solid ${theme.palette.primary.contrastText}`}
            paddingBottom="32px"
          >
            <Stack gap="10px">
              <Box marginTop="10px">
                <Typography
                  color="#fff"
                  fontWeight={400}
                  fontSize="12px"
                  marginBottom="5px"
                >
                  Add Fans To List
                </Typography>
                <Select
                  id="offer-expiration"
                  value={7}
                  onChange={() => {}}
                  sx={{
                    color: theme.palette.secondary.contrastText,
                    width: '200px',
                    '.MuiOutlinedInput-notchedOutline': {
                      borderColor: theme.palette.secondary.contrastText,
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                      borderColor: theme.palette.secondary.contrastText,
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                      borderColor: theme.palette.secondary.contrastText,
                    },
                    '.MuiSvgIcon-root ': {
                      fill: 'white !important',
                    },
                  }}
                >
                  <MenuItem
                    value={7}
                    sx={{ fontWeight: 400, fontSize: '12px' }}
                  >
                    IFA Profile Promotion
                  </MenuItem>
                </Select>
              </Box>
            </Stack>
            <Switch />
          </Stack>
          <Stack gap="10px">
            <Typography fontWeight={600} fontSize="16px">
              Campaign Insights
            </Typography>
            <Stack
              gap="16px"
              direction="row"
              justifyContent="space-between"
              sx={{ backgroundColor: theme.palette.primary.contrastText }}
              className={styles.campaign}
              paddingTop="30px"
              paddingBottom="12px"
              paddingX="16px"
            >
              <Typography fontWeight={600} fontSize="16px">
                Promo
              </Typography>
              <Typography fontWeight={600} fontSize="16px">
                Claims
              </Typography>
              <Typography fontWeight={600} fontSize="16px">
                Revenue
              </Typography>
              <Typography fontWeight={600} fontSize="16px">
                Operations
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Box>
    </>
  );
}

export default ProfilePromotion;
