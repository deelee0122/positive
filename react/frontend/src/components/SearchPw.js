import React, { useState } from 'react';
import { Box, TextField, Button } from '@mui/material';
import axios from 'axios';

const SearchPw = () => {
    const [formData, setFormData] = useState({
        user_id: '',
        username: '',
        email:'',
        phone_number: '',
        password: ''
    });

    const handleInputChange = (event) => {
        const { id, value } = event.target;
        setFormData({ ...formData, [id]: value });
    };


        const handleSearchPw = (event) => {
        event.preventDefault();

        const apiUrl = '/api/users/searchPw';
        
        axios.post(apiUrl, formData)
            .then((response) => {
                console.log('Form submitted successfully:', response.data);
                 const { password } = response.data;
                if (password) {
                    alert(`비밀번호는 ${password} 입니다.`);
                } else {
                    alert('비밀번호를 찾을 수 없습니다. 정보를 확인하고 다시 입력해주세요.');
                }
            })
            .catch((error) => {
                console.error('There was an error submitting the form:', error);
                // Handle error (e.g., show an error message)
                 alert('There was an error retrieving the password.');
            });

           
    };

    return (
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
            onSubmit={handleSearchPw}
        >
            <div>
                <TextField
                    required
                    id="user_id"
                    label="아이디"
                    placeholder='아이디를 입력하세요'
                    value={formData.user_id}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <TextField
                    required
                    id="username"
                    label="이름"
                    placeholder='이름을 입력하세요'
                    value={formData.username}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <TextField
                    required
                    id="email"
                    label="이메일"
                    placeholder='이메일을 입력하세요'
                    value={formData.email}
                    onChange={handleInputChange}
                />
            </div>
             <div>
                <TextField
                    required
                    id="phone_number"
                    label="전화번호"
                    placeholder=' - 없이 입력하세요'
                    value={formData.phone_number}
                    onChange={handleInputChange}
                />
            </div>
     
            
            <Button type="submit" onClick={handleSearchPw} variant="contained" color="primary"
                    sx={{ 
                        mt: 2, 
                        backgroundColor: '#E59261', 
                        color: '#fff', 
                        '&:hover': {
                            backgroundColor: '#d87a50',
                        }
                    }}>
                비밀번호 찾기
            </Button>

           
            
        </Box>
    );
};

export default SearchPw;
