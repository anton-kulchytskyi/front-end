import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

type Option = {
  label: string;
  value: string;
};

type Props = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: Option[];
  fullWidth?: boolean;
};

const SelectInput = ({
  label,
  value,
  onChange,
  options,
  fullWidth = false,
}: Props) => {
  return (
    <FormControl
      fullWidth={fullWidth}
      sx={{ minWidth: 150 }}
    >
      <InputLabel>{label}</InputLabel>
      <Select
        label={label}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {options.map((opt) => (
          <MenuItem
            key={opt.value}
            value={opt.value}
          >
            {opt.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectInput;
