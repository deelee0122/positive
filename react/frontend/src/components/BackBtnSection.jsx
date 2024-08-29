import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const BackBtnSection = () => (
  <Box className="flex-column">
    <Typography variant="subtitle1" className="typography-muted">
      내 활동
    </Typography>
    <Box display="flex" justifyContent="space-between" sx={{ width: '100%' }}>
      <Link to="/mypage">
          <Button> 마이 페이지로 돌아가기 </Button>
      </Link>
      <Typography variant="subtitle1" className="typography-blue">
        예약 확정 1 건
      </Typography>
    </Box>
  </Box>
);

export default BackBtnSection;
