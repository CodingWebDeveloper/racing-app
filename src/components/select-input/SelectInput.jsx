import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

const SelectInput = ({ icon, label, value, options, handleChange }) => {
  return (
    <FormControl sx={{ minWidth: 120 }} size="small" fullWidth>
      <Select
        sx={{ backgroundColor: "white" }}
        startAdornment={icon}
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={value}
        label="Age"
        displayEmpty
        onChange={handleChange}
      >
        {options.map((o) => (
          <MenuItem value={o.value}>{o.label}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectInput;
