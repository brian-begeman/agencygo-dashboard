import React, { useState } from 'react';
import {
  Box,
  FormControlLabel,
  FormGroup,
  Switch,
  Typography,
} from '@mui/material';
import Overlay from 'renderer/components/Settings/Wallet/Common/Modal';
import styles from 'renderer/components/Settings/Wallet/Common/Modal/styles.module.css';
import {
  DropdownWithLabel,
  InputWithLabel,
  ModalFooter,
} from 'renderer/components/Settings/Wallet/Common/ModalComponents';
import { Stack } from '@mui/system';
import { genderList, assignEmployeeList } from '../constant';

const initFormData = {
  headShotName: '',
  creatorName: '',
  gender: '',
  assignEmployee: '',
  internalNote: '',
  link: true,
};

interface $Props {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function AddCreaterModal({ open, setOpen }: $Props) {
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

  const handleLink = () => {
    setData((data) => ({
      ...data,
      link: !data.link,
    }));
  };

  return (
    <Overlay heading="Add Creators" open={open} handleClose={handleModalClose}>
      <Box sx={{ backgroundColor: '#4B4B4B', padding: '0px 80px' }}>
        <form className={styles.modalBody}>
          <Stack
            gap={'10px'}
            sx={{
              marginRight: '10px',
              marginLeft: '10px',
              paddingTop: '20px',
              paddingBottom: '20px',
            }}
            className={styles.inputListWrapper}
          >
            <InputWithLabel
              label="Add headshot"
              value={data.headShotName}
              inputIdentifierName="headshotName"
              placeholder="Enter name"
              handleOnChange={handleChange}
            />
            <InputWithLabel
              label="Creator's name"
              value={data.creatorName}
              inputIdentifierName="creatorName"
              placeholder="Enter name"
              handleOnChange={handleChange}
            />

            <DropdownWithLabel
              label="Gender"
              value={data.gender}
              inputIdentifierName="gender"
              options={genderList}
              placeholder="Select gender"
              handleOnChange={handleChange}
            />
            <DropdownWithLabel
              label="Assign employee"
              value={data.assignEmployee}
              inputIdentifierName="assignEmployee"
              options={assignEmployeeList}
              placeholder="Choose employee"
              handleOnChange={handleChange}
            />
            <InputWithLabel
              label="Internal notes"
              value={data.internalNote}
              inputIdentifierName="internalNote"
              placeholder="Enter name"
              handleOnChange={handleChange}
            />
            <Box
              sx={{
                display: 'flex',
                gap: '10px',
                alignItems: 'center',
                padding: '10px 0px',
              }}
            >
              <Typography fontSize={20}>Auto relink</Typography>
              <FormGroup>
                <FormControlLabel
                  control={<Switch />}
                  checked={data.link}
                  label=""
                  onClick={handleLink}
                />
              </FormGroup>
            </Box>

            <Typography>
              When enabled, we'll automatically relink the OnlyFans account when
              they are disconnected from OnlyManager
            </Typography>
            <Typography>Network proxy</Typography>
            <Typography>
              OnlyManager proxy（To be assigned） Our network proxy enables
              secure access to the OF account for any employee assigned to the
              Creator
            </Typography>
          </Stack>
        </form>
      </Box>
      <ModalFooter
        addHandler={addHandler}
        cancelHandler={cancelHandler}
        addText="Add Creator"
      />
    </Overlay>
  );
}
