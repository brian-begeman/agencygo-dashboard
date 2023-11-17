import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import React from 'react';
// import './ScndPDF.css';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 700,
  height: 600,
  borderRadius: '10px',
  bgcolor: '#121212',
  color: '#fff',
  boxShadow: 24,
};

export default function ScndPDF({ open, setOpen, name }:any) {
  const handleClose = () => setOpen(false);

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
        <div className="main_boxx" style={{backgroundColor:'white',color:'black' ,padding:'20px',boxSizing:'border-box',height:'100%',overflowY:'auto'}}>
          {/* First box */}
          <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',width:'100%',boxSizing:'border-box'}}>
            <div className="" style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
              <div className="" style={{width:'70px',height:'70px',backgroundColor:'#576474',display:'flex',justifyContent:'center',alignItems:'center',borderRadius:'5px'}}>LOGO</div>
              <div className="" style={{lineHeight:'4px' ,backgroundColor:'#f1f4ff',marginLeft:'10px'}}>
                <h3 >Your Company Name</h3>
                <p >Your address</p>
                <p >Your contact details</p>
              </div>
            </div>
            <div className="">
            <div className="" style={{lineHeight:'4px',backgroundColor:'#f1f4ff'}}>
                <h3>Invoice#00000</h3>
                <p>issue date</p>
                <p>mm/dd/yyyy</p>
              </div>
            </div>
          </div>



          <div style={{margin:'20px 0px',height:'10px',backgroundColor:'#576474',boxSizing:'border-box'}}></div>

          <div >
            <h1 style={{backgroundColor:'#f1f4ff',color:'#576474',padding:'10px 0px'}}>Business Name</h1>
            <h5 style={{backgroundColor:'#f1f4ff',color:'#576474',padding:'10px 0px'}}>Add a message her for your customer</h5>
          </div>
         


         <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
          <div style={{lineHeight:'4px'}}>
            <div style={{height:'5px',backgroundColor:'#576474',borderRadius:'2px'}}></div>
            <h3 style={{color:'#576474'}}>Bill To </h3>
            <h4 style={{color:'#576474'}}>Customer Name</h4>
            <h4 style={{color:'#576474'}}>dfg</h4>
            <h4 style={{color:'#576474'}}>Phone number</h4>
            <h4 style={{color:'#576474'}}>Pin</h4>
            <h4 style={{color:'#576474'}}>Address</h4>

          </div>

          <div style={{lineHeight:'4px'}}>
          <div style={{height:'5px',backgroundColor:'#576474',borderRadius:'2px'}}></div>
          <h3 style={{color:'#576474'}}> Details </h3>

            <h4 style={{color:'#576474'}}>Customer Name</h4>
            <h4 style={{color:'#576474'}}>dfg</h4>
            <h4 style={{color:'#576474'}}>Phone number</h4>
            <h4 style={{color:'#576474'}}>Pin</h4>
            <h4 style={{color:'#576474'}}>Address</h4>

          </div>

          <div style={{lineHeight:'4px'}}>
          <div style={{height:'5px',backgroundColor:'#576474',borderRadius:'2px'}}></div>
          <h3 style={{color:'#576474'}}>Payment</h3>

            <h4 style={{color:'#576474'}}>Customer Name</h4>
            <h4 style={{color:'#576474'}}>dfg</h4>
            <h4 style={{color:'#576474'}}>Phone number</h4>
            <h4 style={{color:'#576474'}}>Pin</h4>
            <h4 style={{color:'#576474'}}>Address</h4>

          </div>
         </div>

<div style={{display:'flex',flexDirection:'column'}}>

         <div style={{width:'100%',display:'flex'}}>
           <div style={{width:'60%'}}>ITM</div>
           <div style={{width:'10%'}}>QTY</div>
           <div style={{width:'10%'}}>PRICE</div>
           <div style={{width:'10%'}}>AMOUNT</div>

         </div>


         <div style={{width:'100%',display:'flex',margin:'20px 0px'}}>
           <div style={{width:'60%',backgroundColor:'#f1f4ff',padding:'10px'}}>Item name</div>
           <div style={{width:'60%',backgroundColor:'#f1f4ff',padding:'10px'}}>0</div>
           <div style={{width:'60%',backgroundColor:'#f1f4ff',padding:'10px'}}>$0.00</div>
           <div style={{width:'60%',backgroundColor:'#f1f4ff',padding:'10px'}}>$0.00</div>

         </div>

         <div style={{width:'100%',display:'flex',margin:'20px 0px'}}>
           <div style={{width:'60%',backgroundColor:'#f1f4ff',padding:'10px'}}>Item name</div>
           <div style={{width:'60%',backgroundColor:'#f1f4ff',padding:'10px'}}>0</div>
           <div style={{width:'60%',backgroundColor:'#f1f4ff',padding:'10px'}}>$0.00</div>
           <div style={{width:'60%',backgroundColor:'#f1f4ff',padding:'10px'}}>$0.00</div>

         </div>

         <div style={{width:'100%',display:'flex',margin:'20px 0px'}}>
           <div style={{width:'60%',backgroundColor:'#f1f4ff',padding:'10px'}}>Item name</div>
           <div style={{width:'60%',backgroundColor:'#f1f4ff',padding:'10px'}}>0</div>
           <div style={{width:'60%',backgroundColor:'#f1f4ff',padding:'10px'}}>$0.00</div>
           <div style={{width:'60%',backgroundColor:'#f1f4ff',padding:'10px'}}>$0.00</div>

         </div>

         <div style={{width:'100%',display:'flex',margin:'20px 0px'}}>
           <div style={{width:'60%',backgroundColor:'#f1f4ff',padding:'10px'}}>Item name</div>
           <div style={{width:'60%',backgroundColor:'#f1f4ff',padding:'10px'}}>0</div>
           <div style={{width:'60%',backgroundColor:'#f1f4ff',padding:'10px'}}>$0.00</div>
           <div style={{width:'60%',backgroundColor:'#f1f4ff',padding:'10px'}}>$0.00</div>

         </div>


         <div style={{width:'100%',display:'flex',marginTop:'20px'}}>
           <div style={{width:'60%',backgroundColor:'#f1f4ff',padding:'10px'}}>subtotal</div>
           <div style={{width:'60%',backgroundColor:'#f1f4ff',padding:'10px'}}>0</div>
 

         </div>

         <div style={{width:'100%',display:'flex',marginTop:'20px',justifyContent:'space-between',alignItems:'center'}}>
           <div style={{width:'60%',padding:'10px',color:'black'}}>subtotal</div>
           <div style={{width:'60%',backgroundColor:'#f1f4ff',padding:'10px'}}>0</div>
 

         </div>
</div>

          {/* <div>
            <div className="Business-name">
              <h1>Business Name</h1>
            </div>
            <div className="Business-p">
              <p>add address Lorem ipsum dolor sit amet.</p>
            </div>
          </div> */}

          {/* <div className="billing-div-main">
            <div className="sub-billing-div-main">
              <p style={{ padding: '50px 0px 0px 0px', marginLeft: '10px', borderTop: '3px solid #8080805c' }}>
                BILL TO
              </p>
              <div className="companyName">
                <p style={{ margin: '1px 0px' }}>Your Company Name</p>
                <p style={{ margin: '1px 0px' }}>email address</p>
                <p style={{ margin: '1px 0px' }}>phone number</p>
                <p style={{ margin: '1px 0px' }}>Street address</p>
                <p style={{ margin: '1px 0px' }}>country/code</p>
              </div>
            </div>
            <div className="sub-billing-div-main">
              <p style={{ padding: '50px 0px 0px 0px', marginLeft: '10px', borderTop: '3px solid #8080805c' }}>
                DETAILS
              </p>
              <div className="companyName">
                <p style={{ margin: '1px 0px' }}>Your Company Name</p>
                <p style={{ margin: '1px 0px' }}>Your address</p>
                <p style={{ margin: '1px 0px' }}>Your contact details</p>
              </div>
            </div>
            <div className="sub-billing-div-main">
              <p style={{ padding: '50px 0px 0px 0px', marginLeft: '10px', borderTop: '3px solid #8080805c' }}>
                PAYMENT
              </p>
              <div className="companyName">
                <p style={{ margin: '1px 0px' }}>Your Company Name</p>
                <p style={{ margin: '1px 0px' }}>Your address</p>
              </div>
            </div>
          </div> */}

          {/* 3 boxes */}
        
          <div>{/* Additional content if needed */}</div>
        </div>
      </Box>
    </Modal>
  );
}
