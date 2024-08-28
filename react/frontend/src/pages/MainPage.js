
import Box from '@mui/material/Box';
import Navbar from "../components/frontpage/Navbar";
import MiddleBar from "../components/frontpage/MiddleBar";
import { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material";
import MainBar from '../components/frontpage/MainBar';
import SlideSide from '../components/frontpage/SlideSide';
import Contents from '../components/frontpage/Contents';

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
