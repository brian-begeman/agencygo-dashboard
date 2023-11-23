
import { useContext } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import './FourthPDF.css';
import { Button, Typography } from '@mui/material';
import { MyInvoiceContext } from '../../context/context';

const style = {
  position: 'absolute' satisfies string,
  top: '48%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 700,
  height: 700,
  overflowY: 'auto',
  borderRadius: '10px',
  bgcolor: '#ffffff',
  color: '#0f0f0f',
  boxShadow: 24,
};

export default function FourthPDF({ open, setOpen, name, viewOnly }: any) {
  const handleClose = () => setOpen(false);
  const { data } = useContext(MyInvoiceContext);
console.log("Data:", data)
  return (
    <Modal
      className="boxsize"
      sx={{ backdropFilter: 'blur(4px)' }}
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography
          style={{
            float: 'right',
            background: '#df287b',
            padding: '2px 8px',
            marginBottom: '5px',
            borderRadius: '100%',
            color: '#fff',
            margin: '2px'
          }}
          onClick={handleClose}
          sx={{ cursor: 'pointer' }}
        >
          X
        </Typography>
        <div className="">
          <div className="istbox">
            <div className="left">
              <div className="Juliana">
                <h1>{data?.firstName}</h1>
              </div>
            </div>
            <div className="right">
              <div className="invoicee">
                <h1>INVOICE</h1>
                <div className="invoice_box"></div>
              </div>

              <div className="invoice_date_number">
                <h5>Invoice Date : 05/05/22</h5>
                <h5> Invoice Number : JS/123-456-789</h5>
              </div>

              <div className="Helene">
                <h3>INVOICE TO:</h3>
              </div>
              <div className="Helene">
                <h2>Helene Paquet</h2>
              </div>

              <div className="address">
                <p>123 Anywhere St., Any City, ST</p>
                <p>12345</p>

                <p>+123-456-7890 (mobile)</p>
              </div>
            </div>
          </div>

          <div className="sndbox">
            <div className="table_heading">
              <h2>SERVICE</h2>
              <h2>SERVICE</h2>
              <h2>SERVICE</h2>
            </div>
            <div className="table_list">
              <h3>Cutting Hair </h3>
              <h3>$ 25.00</h3>
              <h3> $ 25.00</h3>
            </div>
            <div className="table_list">
              <h3>Cutting Hair </h3>
              <h3>$ 25.00</h3>
              <h3> $ 25.00</h3>
            </div>
            <div className="table_list">
              <h3>Cutting Hair </h3>
              <h3>$ 25.00</h3>
              <h3> $ 25.00</h3>
            </div>
            <div className="table_list">
              <h3>Cutting Hair </h3>
              <h3>$ 25.00</h3>
              <h3> $ 25.00</h3>
            </div>
            <div className="table_list">
              <h3>Cutting Hair </h3>
              <h3>$ 25.00</h3>
              <h3> $ 25.00</h3>
            </div>

            <div className="table_list">
              <h3>Cutting Hair </h3>
              <h3>$ 25.00</h3>
              <h3> $ 25.00</h3>
            </div>
            <div className="table_list">
              <h3></h3>
              <h3>Total</h3>
              <h3> $ 110.00</h3>
            </div>
          </div>
          <div style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'end',
            gap: '5px',
           padding:'10px 10px'
          }}
          >
            {!viewOnly && 
            <Button
            variant="contained"
            sx={{
              color: '#fff',
              textTransform: 'capitalize',
            }}
            // onClick={handlePDF}
          >
            Create Invoice
          </Button>}

            
            <Button variant="outlined" sx={{ borderColor: '#000',color: '#000', textTransform: 'capitalize'}}
            onClick={()=> {setOpen(false)}}
            >
              Close
            </Button>
              </div>
          
        </div>
      </Box>
    </Modal>
  );
}
