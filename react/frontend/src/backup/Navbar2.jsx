import { AppBar, Avatar, Badge, Box, Menu, MenuItem, Toolbar, Typography, styled } from '@mui/material'
import React, { useState } from 'react'
const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "flex-end",
    alignItems: 'center',
    paddingRight: '10px',
    backgroundColor: '#F4F4F4',
    color: '#9FA5A3',
    fontSize: '10px',
    minHeight: '80px'
})

const Navbar = () => {
    const [open, setOpen] = useState(false)
    return (
        <AppBar position='sticky'>
            <StyledToolbar sx={{ height: '20px'}} >
                <Typography  sx={{ marginRight: '16px', fontSize: '12px' }}>호스트지원</Typography>
                <Typography sx={{ marginRight: '16px', fontSize: '12px'}}>희원가입</Typography>
                
                <Typography sx={{ marginRight: '16px', fontSize: '12px'}}>로그인</Typography>

                    
                    
            </StyledToolbar>
            <Menu
                id="demo-positioned-menu"
                aria-labelledby='demo-positioned-button'
                open={open}
                onClose={e => setOpen(false)}
                anchorOrigin={{
                    vertical: "top", horizontal: "right"
                }}
                transformOrigin={{
                    vertical: "top", horizontal: "right"
                }}>
                <MenuItem >Profile</MenuItem>
                <MenuItem >My account</MenuItem>
                <MenuItem >Logout</MenuItem>
            </Menu>
        </AppBar>
    )
}

export default Navbar