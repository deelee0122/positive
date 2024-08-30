import React, { useState } from 'react'
import SignUpForm from '../../components/login/SignUpForm'
import Navbar from '../../components/frontpage/Navbar'
import MainBar from '../../components/frontpage/MainBar'
import { createTheme } from '@mui/material'
import { ThemeProvider } from '@emotion/react'


const SignUpPage = () => {
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
    <SignUpForm />
  </ThemeProvider>
    
  )
}

export default SignUpPage