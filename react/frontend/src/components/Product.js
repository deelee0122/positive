import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Grid, Typography, Paper, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import FavoriteSharpIcon from '@mui/icons-material/FavoriteSharp';
import Reservation from './Reservation';


const Img = styled('img')({
  width: '100%',
  height: 'auto',
  borderRadius: '8px',
});

const IconTextWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  color: 'gray',
  '&:hover': {
    color: '#E59261',
    cursor: 'pointer',
    '& .MuiSvgIcon-root': {
      color: '#E59261',
    },
    '& .MuiTypography-root': {
      color: '#E59261',
    },
  },
}));

const Product = ({ hobby_id }) => {
  const [hobby, setHobby] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (hobby_id) {
      axios.get(`/api/hobbies/${hobby_id}`)
        .then(response => {
          setHobby(response.data);
          setLoading(false);
        })
        .catch(error => {
          console.error('There was an error fetching the hobby data!', error);
          setError(error);
          setLoading(false);
        });
    }
  }, [hobby_id]);

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
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: '100vh',
        width: '100%',
        p: 2,
      }}
    >
      <Paper sx={{ width: { xs: '100%', sm: 'auto' }, maxWidth: '600px', p: 2 }}>
        <Grid container spacing={2} alignItems="center" justifyContent="center">
          <Grid item xs={12} sm={4} display="flex" justifyContent="center">
            <Img src={hobby.hphoto} alt="Product Image" />
          </Grid>

          <Grid sx={{ mt: 4 }} item xs={12} sm={8}>
            <Box display="flex" flexDirection="column" alignItems="center" textAlign="center">
              <Typography variant="h5" gutterBottom>
                {hobby.hname}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                {hobby.hcategory}
              </Typography>
              <Typography variant="h6" color="primary">
                {hobby.hprice.toLocaleString('ko-KR')}원
              </Typography>
              <IconTextWrapper><FavoriteSharpIcon /></IconTextWrapper>
            </Box>
          </Grid>
        </Grid>

        {/* Reservation Component with the hobby_id */}
        <Reservation hobbyId={hobby_id} />
      </Paper>
    </Box>
  );
};

export default Product;
