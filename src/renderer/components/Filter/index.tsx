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
// import CloseCircleSvg from 'renderer/assets/svg/CloseCircleSvg';
import { ChangeEvent, useState } from 'react';
import SearchInput from 'renderer/components/SearchInput';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import styles from './styles.module.css';
// import FilterTag from './FilterTag';
// import fetchReq from 'utils/fetch';
import { useLocation } from 'react-router-dom';

interface $ByCreatorProps {
  creatorSearch: string;
  setCreatorSearch: (v: string) => void;
  label?: string;
  placeholder?: string;
}

function FilterByCreator({
  creatorSearch,
  setCreatorSearch,
  label = 'By Creator',
  placeholder = 'Enter creator name',
}: $ByCreatorProps) {
  const [collapse, setCollapse] = useState(false);

  return (
    <div>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          cursor: 'pointer',
          marginBottom: '12px',
        }}
        onClick={() => setCollapse(!collapse)}
      >
        <Typography variant="h6" fontSize="14px">
          {label}
        </Typography>
        {!collapse ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
      </Box>
      <Collapse in={!collapse}>
        <SearchInput
          onSearch={() => {}}
          onUpdateSearch={(v) => setCreatorSearch(v)}
          value={creatorSearch}
          placeholder={placeholder}
          className={styles.input}
        />
      </Collapse>
    </div>
  );
}

interface $ByEmployeeProps {
  employeeSearch: string;
  setEmployeeSearch: (v: string) => void;
  label?: string;
  placeholder?: string;
}

function FilterByEmployee({
  employeeSearch,
  setEmployeeSearch,
  label = 'By Employee',
  placeholder = 'Enter employee name',
}: $ByEmployeeProps) {
  const [collapse, setCollapse] = useState(false);

  return (
    <div>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          cursor: 'pointer',
          marginBottom: '12px',
        }}
        onClick={() => setCollapse(!collapse)}
      >
        <Typography variant="h6" fontSize="14px">
          {label}
        </Typography>
        {!collapse ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
      </Box>
      <Collapse in={!collapse}>
        <SearchInput
          onSearch={() => {}}
          onUpdateSearch={(v) => setEmployeeSearch(v)}
          value={employeeSearch}
          placeholder={placeholder}
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
  options: string[];
}

function FilterByStatus({ status, setStatus, title, options }: $ByStatusProps) {
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
          marginBottom: '12px',
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
          {options.map((option) => (
            <FormControlLabel
              value={option}
              control={
                <Radio
                  sx={{
                    '&:checked': { color: theme.palette.primary.light },
                    color: theme.palette.primary.contrastText,
                  }}
                />
              }
              label={option}
            />
          ))}
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

interface $FilterProps {
  handleSearch?: any;
  refetch?: any;
}
function Filter({ handleSearch, refetch }: $FilterProps) {
  const [filters, setFilters] = useState(initFiltersState);
  const [creatorSearch, setCreatorSearch] = useState('');
  const [employeeSearch, setEmployeeSearch] = useState('');
  const [status, setStatus] = useState('');
  const [linkStatus, setLinkStatus] = useState('');
  const location = useLocation()
  const onRemoveFilter = (id: string) => {
    setFilters(filters.filter((filter) => filter.label !== id));
  };

  const handleFilterData = () => {
    const data = {};
    if (creatorSearch != '') {
      Object.assign(data, { assignedCreators: creatorSearch });
    }
    if(location.pathname==='/creators'){
      if (status != '') {
        Object.assign(data, { status: status == 'Activated' ? true : false });
      }
      if (linkStatus != '') {
        Object.assign(data, {
          plateformlink: linkStatus == 'Linked' ? true : false,
        });
      }
    }
    else{
      if (status != '') {
        Object.assign(data, { status: status == 'inactive' ? false : true });
      }
      if (employeeSearch != '') {
        Object.assign(data, { name: employeeSearch });
      }
    }

    handleSearch(data);
  };

  return (
    <PageAside>
      <Box
        sx={{
          padding: '20px',
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
        }}
      >
        <CandleSvg />
        <Typography font-size="22px">Filters</Typography>
      </Box>
      <Box
        sx={{
          borderTop: `1px solid ${theme.palette.primary.contrastText}`,
          borderBottom: `1px solid ${theme.palette.primary.contrastText}`,
          padding: '21px 32px',
          display: 'flex',
          gap: '10px',
        }}
      >
        <Button variant="outlined" onClick={refetch}>
          Reset
        </Button>
        <Button
          variant="contained"
          sx={{ color: 'white' }}
          onClick={handleFilterData}
        >
          Search
        </Button>
        {/* <Stack
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
        </Stack> */}
      </Box>
      <Box padding="12px 16px 12px 16px">
        <FilterByEmployee
          employeeSearch={employeeSearch}
          setEmployeeSearch={setEmployeeSearch}
        />
        <Divider
          sx={{
            background: theme.palette.primary.contrastText,
            marginTop: '11px',
          }}
        />
      </Box>
      <Box padding="0px 16px 0px 16px">
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
      <Box padding="12px 16px 12px 16px">
        <FilterByStatus
          title="By Status"
          status={status}
          setStatus={setStatus}
          options={['Activated', 'Deactivated']}
        />
        <Divider
          sx={{
            background: theme.palette.primary.contrastText,
            marginTop: '11px',
          }}
        />
      </Box>
      {location.pathname==="/creators" &&
      <Box padding="12px 16px 12px 16px">
        <FilterByStatus
          title="By Link Status"
          status={linkStatus}
          options={['Linked', 'Unlinked']}
          setStatus={setLinkStatus}
        />
        <Divider
          sx={{
            background: theme.palette.primary.contrastText,
            marginTop: '11px',
          }}
        />
      </Box>}
    </PageAside>
  );
}

Filter.FilterByCreator = FilterByCreator;
Filter.FilterByStatus = FilterByStatus;

export default Filter;
