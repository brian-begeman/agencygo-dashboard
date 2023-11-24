import React from 'react';
import { useTheme } from '@emotion/react';
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import CreateIcon from '@mui/icons-material/Create';

const AttendenceTrackTable = () => {
  const theme = useTheme();
  const isDarkTheme = theme.palette.mode === 'dark';

  return (
    <Box>
      <div className="attendance-container">
        <div className="attendence-tbl-head">
          <div className="attendance-header mb-0">Attendence Check</div>
          <div>
            <FormControl
              sx={{
                m: 1,
                minWidth: 88,
                bgcolor: isDarkTheme ? '#000' : '#EAF1FF',
                borderRadius: 3,
              }}
              size="small"
            >
              <InputLabel id="demo-select-small-label" style={{ fontSize: 14 }}>
                Today
              </InputLabel>
              <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                label="Today"
                style={{ border: 'none', borderRadius: 10 }}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>

        <TableContainer>
          <Table
            className="timesheet-table"
            sx={{
              minWidth: 650,
              borderRadius: 16,
              border: '1px solid #292929',
            }}
            aria-label="simple table"
          >
            <TableHead sx={{ bgcolor: isDarkTheme ? '#292929' : '#EAF1FF' }}>
              <TableRow>
                <TableCell>Date</TableCell>
                <TableCell>Time Sheet Notes</TableCell>
                <TableCell>Total Hours</TableCell>
                <TableCell>Break Hours</TableCell>
                <TableCell>Edit Log</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell sx={{ color: '#FFFFFF' }}>20/04/2023</TableCell>
                <TableCell sx={{ color: '#FFFFFF' }}>
                  This is a dummy timesheet name
                </TableCell>
                <TableCell sx={{ color: '#FFFFFF' }}>06:59:04 Hrs</TableCell>
                <TableCell sx={{ color: '#FFFFFF' }}>06:59:04 Hrs</TableCell>

                <TableCell sx={{ color: '#04A1FF' }}>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                    }}
                  >
                    <Box sx={{ cursor: 'pointer', color: '#04A1FF' }}>
                      <CreateIcon style={{ color: '#04A1FF' }} />
                    </Box>
                  </Box>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </Box>
  );
};

export default AttendenceTrackTable;
