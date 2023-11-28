import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Divider, Stack } from '@mui/material';
import theme from 'renderer/styles/muiTheme';
import AlignmentSvg from 'renderer/assets/svg/AlignmentSvg';
import { useContext, useState } from 'react';
import AddLeder from './AddLeder/index';
import ScndPDF from './ScndPDF';
import FourthPDF from './FourthPDF';
import TrdPDF from './TrdPDF';
import { MyInvoiceContext } from '../context/context';
import { agencyCreatorSplit } from 'renderer/utils/invoice';

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

const initialPdfValue = {
  companyName: false,
  clientCompanyName: false,
  companyAddress: false,
  companyContact: false,
  contactDetails: false,
  description: false,
  qty: false,
  unitPrice: false,
}

export default function CreateInvoiceModal({ open, setOpen }: any) {
  const handleClose = () => setOpen(false);
  const [pdfURL, setpdfURl] = useState('');
  const { data } = useContext(MyInvoiceContext);

  const [viewOnly, setViewOnly] = useState<any>(false);
  const [selectedTemplate, setSelectedTemplate] = useState<any>('')
  
  const {agencyShare} = agencyCreatorSplit(data?.currentModalBalance, data?.agencyPer);

  const pdfData = {
    userName: data?.firstName,
    companyName: '',
    clientCompanyName: '',
    companyAddress: '',
    companyContact: '',
    contactDetails: '',
    description: '',
    qty: 11,
    unitPrice: 12.11,
    total: agencyShare,
    userId: data?._id,
    employeeId: data?._id,
    email: data?.email,
    amount: agencyShare,
    status: true,
    invoiceNo: 'INC0001',
    address: 'test',

    paymentTerms: 'test',
    contactName: 'test',
    delivery:true,
    nameDept: 'test',
    addresss: 'test',
    phone: 'test',
    invoiceTitle: 'test',
    paymentInstructions: 'test',
    subtotal: 0,
    discount: 0,
    subtotalLessDiscount: 0,
    taxRate: 'test',
    totalTax: 0,
    shippingHandling: 0,
    balanceDue: '$25310',
    date: new Date().toLocaleString(),
    addressShipTo: 'test',
    phoneShipTo: 'test',
  };


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

  const invoiceTemplates = [
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
                <Box
                  display={'flex'}
                  flexDirection={'column'}
                  justifyContent={'center'}
                  alignItems={'center'}
                  gap={'4px'}
                >
                  <a href="../../" />
                  <Typography
                    onClick={() => handlePDFView(data.name)}
                    sx={{ color: '#04A1FF', fontSize: '14px' }}
                  >
                    View
                    <RightArrowSvg />
                  </Typography>
                  <Typography
                    onClick={() => handlePDF(data.name)}
                    sx={{ color: '#04A1FF', fontSize: '14px' }}
                  >
                    {data.icon ? 'Create new invoice' : 'Use'}
                  </Typography>
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
      <AddLeder open={selectedTemplate === 'template1'} setOpen={setSelectedTemplate} pdfData={pdfData} initialPdfValue={initialPdfValue} viewOnly={viewOnly} />
      <ScndPDF open={selectedTemplate === 'template2'} setOpen={setSelectedTemplate} pdfData={pdfData} initialPdfValue={initialPdfValue} viewOnly={viewOnly}  />
      <TrdPDF open={selectedTemplate === 'template3'} setOpen={setSelectedTemplate} pdfData={pdfData} initialPdfValue={initialPdfValue} viewOnly={viewOnly} />
      <FourthPDF open={selectedTemplate === 'template4'} setOpen={setSelectedTemplate} pdfData={pdfData} initialPdfValue={initialPdfValue} viewOnly={viewOnly} />
    </>
  );
}
