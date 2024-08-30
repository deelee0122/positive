import { AppBar, Toolbar, Typography, styled } from '@mui/material';
import React from 'react';
import WindowSharpIcon from '@mui/icons-material/WindowSharp';
import PersonSharpIcon from '@mui/icons-material/PersonSharp';
import FavoriteSharpIcon from '@mui/icons-material/FavoriteSharp';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import { Link } from 'react-router-dom';

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

const MainBar = () => {
  return (
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

        <Link to="/mypage" style={{ textDecoration: 'none', color: 'inherit' }}>
          <IconTextWrapper>
            <PersonSharpIcon />
            <SmallText>마이</SmallText>
          </IconTextWrapper>
        </Link>
      </StyledToolbar>
    </AppBar>
  );
}

export default MainBar;
