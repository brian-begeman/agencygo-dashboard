import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Switch, styled } from '@mui/material';
import './Addleder.css';

const style = {
  position: 'absolute',
  top: '47%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  height: 730,
  borderRadius: '10px',
  backgroundColor: 'white', // Changed "bgcolor" to "backgroundColor"
  color: 'black',
  boxShadow: '24px', // Added "px" for the box shadow size
  overflowY: 'auto', // Changed "overflow-y" to "overflowY"
  scrollBehavior: 'smooth',
};

export default function AddLeder({ open, setOpen, pdfData, initialPdfValue, viewOnly  }: any) {
  const handleClose = () => setOpen(false);
  const [currentDate, setCurrentDate] = useState(new Date());

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
        `http://localhost:3000/invoicing/create?templateName=template1`,
        options
      );
      const responseData = await response.json();

<<<<<<< HEAD
      console.log(responseData.data);
      if (responseData?.data?.pdfUrl) {
        setOpen(false)
      }
=======
      // console.log(responseData.data);
      if (responseData?.data?.pdfUrl) {
        setOpen(false);
      }
      // window.location.href = responseData.data;
      // setpdfURl(responseData.data)
>>>>>>> feat/timekeeping
    } catch (error) {
      console.log(error);
    }
  };

<<<<<<< HEAD
=======
  // useEffect(()=>{
  //   handlePDF

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
    total: 0,
    userId: data?._id,
    employeeId: data?._id,
    email: data?.email,
    amount: 0,
    status: true,
    invoiceNo: 'INC0001',
    address: 'test',

    paymentTerms: 'test',
    contactName: 'test',
    amonut: 0,
    delivery: true,
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
    date: '2023-11-06',
    addressShipTo: 'test',
    phoneShipTo: 'test',
  };
  // },[name])
>>>>>>> feat/timekeeping
  const truevalue = true;
  const falsevalue = false;
  const [invoiceDetails, setInvoiceDetails] = useState<any>(pdfData);
  const [editpdf, setEditpdf] = useState({...initialPdfValue});

  const handleContactClick = (field: any, value: any) => {
    if(!viewOnly) setEditpdf({ ...editpdf, [field]: value });
  };

  const handleContactChange = (event: any) => {
    console.log(invoiceDetails);

    setInvoiceDetails({
      ...invoiceDetails,
      [event.target.name]: event.target.value,
    });
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
<<<<<<< HEAD
        <Box
          style={{
            backgroundColor: '#f3f3f3',
=======
        <div
          style={{
            backgroundColor: 'white',
>>>>>>> feat/timekeeping
            color: 'black',
            overflowY: 'auto',
          }}
        >
<<<<<<< HEAD
           <Typography
          style={{
            float: 'right',
            background: '#fff',
            padding: '2px 8px',
            marginBottom: '5px',
            borderRadius: '100%',
          margin: '2px'
          }}
          onClick={handleClose}
          sx={{ cursor: 'pointer' }}
        >
          X
        </Typography>
=======
>>>>>>> feat/timekeeping
          <div style={{ height: '30px', backgroundColor: 'tomato' }}></div>

          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              backgroundColor: '#f3f3f3',
              color: '#333f4f',
              padding: '20px',
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <div
                style={{
                  backgroundColor: 'darkgray',
                  width: '70px',
                  height: '70px',
                  borderRadius: '50%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  color: 'white',
                  fontWeight: 'bold',
                }}
              >
                LOGO
              </div>
              <div style={{ lineHeight: '4px', marginLeft: '10px' }}>
<<<<<<< HEAD
                <h3>
                  {pdfData?.userName}
                </h3>
                <h3>Address</h3>
                <h3>{pdfData?.email}</h3>
=======
                <h3> Your Company Name</h3>
                <h3>Address</h3>
                <h3>Your Contact Details</h3>
>>>>>>> feat/timekeeping
              </div>
            </div>

            <div>
              <h2>INVOICE</h2>
<<<<<<< HEAD
              <h4>DATE: {pdfData?.date}</h4>
              <h4>INVOICE No. {'INC0001'}</h4>
            </div>
          </div>
          <div style={{background: '#ffffff',}}>
          {/* secound box */}
            <div style={{ padding: '20px' }}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  color: '#333f4f',
                }}
              >
                <div>
                  <h2 style={{ color: '#1f3864' }}>Bill To</h2>
                  <div
                    style={{ height: '3px', backgroundColor: '#bfbfbf' }}
                  ></div>
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
                  <div
                    style={{ height: '3px', backgroundColor: '#bfbfbf' }}
                  ></div>
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
=======
              <h4>DATE</h4>
              <h4>INVOICE No.</h4>
            </div>
          </div>

          {/* secound box */}
          <div style={{ padding: '20px' }}>
            <div
              style={{
                color: 'bfbfbf',
                display: 'flex',
                justifyContent: 'end',
              }}
            >
              &lt;Payment terms due on receipt, due in X days&gt;
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                color: '#333f4f',
              }}
            >
              <div>
                <h2 style={{ color: '#1f3864' }}>Bill To</h2>
                <div
                  style={{ height: '3px', backgroundColor: '#bfbfbf' }}
                ></div>

                <h3 onClick={handleContactClick} style={{ cursor: 'pointer' }}>
                  {editContact ? (
                    <input
                      type="text"
                      value={newContact}
                      onChange={handleContactChange}
                      onBlur={() => seteditContact(false)}
                    />
                  ) : (
                    newContact || '< Contact Name >'
                  )}
                </h3>
                <h3 onClick={handleClientClick} style={{ cursor: 'pointer' }}>
                  {editClient ? (
                    <input
                      type="text"
                      value={newClient}
                      onChange={handleClientChange}
                      onBlur={() => seteditClient(false)}
                    />
                  ) : (
                    newClient || '<Client Company Name >'
                  )}
                </h3>

                <h3 onClick={handleAddressClick} style={{ cursor: 'pointer' }}>
                  {editAddress ? (
                    <input
                      type="text"
                      value={newAddress}
                      onChange={handleAddressChange}
                      onBlur={() => seteditAddress(false)}
                    />
                  ) : (
                    newAddress || '<Address >'
                  )}
                </h3>

                <h3>&lt;Phone &gt;</h3>

                <h3>&lt;Email &gt;</h3>
              </div>

              <div>
                <h2 style={{ color: '#1f3864' }}>Ship To</h2>
                <div
                  style={{ height: '3px', backgroundColor: '#bfbfbf' }}
                ></div>
                <h3>&lt; Name / Dept&gt;</h3>
                <h3>&lt;Client Company Name&gt;</h3>
                <h3>&lt;Address &gt;</h3>
                <h3 onClick={handlePhoneClick} style={{ cursor: 'pointer' }}>
                  {editPhone ? (
                    <input
                      type="text"
                      value={newPhone}
                      onChange={handlePhoneChange}
                      onBlur={() => seteditPhone(false)}
                    />
                  ) : (
                    newPhone || '<Phone >'
                  )}
                </h3>{' '}
                {/* fourth */}
                <h3 onClick={handleEmailClick} style={{ cursor: 'pointer' }}>
                  {editEmail ? (
                    <input
                      type="text"
                      value={newEmail}
                      onChange={handleEmailChange}
                      onBlur={() => seteditEmail(false)}
                    />
                  ) : (
                    newEmail || '<Email >'
                  )}
                </h3>
>>>>>>> feat/timekeeping
              </div>
            </div>

          {/* third  */}

            <div
              style={{
                display: 'flex',
                justifyContent: 'end',
                width: '100%',
                padding: ' 20px ',
                color: '#333f4f',
              }}
            >
<<<<<<< HEAD
              <h2 style={{ backgroundColor: 'pink', padding: '2px 10px', height: '37px', textAlign: 'end', borderRadius: '2px' }}>
                ${pdfData.amount}
              </h2>
            </div>
          </div>
          <div style={{ height: '30px', backgroundColor: 'tomato' }}></div>
        </Box>
        
        <div style={{
            float: 'right',
           padding:'10px 10px'
          }}
          >
            {!viewOnly && 
            <Button variant="contained" sx={{ color: '#fff', textTransform: 'capitalize', marginRight: '4px'  }} 
            onClick={handlePDF}>
              Create Invoice
            </Button>}

            
            <Button variant="outlined" sx={{ borderColor: '#000',color: '#000', textTransform: 'capitalize'}}
            onClick={()=> {setInvoiceDetails(pdfData); setEditpdf(initialPdfValue);setOpen(false)}}
            >
              Close
            </Button>
          </div>
=======
              Remarks / Payment Instructions
            </div>
            <div style={{ width: '40%', display: 'flex' }}>
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
                <h2 style={{ backgroundColor: 'pink', height: '50px' }}></h2>
              </div>
              <div style={{ height: '4px', backgroundColor: 'black' }}></div>
            </div>
          </div>
          <div style={{ height: '30px', backgroundColor: 'tomato' }}></div>
        </div>
>>>>>>> feat/timekeeping
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
    <Box
      sx={{
        display: 'flex',
        border: '1px solid #04A1FF',
        width: 'fit-content',
        borderRadius: '10px',
        overflow: 'hidden',
      }}
    >
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
