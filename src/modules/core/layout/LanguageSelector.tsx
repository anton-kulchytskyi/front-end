import { Select, MenuItem } from '@mui/material';

const LanguageSelector = () => {
  return (
    <Select
      size="small"
      value="en"
      sx={{ minWidth: 80 }}
      onChange={() => {}}
    >
      <MenuItem value="en">EN</MenuItem>
      <MenuItem value="uk">UA</MenuItem>
    </Select>
  );
};

export default LanguageSelector;
