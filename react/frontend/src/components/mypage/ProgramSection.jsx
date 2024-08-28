import React, { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ProgramModal from './ProgramModal'; 
import './Mypage.css';

const ProgramSection = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box marginTop={1} className="flex-row">
      <img
        className="image-small"
        src="https://plus.unsplash.com/premium_vector-1720509121729-1ae008e28349?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8JUVCJUIzJUI1JUVDJThCJUIxfGVufDB8fDB8fHww"
        alt="Program"
      />
      <Box marginTop={2} className="flex-column">
        <Typography className="typography-heading">
          헬스부터 격투기까지! 독코치의 올인원 프로그램으로 변화를!
        </Typography>
        <Typography>
          2023.02.25 16:00 ~ 2023.02.25 17:30
        </Typography>
        <Typography className="typography-heading">
          수량: 2
        </Typography>
        <Button variant="outlined" className="narrow-button" onClick={handleOpen}>
          <MoreHorizIcon />
        </Button>
        <ProgramModal open={open} handleClose={handleClose} />
      </Box>
    </Box>
  );
};

export default ProgramSection;
