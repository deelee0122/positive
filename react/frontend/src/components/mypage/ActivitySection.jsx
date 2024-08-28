import React from 'react';
import { Box, Typography } from '@mui/material';
import './Mypage.css';

const ActivitySection = () => (
  <Box className="flex-column">
    <Typography variant="h7" className="typography-muted">
      내 활동
    </Typography>
    <Box display="flex" justifyContent="space-between">
      <Typography variant="h7" className="typography-bold">
        결제 내역
      </Typography>
      <Typography variant="h7" className="typography-blue">
        예약 확정 x 건
      </Typography>
    </Box>
  </Box>
);

export default ActivitySection;
