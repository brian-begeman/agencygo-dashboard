import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Divider, Stack } from '@mui/material';
import theme from 'renderer/styles/muiTheme';
import AlignmentSvg from 'renderer/assets/svg/AlignmentSvg';
import RightArrowSvg from 'renderer/assets/svg/RightArrowSvg';
import { useState } from 'react';
import AddLeder from './AddLeder/index';
import ScndPDF from './ScndPDF';
import FourthPDF from './FourthPDF';
import TrdPDF from './TrdPDF';
// import pa from '../../../../../../assets/pdf/'
const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 700,
  borderRadius: '10px',
  bgcolor: '#121212',
  color: '#fff',
  boxShadow: 24,
  p: 2,
};
const data = {
  userName: "XYZ",
  id: "12345678",
  userId: "65437ee03d1dbde2cbf4bb42",
  employeeId: "65437ee03d1dbde2cbf4bb42",
  amount: 100.00,
  status: true,
  date: "2023-11-03",
  address: "TDI Business Center",
  contactDetails: "XYZ",
  invoiceNo: "1234568",
  paymentTerms: "hey",
  contactName: "Daizy",
  nameDept: "MSPL",
  clientCompanyName: "ZAIN",
  addresss: "TDI Business Center",
  phone: "1234567890",
  email: "mailto:test@gmail.com",
  description: "hey",
  qty: 1,
  unitPrice: 100.00,
  total: 100.00,
  paymentInstructions: "asdf",
  subtotal: 100.00,
  discount: 1.00,
  subtotalLessDiscount: 100.00,
  taxRate: "2.00%",
  totalTax: 1.00,
  shippingHandling: 2.00,
  balanceDue: "$1.00",
  addressShipTo: "Ship To Address",
  phoneShipTo: "Ship To Phone"
};



export default function CreateInvoiceModal({ open, setOpen }: any) {
  const handleClose = () => setOpen(false);
  const [pdfURL,setpdfURl]=useState('')
  // const handlePDF = async()=>{
  //       window.open('http://localhost:3000/assets/pdf/invoice_2023-11-06T12-50-23-376Z.pdf', '_blank');

  // }




const[isOpen2,setOpen2]=useState<any>(false)

const[pdfData,setPdfData]=useState<any>('')

const[sndpdf,setSndpdf]=useState<any>(false)
const[trdpdf,setTrdpdf]=useState<any>(false)
const[fourthPDF,setFourthPdf]=useState<any>(false)

const handlePDFView = async (name:any)=>{
  setPdfData(name)
  setOpen2('template1'===name ? true:false)
  setSndpdf('template2'===name ? true:false)
  setTrdpdf('template3'===name ? true:false)

  setFourthPdf('template4'===name ? true:false)
}

  const handlePDF = async (name:any) => {

    // setOpen2(true)
  
    const options = {
      method: "POST",
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(data)
    };                            
  
    try {
      const response = await fetch(`http://localhost:3000/invoicing/create?templateName=${name}`, options);
      const responseData = await response.json(); 
  
      console.log(responseData.data); 
      
        
      window.location.href = responseData.data;
      setpdfURl(responseData.data)
    } catch (error) {
      console.log(error);
    }
  };
  
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
      name:'template1',
      pdf:'true'

    },
    {
      id: 3,
      icon: true,
      title: 'Invoice Template 2',
      name:'template2',
      pdf:'true'


    },
    {
      id: 4,
      icon: true,
      title: 'Invoice Template 3',
      name:'template3',
      pdf:'true'


    },
    {
      id: 5,
      icon: true,
      title: 'Invoice Template 4',
      name:'template4',
      pdf:'true'


    },
    // {
      //   id: 6,
    //   icon: true,
    //   title: 'Invoice Template 5',
    // },
  ];
  return (
    <>
    <Modal
    sx={{backdropFilter:"blur(4px)"}}
    open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      >
      <Box sx={style}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            margin: '10px 0px',
          }}
        >
          <Typography> Create Invoice </Typography>
          <Typography onClick={handleClose} sx={{cursor:"pointer"}}>X</Typography>
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
              }}
            >
              <Box
                margin={'10px 0px 20px'}
                sx={{ visibility: data.icon ? 'visible' : 'hidden' }}
              >
                <AlignmentSvg />
              </Box>
              <Typography>{data.title}</Typography>
              <Box display={'flex'} flexDirection={'column'} justifyContent={'center'}alignItems={'center'} gap={'4px'}>
           <a href="../../" />  
           <Typography onClick={()=>handlePDFView(data.name)} sx={{ color: '#04A1FF', fontSize: '14px' }}>
         

         View<RightArrowSvg />
         
       </Typography>
              <Typography onClick={()=>handlePDF(data.name)} sx={{ color: '#04A1FF', fontSize: '14px' }}>
         

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
    
          
          <Button
            variant="contained"
            sx={{ color: '#fff', textTransform: 'capitalize' }}
           
          >
            Create Invoice
          </Button>
 
        </Box>
      </Box>
    </Modal>
      <AddLeder open={isOpen2} setOpen={setOpen2} name={pdfData}/>
      <ScndPDF open={sndpdf} setOpen={setSndpdf} name={pdfData}/>
      <TrdPDF open={trdpdf} setOpen={setTrdpdf} name={pdfData}/>
      <FourthPDF  open={fourthPDF} setOpen={setFourthPdf} name={pdfData}/>
</>
  );
}
