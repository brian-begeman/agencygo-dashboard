import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Divider, Switch, styled } from '@mui/material';
import { InputWithLabel } from 'renderer/components/Settings/Wallet/Common/ModalComponents';
import { useEffect, useState } from 'react';
import {useFormik} from 'formik';
import './Addleder.css'
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  height: 750,
  borderRadius: '10px',
  backgroundColor: 'white', // Changed "bgcolor" to "backgroundColor"
  color: 'black',
  boxShadow: '24px', // Added "px" for the box shadow size
  overflowY: 'auto', // Changed "overflow-y" to "overflowY"
  scrollBehavior: 'smooth',
};

const frequencyFilter = ['Daily', 'Weekly', 'Biweekly', 'Monthly', 'Yearly']; 
export default function AddLeder({ open, setOpen,name }: any) {
  const handleClose = () => setOpen(false);
   




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
  


  
  // const handlePDF = async (name:any) => {

     
  //   const options = {
  //     method: "POST",
  //     headers:{
  //       'content-type':'application/json'
  //     },
  //     body:JSON.stringify(data)
  //   };                            
  
  //   try {
  //     const response = await fetch(`http://localhost:3000/invoicing/create?templateName=${name}`, options);
  //     const responseData = await response.json(); 
  
  //     console.log(responseData.data); 
      
        
  //     window.location.href = responseData.data;
  //     setpdfURl(responseData.data)
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };


  // useEffect(()=>{
  //   handlePDF
  // },[name])

  const[editContact,seteditContact]=useState(false)
  const [newContact,setnewContact]=useState('')
  const handleContactClick = () => {
    seteditContact(true);
  };

  const handleContactChange = (event: any) => {
    setnewContact(event.target.value);
  };
  
  const [editClient,seteditClient]=useState(false)
  const[newClient,setnewClient]=useState('')
  const handleClientClick = () => {
    seteditClient(true);
  };

  const handleClientChange = (event: any) => {
    setnewClient(event.target.value);
  };




  const [editAddress,seteditAddress]=useState(false)
  const[newAddress,setnewAddress]=useState('')
  const handleAddressClick = () => {
    seteditAddress(true);
  };

  const handleAddressChange = (event: any) => {
    setnewAddress(event.target.value);
  };

  // right side start
  const [editPhone,seteditPhone]=useState(false)
  const[newPhone,setnewPhone]=useState('')
  const handlePhoneClick = () => {
    seteditPhone(true);
  };

  const handlePhoneChange = (event: any) => {
    setnewPhone(event.target.value);
  };


  const [editEmail,seteditEmail]=useState(false)
  const[newEmail,setnewEmail]=useState('')
  const handleEmailClick = () => {
    seteditEmail(true);
  };

  const handleEmailChange = (event: any) => {
    setnewEmail(event.target.value);
  };


  // right side end
  return (
    <Modal
    className='boxsize'
      sx={{ backdropFilter: 'blur(4px)' }}
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
   
   <Box sx={style}>

        
   <div style={{backgroundColor:'white',color:'black',overflowY:'auto' }}>
    <div style={{height:'30px',backgroundColor:'tomato'}}></div>


    <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',backgroundColor:'#f3f3f3',color:'#333f4f',padding:'20px'}}>
       <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
          <div style={{backgroundColor:'darkgray',width:'70px',height:'70px',borderRadius:'50%',display:'flex',justifyContent:'center',alignItems:'center',color:'white',fontWeight:'bold'}}>LOGO</div>
          <div style={{lineHeight:'4px',marginLeft:'10px'}}>
             <h3> Your Company Name</h3>
             <h3>Address</h3>
             <h3>Your Contact Details</h3>

          </div>
       </div>

       <div>
        <h2>INVOICE</h2>
        <h4>DATE</h4>
        <h4>INVOICE No.</h4>

       </div>


       
    </div>



{/* secound box */}
  <div style={{padding:'20px' }}>
    <div style={{color:'bfbfbf',display:'flex',justifyContent:'end'}}>&lt;Payment terms due on receipt, due in X days&gt;</div>
  <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',color:'#333f4f',}}>
        <div>
          <h2 style={{color:"#1f3864"}}>Bill To</h2>
          <div style={{height:'3px',backgroundColor:'#bfbfbf'}}></div>
    
          <h3 onClick={handleContactClick} style={{ cursor: 'pointer' }}>
            
            {
               editContact?(
                <input
                type="text"
                value={newContact}
                onChange={handleContactChange}
                onBlur={() => seteditContact(false)}
              />
               ):
                (
                  newContact|| '< Contact Name >'
                )
            }
            </h3>
            <h3 onClick={handleClientClick} style={{ cursor: 'pointer' }}>
            
            {
               editClient?(
                <input
                type="text"
                value={newClient}
                onChange={handleClientChange}
                onBlur={() => seteditClient(false)}
              />
               ):
                (
                  newClient|| '<Client Company Name >'
                )
            }
            </h3>

            <h3 onClick={handleAddressClick} style={{ cursor: 'pointer' }}>
            
            {
               editAddress?(
                <input
                type="text"
                value={newAddress}
                onChange={handleAddressChange}
                onBlur={() => seteditAddress(false)}
              />
               ):
                (
                  newAddress|| '<Address >'
                )
            }
            </h3>
          
          <h3>&lt;Phone &gt;</h3>

          <h3>&lt;Email &gt;</h3>

        </div>

        <div>
          <h2 style={{color:"#1f3864"}}>Ship To</h2>
          <div style={{height:'3px',backgroundColor:'#bfbfbf'}}></div>
          <h3>&lt; Name / Dept&gt;</h3>
          <h3>&lt;Client Company Name&gt;</h3>
          <h3>&lt;Address &gt;</h3>
          <h3 onClick={handlePhoneClick} style={{ cursor: 'pointer' }}>
            
            {
               editPhone?(
                <input
                type="text"
                value={newPhone}
                onChange={handlePhoneChange}
                onBlur={() => seteditPhone(false)}
              />
               ):
                (
                  newPhone|| '<Phone >'
                )
            }
            </h3>     {/* fourth */}


            <h3 onClick={handleEmailClick} style={{ cursor: 'pointer' }}>
            
            {
               editEmail?(
                <input
                type="text"
                value={newEmail}
                onChange={handleEmailChange}
                onBlur={() => seteditEmail(false)}
              />
               ):
                (
                  newEmail|| '<Email >'
                )
            }
            </h3>
        </div>
      </div>
  </div>
     
     {/* third  */}

     <div style={{padding:'20px' }}>
     <table style={{border:'1'}}>
        <tr style={{backgroundColor:'tomato '}}>
            <th style={{backgroundColor:'tomato'}}>DESCRIPTION</th>
            <th style={{backgroundColor:'tomato'}}>QTY</th>
            <th style={{backgroundColor:'tomato'}}>UNIT PRICE</th>
            <th style={{backgroundColor:'tomato'}}>TOTAL</th>
        </tr>
        <tr>
            <td>Item 1</td>
            <td>5</td>
            <td>$10.00</td>
            <td>$50.00</td>
        </tr>
        <tr style={{backgroundColor:'f3f3f3'}}>
            <td>Item 2</td>
            <td>3</td>
            <td>$15.00</td>
            <td>$45.00</td>
        </tr>
        <tr>
            <td>Item 3</td>
            <td>2</td>
            <td>$20.00</td>
            <td>$40.00</td>
        </tr>
    </table>
     </div>

     {/* fourth */}

     <div style={{display:'flex',width:'100%',padding:' 20px ' ,color:'#333f4f'}}>
      <div style={{width:'60%',display:'flex',justifyContent:'center'}}>
         Remarks / Payment Instructions
      </div>
      <div style={{width:'40%',display:'flex'}}>
        <div>
          <h3>Subtotal</h3>
          <h3>Subtotal</h3>
          <h3>Subtotal</h3>
          <h3>Subtotal</h3>
          {/* <h2>$ Balance due</h2> */}

        </div>

        <div>
          <h3>_____________0.00</h3>
          <h3>_____________0.00</h3>
          <h3>_____________0.00</h3>
          <h3>_____________0.00</h3>
          <h2 style={{backgroundColor:'pink',height:'50px'}}></h2>

        </div>
        <div style={{height:'4px',backgroundColor:'black'}}></div>
       
      </div>
     </div>
    <div style={{height:'30px',backgroundColor:'tomato'}}></div>


   </div>
   

 



</Box>
    </Modal>
  );
}

const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 28,
  height: 16,
  padding: 0,
  display: 'flex',
  '&:active': {
    '& .MuiSwitch-thumb': {
      width: 15,
    },
    '& .MuiSwitch-switchBase.Mui-checked': {
      transform: 'translateX(9px)',
    },
  },
  '& .MuiSwitch-switchBase': {
    padding: 2,
    '&.Mui-checked': {
      transform: 'translateX(12px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#177ddc' : '#1890ff',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
    width: 12,
    height: 12,
    borderRadius: 6,
    transition: theme.transitions.create(['width'], {
      duration: 200,
    }),
  },
  '& .MuiSwitch-track': {
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor:
      theme.palette.mode === 'dark'
        ? 'rgba(255,255,255,.35)'
        : 'rgba(0,0,0,.25)',
    boxSizing: 'border-box',
  },
}));

const FrequencySelector = ({ frequencyFilter }: any) => {
  const [selected, setSelected] = useState(1);
  return (
    <Box sx={{ display: 'flex',border:"1px solid #04A1FF", width: 'fit-content',borderRadius:"10px",overflow:"hidden" }}>
      {frequencyFilter.map((data: string, index: number) => (
        <Box
          sx={{
            bgcolor: index + 1 === selected ? '#04A1FF' : 'transparent',
            cursor: 'pointer',
            padding: '8px 10px',
            border: '1px solid #04A1FF',
          }}
          key={index}
          onClick={() => setSelected(index + 1)}
        >
          {data}
        </Box>
      ))}
    </Box>
  );
};
