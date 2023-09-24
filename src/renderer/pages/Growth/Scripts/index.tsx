import { useState } from 'react';
import SearchInput from 'renderer/components/SearchInput';
import managers from 'renderer/utils/managerSuiteConstant';
import UserCardWImage from 'renderer/components/UserCardWImage';
import { Box, Button, Stack, Typography } from '@mui/material';
import theme from 'renderer/styles/muiTheme';
import { Add } from '@mui/icons-material';
import FileNotFound from 'renderer/assets/svg/FileNotFound';
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

const tags = ['All tags', 'Tag 1'];

const headTags = ['Name', 'Text', 'Tags', 'Statistics', 'Operations'];

function Scripts() {
  const [search, setSearch] = useState('');

  const onSearch = (value: string) => {
    setSearch(value);
  };

  return (
    <>
      <Aside />
      <Box marginLeft="32px" marginRight="16px" marginTop="16px">
        <Stack gap="22px">
          <Stack direction="row" justifyContent="space-between">
            <SearchInput
              value={search}
              onUpdateSearch={onSearch}
              onSearch={() => {}}
            />
            <Stack direction="row" gap="10px">
              <Button
                variant="outlined"
                sx={{
                  borderColor: theme.palette.primary.main,
                  marginLeft: 'auto',
                  height: '32px',
                  textTransform: 'unset',
                }}
              >
                <Typography
                  fontWeight={600}
                  fontSize="12px"
                  color={theme.palette.primary.main}
                  textTransform="unset"
                >
                  Reset
                </Typography>
              </Button>
              <Button
                variant="contained"
                sx={{
                  background: theme.palette.primary.main,
                  marginLeft: 'auto',
                  height: '32px',
                  textTransform: 'unset',
                }}
              >
                <Typography
                  fontWeight={600}
                  fontSize="12px"
                  color="#fff"
                  textTransform="unset"
                >
                  Filter
                </Typography>
              </Button>
            </Stack>
          </Stack>
          <Stack direction="row" gap="16px" alignItems="center">
            <Button
              variant="text"
              sx={{
                borderColor: theme.palette.primary.main,
                height: '32px',
                textTransform: 'unset',
              }}
              startIcon={<Add sx={{ color: theme.palette.primary.main }} />}
            >
              <Typography
                fontWeight={600}
                fontSize="12px"
                color={theme.palette.primary.main}
                textTransform="unset"
              >
                New Tag
              </Typography>
            </Button>
            {tags.map((tag) => (
              <Typography
                fontWeight={600}
                fontSize="12px"
                color="#fff"
                textTransform="unset"
                padding="5px 7px"
                borderRadius="16px"
                sx={{ background: theme.palette.primary.main }}
              >
                {tag}
              </Typography>
            ))}
          </Stack>
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
            {headTags.map((tag) => (
              <Typography fontWeight={600} fontSize="16px">
                {tag}
              </Typography>
            ))}
          </Stack>
          <Stack justifyContent="center" direction="row">
            <FileNotFound />
          </Stack>
        </Stack>
      </Box>
    </>
  );
}

export default Scripts;
