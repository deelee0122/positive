import { ThemeProvider } from "@emotion/react";
import { Box, Grid, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, createTheme } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../frontpage/Navbar";
import MainBar from "../frontpage/MainBar";
import AvatarSection from "../mypage/AvatarSection";
import AddIcon from '@mui/icons-material/Add';

function AdminPage() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await axios.get('/api/user');
                if (response.data.role === 'admin') {
                    setUser(response.data);
                } else {
                    setUser(null);
                }
            } catch (error) {
                console.log('접근 불가', error);
                setUser(null);
            }
        };

        fetchUser();
    }, []);

    if (!user) {
        // return <ThemeProvider theme={theme}>
        //     <Navbar />
        //     <MainBar />
        //     <Typography variant="h6" style={{ margin: '20px' }}>접근 권한이 없습니다.</Typography>
        // </ThemeProvider>
    }

    const createData = (name, email, status, date) => {
        return { name, email, status, date };
    };

    const rows = [
        createData('111', '111@example.com', '111', '2023-06-11'),
        createData('222', '222@example.com', '222', '2023-06-13'),
    ];

    return (
        <>
            <Navbar />
            <MainBar />
            <AvatarSection userName="userName" />
            <hr />

            {/* 회원 관리 */}

            <Grid container spacing={2} sx={{ padding: 3 }}>
                <Grid item xs={12} md={6}>
                    <Paper sx={{ mb: 2, p: 2 }}>
                        <Box display="flex" justifyContent={"space-between"} alignItems={"center"} marginBottom={"10px"}>
                            <Typography variant="h6" gutterBottom>
                                회원 관리
                            </Typography>
                            <IconButton component={Link} to="/memberlist">
                                <AddIcon />
                            </IconButton>
                        </Box>
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>이름</TableCell>
                                        <TableCell>이메일</TableCell>
                                        <TableCell>상태</TableCell>
                                        <TableCell>가입일자</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows.map((row) => (
                                        <TableRow
                                            key={row.name}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell component="th" scope="row">
                                                {row.name}
                                            </TableCell>
                                            <TableCell>{row.email}</TableCell>
                                            <TableCell>{row.status}</TableCell>
                                            <TableCell>{row.date}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Paper>
                </Grid>

                {/* 리뷰 */}

                <Grid item xs={12} md={6}>
                    <Paper sx={{ mb: 2, p: 2 }}>
                        <Box display="flex" justifyContent={"space-between"} alignItems={"center"} marginBottom={"10px"}>
                            <Typography variant="h6" gutterBottom>
                                리뷰 관리
                            </Typography>
                            <IconButton component={Link} to="/">
                                <AddIcon />
                            </IconButton>
                        </Box>
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>이름</TableCell>
                                        <TableCell>이메일</TableCell>
                                        <TableCell>내용</TableCell>
                                        <TableCell>작성일자</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows.map((row, index) => (
                                        <TableRow
                                            key={index}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell component="th" scope="row">
                                                {row.name}
                                            </TableCell>
                                            <TableCell>{row.email}</TableCell>
                                            <TableCell>{ }</TableCell>
                                            <TableCell>{row.date}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Paper>
                </Grid>
            </Grid >

            {/* HOBBY */}

            <Grid Grid container spacing={2} sx={{ padding: 3 }}>
                <Grid item xs={12} md={6}>
                    <Paper sx={{ mb: 2, p: 2 }}>
                        <Box display="flex" justifyContent={"space-between"} alignItems={"center"} marginBottom={"10px"}>
                            <Typography variant="h6" gutterBottom>
                                컨텐츠 관리
                            </Typography>
                            <IconButton component={Link} to="/">
                                <AddIcon />
                            </IconButton>
                        </Box>
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>번호</TableCell>
                                        <TableCell>이름</TableCell>
                                        <TableCell>생성일자</TableCell>
                                        <TableCell>관심 수</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows.map((row) => (
                                        <TableRow
                                            key={row.name}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell component="th" scope="row">
                                                {row.name}
                                            </TableCell>
                                            <TableCell>{row.email}</TableCell>
                                            <TableCell>{row.status}</TableCell>
                                            <TableCell>{row.date}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Paper>
                </Grid>

                {/* FAQ */}

                <Grid item xs={12} md={6}>
                    <Paper sx={{ mb: 2, p: 2 }}>
                        <Box display="flex" justifyContent={"space-between"} alignItems={"center"} marginBottom={"10px"}>
                            <Typography variant="h6" gutterBottom>
                                FAQ
                            </Typography>
                            <IconButton component={Link} to="/">
                                <AddIcon />
                            </IconButton>
                        </Box>
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>번호</TableCell>
                                        <TableCell>제목</TableCell>
                                        <TableCell>생성일자</TableCell>
                                        <TableCell>조회수</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows.map((row, index) => (
                                        <TableRow
                                            key={index}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell component="th" scope="row">
                                                {row.name}
                                            </TableCell>
                                            <TableCell>{row.email}</TableCell>
                                            <TableCell>{row.status}</TableCell>
                                            <TableCell>{row.date}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Paper>
                </Grid>
            </Grid>
        </ >
    );
}


export default AdminPage;