import { FormControl, Select, MenuItem } from "@mui/material";

const SelectInput = ({
  icon,
  label,
  value,
  options,
  handleChange,
  placeholder,
}) => {
  return (
    <FormControl sx={{ minWidth: 120 }} size="small" fullWidth>
      <Select
        sx={{ backgroundColor: "white" }}
        placeholder={placeholder}
        startAdornment={icon}
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={value}
        label={label}
        displayEmpty
        onChange={handleChange}
      >
        <MenuItem value={null} disabled={true}>
          -
        </MenuItem>
        {options.map((o) => (
          <MenuItem key={o.value} value={o.value}>
            {o.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectInput;
