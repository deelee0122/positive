import { Box, createTheme, Slide, Stack, ThemeProvider } from "@mui/material";
import { useState } from "react";
import "@fontsource/gaegu"; 
import Navbar from "../components/frontpage/Navbar";
import MainBar from "../components/frontpage/MainBar";
import LoginForm from "../components/login/LoginForm";


function SubPage() {
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
     <LoginForm />
    </ThemeProvider>
  );
}

export default SubPage;
