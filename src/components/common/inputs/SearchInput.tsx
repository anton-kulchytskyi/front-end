import SearchIcon from '@mui/icons-material/Search';
import { TextField, InputAdornment } from '@mui/material';

type SearchInputProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  fullWidth?: boolean;
  sx?: object;
};

const SearchInput = ({
  value,
  onChange,
  placeholder = 'Search...',
  fullWidth = true,
  sx = {},
}: SearchInputProps) => {
  return (
    <TextField
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      fullWidth={fullWidth}
      sx={sx}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
  );
};

SearchInput.displayName = 'SearchInput';

export default SearchInput;
