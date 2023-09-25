import { Modal } from '@mui/material';
import React, { ReactNode } from 'react';
import classes from './styles.module.css';

interface OverlayProps {
  heading: string;
  children: ReactNode | ReactNode[];
  open: boolean;
  handleClose: () => void;
}
function Overlay(props: OverlayProps) {
  const { heading, children, open, handleClose } = props;
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      <div className={classes.innerWrapper}>
        <div className={classes.modalHeader}>{heading}</div>
        {children}
      </div>
    </Modal>
  );
}

export default Overlay;
