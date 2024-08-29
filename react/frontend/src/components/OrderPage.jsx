import React, { useState } from 'react';
import { Box, createTheme, ThemeProvider } from '@mui/material';
import Navbar from './LogoutNavbar';
import MainBar from './MainBar';
import AvatarSection from './AvatarSection';
import BackBtnSection from './BackBtnSection';
import ButtonSection from './ButtonSection';
import ProgramSection from './ProgramSection';
import DeadlineSection from './DeadlineSection';


const OrderPage = () => {
  const [mode, setMode] = useState("light");
    const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
    typography: {
      fontFamily: "Gaegu, sans-serif",
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Navbar />
      <MainBar />
      <Box
        display="flex"
        flexDirection="column"
        alignItems="space-between"
        sx={{ width: '100%', maxWidth: '600px', mx: 'auto', my: 2 }}
      >
      <AvatarSection/>
      <hr />
      <BackBtnSection/>
      <hr />
      <ButtonSection />
      <ProgramSection />
      <hr />
      <DeadlineSection />
      </Box>
    </ThemeProvider>
  );
};

export default OrderPage;
