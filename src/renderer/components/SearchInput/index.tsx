import { ChangeEvent, ReactNode } from 'react';
import { IconButton, InputAdornment, OutlinedInput } from '@mui/material';
import Refresh from 'renderer/assets/svg/refreshSvg';
import SearchIcon from '@mui/icons-material/Search';
import styles from './styles.module.css';

interface $Props {
  value: string;
  onUpdateSearch: (v: string) => void;
  onSearch: () => void;
  children?: ReactNode | ReactNode[];
  placeholder?: string;
  className?: string;
}

function SearchInput({
  value,
  onUpdateSearch,
  onSearch,
  placeholder = 'Search',
  children,
  className = '',
}: $Props) {
  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    onUpdateSearch(event.target.value as string);
  };

  return (
    <div className={`${styles.search} ${className}`}>
      <OutlinedInput
        value={value}
        onChange={handleSearch}
        size="small"
        type="text"
        id="search-input"
        className={`${styles.input} ${className}`}
        placeholder={placeholder}
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
