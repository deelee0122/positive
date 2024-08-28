import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import CustomerRating from '../CustomerRating';
import axios from 'axios';

// Styling for the image component
const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
  borderRadius: '8px'
});

const Contents = () => {
  // State to hold hobbies data
  const [hobbies, setHobbies] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  // Fetch hobbies data from backend API
  useEffect(() => {
    axios.get('/api/hobbies') // Ensure this endpoint matches your backend
      .then(response => {
        setHobbies(response.data); // Set the fetched data to the state
        setLoading(false); // Update loading state
      })
      .catch(error => {
        console.error('There was an error fetching the hobbies data!', error);
        setError(error); // Set error state
        setLoading(false); // Update loading state
      });
  }, []);

  if (loading) {
    return <Typography>Loading...</Typography>;
  }

  if (error) {
    return <Typography color="error">Error fetching hobbies data.</Typography>;
  }

  return (
    <div>
      {hobbies.map((hobby) => ( // 'hobby' is defined here as the current item in the 'hobbies' array
        <Paper
          key={hobby.hobby_id} // Unique key for each element
          sx={{
            p: 2,
            margin: 'auto',
            maxWidth: 500,
            flexGrow: 1,
            backgroundColor: (theme) =>
              theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
          }}
        >
          <Grid container spacing={2}>
            <Grid item>
              <ButtonBase sx={{ width: 128, height: 128 }}>
                <Img alt="sample_image" src={hobby.hphoto} />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography variant="body2" fontSize={'10px'} color="text.secondary">
                    {hobby.hcategory} 전체
                  </Typography>
                  <Typography gutterBottom variant="subtitle1" component="div" sx={{ fontFamily: 'Gaegu, sans-serif' }}>
                    {hobby.hname}
                  </Typography>
                  <CustomerRating /> {/* Assuming CustomerRating is a component that handles its own data */}
                </Grid>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1" component="div">
                  {hobby.hprice.toLocaleString('ko-KR')}원
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      ))}
    </div>
  );
};

export default Contents;
