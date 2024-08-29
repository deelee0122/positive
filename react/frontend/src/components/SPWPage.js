import { Box, createTheme, Slide, Stack, ThemeProvider } from "@mui/material";
import { useState } from "react";
import "@fontsource/gaegu"; 
import Navbar from "./LogoutNavbar";
import MainBar from "./MainBar";
import SearchPw from "./SearchPw";




const SPWPage = () => {
    const [mode, setMode] = useState("light");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
    typography: {
      fontFamily: "Gaegu, sans-serif", // Set the font family to Gaegu
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <Navbar />
      <MainBar />
     <SearchPw />
    </ThemeProvider>
  )
}

export default SPWPage