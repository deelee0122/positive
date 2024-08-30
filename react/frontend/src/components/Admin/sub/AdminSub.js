import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';

function AdminSub() {
    // const { users } = useUsers();
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await axios.get('/api/users');
                if (response.data.role === 'admin') {
                    setUsers(response.data);
                } else {
                    setUsers(null);
                }
            } catch (error) {
                console.log('접근 불가', error);
                setUsers(null);
            }
        };

        fetchUser();
    }, []);

    const columns = [
        { field: 'uno', headerName: '생성번호', width: 80 },
        { field: 'user_id', headerName: '아이디', width: 130 },
        { field: 'last_name', headerName: '성', width: 100 },
        { field: 'first_name', headerName: '이름', width: 100 },
        { field: 'email', headerName: '이메일', type: 'number', width: 300 },
        { field: 'phone_number', headerName: '전화번호', type: 'number', width: 300 },
        { field: 'role', headerName: '역할', type: '', width: 80 },
    ];

    // const [user, setUser] = useState(null);
    // const [formData, setFormData] = useState({
    //     uno: 0,
    //     user_id: '',
    //     username: '',
    //     password: '',
    //     email: '',
    //     first_name: '',
    //     last_name: '',
    //     phone_number: '',
    //     date_of_birth: '',
    //     role: 'user',
    // });

    // const [passwordVisible, setPasswordVisible] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/api/users');
                if (response.data && Array.isArray(response.data)) {
                    const formattedUsers = response.data.map((user, index) => ({
                        uno: index + 1,
                        user_id: user.user_id,
                        last_name: user.last_name,
                        first_name: user.first_name,
                        email: user.email,
                        phone_number: user.phone_number,
                        role: user.role,
                    }));
                    setUsers(formattedUsers);
                }
            } catch (error) {
                console.error('Failed to fetch user data:', error);
            }
        };
        // if (user && user.role === 'admin') {
        fetchData();
        // }
    }, []);

    // if (!user) {
    // return <ThemeProvider theme={theme}>
    //     <Navbar />
    //     <MainBar />
    //     <Typography variant="h6" style={{ margin: '20px' }}>접근 권한이 없습니다.</Typography>
    // </ThemeProvider>
    // }

    // const handleInputChange = (event) => {
    //     const { id, value } = event.target;
    //     setFormData({ ...formData, [id]: value });
    // };

    // const togglePasswordVisibility = () => {
    //     setPasswordVisible(!passwordVisible);
    // };


    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={users}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 5 },
                    },
                }}
                pageSizeOptions={[5, 10]}
                checkboxSelection
                sx={{ overflow: 'clip' }}
            />
        </div>
    );
};

export default AdminSub;