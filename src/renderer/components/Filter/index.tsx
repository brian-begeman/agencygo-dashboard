import {
  Box,
  Button,
  Collapse,
  Divider,
  FormControlLabel,
  Radio,
  RadioGroup,
  Stack,
  Typography,
} from '@mui/material';
import CandleSvg from 'renderer/assets/svg/CandleSvg';
import PageAside from 'renderer/components/PageAside';
import theme from 'renderer/styles/muiTheme';
import CloseCircleSvg from 'renderer/assets/svg/CloseCircleSvg';
import { ChangeEvent, useState } from 'react';
import SearchInput from 'renderer/components/SearchInput';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import styles from './styles.module.css';
import FilterTag from './FilterTag';

interface $ByCreatorProps {
  creatorSearch: string;
  setCreatorSearch: (v: string) => void;
}

function FilterByCreator({ creatorSearch, setCreatorSearch }: $ByCreatorProps) {
  const [collapse, setCollapse] = useState(false);

  return (
    <div>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          cursor: 'pointer',
          marginBottom: '32px',
        }}
        onClick={() => setCollapse(!collapse)}
      >
        <Typography variant="h6" fontSize="14px">
          By Creator
        </Typography>
        {!collapse ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
      </Box>
      <Collapse in={!collapse}>
        <SearchInput
          onSearch={() => {}}
          onUpdateSearch={(v) => setCreatorSearch(v)}
          value={creatorSearch}
          placeholder="Enter creator name"
          className={styles.input}
        />
      </Collapse>
    </div>
  );
}

interface $ByStatusProps {
  status: string;
  setStatus: (v: string) => void;
  title: string;
  option1: string;
  option2: string;
}

function FilterByStatus({
  status,
  setStatus,
  title,
  option1,
  option2,
}: $ByStatusProps) {
  const [collapse, setCollapse] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setStatus(event.target.value);
  };

  return (
    <div>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          cursor: 'pointer',
          marginBottom: '32px',
        }}
        onClick={() => setCollapse(!collapse)}
      >
        <Typography variant="h6" fontSize="14px">
          {title}
        </Typography>
        {!collapse ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
      </Box>
      <Collapse in={!collapse}>
        <RadioGroup value={status} onChange={handleChange}>
          <FormControlLabel
            value={option1}
            control={
              <Radio
                sx={{
                  '&:checked': { color: theme.palette.primary.light },
                  color: theme.palette.primary.contrastText,
                }}
              />
            }
            label={option1}
          />
          <FormControlLabel
            value={option2}
            control={
              <Radio
                sx={{
                  '&:checked': { color: theme.palette.primary.light },
                  color: theme.palette.primary.contrastText,
                }}
              />
            }
            label={option2}
          />
        </RadioGroup>
      </Collapse>
    </div>
  );
}

const initFiltersState = [
  {
    label: 'Status',
  },
  {
    label: 'Employee',
  },
  {
    label: 'Status link',
  },
];

function Filter() {
  const [filters, setFilters] = useState(initFiltersState);
  const [creatorSearch, setCreatorSearch] = useState('');
  const [status, setStatus] = useState('activated');
  const [linkStatus, setLinkStatus] = useState('linked');

  const onRemoveFilter = (id: string) => {
    setFilters(filters.filter((filter) => filter.label !== id));
  };

  return (
    <PageAside>
      <div className={styles.search}>
        <CandleSvg />
        <Typography variant="h5">Filters</Typography>
      </div>
      <Box
        sx={{
          borderTop: `1px solid ${theme.palette.primary.contrastText}`,
          borderBottom: `1px solid ${theme.palette.primary.contrastText}`,
          padding: '21px 32px',
        }}
      >
        <Stack
          justifyContent="space-between"
          flexDirection="row"
          alignItems="center"
        >
          <Typography variant="h6">Applied Filters</Typography>
          <Button
            sx={{
              background: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '5px',
              textTransform: 'unset',
            }}
            onClick={() => setFilters([])}
          >
            <Typography variant="body2" color="#fff">
              Clear all
            </Typography>
            <CloseCircleSvg />
          </Button>
        </Stack>
        <Stack flexDirection="row" gap={2} alignItems="center" marginTop="8px">
          {filters.map((filter) => (
            <FilterTag
              key={filter.label}
              onRemoveFilter={onRemoveFilter}
              label={filter.label}
            />
          ))}
        </Stack>
      </Box>
      <Box padding="32px 16px 21px 16px">
        <FilterByCreator
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
        <FilterByStatus
          title="By Status"
          status={status}
          setStatus={setStatus}
          option1="Activated"
          option2="Deactivated"
        />
        <Divider
          sx={{
            background: theme.palette.primary.contrastText,
            marginTop: '11px',
          }}
        />
      </Box>
      <Box padding="32px 16px 21px 16px">
        <FilterByStatus
          title="By Link Status"
          status={linkStatus}
          option1="Linked"
          option2="Unlinked"
          setStatus={setLinkStatus}
        />
        <Divider
          sx={{
            background: theme.palette.primary.contrastText,
            marginTop: '11px',
          }}
        />
      </Box>
    </PageAside>
  );
}

export default Filter;
