import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import theme from 'renderer/styles/muiTheme';
import { ReactNode } from 'react';

interface $Props {
  tableHeaders: string[];
  children: ReactNode | ReactNode[];
}

export default function FilterTable({ tableHeaders, children }: $Props) {
  return (
    <Box>
      <TableContainer
        sx={{
          border: `1px solid ${theme.palette.primary.contrastText}`,
          borderRadius: '12px',
          marginTop: '16px',
        }}
      >
        <Table aria-label="manage creators table">
          <TableHead
            sx={{
              background: theme.palette.primary.contrastText,
              color: '#fff',
            }}
          >
            <TableRow>
              {tableHeaders.map((header) => (
                <TableCell key={header} sx={{ color: '#fff' }}>
                  {header}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>{children}</TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
