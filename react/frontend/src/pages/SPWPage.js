import { Box, createTheme, Slide, Stack, ThemeProvider } from "@mui/material";
import { useState } from "react";
import Navbar from "../components/frontpage/Navbar";
import "@fontsource/gaegu"; 
import MainBar from "../components/frontpage/MainBar";
import SearchPw from "../components/login/SearchPw";



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