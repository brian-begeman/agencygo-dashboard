import { Modal } from '@mui/material';
import React, { ReactNode } from 'react';
import classes from './styles.module.css';
import { Box } from '@mui/system';

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
        background: 'rgba(0, 0, 0, 0.5)',
      }}
    >
      <div className={classes.innerWrapper}>
        <Box
          className={classes.modalHeader}
          sx={{
            borderTopLeftRadius: '10px',
            borderTopRightRadius: '10px',
          }}
        >
          {heading}
        </Box>
        {children}
      </div>
    </Modal>
  );
}

export default Overlay;
