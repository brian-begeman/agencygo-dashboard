import { Box } from '@mui/material';
import SearchUsers from 'renderer/components/SearchUsers';
import UpdateButtons from './components/UpdateButtons';
import FilterTag from './components/FilterTag';
import FilterGrid from './components/FilterGrid';
import TriggerButtons from './components/TriggerButtons';
import SmartBar from './components/SmartBar';

function SmartTags() {
  return (
    <>
      <SearchUsers />
      <Box marginLeft="32px" marginRight="16px" marginTop="16px">
        <UpdateButtons />
        <FilterTag />
        <FilterGrid />
        <TriggerButtons />
        <SmartBar />
      </Box>
    </>
  );
}

export default SmartTags;
