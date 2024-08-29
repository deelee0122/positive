import React, { useState } from 'react';
import { Box, createTheme } from '@mui/material';
import { ThemeProvider } from '@emotion/react'; // Import ThemeProvider from @emotion/react
import Navbar from './LogoutNavbar';
import MainBar from './MainBar';
import Category from './Category';


const CategoryPage = () => {
  const [mode, setMode] = useState("light"); // Define theme mode state

  const theme = createTheme({
    palette: {
      mode: mode, // Use state for mode
    },
    typography: {
      fontFamily: "Gaegu, sans-serif", // Set the font family to Gaegu
    },
  });

  return (
    <ThemeProvider theme={theme}> {/* Wrap your component tree with ThemeProvider */}
      <Box>
        <Navbar />
        <MainBar />
        <Category />
      </Box>
    </ThemeProvider>
  );
};

export default CategoryPage;
