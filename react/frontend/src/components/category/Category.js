import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Box, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const theme = createTheme({
  typography: {
    fontFamily: "Gaegu, sans-serif", // Set the font family to Gaegu
  },
});

export default function Category() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', flexDirection: 'column' }}>
        <Box sx={{ width: '80%', maxWidth: 500, marginBottom: 2 }}>
          <Box
            sx={{
              backgroundColor: 'rgba(255, 255, 255, 0.8)', // White with opacity
              padding: '10px 16px', // Reduced padding inside the box
              borderRadius: '8px', // Rounded corners
              boxShadow: 3, // Material-UI shadow level
              textAlign: 'center', // Center text alignment
              mx: 'auto', // Horizontal margin auto for centering
            }}
          >
            <Typography
              variant="h2" // Make it bigger by setting variant
              sx={{ fontWeight: 'bold', fontSize: { xs: '1rem', sm: '1rem', md: '1rem' }, color: 'gray' }} // Responsive font size
            >
              카테고리
            </Typography>
          </Box>
          <ImageList sx={{ width: '100%', height: 'auto' }} cols={2}>
            {itemData.map((item) => (
              <ImageListItem key={item.img} sx={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Link to={item.route} style={{ display: 'block', width: '100%' }}>
                  <img
                    srcSet={`${item.img}?w=500&h=450&fit=crop&auto=format&dpr=2 2x`}
                    src={`${item.img}?w=500&h=450&fit=crop&auto=format`}
                    alt={item.title}
                    loading="lazy"
                    style={{ borderRadius: '10%', display: 'block', width: '100%' }}
                  />
                </Link>
                <Box
                  sx={{
                    color: 'white',
                    fontWeight: 700,
                    textAlign: 'left',
                    marginTop: '8px',
                    position: 'absolute',
                    bottom: '5%',
                    left: '50%', // Adjusted left to 50% to center the text
                    transform: 'translate(-50%, 0)',
                    padding: '1px 10px',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    borderRadius: '5px',
                    boxShadow: 3,
                    fontSize: '16px'
                  }}
                >
                  {item.title}
                </Box>
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

const itemData = [
  {
    img: 'https://plus.unsplash.com/premium_vector-1720622697585-7127b9bc9f94?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fCVFRCU5NCVCQyVFRCU4QSVCOCVFQiU4QiU4OCVFQyU4QSVBNHxlbnwwfHwwfHx8MA%3D%3D',
    title: 'Fitness',
    route: '/fitness', // Update with internal route
  },
  {
    img: 'https://plus.unsplash.com/premium_vector-1721372436622-d39240b328f0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fCVFQiVCNyVCMCVFRCU4QiVCMHxlbnwwfHwwfHx8MA%3D%3D',
    title: 'Beauty',
    route: '/beauty', // Update with internal route
  },
  {
    img: 'https://plus.unsplash.com/premium_vector-1723281878251-488554951489?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGRpeXxlbnwwfHwwfHx8MA%3D%3D',
    title: 'DIY',
    route: '/diy', // Update with internal route
  },
  {
    img: 'https://plus.unsplash.com/premium_vector-1723195569252-200687d1063e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fCVFQyU5QSU5NCVFQiVBNiVBQyVFQyU4MiVBQ3xlbnwwfHwwfHx8MA%3D%3D',
    title: 'Cooking',
    route: '/cooking', // Update with internal route
  },
];
