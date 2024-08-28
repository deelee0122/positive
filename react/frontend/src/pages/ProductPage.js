import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Product from '../components/Product';
import Navbar from '../components/frontpage/Navbar';
import { Box, createTheme } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import MainBar from '../components/frontpage/MainBar';
import Reservation from '../components/Reservation';

function ProductPage() {
  const [mode, setMode] = useState("light");
  const theme = createTheme({
    palette: {
      mode: mode,
    },
    typography: {
      fontFamily: "Gaegu, sans-serif",
    },
  });

  const { hobby_id } = useParams();

  return (
    <ThemeProvider theme={theme}>
      <Box bgcolor="background.default" color="text.primary">
        <Navbar />
        <MainBar />
        <Product hobby_id={hobby_id} />
        <Reservation />
      </Box>
    </ThemeProvider>
  );
}

export default ProductPage;
