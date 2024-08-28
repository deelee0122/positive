import React from 'react';
import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import FitnessBadge from '../badges/FitnessBadge';
import BeautyBadge from '../badges/BeautyBadge';
import DIYBadge from '../badges/DIYBadge';
import CookingBadge from '../badges/CookingBadge';

const MiddleBar = () => {
  return (
    <Stack 
      direction="row" 
      spacing={10} 
      marginTop={3} 
      justifyContent="center" 
      alignItems="center"
    >
      {/* Wrap each badge in a Link component with the desired route */}
      <Link to="/fitness" style={{ textDecoration: 'none' }}>
        <FitnessBadge />
      </Link>
      
      <Link to="/beauty" style={{ textDecoration: 'none' }}>
        <BeautyBadge />
      </Link>
      
      <Link to="/diy" style={{ textDecoration: 'none' }}>
        <DIYBadge />
      </Link>
      
      <Link to="/cooking" style={{ textDecoration: 'none' }}>
        <CookingBadge />
      </Link>
    </Stack>
  );
}

export default MiddleBar;
