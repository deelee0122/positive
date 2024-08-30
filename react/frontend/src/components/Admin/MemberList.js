import React from 'react';
import { Box, Typography } from '@mui/material';
import AdminSub from './sub/AdminSub';
import MainBar from '../frontpage/MainBar';
import Navbar from '../frontpage/Navbar';

function MemberList() {
    return (
        <>
            <Navbar />
            <MainBar />
            <Box display="flex" justifyContent={"space-between"} alignItems={"center"} marginBottom={"10px"}>
                <Typography display={"flex"} variant="h5">
                    회원 관리
                </Typography>
            </Box>
            <Box>
                <AdminSub />;
            </Box>
        </>
    );
}

export default MemberList;