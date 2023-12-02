
import { useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import './FourthPDF.css';
import { Button, Typography } from '@mui/material';
import { Padding } from '@mui/icons-material';

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

const truevalue = true;
const falsevalue = false;

export default function FourthPDF({ open, setOpen, pdfData, initialPdfValue, viewOnly }: any) {
  const handleClose = () => setOpen(false);
  const [invoiceDetails, setInvoiceDetails] = useState<any>(pdfData);
  const [editpdf, setEditpdf] = useState({...initialPdfValue});

  const handleContactClick = (field: any, value: any) => {
    if(!viewOnly) setEditpdf({ ...editpdf, [field]: value });
  };

  
  const handleContactChange = (event: any) => {
    setInvoiceDetails({
      ...invoiceDetails,
      [event.target.name]: event.target.value,
    });
  };
  
  const handlePDF = async () => {
    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(invoiceDetails),
    };

    try {
      const response = await fetch(
        `http://localhost:3000/invoicing/create?templateName=template4`,
        options
      );
      const responseData = await response.json();
      if (responseData?.data?.pdfUrl) {
        setOpen(false)
      }
    } catch (error) {
      console.log(error);
    }
  };

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
        <div className="">
          <div className="istbox">
            <div className="left">
              <div className="Juliana">
                <h1>{pdfData?.userName}</h1>
              </div>
            </div>
            <div className="right">
              <div className="invoicee">
                <h1>INVOICE</h1>
                <div className="invoice_box"></div>
              </div>

              <div className="invoice_date_number">
                <h4>Invoice Date : {pdfData?.date}</h4>
                <h4> Invoice Number : {pdfData?.invoiceNo}</h4>
              </div>
            </div>
          </div>

          <div style={{ padding: '10px 50px' }}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                color: '#333f4f',
              }}
            >
              <div>
                <h2 style={{ color: '#1f3864'}}>INVOICE To</h2>
                <div style={{ height: '3px', backgroundColor: '#df287b', borderRadius: '20px' }}></div>
                <h3
                  onClick={() => handleContactClick('companyName', truevalue)}
                  style={{ cursor: `${!viewOnly? 'pointer': ''}` }}
                >
                  {editpdf?.companyName ? (
                    <input
                      type="text"
                      name="companyName"
                      value={invoiceDetails?.companyName}
                      onChange={handleContactChange}
                      onBlur={() =>
                        handleContactClick('companyName', falsevalue)
                      }
                    />
                  ) : (
                    invoiceDetails?.companyName || '< Contact Name >'
                  )}
                </h3>
                <h3
                  onClick={() =>
                    handleContactClick('clientCompanyName', truevalue)
                  }
                  style={{ cursor: `${!viewOnly? 'pointer': ''}` }}
                >
                  {editpdf?.clientCompanyName ? (
                    <input
                      type="text"
                      name="clientCompanyName"
                      value={invoiceDetails?.clientCompanyName}
                      onChange={handleContactChange}
                      onBlur={() =>
                        handleContactClick('clientCompanyName', falsevalue)
                      }
                    />
                  ) : (
                    invoiceDetails?.clientCompanyName ||
                    '<Client Company Name >'
                  )}
                </h3>
                <h3
                  onClick={() =>
                    handleContactClick('companyAddress', truevalue)
                  }
                  style={{ cursor: `${!viewOnly? 'pointer': ''}` }}
                >
                  {editpdf?.companyAddress ? (
                    <input
                      type="text"
                      name="companyAddress"
                      value={invoiceDetails?.companyAddress}
                      onChange={handleContactChange}
                      onBlur={() => () =>
                        handleContactClick('companyAddress', falsevalue)}
                    />
                  ) : (
                    invoiceDetails?.companyAddress || '<Address >'
                  )}
                </h3>
                <h3
                  onClick={() =>
                    handleContactClick('companyContact', truevalue)
                  }
                  style={{ cursor: `${!viewOnly? 'pointer': ''}` }}
                >
                  {editpdf?.companyContact ? (
                    <input
                      type="text"
                      name="companyContact"
                      value={invoiceDetails?.companyContact}
                      onChange={handleContactChange}
                      onBlur={() => () =>
                        handleContactClick('companyContact', falsevalue)}
                    />
                  ) : (
                    invoiceDetails?.companyContact || '<Phone >'
                  )}
                </h3>
                <h3
                  onClick={() =>
                    handleContactClick('contactDetails', truevalue)
                  }
                  style={{ cursor: `${!viewOnly? 'pointer': ''}` }}
                >
                  {editpdf?.contactDetails ? (
                    <input
                      type="text"
                      name="contactDetails"
                      value={invoiceDetails?.contactDetails}
                      onChange={handleContactChange}
                      onBlur={() => () =>
                        handleContactClick('contactDetails', falsevalue)}
                    />
                  ) : (
                    invoiceDetails?.contactDetails || '<Email >'
                  )}
                </h3>
              </div>

              <div>
                <h2 style={{ color: '#1f3864' }}>Ship To</h2>
                <div style={{ height: '3px', backgroundColor: '#df287b', borderRadius: '20px' }}></div>
                <h3>
                  &lt;{invoiceDetails?.companyName || '  Name / Dept '}&gt;
                </h3>
                <h3>
                  &lt;
                  {invoiceDetails?.clientCompanyName || 'Client Company Name'}
                  &gt;
                </h3>
                <h3>
                  {' '}
                  &lt;{invoiceDetails?.companyAddress || ' Address '}&gt;
                </h3>
                <h3>&lt;{invoiceDetails?.companyContact || ' phone '}&gt;</h3>
                <h3>&lt;{invoiceDetails?.contactDetails || '  Email '}&gt;</h3>
              </div>
            </div>
          </div>

          <div style={{display: 'flex', justifyContent: 'end',}}>
            <Typography fontSize={'large'} fontWeight={'bold'} bgcolor={'#ffe3fe'} color={'#df287b'} padding={'10px 25px'}>
              ${pdfData?.total}
            </Typography>
          </div>

          
        <div style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'end',
          gap: '5px',
          padding:'10px 10px',
          marginTop: '30px',
        }}
          >
          {!viewOnly && 
          <Button
            variant="contained"
            sx={{
              color: '#fff',
              textTransform: 'capitalize',
            }}
            onClick={handlePDF}
          >
            Create Invoice
          </Button>}

            
          <Button variant="outlined" sx={{ borderColor: '#000',color: '#000', textTransform: 'capitalize'}}
            onClick={()=> {setInvoiceDetails(pdfData); setEditpdf(initialPdfValue); setOpen(false); }}>
            Close
          </Button>
        </div>
      </div>
      </Box>
    </Modal>
  );
}
