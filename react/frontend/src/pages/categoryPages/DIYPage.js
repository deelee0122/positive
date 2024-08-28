import { Box, createTheme, Typography } from '@mui/material';
import React, { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles'; // Ensure correct import
import Navbar from '../../components/frontpage/Navbar';
import MainBar from '../../components/frontpage/MainBar';
import Contents from '../../components/frontpage/Contents';


const DIYPage = () => {
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
            <Box bgcolor={"background.default"} color={"text.primary"} minHeight="100vh" display="flex" flexDirection="column">
                <Navbar />
                <MainBar />

                {/* Centering the Typography component in a white opaque box with margin */}
                <Box display="flex" justifyContent="center" alignItems="center" flexGrow={1} mt={2} mb={2}>
                    <Box
                        sx={{
                            backgroundColor: 'rgba(255, 255, 255, 0.8)', // White with opacity
                            padding: '10px 32px', // Padding inside the box
                            borderRadius: '8px', // Rounded corners
                            boxShadow: 3, // Material-UI shadow level
                            textAlign: 'center', // Center text alignment
                            mx: 2, // Horizontal margin for spacing from edges
                        }}
                    >
                        <Typography
                            variant="h2" // Make it bigger by setting variant
                            sx={{ fontWeight: 'bold', fontSize: { xs: '1rem', sm: '1rem', md: '1.5rem' }, color: 'gray' }} // Responsive font size
                        >
                            DIY
                        </Typography>
                    </Box>
                </Box>

                {/* Image below the DIY title */}
                <Box display="flex" justifyContent="center" alignItems="center" mt={2} mb={2}>
                    <Box
                        component="img"
                        src="https://plus.unsplash.com/premium_vector-1682300971491-2b91200b942d?q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Replace with your image path or URL
                        alt="DIY Image"
                        sx={{
                            width: { xs: '100%', sm: '70%', md: '50%' }, // Responsive width for different screen sizes
                            borderRadius: '8px', // Rounded corners for the image
                            boxShadow: 3, // Shadow for the image
                            maxHeight: '300px', // Maximum height to maintain aspect ratio
                            objectFit: 'cover', // Maintain aspect ratio
                            objectPosition: 'center bottom', // Adjusted to show more of the bottom
                        }}
                    />
                </Box>

                {/* All Contents Box */}
                <Box
                    sx={{
                        backgroundColor: 'rgba(255, 255, 255, 0.8)', // White with opacity
                        padding: '10px 32px', // Padding inside the box
                        textAlign: 'center', // Center text alignment
                        mx: 2, // Horizontal margin for spacing from edges
                    }}
                >
                    <Typography>All Contents</Typography>
                </Box>

                <Contents category="diy" />
            </Box>
        </ThemeProvider>
    );
}

export default DIYPage;
