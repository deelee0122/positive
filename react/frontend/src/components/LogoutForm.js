import { Button } from '@mui/material';
import axios from 'axios';
import React from 'react'

const LogoutForm = () => {
    const f= () => {
        const apiUrl = '/api/users/logout';

        axios.get(apiUrl)
            .then((response) => {
                console.log('Form submitted successfully:', response.data);
                
            })
            .catch((error) => {
                console.error('There was an error submitting the form:', error);
                // Handle error (e.g., show an error message)
            });
    }
     
  return (
    <div><Button onClick={f}> 로그아웃 </Button></div>
  )
}

export default LogoutForm