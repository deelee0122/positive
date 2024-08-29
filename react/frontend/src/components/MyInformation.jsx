import { Box, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, TextField } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const MyInformation = () => {
    const [info, setInfo] = useState({});
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({});

    useEffect(() => {
        const endPoint = '/api/users/myInfo';
        axios.get(endPoint)
            .then(response => {
                console.log(response);
                setInfo(response.data);
                setFormData(response.data);
            })
            .catch(error => {
                console.error("error", error);
            });
    }, []);

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleChange = (event) => {
        const { id, value } = event.target;
        setFormData(prevData => ({
            ...prevData,
            [id]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const endPoint = '/api/users/updateInfo'; // API 엔드포인트를 수정합니다.
        axios.post(endPoint, formData)
            .then(response => {
                console.log(response);
                setInfo(response.data);
                setIsEditing(false);
            })
            .catch(error => {
                console.error("error", error);
            });
    };

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '20px',
                backgroundColor: '#fff',
                borderRadius: '8px',
                boxShadow: 3,
                opacity: 0.9,
                width: '90%',
                maxWidth: '550px',
                margin: '24px auto 0'
            }}
        >
            <TableContainer sx={{ width: '100%' }}>
                <Table aria-label="user information table">
                    <TableHead>
                        <TableRow>
                            <TableCell><Typography variant="h6">항목</Typography></TableCell>
                            <TableCell><Typography variant="h6">정보</Typography></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>이름</TableCell>
                            <TableCell>
                                {isEditing ? (
                                    <TextField
                                        id="username"
                                        value={formData.username}
                                        onChange={handleChange}
                                        variant="outlined"
                                        size="small"
                                        fullWidth
                                    />
                                ) : (
                                    info.username
                                )}
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>이메일</TableCell>
                            <TableCell>
                                {isEditing ? (
                                    <TextField
                                        id="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        variant="outlined"
                                        size="small"
                                        fullWidth
                                    />
                                ) : (
                                    info.email
                                )}
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>전화번호</TableCell>
                            <TableCell>
                                {isEditing ? (
                                    <TextField
                                        id="phone_number"
                                        value={formData.phone_number}
                                        onChange={handleChange}
                                        variant="outlined"
                                        size="small"
                                        fullWidth
                                    />
                                ) : (
                                    info.phone_number
                                )}
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>생년월일</TableCell>
                            <TableCell>
                                {isEditing ? (
                                    <TextField
                                        id="date_of_birth"
                                        value={formData.date_of_birth}
                                        onChange={handleChange}
                                        variant="outlined"
                                        size="small"
                                        fullWidth
                                    />
                                ) : (
                                    info.date_of_birth
                                )}
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>

            <Button
                onClick={isEditing ? handleSubmit : handleEditClick}
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
                {isEditing ? '저장' : '정보 수정'}
            </Button>
        </Box>
    );
};

export default MyInformation;
