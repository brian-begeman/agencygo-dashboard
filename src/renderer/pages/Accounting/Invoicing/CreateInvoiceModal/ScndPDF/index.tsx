import { useContext, useEffect, useState } from 'react';
import { Button, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { MyInvoiceContext } from '../../context/context';

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

export default function ScndPDF({ open, setOpen, name, pdfData, initialPdfValue, viewOnly }: any) {
  const handleClose = () => setOpen(false);

  const { data } = useContext(MyInvoiceContext);
  

  const truevalue = true;
  const falsevalue = false;

  const [invoicedetails, setInvoiceDetails] = useState<any>(pdfData);

  const [editpdf, setEditpdf] = useState({...initialPdfValue});

  const handleContactClick = (field: any, value: any) => {
    if(!viewOnly) setEditpdf({ ...editpdf, [field]: value });
  };

  const handleContactChange = (event: any) => {
    setInvoiceDetails({
      ...invoicedetails,
      [event.target.name]: event.target.value,
    });
  };

  const handlePDF = async () => {
    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(invoicedetails),
    };

    try {
      const response = await fetch(
        `http://localhost:3000/invoicing/create?templateName=template3`,
        options
      );
      const responseData = await response.json();
      console.log(responseData.data);
      window.location.href = responseData.data;
      // setpdfURl(responseData.data)
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
        <div
          className="main_box"
          style={{
            backgroundColor: 'white',
            color: 'black',
            padding: '5px 20px',
            boxSizing: 'border-box',
            height: '100%',
            overflowY: 'auto',
            borderRadius: '5px'
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '100%',
              boxSizing: 'border-box',
              marginTop: '20px'
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <div
                className=""
                style={{
                  width: '70px',
                  height: '70px',
                  backgroundColor: '#576474',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: '5px',
                }}
              >
                LOGO
              </div>
              <div
                className=""
                style={{
                  lineHeight: '4px',
                  backgroundColor: '#f1f4ff',
                  marginLeft: '10px',
                  padding: '0px 4px',
                  borderRadius: '2px',
                }}
              >
                <h3>
                  {data?.firstName} {data?.lastName}
                </h3>
                <p>Address</p>
                <p>{data?.email}</p>
              </div>
            </div>
            <div>
              <div
                style={{ lineHeight: '4px', height: '70px', borderRadius: '2px', backgroundColor: '#f1f4ff', padding: '0px 10px' }}
              >
                <h4>Invoice Number: {pdfData?.invoiceNo}</h4>
                <p>Issue Date</p>
                <p>{pdfData?.date}</p>
              </div>
            </div>
          </div>

          <div
            style={{
              margin: '40px 0px',
              height: '10px',
              backgroundColor: '#576474',
              boxSizing: 'border-box',
            }}
          ></div>

          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <div style={{ lineHeight: '4px' }}>
              <h3 style={{ color: '#576474' }}>Bill To </h3>
              <div
                style={{
                  height: '5px',
                  backgroundColor: '#576474',
                  borderRadius: '2px',
                }}
              ></div>
              <h5
                onClick={() => handleContactClick('companyName', truevalue)}
                style={{ cursor: `${!viewOnly? 'pointer': ''}`, color: '#576474' }}
              >
                {editpdf?.companyName ? (
                  <input
                    type="text"
                    name="companyName"
                    value={invoicedetails?.companyName}
                    onChange={handleContactChange}
                    onBlur={() => handleContactClick('companyName', falsevalue)}
                  />
                ) : (
                  invoicedetails?.companyName || '< Contact Name >'
                )}
              </h5>
              <h5
                onClick={() =>
                  handleContactClick('clientCompanyName', truevalue)
                }
                style={{ cursor: `${!viewOnly? 'pointer': ''}`, color: '#576474' }}
              >
                {editpdf?.clientCompanyName ? (
                  <input
                    type="text"
                    name="clientCompanyName"
                    value={invoicedetails?.clientCompanyName}
                    onChange={handleContactChange}
                    onBlur={() =>
                      handleContactClick('clientCompanyName', falsevalue)
                    }
                  />
                ) : (
                  invoicedetails?.clientCompanyName || '<Client Company Name >'
                )}
              </h5>
              <h5
                onClick={() => handleContactClick('companyAddress', truevalue)}
                style={{ cursor: `${!viewOnly? 'pointer': ''}`, color: '#576474' }}
              >
                {editpdf?.companyAddress ? (
                  <input
                    type="text"
                    name="companyAddress"
                    value={invoicedetails?.companyAddress}
                    onChange={handleContactChange}
                    onBlur={() => () =>
                      handleContactClick('companyAddress', falsevalue)}
                  />
                ) : (
                  invoicedetails?.companyAddress || '<Address >'
                )}
              </h5>
              <h5
                onClick={() => handleContactClick('companyContact', truevalue)}
                style={{ cursor: `${!viewOnly? 'pointer': ''}`, color: '#576474' }}
              >
                {editpdf?.companyContact ? (
                  <input
                    type="text"
                    name="companyContact"
                    value={invoicedetails?.companyContact}
                    onChange={handleContactChange}
                    onBlur={() => () =>
                      handleContactClick('companyContact', falsevalue)}
                  />
                ) : (
                  invoicedetails?.companyContact || '<Phone >'
                )}
              </h5>
              <h5
                onClick={() => handleContactClick('contactDetails', truevalue)}
                style={{ cursor: `${!viewOnly? 'pointer': ''}`, color: '#576474' }}
              >
                {editpdf?.contactDetails ? (
                  <input
                    type="text"
                    name="contactDetails"
                    value={invoicedetails?.contactDetails}
                    onChange={handleContactChange}
                    onBlur={() => () =>
                      handleContactClick('contactDetails', falsevalue)}
                  />
                ) : (
                  invoicedetails?.contactDetails || '<Email >'
                )}
              </h5>
            </div>

            <div style={{ lineHeight: '4px' }}>
              <h4 style={{ color: '#576474' }}>Customer Name</h4>
              <div
                style={{
                  height: '5px',
                  backgroundColor: '#576474',
                  borderRadius: '2px',
                }}
              ></div>

              <h5 style={{ color: '#576474' }}>
                &lt;{invoicedetails?.companyName || '  Name / Dept '}&gt;
              </h5>
              <h5 style={{ color: '#576474' }}>
                &lt;
                {invoicedetails?.clientCompanyName || 'Client Company Name'}
                &gt;
              </h5>
              <h5 style={{ color: '#576474' }}>
                {' '}
                &lt;{invoicedetails?.companyAddress || ' Address '}&gt;
              </h5>
              <h5 style={{ color: '#576474' }}>
                &lt;{invoicedetails?.companyContact || ' phone '}&gt;
              </h5>
              <h5 style={{ color: '#576474' }}>
                &lt;{invoicedetails?.contactDetails || '  Email '}&gt;
              </h5>
            </div>

            <div style={{ lineHeight: '4px' }}>
              <h3 style={{ color: '#576474' }}>Payment</h3>
              <div
                style={{
                  height: '5px',
                  backgroundColor: '#576474',
                  borderRadius: '2px',
                }}
              ></div>

              <h5 style={{ color: '#576474' }}>
                &lt;{invoicedetails?.companyName || '  Name / Dept '}&gt;
              </h5>
              <h5 style={{ color: '#576474' }}>
                &lt;
                {invoicedetails?.clientCompanyName || 'Client Company Name'}
                &gt;
              </h5>
              <h5 style={{ color: '#576474' }}>
                {' '}
                &lt;{invoicedetails?.companyAddress || ' Address '}&gt;
              </h5>
              <h5 style={{ color: '#576474' }}>
                &lt;{invoicedetails?.companyContact || ' phone '}&gt;
              </h5>
              <h5 style={{ color: '#576474' }}>
                &lt;{invoicedetails?.contactDetails || '  Email '}&gt;
              </h5>
            </div>
          </div>
          
          <Box sx={{display: 'flex', justifyContent:'end', borderColor: 'red', backgroundColor: '#f1f4ff', padding: '5px', margin: '40px 0px', borderRadius:'2px'}}>
            <Typography variant='h6'>${pdfData?.amount}</Typography>
          </Box>

          <Box sx={{width: '100%', display: 'flex', paddingTop: '6px', justifyContent: 'end', gap: '4px'}}>
            {!viewOnly &&
            <Button variant="contained" sx={{ color: '#fff', textTransform: 'capitalize' }}
              onClick={handlePDF} >
              Create Invoice
            </Button>}
            <Button variant="outlined" sx={{ borderColor: '#000',color: '#000', textTransform: 'capitalize' }} 
              onClick={()=> {setInvoiceDetails(pdfData); setEditpdf(initialPdfValue); setOpen(false); }}>
                close
            </Button> 
          </Box>
        </div>
      </Box>
    </Modal>
  );
}
