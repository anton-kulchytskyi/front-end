import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  type SxProps,
} from '@mui/material';

type Option = {
  value: string | number;
  label: string;
};

type SelectFilterProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: Option[];
  sx?: SxProps;
  fullWidth?: boolean;
  minWidth?: number | string;
};

const SelectFilter = ({
  label,
  value,
  onChange,
  options,
  sx = {},
  fullWidth = false,
  minWidth = 150,
}: SelectFilterProps) => {
  return (
    <FormControl
      fullWidth={fullWidth}
      sx={{ minWidth, ...sx }}
    >
      <InputLabel>{label}</InputLabel>

      <Select
        value={value}
        label={label}
        onChange={(e) => onChange(e.target.value)}
      >
        {options.map((option) => (
          <MenuItem
            key={option.value}
            value={option.value}
          >
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

SelectFilter.displayName = 'SelectFilter';

export default SelectFilter;
