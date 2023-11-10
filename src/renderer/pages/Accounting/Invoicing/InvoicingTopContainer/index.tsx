import {
  Box,
  Button,
  MenuItem,
  Select,
  Stack,
  Typography,
  useTheme,
} from '@mui/material';
import { useState } from 'react';
import theme from 'renderer/styles/muiTheme';
import CreateInvoiceModal from '../CreateInvoiceModal';
import CustomInvoiceModal from '../CustomInvoiceModal';
import AvatarSvg from 'renderer/assets/svg/AvatarSvg';

const cardData = [
  { id: 1, title: 'Current Model Balance', value: '$200,456.03' },
  { id: 2, title: 'Agency/Model Split (%)', value: '30/70' },
];
const InvoicingTopContainer = () => {
  const [isCreateInvoiceModalOpen, setCreateInvoiceModalOpen] = useState(false);
  const [isCustomInvoiceModalOpen, setCustomInvoiceModalOpen] = useState(false);
  const [selectData, setSelectedData] = useState('Current invoice settings');
  const handleOpen = () => setCreateInvoiceModalOpen(true);
const theme = useTheme();
const isDarkTheme = theme.palette.mode === 'dark';



  return (
    <Box margin={'10px 0px'}>
      <Box display={'flex'} justifyContent={'space-between'} >
        <Typography fontSize="22px" paddingLeft={'10px'}>Invoicing</Typography>

        
        <Box gap={'10px'} display={'flex'} >
          <Button
            variant="contained"
            sx={{ color: '#fff', textTransform: 'capitalize' }}
            onClick={handleOpen}
          >
            Create Invoice{' '}
          </Button>
          <Select
            id="current-invoice-settings"
            value={selectData}
            onChange={(e) => setSelectedData(e.target.value)}
            sx={{
             
              width: 'fit-content',
              
              height: 'fit-content',
              padding: '0px 0px',
              ' & .MuiOutlinedInput-input':
                {
                  padding: '8px 8px',
                },
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: theme.palette.secondary.contrastText,
              },
              '&:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: theme.palette.secondary.contrastText,
              },
             
              input: {
                backgroundColor: theme.palette.secondary.contrastText,
              },
            }}
          >
            <MenuItem
              value={'Current invoice settings'}
              sx={{ fontWeight: 500, fontSize: '11px' }}
              onClick={() => setCustomInvoiceModalOpen(true)}
            >
              Current Invoice Setting
            </MenuItem>
            {[
              'Don Toliver',
              'Joan Adams',
              'Brad Goldborn',
              'Michelle Smith',
            ].map((d) => (
              <MenuItem
                value={d}
                sx={{
                  fontWeight: 500,
                  fontSize: '11px',
                  display: 'flex',
                  gap: '5px',
                  alignItems: 'center',
                }}
                onClick={() => setCustomInvoiceModalOpen(true)}
              >
                <AvatarSvg />
                <Typography>{d}</Typography>
              </MenuItem>
            ))}
          </Select>
        </Box>
      </Box>
      <Box display={'flex'} gap={'10px'} margin={'10px 0px'}>
        {cardData.map((data) => {
          return (
            <Stack
              key={data.id}
              width={'50%'}
              flexDirection="row"
              borderRadius="16px"
              gap="15px"
              alignItems="center"
              height="90px"
              bgcolor={isDarkTheme ? '#000' : '#fff'}
              sx={{
                padding: '10px 20px',
                border: `1px solid ${theme.palette.primary.contrastText}`,
              }}
            >
              <Stack minWidth="130px">
                <Typography fontWeight="600" fontSize="12px">
                  {data.title}
                </Typography>
                <Typography fontSize="30px" fontWeight={700}>
                  {data.value.split('.')[0]}
                  {data.value.split('.')[1] && <span>.</span>}
                  <span style={{ fontSize: '20px' }}>
                    {data.value.split('.')[1]}
                  </span>
                </Typography>
              </Stack>
            </Stack>
          );
        })}
      </Box>
      {isCreateInvoiceModalOpen && (
        <CreateInvoiceModal
          open={isCreateInvoiceModalOpen}
          setOpen={setCreateInvoiceModalOpen}
        />
      )}
      {isCustomInvoiceModalOpen && (
        <CustomInvoiceModal
          open={isCustomInvoiceModalOpen}
          setOpen={setCustomInvoiceModalOpen}
        />
      )}
    </Box>
  );
};

export default InvoicingTopContainer;
