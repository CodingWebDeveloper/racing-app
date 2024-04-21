import { FormControl, Select, MenuItem } from "@mui/material";

const SelectInput = ({ icon, value, options, handleChange, placeholder }) => {
  return (
    <FormControl sx={{ minWidth: 120 }} size="small" fullWidth>
      <Select
        sx={{ backgroundColor: "white" }}
        placeholder={placeholder}
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
