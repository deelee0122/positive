import React from 'react';
import { AppBar, Button, Toolbar, Typography, styled } from '@mui/material';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import axios from 'axios';

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

    const f= () => {
        const apiUrl = '/api/users/logout';

        axios.get(apiUrl)
            .then((response) => {
                console.log('Form submitted successfully:', response.data);
                
            })
            .catch((error) => {
                console.error('There was an error submitting the form:', error);
                // Handle error (e.g., show an error message)
            });
    }

const Navbar = () => {
  return (
    <AppBar position="static">
      <StyledToolbar>
        <CenteredTypography>
          취미로 삶을 더욱 즐겁게, 당신만의 시간을 만들어 보세요!
        </CenteredTypography>
        <Typography sx={{ marginRight: '16px', fontSize: '15px' }}>호스트지원</Typography>
        <Link 
          to="/signup" 
          style={{ 
            marginRight: '16px', 
            fontSize: '15px', 
            textDecoration: 'none', 
            color: '#767676',
            fontFamily: '"Gaegu", sans-serif' // Apply font family here
          }}
        >
          회원가입
        </Link>
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
        <Link to = '/'>
          <Button onClick={f}
                          style={{ 
            marginRight: '16px', 
            fontSize: '15px', 
            textDecoration: 'none', 
            color: '#767676',
            fontFamily: '"Gaegu", sans-serif' // Apply font family here
          }}
           > 로그아웃 </Button>
        </Link>
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;
