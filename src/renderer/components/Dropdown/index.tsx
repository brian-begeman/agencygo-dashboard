import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function MultiSelect({
  creatorNames,
  setSelectedValues,
  selectedValues,
  multiple,
}: any) {
  const handleChange = (event: SelectChangeEvent<typeof selectedValues>) => {
    setSelectedValues(event.target.value as typeof selectedValues);
  };

  return (
    <FormControl
      sx={{
        m: 0,
        minWidth: '100%',
        background: '#0f0f0f',
        border: '1px solid #fff',
        borderRadius: '5px',
        outline: 'none',
        color: '#fff',
        '& :focus': {
          border: 'none',
          outline: 'none',
        },
        '&.css-3dzjca-MuiPaper-root-MuiPopover-paper-MuiMenu-paper': {
          background: '#0f0f0f !important',
        },
      }}
      size="small"
    >
      <Select
        sx={{
          '&.css-3dzjca-MuiPaper-root-MuiPopover-paper-MuiMenu-paper': {
            background: '#0f0f0f !important',
          },
          color: '#fff',
        }}
        fullWidth
        labelId="demo-multi-select-label"
        id="demo-multi-select"
        multiple={multiple}
        value={selectedValues}
        label="Select Values"
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {creatorNames?.map((val: any) => {
          return <MenuItem value={val?._id}>{val?.creatorName}</MenuItem>;
        })}
      </Select>
    </FormControl>
  );
}
