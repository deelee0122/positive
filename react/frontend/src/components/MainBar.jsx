import { AppBar, Toolbar, Typography, styled, Modal, Box, Button } from '@mui/material';
import React, {  useState } from 'react';
import WindowSharpIcon from '@mui/icons-material/WindowSharp';
import PersonSharpIcon from '@mui/icons-material/PersonSharp';
import FavoriteSharpIcon from '@mui/icons-material/FavoriteSharp';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import { Link } from 'react-router-dom';
import axios from 'axios';

// Define styled components
const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '29ch',
    },
  },
}));

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  color: '#E59261',
  minHeight: '48px', // Reduce the minimum height of the toolbar
  padding: '0 10px', // Optional: Reduce padding to further adjust height
  maxWidth: '700px', // Limit the width of the toolbar
  margin: '0 auto', // Center toolbar horizontally
  marginTop: '20px'
});

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  overflow: 'hidden',
  backgroundColor: '#F4F4F4',
  '&:hover': {
    backgroundColor: 'white',
  },
  marginRight: theme.spacing(1),
  width: '50%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
  },
}));

const IconTextWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  color: 'gray',
  '&:hover': {
    color: '#E59261', // Change color on hover
    cursor: 'pointer', // Optional: Change cursor on hover
    '& .MuiSvgIcon-root': {
      color: '#E59261', // Change icon color on hover
    },
    '& .MuiTypography-root': {
      color: '#E59261', // Change text color on hover
    },
  },
}));

const SmallText = styled(Typography)({
  fontSize: '0.75rem',  // Set the font size smaller
  color: 'gray',  // Default color
});

const MainBar = ({ login }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const f = () => {
    console.log("아이콘 눌렸어요");
    const apiUrl = '/api/users/loginCheck';
    console.log('open',open)
    axios.get(apiUrl)
      .then((response) => {
        console.log('Form submitted successfully:', response.data);
        if (!response.data || response.data.trim() === "") {
          handleOpen(); // Modal을 띄움
        }
      })
      .catch((error) => {
        console.error('There was an error submitting the form:', error);
        // Handle error (e.g., show an error message)
      });
  }
  return (
    <>
      <AppBar position='' sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
        <StyledToolbar>
          <Link to="/category" style={{ color: '#E59261', display: 'flex', alignItems: 'center' }}>
            <WindowSharpIcon />
          </Link>

          {/* Image container with fixed height and centered content */}
          <Link to="/" style={{ marginRight: '16px', textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
            <div 
              style={{
                height: '40px',  // Adjusted height
                display: 'flex', // Use flexbox for centering
                alignItems: 'center', // Center vertically
                justifyContent: 'center', // Center horizontally
                overflow: 'hidden', // Hide overflow parts of the image
              }}
            >
              <img 
                src="./static/images/Positive.png" // Ensure this path is correct
                alt="Logo"
                style={{
                  height: '100%', // Fill container height
                  width: 'auto', // Maintain aspect ratio
                  objectPosition: 'center', // Center image
                }}
              />
            </div>
          </Link>

          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="지금 생각나는 취미를 검색하세요."
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>

          <IconTextWrapper>
            <FavoriteSharpIcon />
            <SmallText>찜</SmallText>
          </IconTextWrapper>

          <Link to="/logoutMy" style={{ textDecoration: 'none', color: 'inherit' }}>
            <IconTextWrapper onClick={f}>
              <PersonSharpIcon />
              <SmallText>마이</SmallText>
            </IconTextWrapper>
          </Link>
        </StyledToolbar>
      </AppBar>

      {/* Modal 컴포넌트 추가 */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box
         
        sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 300,
            bgcolor: 'background.paper',
            border: '2px solid #000',
            borderRadius: '10px',
            boxShadow: 24,
            p: 4,
            textAlign: 'center'
          }}
        >
          <Typography id="modal-title" variant="h6" component="h2">
            로그인 정보가 없습니다.
          </Typography>
          <Typography id="modal-description" sx={{ mt: 2 }}>
            로그인을 먼저 해주세요.
          </Typography>
          <Button variant="contained" onClick={handleClose} sx={{ mt: 2 }}>
            닫기
          </Button>
        </Box>
      </Modal>
    </>
  );
}

export default MainBar;
