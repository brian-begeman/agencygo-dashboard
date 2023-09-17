import { ChangeEvent, ReactNode } from 'react';
import { IconButton, InputAdornment, OutlinedInput } from '@mui/material';
import Refresh from 'Assets/svg/refreshSvg';
import SearchIcon from '@mui/icons-material/Search';
import styles from './styles.module.css';

interface $Props {
  value: string;
  onUpdateSearch: (v: string) => void;
  onSearch: () => void;
  children?: ReactNode | ReactNode[];
}

function SearchInput({ value, onUpdateSearch, onSearch, children }: $Props) {
  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    onUpdateSearch(event.target.value as string);
  };

  return (
    <div className={styles.search}>
      <OutlinedInput
        value={value}
        onChange={handleSearch}
        size="small"
        type="text"
        id="search-input"
        className={styles.input}
        placeholder="Search"
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="search data"
              onClick={onSearch}
              onMouseDown={onSearch}
              edge="end"
            >
              <SearchIcon sx={{ color: '#AAAAAA' }} />
            </IconButton>
          </InputAdornment>
        }
      />
      {children}
    </div>
  );
}

interface $ReloadProps {
  onRefresh: () => void;
}

function ReloadButton({ onRefresh }: $ReloadProps) {
  return (
    <IconButton
      aria-label="refresh data"
      onClick={onRefresh}
      onMouseDown={onRefresh}
      edge="end"
    >
      <Refresh />
    </IconButton>
  );
}

SearchInput.ReloadButton = ReloadButton;

export default SearchInput;
