import React from 'react';
import { Box } from '@mui/material';
import Overlay from 'renderer/components/Settings/Wallet/Common/Modal';
import styles from 'renderer/components/Settings/Wallet/Common/Modal/styles.module.css';
import {
  DropdownWithLabel,
  InputWithLabel,
  ModalFooter,
} from 'renderer/components/Settings/Wallet/Common/ModalComponents';
import { Stack } from '@mui/system';
import { roleList } from './constant';
import useFormEmployee from './hooks/useForm';

interface $Props {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  refetch: () => void;
  type: 'add' | 'edit';
  selectedEmployee?: any;
}

export default function AddEmployeeModal({
  open,
  setOpen,
  refetch,
  type,
  selectedEmployee,
}: $Props) {
  const { groupOptions, handleSubmit, register, isLoading } = useFormEmployee(
    () => {
      setOpen(false);
      refetch();
    },
    type,
    selectedEmployee
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
    <Overlay
      heading={type === 'add' ? 'Add Employee' : 'Edit Employee'}
      open={open}
      handleClose={handleModalClose}
    >
      <Box sx={{ backgroundColor: '#4B4B4B' }}>
        <form className={styles.modalBody} onSubmit={handleSubmit}>
          <Stack
            gap="10px"
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
              inputIdentifierName="name"
              placeholder="Enter name"
              register={register as any}
            />
            <InputWithLabel
              label="Email"
              inputIdentifierName="email"
              placeholder="Enter email"
              register={register as any}
            />
            <DropdownWithLabel
              label="Group"
              inputIdentifierName="agencyId"
              options={groupOptions}
              register={register as any}
            />
            <DropdownWithLabel
              label="Role"
              inputIdentifierName="role"
              options={roleList}
              register={register as any}
            />
          </Stack>
        </form>
      </Box>
      <ModalFooter
        addHandler={addHandler}
        cancelHandler={cancelHandler}
        addText="Add Employee"
        isLoading={isLoading}
      />
    </Overlay>
  );
}
