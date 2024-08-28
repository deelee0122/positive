import React from 'react';
import { Avatar, Badge, Stack } from '@mui/material';

const AvatarBadge = ({ altText, src, badgeContent, badgeColor, text }) => {
    return (
        <Stack direction="column" spacing={2} alignItems="center">
            <Badge
                badgeContent={badgeContent}
                sx={{
                    "& .MuiBadge-badge": {
                        color: "white",
                        backgroundColor: badgeColor,
                    },
                }}
            >
                <Avatar alt={altText} src={src} sx={{ width: 40, height: 40 }} />
            </Badge>
            {text}
        </Stack>
    );
};

export default AvatarBadge;
