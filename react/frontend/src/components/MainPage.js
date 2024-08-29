
import Box from '@mui/material/Box';
import { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material";

import MainBar from './MainBar';
import SlideSide from './SlideSide';
import MiddleBar from './MiddleBar';
import Contents from './Contents';
import Navbar from './Navbar';


function MainPage() {
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
        <SlideSide />
        <MiddleBar />
        {[1,2,3,4,5,6,7,8].map(i=><Contents />)}

        
      </Box>
    </ThemeProvider>
  );
}

export default MainPage;
