import React from 'react';
import { AppBar, Toolbar, Typography, styled } from '@mui/material';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'flex-end', 
  alignItems: 'center',
  paddingRight: '10px',
  backgroundColor: '#E6CD7C',
  color: '#767676',
  fontSize: '10px',
  minHeight: '80px',
  position: 'relative',
});

const CenteredTypography = styled(Typography)(({ theme }) => ({
  position: 'absolute', 
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  padding: '10px 20px',
  borderRadius: '5px',
  color: '#E59261',
  fontSize: '16px',
  fontWeight: 'bold',
  display: 'none',
  [theme.breakpoints.up('sm')]: {
    display: 'block',
  },
}));

const Navbar = () => {
  return (
    <AppBar position="static">
      <StyledToolbar>
        <CenteredTypography>
          취미로 삶을 더욱 즐겁게, 당신만의 시간을 만들어 보세요!
        </CenteredTypography>
        <Typography sx={{ marginRight: '16px', fontSize: '15px' }}>호스트지원</Typography>
        <Typography sx={{ marginRight: '16px', fontSize: '15px' }}>회원가입</Typography>
        <Link 
          to="/user" 
          style={{ 
            marginRight: '16px', 
            fontSize: '15px', 
            textDecoration: 'none', 
            color: '#767676',
            fontFamily: '"Gaegu", sans-serif' // Apply font family here
          }}
        >
          로그인
        </Link>
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;
