import React, { useState } from 'react';
import AvatarSection from '../components/mypage/AvatarSection';
import ActivitySection from '../components/mypage/ActivitySection';
import ButtonSection from '../components/mypage/ButtonSection';
import ProgramSection from '../components/mypage/ProgramSection';
import DeadlineSection from '../components/mypage/DeadlineSection';


import { createTheme, ThemeProvider } from '@mui/material';
import MainBar from '../components/frontpage/MainBar';
import Navbar from '../components/frontpage/Navbar';

const Mypage = () => {
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
      <AvatarSection userName="userName" />
      <hr />
      <ActivitySection />
      <hr />
      <ButtonSection />
      <ProgramSection />
      <hr />
      <DeadlineSection />
    </ThemeProvider>
  );
};

export default Mypage;
