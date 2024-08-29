import React, { useState } from 'react';
import { Box, createTheme, ThemeProvider, Typography } from '@mui/material';

import ActivitySection from './ActivitySection';
import MyInformation from './MyInformation';
import AvatarSection from './AvatarSection';
import Navbar from './Navbar';
import MainBar from './MainBar';


const MyPage = () => {
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
        className= 'myPageBox'
        alignItems="space-between"
        sx={{ width: '100%', maxWidth: '600px', mx: 'auto', my: 2 }}
      >
        <AvatarSection userId = 'user1'/>
        <hr/>
        <ActivitySection />
        <hr />
      </Box>
      <Box
        className= 'myPageBox'
        alignItems="space-between"
        sx={{ width: '100%', maxWidth: '600px', mx: 'auto', my: 2 }}
      >
        <Typography variant="subtitle1" className="typography-muted" >
          내 정보
        </Typography>
        <MyInformation/>
      </Box>
    </ThemeProvider>
  );
};

export default MyPage;
