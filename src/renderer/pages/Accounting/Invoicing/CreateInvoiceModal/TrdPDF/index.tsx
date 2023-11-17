

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import React, { useState } from 'react';
import './TrdPDF.css';

const style = {
  position: 'absolute' as 'absolute',
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

export default function TrdPDF({ open, setOpen, name }: any) {
  const [editDescription, setEditDescription] = useState(false);
  const [editDate, setEditDate] = useState(false);
  const [newDescription, setNewDescription] = useState('');
  const [newDate, setNewDate] = useState('');

  const[editaddress,setEditAddress]=useState(false)
  const [newAddress,setnewAdress]=useState('')

  const handleClose = () => {
    setEditDescription(false);
    setEditDate(false);
    setOpen(false);
  };

  const handleDescriptionClick = () => {
    setEditDescription(true);
  };

  const handleDescriptionChange = (event: any) => {
    setNewDescription(event.target.value);
  };

  const handleDateClick = () => {
    setEditDate(true);
  };

  const handleDateChange = (event: any) => {
    setNewDate(event.target.value);
  };


//   address

const handleAddressClick = () => {
    setEditAddress(true);
  };

  const handleAddressChange = (event: any) => {
    setnewAdress(event.target.value);
  };
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
        <div className="main-divv">
          <div className="header-div">
            <h2>ALDENAIRE & PARTNERS</h2>
          </div>
          <div className="d-flex justify-content-center pt-19">
            <div className="invoice">
              <h1>
                <span
                  style={{
                    textAlign: 'center',
                    fontSize: '150px',
                    fontWeight: 'lighter',
                    margin: '0px 0px',
                    fontFamily: 'Caveat, cursive',
                  }}
                >
                  I
                </span>
                NVOICE
              </h1>
            </div>
          </div>

          <div className="d-flex">
            <div className="new-item">
              <div className="d-flex">
                <div className="new-item-sub">
                  <h4>FROM:</h4>
                </div>
                <div className="new-item">
                  <p onClick={handleDescriptionClick} style={{ cursor: 'pointer' }}>
                    {editDescription ? (
                      <input
                        type="text"
                        value={newDescription}
                        onChange={handleDescriptionChange}
                        onBlur={() => setEditDescription(false)}
                      />
                    ) : (
                        newDescription || "sd" 
                    )}
                  </p>
                </div>
              </div>
            </div>

            <div className="new-item">
              <div className="d-flex" style={{ marginTop: '15px' }}>
                <div className="new-item-sub">
                  <h4 style={{ margin: '0px 0px' }}>DATE:</h4>
                </div>
                <div className="new-item-75">
                  <p onClick={handleDateClick} style={{ cursor: 'pointer' }}>
                    {editDate ? (
                      <input
                        type="text"
                        value={newDate}
                        onChange={handleDateChange}
                        onBlur={() => setEditDate(false)}
                      />
                    ) : (
                      newDate || "23/01/2000" 
                    )}
                  </p>
                </div>
                <div className="new-item-sub">
                  <h4 style={{ margin: '0px 0px' }}>NUMBER:</h4>
                </div>
                <div className="new-item-75">
                  <p style={{ margin: '0px 0px' }}>000010</p>
                </div>
                <div className="new-item-sub">
                  <h4 style={{ margin: '0px 0px' }}>DUE:</h4>
                </div>
                <div className="new-item-75">
                  <p style={{ margin: '0px 0px' }}>January 31, 2021</p>
                </div>
              </div>
            </div>

            <div className="new-item">
              <div className="d-flex">
                <div className="new-item-sub">
                  <h4>FROM:</h4>
                </div>
                <div className="new-item">
                        <p onClick={handleAddressClick} style={{ cursor: 'pointer' }}>
                    {editaddress ? (
                      <input
                        type="text"
                        value={newAddress}
                        onChange={handleAddressChange}
                        onBlur={() => setEditAddress(false)}
                      />
                    ) : (
                        newAddress || "Address" 
                    )}
                  </p>
               
                </div>
              </div>
            </div>

            <div className="new-item">
              <div className="d-flex" style={{ justifyContent: 'center', backgroundColor: 'gray' }}>
                <div style={{ width: '100%', textAlign: 'center' }}>
                  <h2 style={{ color: '#ffff' }}>TOTAL DUE:</h2>
                </div>
                <div style={{ backgroundColor: 'rgb(255, 255, 255)', padding: '0px 86px', borderBottom: '10px gray solid' }}>
                  <h1>$26.26</h1>
                </div>
              </div>
            </div>

            <table style={{ width: '100%' }}>
              <tr>
                <th onClick={handleDescriptionClick}>DESCRIPTION</th>
                <th>PRICE</th>
                <th>QTY</th>
                <th>TOTAL</th>
              </tr>
              <tr>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
              </tr>
              <tr>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
              </tr>
              <tr>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
              </tr>
              <tr>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
              </tr>
              <tr>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
              </tr>
              <tr>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
              </tr>
              <tr>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
              </tr>
            </table>

            <div className="width-70"></div>
            <div className="width-30">
              <div className="d-flex" style={{ marginTop: '15px' }}>
                <div className="new-item-sub">
                  <h4 style={{ fontWeight: 'lighter' }}>SUBTOTAL:</h4>
                </div>
                <div className="new-item-75"></div>
                <div className="new-item-sub">
                  <h4 style={{ fontWeight: 'lighter' }}>TAX:</h4>
                </div>
                <div className="new-item-75"></div>
                <div className="new-item-sub">
                  <h4 style={{ fontWeight: 'lighter' }}>SHIPPING:</h4>
                </div>
                <div className="new-item-75"></div>
                <div className="new-item-sub">
                  <h4 style={{ fontWeight: 'bold' }}>TOTAL:</h4>
                </div>
                <div className="new-item-75"></div>
              </div>
            </div>
          </div>
        </div>
      </Box>
    </Modal>
  );
}
