import React, { useState } from 'react';
import { Box, TextField, Button } from '@mui/material';
import { Link } from 'react-router-dom'; 
import axios from 'axios';

const LoginForm = () => {
    const [formData, setFormData] = useState({
        user_id: '',
        password: '',
    });

    const handleInputChange = (event) => {
        const { id, value } = event.target;
        setFormData({ ...formData, [id]: value });
    };

    const handleSubmitLogin = (event) => {
        event.preventDefault();

        const apiUrl = '/api/users/login';

        axios.post(apiUrl, formData)
            .then((response) => {
                console.log('Form submitted successfully:', response.data);
                
            })
            .catch((error) => {
                console.error('There was an error submitting the form:', error);
                // Handle error (e.g., show an error message)
            });
    };

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '80vh',
                width: '100%',
                textAlign: 'center',
                backgroundImage: 'url(https://plus.unsplash.com/premium_vector-1682306822750-0b4d61729bc5?q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)', // Image background
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '20px',
                    backgroundColor: '#fff',
                    borderRadius: '8px',
                    boxShadow: 3,
                    opacity: 0.9, // Optional: Adjust opacity to make text stand out
                }}
                noValidate
                autoComplete="off"
                onSubmit={handleSubmitLogin}
            >
                <TextField
                    required
                    id="user_id"
                    label="아이디"
                    value={formData.user_id}
                    onChange={handleInputChange}
                />
                <TextField
                    required
                    type='password'
                    id="password"
                    label="암호"
                    value={formData.password}
                    onChange={handleInputChange}
                />
                <Button 
                    type="submit" 
                    variant="contained" 
                    sx={{ 
                        mt: 2, 
                        backgroundColor: '#E59261', 
                        color: '#fff', 
                        '&:hover': {
                            backgroundColor: '#d87a50',
                        }
                    }}
                >
                    등록
                </Button>
                <Box mt={2}>

                <Link to="/findpassword" // Use 'to' instead of 'href'
                style={{ marginRight: '16px', 
                fontSize: '12px', 
                textDecoration: 'none', 
                color: '#767676' }}>
                        비밀번호 찾기
                    </Link>
                </Box>
            </Box>
        </Box>
    );
};

export default LoginForm;
