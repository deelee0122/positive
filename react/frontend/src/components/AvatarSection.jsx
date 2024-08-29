import React, { useEffect, useState } from 'react';
import { Avatar, Box, Typography } from '@mui/material';
import './Mypage.css';
import axios from 'axios';

const AvatarSection = () => {
    const [info, setInfo] = useState({});

    useEffect(() => {
        const endPoint = '/api/users/myInfo';
        axios.get(endPoint)
            .then(response => {
                console.log(response);
                setInfo(response.data);
            })
            .catch(error => {
                console.error("error", error);
            });
    }, []);

    return (
        <Box className="flex-row" sx={{ gap: 2 }}>
            <Avatar
                alt={info.username}
                src="https://plus.unsplash.com/premium_vector-1719858610474-deaa7f76017c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"
                sx={{ width: 60, height: 60 }}
            />
            <Typography variant="h5">{info.username}님, 안녕하세요 !  </Typography>
        </Box>
    );
};

export default AvatarSection;