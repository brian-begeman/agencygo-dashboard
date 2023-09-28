import React, { useState } from 'react';
import { Box } from '@mui/material';
import Overlay from 'renderer/components/Settings/Wallet/Common/Modal';
import styles from 'renderer/components/Settings/Wallet/Common/Modal/styles.module.css';
import {
  DropdownWithLabel,
  InputWithLabel,
  ModalFooter,
} from 'renderer/components/Settings/Wallet/Common/ModalComponents';
import { Stack } from '@mui/system';
import { groupList, roleList } from './constant';

const initFormData = {
  employeeName: '',
  email: '',
  group: '',
  role: '',
};

interface $Props {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function AddEmployeeModal({ open, setOpen }: $Props) {
  const [data, setData] = useState(initFormData);

  const handleChange = (name: string, value: string) => {
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const addHandler = () => {
    setOpen(false);
  };

  const cancelHandler = () => {
    setOpen(true);
  };

  const handleModalClose = () => {
    setOpen(false);
  };

  return (
    <Overlay heading="Add Employee" open={open} handleClose={handleModalClose}>
      <Box sx={{ backgroundColor: '#4B4B4B' }}>
        <form className={styles.modalBody}>
          <Stack
            gap={'10px'}
            sx={{
              marginRight: '30px',
              marginLeft: '30px',
              paddingTop: '10px',
              paddingBottom: '10px',
            }}
            className={styles.inputListWrapper}
          >
            <InputWithLabel
              label="Employee name"
              value={data.employeeName}
              inputIdentifierName="employeeName"
              placeholder="Enter name"
              handleOnChange={handleChange}
            />
            <InputWithLabel
              label="Email"
              value={data.email}
              inputIdentifierName="email"
              placeholder="Enter email"
              handleOnChange={handleChange}
            />
            <DropdownWithLabel
              label="Group"
              value={data.group}
              inputIdentifierName="group"
              options={groupList}
              handleOnChange={handleChange}
            />
            <DropdownWithLabel
              label="City"
              value={data.role}
              inputIdentifierName="city"
              options={roleList}
              handleOnChange={handleChange}
            />
          </Stack>
        </form>
      </Box>
      <ModalFooter
        addHandler={addHandler}
        cancelHandler={cancelHandler}
        addText="Add Employee"
      />
    </Overlay>
  );
}
