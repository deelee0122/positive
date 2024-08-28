import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Grid, Typography, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

// Styling for the image component
const Img = styled('img')({
  width: '100%',
  height: 'auto',
  borderRadius: '8px',
});

const Product = ({ hobby_id }) => {
  const [hobby, setHobby] = useState(null); // State to hold fetched hobby data
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  useEffect(() => {
    if (hobby_id) {
      axios.get(`/api/hobbies/${hobby_id}`) // Fetch specific hobby data using hobby_id
        .then(response => {
          setHobby(response.data); // Set the fetched hobby data to the state
          setLoading(false); // Update loading state
        })
        .catch(error => {
          console.error('There was an error fetching the hobby data!', error);
          setError(error); // Set error state
          setLoading(false); // Update loading state
        });
    }
  }, [hobby_id]); // Re-run the effect if hobby_id changes

  if (loading) {
    return <Typography>Loading...</Typography>;
  }

  if (error) {
    return <Typography color="error">Error fetching hobby data.</Typography>;
  }

  if (!hobby) {
    return <Typography>No hobby found.</Typography>;
  }

  return (
    <Paper sx={{ width: '100%', p: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Img src={hobby.hphoto} alt="Product Image" />
        </Grid>
        <Grid item xs={12} sm={8}>
          <Typography variant="h5" gutterBottom>
            {hobby.hname}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {hobby.hcategory}
          </Typography>
          <Typography variant="h6" color="primary">
            {hobby.hprice.toLocaleString('ko-KR')}원
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Product;
