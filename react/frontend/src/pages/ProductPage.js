import React, { useState } from 'react'
import Product from '../components/Product'
import Navbar from '../components/frontpage/Navbar'
import { Box, createTheme } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import MainBar from '../components/frontpage/MainBar';

    function ProductPage() {
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
    <ThemeProvider theme={theme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar />
        <MainBar />
        <Product />

        
      </Box>
    </ThemeProvider>
  )
}

export default ProductPage