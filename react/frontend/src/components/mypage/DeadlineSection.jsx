import React from 'react';
import { Box, Typography } from '@mui/material';
import './Mypage.css';

const DeadlineSection = () => (
  <Box className="deadline">
    <Typography className="typography-heading">
      신청 마감일
    </Typography>
    <Typography className="typography-heading">
      2023.02.24
    </Typography>
  </Box>
);

export default DeadlineSection;
