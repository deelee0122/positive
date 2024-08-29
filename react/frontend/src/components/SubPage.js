import { createTheme, ThemeProvider } from "@mui/material";
import { useState } from "react";
import "@fontsource/gaegu"; 

import MainBar from "./MainBar";
import LoginForm from "./LoginForm";
import Navbar from "./Navbar";


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
