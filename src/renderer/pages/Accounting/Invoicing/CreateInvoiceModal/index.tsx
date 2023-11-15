import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Divider, Stack, useTheme } from '@mui/material';
import theme from 'renderer/styles/muiTheme';
import AlignmentSvg from 'renderer/assets/svg/AlignmentSvg';
import RightArrowSvg from 'renderer/assets/svg/RightArrowSvg';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 700,
  borderRadius: '10px',
 
  color: '#fff',
  boxShadow: 24,
  p: 2,
};

export default function CreateInvoiceModal({ open, setOpen }: any) {

  const theme = useTheme();
  const isDarkTheme = theme.palette.mode === 'dark';

  const handleClose = () => setOpen(false);
  const modalData = [
    {
      id: 1,
      icon: false,
      title: 'Blank',
    },
    {
      id: 2,
      icon: true,
      title: 'Invoice Template 1',
    },
    {
      id: 3,
      icon: true,
      title: 'Invoice Template 2',
    },
    {
      id: 4,
      icon: true,
      title: 'Invoice Template 3',
    },
    {
      id: 5,
      icon: true,
      title: 'Invoice Template 4',
    },
    {
      id: 6,
      icon: true,
      title: 'Invoice Template 5',
    },
  ];
  return (
    <Modal
      sx={{ backdropFilter: 'blur(4px)' }}
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style} bgcolor={isDarkTheme ? '#0C0C0C' : '#fff'}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            margin: '10px 0px',
            color: isDarkTheme ? '#fff' : '#000',
          }}
        >
          <Typography> Create Invoice </Typography>
          <Typography onClick={handleClose} sx={{ cursor: 'pointer' }}>
            X
          </Typography>
        </Box>
        <Divider sx={{ bgcolor: '#292929' }} />
        <Typography margin={'12px 0px'} color={isDarkTheme ? '#fff' : '#000'}>
          Pick a template or create an invoice from scratch
        </Typography>
        <Box
          display={'flex'}
          justifyContent={'center'}
          flexWrap={'wrap'}
          gap={'10px'}
        >
          {modalData.map((data) => (
            <Stack
              key={data.id}
              width={'26%'}
              borderRadius="8px"
              gap="15px"
              sx={{
                padding: '10px 20px',
                border: `1px solid ${theme.palette.primary.contrastText}`,
                cursor: 'pointer',
                backgroundColor: isDarkTheme ? '#292929' : '#EAF1FF',
              }}
            >
              <Box
                margin={'10px 0px 20px'}
                sx={{ visibility: data.icon ? 'visible' : 'hidden' }}
              >
                <AlignmentSvg />
              </Box>
              <Typography color={isDarkTheme ? '#fff' : '#000'}>
                {data.title}
              </Typography>
              <Box display={'flex'} alignItems={'center'} gap={'4px'}>
                <Typography sx={{ color: '#04A1FF', fontSize: '14px' }}>
                  {data.icon ? 'Create new invoice' : 'Use'}
                </Typography>
                <RightArrowSvg />
              </Box>
            </Stack>
          ))}
        </Box>
        <Box
          display={'flex'}
          alignItems={'center'}
          justifyContent={'flex-end'}
          gap={'8px'}
          padding={'20px 10px'}
        >
          <Button
            sx={{ color: '#fff', textTransform: 'capitalize' }}
            onClick={handleClose}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            sx={{ color: '#fff', textTransform: 'capitalize' }}
          >
            Create Invoice
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}
