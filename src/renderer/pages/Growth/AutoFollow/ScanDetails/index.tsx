import { Box, Divider, Typography } from '@mui/material';
import theme from 'renderer/styles/muiTheme';
import CandleSvg from 'renderer/assets/svg/CandleSvg';
import Filter from 'renderer/components/Filter';
import { useState } from 'react';
import ArchiveAddSvg from 'renderer/assets/svg/ArchiveAddSvg';
import EarningsCard from 'renderer/components/EarningsCard';
import MultiNavLink from 'renderer/components/MultiNavLink';
import styles from './styles.module.css';
import ScanDetailsTable from './ScanDetailsTable';

function Aside() {
  const [creatorSearch, setCreatorSearch] = useState('');
  const [linkStatus, setLinkStatus] = useState('New Followed');

  return (
    <aside className={styles.aside}>
      <Box
        sx={{
          padding: '32px',
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
        }}
      >
        <CandleSvg />
        <Typography fontWeight={600} fontSize="20px" textTransform={'none'}>
          Filters
        </Typography>
      </Box>
      <Box padding="32px 16px 21px 16px">
        <Filter.FilterByCreator
          label="Fan's Name"
          placeholder="Enter fan's name"
          creatorSearch={creatorSearch}
          setCreatorSearch={setCreatorSearch}
        />
        <Divider
          sx={{
            background: theme.palette.primary.contrastText,
            marginTop: '11px',
          }}
        />
      </Box>
      <Box padding="32px 16px 21px 16px">
        <Filter.FilterByStatus
          title="Follow Type"
          status={linkStatus}
          options={['New Followed', 'Already Followed', 'False']}
          setStatus={setLinkStatus}
        />
        <Divider
          sx={{
            background: theme.palette.primary.contrastText,
            marginTop: '11px',
          }}
        />
      </Box>
    </aside>
  );
}

const steps = [
  { label: 'Growth', link: '/growth/smart-tags' },
  { label: 'Auto Follow', link: '/growth/auto-follow' },
  { label: 'Scan Details', link: '/growth/auto-follow-scan-details' },
];

const earningsInitJson = [
  {
    title: 'Subscriptions ($)',
    amount: '44.44',
    icon: <ArchiveAddSvg />,
  },
  {
    title: 'Post ($)',
    amount: '0.00',
    icon: <ArchiveAddSvg />,
  },
  {
    title: 'Messages ($)',
    amount: '432.00',
    icon: <ArchiveAddSvg />,
  },
  {
    title: 'Tips ($)',
    amount: '6.00',
  },
  {
    title: 'Referrals ($)',
    amount: '0.00',
  },
  {
    title: 'Streams ($)',
    amount: '0.00',
  },
];

function ScanDetails() {
  return (
    <>
      <Aside />
      <Box marginLeft="32px" marginRight="16px" marginTop="16px">
        <MultiNavLink steps={steps} />
        <Box
          display="grid"
          gap="16px"
          gridTemplateColumns="repeat(3, 1fr)"
          marginBottom="16px"
        >
          {earningsInitJson.map((item) => (
            <EarningsCard
              key={item.title}
              title={item.title}
              amount={item.amount}
            />
          ))}
        </Box>
        <ScanDetailsTable />
      </Box>
    </>
  );
}

export default ScanDetails;
