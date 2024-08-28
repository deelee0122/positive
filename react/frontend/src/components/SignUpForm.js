import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Link, IconButton, MenuItem, InputLabel, Select, FormControl, Grid } from '@mui/material';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import axios from 'axios';

const SignUpForm = () => {
    const [formData, setFormData] = useState({
        uno: 0,
        user_id: '',
        username: '',
        password: '',
        email: '',
        // emailDomain: 'gmail.com',
        first_name: '',
        last_name: '',
        phone_number: '',
        date_of_birth: '',
        role: 'user'
    });

    const handleInputChange = (event) => {
        const { id, value } = event.target;
        setFormData({ ...formData, [id]: value });
    };

    // const handleEmailDomainChange = (event) => {
    //     setFormData({ ...formData, emailDomain: event.target.value });
    // };

    const handleSubmitLogin = (event) => {
        event.preventDefault();

        // // const completeEmail = `${formData.emailID}@${formData.emailDomain}`;
        // const finalData = { ...formData, email: completeEmail };

        const apiUrl = '/api/users/signup';

        axios.post(apiUrl, formData)
            .then((response) => {
                console.log('Form submitted successfully:', response.data);

            })
            .catch((error) => {
                console.error('There was an error submitting the form:', error);
                // Handle error (e.g., show an error message)
            });
    };

    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    return (
        <Box
            sx={{
                marginTop: '30px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100%',
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
                    '& .MuiTextField-root': { m: 1, width: '25vw' },
                    width: '30vw',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '20px',
                    backgroundColor: '#fff',
                    borderRadius: '8px',
                    boxShadow: 3,
                    opacity: 0.9, // Optional: Adjust opacity to make text stand out
                    overflow: 'none',
                    maxHeight: '100vh'
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
                    id="username"
                    label="닉네임"
                    value={formData.username}
                    onChange={handleInputChange}
                />
                <TextField
                    required
                    type={passwordVisible ? "text" : 'password'}
                    id="password"
                    label="비밀번호"
                    value={formData.password}
                    InputProps={{
                        endAdornment: (
                            <IconButton
                                onClick={togglePasswordVisibility}
                                edge="end"
                            >
                                {passwordVisible ? <VisibilityIcon /> : <VisibilityOffIcon />}
                            </IconButton>
                        )
                    }}
                    onChange={handleInputChange}
                />
                {/* <Grid container spacing={0} alignItems="center" fullWidth sx={{ display: 'inline-flex', width: '60%' }}>
                    <Grid item sx={{ display: 'inline-flex', flexWrap: 'nowrap' }}> */}
                <TextField
                    required
                    id="email"
                    // style={{ width: "150px" }}
                    label="이메일"
                    value={formData.email}
                    onChange={handleInputChange}
                />

                {/* // </Grid>
                // <Grid>
                //     <FormControl fullWidth>
                //         <InputLabel id="email-domain-label"></InputLabel>
                //         <Select
                //             labelId="email-domain-label"
                //             id="emailDomain"
                //             value={formData.emailDomain}
                //             onChange={handleEmailDomainChange}
                //         >
                //             <MenuItem value="gmail.com">gmail.com</MenuItem>
                //             <MenuItem value="nate.com">nate.com</MenuItem>
                //             <MenuItem value="naver.com">naver.com</MenuItem>
                //             <MenuItem value="daum.net">daum.net</MenuItem>
                //         </Select>
                //     </FormControl>
                // </Grid>
                // </Grid> */}

                <TextField
                    required
                    id="first_name"
                    label="이름"
                    value={formData.first_name}
                    onChange={handleInputChange}
                />
                <TextField
                    required
                    id="last_name"
                    label="성"
                    value={formData.last_name}
                    onChange={handleInputChange}
                />
                <TextField
                    required
                    id="phone_number"
                    label="전화번호"
                    value={formData.phone_number}
                    onChange={handleInputChange}
                />
                <TextField
                    required
                    id="date_of_birth"
                    label="생일"
                    value={formData.date_of_birth}
                    onChange={handleInputChange}
                />

                {/* <FormControlLabel
                    control={<Checkbox checked={formData.role === 'user'} onChange={handleCheckboxChange} value="user" />}
                    label="User"
                />
                <FormControlLabel
                    control={<Checkbox checked={formData.role === 'admin'} onChange={handleCheckboxChange} value="admin" />}
                    label="Admin"
                />
                <FormControlLabel
                    control={<Checkbox checked={formData.role === 'host'} onChange={handleCheckboxChange} value="host" />}
                    label="Host"
                /> */}

                {/* 권한 설정 체크박스 상호작용 코드 */}

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
            </Box >
        </Box >
    );
};

export default SignUpForm