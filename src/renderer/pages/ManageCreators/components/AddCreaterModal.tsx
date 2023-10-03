/* eslint-disable react/no-unescaped-entities */
import React from 'react';
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
import { genderList } from '../constant';
import useFormCreator from '../hooks/useForm';

interface $Props {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  refetch: () => void;
  type: 'add' | 'edit';
  selectedCreator?: any;
}

export default function AddCreaterModal({
  open,
  setOpen,
  refetch,
  type,
  selectedCreator,
}: $Props) {
  const {
    employeeOptions,
    handleSubmit,
    register,
    isLoading,
    isAutoRelink,
    toggleAutoRelink,
  } = useFormCreator(
    () => {
      setOpen(false);
      refetch();
    },
    type,
    selectedCreator
  );

  const addHandler = () => {
    handleSubmit();
  };

  const cancelHandler = () => {
    setOpen(false);
  };

  const handleModalClose = () => {
    setOpen(false);
  };

  return (
    <Overlay heading="Add Creators" open={open} handleClose={handleModalClose}>
      <Box sx={{ backgroundColor: '#4B4B4B', padding: '0px 80px' }}>
        <form
          id="addCreator"
          className={styles.modalBody}
          onSubmit={addHandler}
        >
          <Stack
            gap="10px"
            sx={{
              marginRight: '10px',
              marginLeft: '10px',
              paddingTop: '20px',
              paddingBottom: '20px',
            }}
            className={styles.inputListWrapper}
          >
            <InputWithLabel
              label="Creator's name"
              inputIdentifierName="name"
              placeholder="Enter name"
              register={register as any}
            />

            <DropdownWithLabel
              label="Gender"
              inputIdentifierName="gender"
              options={genderList}
              placeholder="Select gender"
              register={register as any}
            />
            <DropdownWithLabel
              label="Assign employee"
              inputIdentifierName="assignEmployee"
              options={employeeOptions}
              placeholder="Choose employee"
              register={register as any}
            />
            <InputWithLabel
              label="Internal notes"
              inputIdentifierName="internalNotes"
              placeholder="Enter name"
              register={register as any}
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
                  checked={isAutoRelink}
                  label=""
                  onClick={toggleAutoRelink}
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
        id="addCreator"
        isLoading={isLoading}
      />
    </Overlay>
  );
}
