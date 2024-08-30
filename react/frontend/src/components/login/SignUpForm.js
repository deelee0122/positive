import React, { useState } from 'react';
import { Box, TextField, Button, IconButton, Snackbar } from '@mui/material';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

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

    const [errors, setErrors] = useState({});

    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');

    const navigate = useNavigate();

    const handleSnackbarClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpenSnackbar(false);
        navigate('/');
    };

    const handleInputChange = (event) => {
        const { id, value } = event.target;
        setFormData(prev => ({ ...prev, [id]: value }));
        handleValidation(id, value);
        // if (errors[id]) {
        //     setErrors(prev => ({ ...prev, [id]: '' }));
        // }
    };
    // const handleEmailDomainChange = (event) => {
    //     setFormData({ ...formData, emailDomain: event.target.value });
    // };

    const handleValidation = (field, value) => {
        let newErrors = { ...errors };
        switch (field) {
            case 'user_id':
                const idRegExp = /^[a-zA-Z0-9]{6,20}$/; // 6~20자의 영문 소문자와 숫자
                if (!idRegExp.test(value)) {
                    newErrors.user_id = "6~20자의 영문 소문자와 숫자만 사용 가능합니다.";
                } else {
                    delete newErrors.user_id;
                }
                break;
            case 'email':
                const emailRegExp = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.(com|net)$/;
                if (!emailRegExp.test(value)) {
                    newErrors.email = "* @ * .com 또는 .net만 사용 가능합니다.";
                } else {
                    delete newErrors.email;
                }
                break;
            case 'phone_number':
                const PhRegExp = /^010-[0-9]{4}-[0-9]{4}$/;
                if (!PhRegExp.test(value)) {
                    newErrors.phone_number = "010 - **** - **** 형식만 가능합니다.";
                } else {
                    delete newErrors.phone_number;
                }
                break;
            case 'date_of_birth':
                const birthRegExp = /`^(19[0-9]{2}|20[0-9]{2})-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$`/;
                if (!birthRegExp.test(value)) {
                    newErrors.date_of_birth = "올바른 날짜 형식 (YYYY-MM-DD)을 사용해주세요. 1900년 이후 날짜만 유효합니다.";
                } else {
                    delete newErrors.date_of_birth;
                }
                break;
            default:
                break;
        }
        setErrors(newErrors);
    };

    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const validateForm = () => {
        // let newErrors = {};
        // let isValid = true;

        // 필수 필드 목록을 확인
        if (!formData.user_id.trim()) {
            // newErrors.user_id = '아이디를 입력해주세요.';
            alert('아이디를 입력해주세요.');
            // setErrors(newErrors);
            return false; // 오류 발생시 즉시 함수 종료
            // isValid = false;
        }

        if (!formData.username.trim()) {
            // newErrors.username = '닉네임을 입력해주세요.';
            alert('닉네임을 입력해주세요.');
            // setErrors(newErrors);
            return false;
            // isValid = false;
        }

        if (!formData.password.trim()) {
            //     newErrors.password = '비밀번호를 입력해주세요.';
            alert('패스워드를 입력해주세요.');
            //     setErrors(newErrors);
            return false;
            //     // isValid = false;
        }

        if (!formData.email.trim()) {
            //     newErrors.email = '이메일을 입력해주세요.';
            alert('이메일을 입력해주세요.');
            //     setErrors(newErrors);
            return false;
            //     // isValid = false;
        }

        if (!formData.first_name.trim()) {
            //     newErrors.first_name = '이름을 입력해주세요.';
            alert('이름을 입력해주세요.');
            //     setErrors(newErrors);
            return false;
            //     // isValid = false;
        }

        if (!formData.last_name.trim()) {
            //     newErrors.last_name = '성을 입력해주세요.';
            alert('성을 입력해주세요.');
            //     setErrors(newErrors);
            return false;
            //     // isValid = false;
        }

        if (!formData.phone_number.trim()) {
            //     newErrors.phone_number = '전화번호를 입력해주세요.';
            alert('번호를 입력해주세요.');
            //     setErrors(newErrors);
            return false;
            //     // isValid = false;
        }

        if (!formData.date_of_birth.trim()) {
            //     newErrors.date_of_birth = '생일을 입력해주세요.';
            alert('생일을 입력해주세요.');
            //     setErrors(newErrors);
            return false;
            //     // isValid = false;
        }

        // const koreanRegex = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
        // const emailRegex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.(com|net)$/;
        // let numberRegex = /^(\d{4}[-\/]\d{2}[-\/]\d{2})$/

        // if (koreanRegex.test(formData.user_id)) {
        //     newErrors.user_id = '아이디에 한글은 사용할 수 없습니다. 다시 입력해주세요.';
        // }

        // if (koreanRegex.test(formData.email)) {
        //     newErrors.email = '이메일에 한글은 사용할 수 없습니다. 다시 입력해주세요.';
        // }

        // if (!numberRegex.test(formData.date_of_birth)) {
        //     console.log("Invalid date format:", formData.date_of_birth);
        //     newErrors.date_of_birth = '생년월일에는 숫자와 ' - ' 또는 ' / ' 만 가능합니다.';
        // } else {
        //     newErrors.date_of_birth = '';
        // }

        // setErrors(newErrors);

        // if (Object.keys(newErrors).length > 0) {
        //     let errorMessage = Object.values(newErrors).join("\n");
        //     console.log("Error Message:", errorMessage);
        //     alert(errorMessage);
        //     return false;
        // }

        return true;
    };

    const handleSubmitLogin = (event) => {
        event.preventDefault();
        if (validateForm()) {

            // // const completeEmail = `${formData.emailID}@${formData.emailDomain}`;
            // const finalData = { ...formData, email: completeEmail };

            const apiUrl = '/api/users/signup';

            axios.post(apiUrl, formData)
                .then((response) => {
                    console.log('데이터 저장 성공', response.data);
                    setSnackbarMessage('회원가입에 성공했습니다. 잠시 후 홈으로 돌아갑니다.');
                    setOpenSnackbar(true);
                })
                .catch((error) => {
                    console.error('데이터 저장 실패', error);
                });
        }
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
                    error={!!errors.user_id}
                    helperText={errors.user_id || ''}
                    id="user_id"
                    label="아이디"
                    value={formData.user_id}
                    onChange={handleInputChange}
                />
                <TextField
                    required
                    error={!!errors.username}
                    id="username"
                    label="닉네임"
                    value={formData.username}
                    onChange={handleInputChange}
                />
                <TextField
                    required
                    error={!!errors.password}
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
                    error={!!errors.email}
                    helperText={errors.email || ''}
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
                    error={!!errors.first_name}
                    id="first_name"
                    label="이름"
                    value={formData.first_name}
                    onChange={handleInputChange}
                />
                <TextField
                    required
                    error={!!errors.last_name}
                    id="last_name"
                    label="성"
                    value={formData.last_name}
                    onChange={handleInputChange}
                />
                <TextField
                    required
                    error={!!errors.phone_number}
                    helperText={errors.phone_number || ''}
                    id="phone_number"
                    label="전화번호"
                    value={formData.phone_number}
                    onChange={handleInputChange}
                />
                <TextField
                    required
                    error={!!errors.date_of_birth}
                    helperText={errors.date_of_birth || ''}
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
                <Snackbar
                    open={openSnackbar}
                    autoHideDuration={3000}
                    onClose={handleSnackbarClose}
                    message={snackbarMessage}
                    anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                />
            </Box >
        </Box >
    );
};

export default SignUpForm