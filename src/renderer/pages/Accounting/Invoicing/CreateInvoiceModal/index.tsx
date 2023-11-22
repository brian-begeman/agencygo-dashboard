import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Divider, Stack, useTheme } from '@mui/material';
import theme from 'renderer/styles/muiTheme';
import AlignmentSvg from 'renderer/assets/svg/AlignmentSvg';
import RightArrowSvg from 'renderer/assets/svg/RightArrowSvg';
import { useState } from 'react';
import AddLeder from './AddLeder/index';
import ScndPDF from './ScndPDF';
import FourthPDF from './FourthPDF';
import TrdPDF from './TrdPDF';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 700,
  borderRadius: '10px',
  boxShadow: 24,
  p: 2,
};
const data = {
  userName: 'XYZ',
  id: '12345678',
  userId: '65437ee03d1dbde2cbf4bb42',
  employeeId: '65437ee03d1dbde2cbf4bb42',
  amount: 100.0,
  status: true,
  date: '2023-11-03',
  address: 'TDI Business Center',
  contactDetails: 'XYZ',
  invoiceNo: '1234568',
  paymentTerms: 'hey',
  contactName: 'Daizy',
  nameDept: 'MSPL',
  clientCompanyName: 'ZAIN',
  addresss: 'TDI Business Center',
  phone: '1234567890',
  email: 'mailto:test@gmail.com',
  description: 'hey',
  qty: 1,
  unitPrice: 100.0,
  total: 100.0,
  paymentInstructions: 'asdf',
  subtotal: 100.0,
  discount: 1.0,
  subtotalLessDiscount: 100.0,
  taxRate: '2.00%',
  totalTax: 1.0,
  shippingHandling: 2.0,
  balanceDue: '$1.00',
  addressShipTo: 'Ship To Address',
  phoneShipTo: 'Ship To Phone',
};

export default function CreateInvoiceModal({ open, setOpen }: any) {
  const handleClose = () => setOpen(false);
  const [pdfURL, setpdfURl] = useState('');

  const [pdfData, setPdfData] = useState<any>('');
  const [viewOnly, setViewOnly] = useState<any>(false);
  const [selectedTemplate, setSelectedTemplate] = useState<any>('')


  const handleViewTemplate = async (name: any) => {
    setSelectedTemplate(name);
    setViewOnly(true);
  };

  const handleCreateInvoice = async (name: any) => {
    setSelectedTemplate(name);
    setViewOnly(false);
  };

  const handlePDF = async (name: any) => {
    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(data),
    };
    try {
      const response = await fetch(
        `http://localhost:3000/invoicing/create?templateName=${name}`,
        options
      );
      const responseData = await response.json();

      console.log(responseData.data);

      window.location.href = responseData.data;
      setpdfURl(responseData.data);
    } catch (error) {
      console.log(error);
    }
  };

  const modalData = [
    {
      id: 1,
      icon: true,
      title: 'Invoice Template 1',
      name: 'template1',
      pdf: 'true',
    },
    {
      id: 2,
      icon: true,
      title: 'Invoice Template 2',
      name: 'template2',
      pdf: 'true',
    },
    {
      id: 3,
      icon: true,
      title: 'Invoice Template 3',
      name: 'template3',
      pdf: 'true',
    },
    {
      id: 4,
      icon: true,
      title: 'Invoice Template 4',
      name: 'template4',
      pdf: 'true',
    },
    // {
    //   id: 5,
    //   icon: true,
    //   title: 'Invoice Template 5',
    //   name: 'template5',
    //   pdf: 'true',
    // },
  ];

   const theme = useTheme();
   const isDarkTheme = theme.palette.mode === 'dark';



  return (
    <>
      <Modal
        sx={{ backdropFilter: 'blur(4px)', }}
        open={true}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} bgcolor={isDarkTheme ? '#111' : '#fff'}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              margin: '10px 0px',
            }}
          >
            <Typography> Create Invoiceee </Typography>
            <Typography onClick={handleClose} sx={{ cursor: 'pointer', padding: '2px 8px', borderRadius: '100%' }}>
              X
            </Typography>
          </Box>
          <Divider sx={{ bgcolor: '#292929' }} />
          <Typography margin={'12px 0px'}>
            Pick a template or create an invoice from scratch
          </Typography>
          <Box
            display={'flex'}
            justifyContent={'center'}
            flexWrap={'wrap'}
            gap={'10px'}
          >
            {modalData.map((template) => (
              <Box>
                <Stack
                  key={template.id}
                  width={'100%'}
                  borderRadius="8px"
                  gap="15px"
                  sx={{
                    border: `1px solid ${theme.palette.primary.contrastText}`,
                    bgcolor: isDarkTheme ? '#121212' : '#EAF1FF',
                  }}
                >
                  <Box
                    style={{
                      padding: '10px 20px',
                    }}
                  >
                    <Box
                      margin={'10px 0px 20px'}
                      sx={{ visibility: template.icon ? 'visible' : 'hidden' }}
                    >
                      <AlignmentSvg />
                    </Box>
                    <Typography>{template.title}</Typography>
                  </Box>
                </Stack>

                <Box
                    sx={{ marginTop: '3px', padding: '0px', display: 'flex', justifyContent: 'space-between'}}
                    fontSize={'small'}
                  >
                    <Button size="small" sx={{fontSize: '12px'}} onClick={()=>handleViewTemplate(template.name)}> View </Button>
                    <Button size="small"  sx={{fontSize: '12px'}} onClick={()=>handleCreateInvoice(template.name)}> Create Invoice </Button>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Modal>
      <AddLeder open={selectedTemplate === 'template1'} setOpen={setSelectedTemplate} name={pdfData} viewOnly={viewOnly} />
      <ScndPDF open={selectedTemplate === 'template2'} setOpen={setSelectedTemplate} name={pdfData} viewOnly={viewOnly}  />
      <TrdPDF open={selectedTemplate === 'template3'} setOpen={setSelectedTemplate} name={pdfData}  viewOnly={viewOnly} />
      <FourthPDF open={selectedTemplate === 'template4'} setOpen={setSelectedTemplate} name={pdfData}  viewOnly={viewOnly} />
    </>
  );
}
