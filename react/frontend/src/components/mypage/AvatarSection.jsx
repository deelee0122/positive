import React from 'react';
import { Avatar, Box } from '@mui/material';
import './Mypage.css';

const AvatarSection = ({ userName }) => (
  <Box className="flex-row">
    <Avatar
      alt="User Avatar"
      src="https://plus.unsplash.com/premium_vector-1719858610474-deaa7f76017c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"
      sx={{ width: 60, height: 60 }}
    />
    <h3>{userName}</h3>
  </Box>
);

export default AvatarSection;
