import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import Overlay from 'renderer/components/Settings/Wallet/Common/Modal';
import styles from 'renderer/components/Settings/Wallet/Common/Modal/styles.module.css';
import {
  DropdownWithLabel,
  InputWithLabel,
  ModalFooter,
} from 'renderer/components/Settings/Wallet/Common/ModalComponents';
import { Stack } from '@mui/system';
import fetchReq from 'utils/fetch';

interface $props {
  open: boolean;
  type: string;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const time = [
  {
    label: 'select a time',
    value: '',
  },
  {
    label: '1:00 AM',
    value: '1',
  },
  {
    label: '2:00 AM',
    value: '2',
  },
  {
    label: '3:00 AM',
    value: '3',
  },
  {
    label: '4:00 AM',
    value: '4',
  },
  {
    label: '5:00 AM',
    value: '5',
  },
  {
    label: '6:00 AM',
    value: '6',
  },
  {
    label: '7:00 AM',
    value: '7',
  },
  {
    label: '8:00 AM',
    value: '8',
  },
  {
    label: '9:00 AM',
    value: '9',
  },
  {
    label: '10:00 AM',
    value: '10',
  },
  {
    label: '11:00 AM',
    value: '11',
  },
  {
    label: '12:00 AM',
    value: '12',
  },
  {
    label: '1:00 PM',
    value: '13',
  },
  {
    label: '2:00 PM',
    value: '14',
  },
  {
    label: '3:00 PM',
    value: '15',
  },
  {
    label: '4:00 PM',
    value: '16',
  },
  {
    label: '5:00 PM',
    value: '17',
  },
  {
    value: '18',
    label: '6:00 PM',
  },
  {
    value: '19',
    label: '7:00 PM',
  },
  {
    value: '20',
    label: '8:00 PM',
  },
  {
    value: '21',
    label: '9:00 PM',
  },
  {
    value: '22',
    label: '10:00 PM',
  },
  {
    value: '23',
    label: '11:00 PM',
  },
  {
    value: '24',
    label: '12:00 PM',
  },
];

const AddShifts = ({ open, type, setOpen }: $props) => {
  const [employees, setEmployees] = useState([]);
  const [creators, setCreators] = useState([]);

  useEffect(() => {
    const endPoint = 'creator';
    const options = {
      method: 'GET' as 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      withAuth: true,
    };
    fetchReq(endPoint, options)
      .then((responce) => responce.json)
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
  }, []);

  const handleSubmit = () => {};
  const addHandler = () => {};
  const cancelHandler = () => {
    setOpen(false);
  };
  const handleModalClose = () => {
    setOpen(false);
  };
  return (
    <Overlay
      heading={type === 'add' ? 'Add Employee' : 'Edit Employee'}
      open={open}
      handleClose={handleModalClose}
    >
      <Box>
        <form
          className={styles.modalBody}
          id="addEmployee"
          onSubmit={handleSubmit}
        >
          <Stack>
            <div>
              <div style={{ display: 'flex', marginBottom: '5px' }}>
                <DropdownWithLabel
                  label="Start Time"
                  inputIdentifierName="Start Time"
                  options={time}
                />

                <div style={{ margin: '10px' }}>
                  <label htmlFor="">Select start date</label>

                  <input type="date" />
                </div>
              </div>

              <div style={{ display: 'flex', marginBottom: '5px' }}>
                <DropdownWithLabel
                  label="End Time"
                  inputIdentifierName="End Time"
                  options={time}
                />
                <div style={{ margin: '10px' }}>
                  <label htmlFor="">Select end date</label>
                  <input type="date" />
                </div>
              </div>
            </div>
          </Stack>
        </form>
      </Box>
      <ModalFooter addHandler={addHandler} cancelHandler={cancelHandler} />
    </Overlay>
  );
};

export default AddShifts;
