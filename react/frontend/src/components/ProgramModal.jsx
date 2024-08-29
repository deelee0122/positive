import React from 'react';
import { Box, Typography, Modal, Stack, Button } from '@mui/material';
import './Mypage.css';

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '1px solid #000',
  borderRadius: '16px', 
  boxShadow: 24,
  p: 4,
};

const ProgramModal = ({ open, handleClose }) => (
  <Modal
    open={open}
    onClose={handleClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >
    <Stack sx={modalStyle} spacing={2} direction="column">
      <Button variant='outlined'> 후기 작성 </Button>
      <Button variant='outlined'> 재구매 </Button>
      <Button variant='outlined'> 1 : 1 문의 </Button>
    </Stack>
  </Modal>
);

export default ProgramModal;
