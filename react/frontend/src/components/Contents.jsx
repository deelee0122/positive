import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import CustomerRating from './CustomerRating';

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
  borderRadius: '8px'
});

const Contents = ({ category }) => {
  const [hobbies, setHobbies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    axios.get('/api/hobbies')
      .then(response => {
        const filteredHobbies = category ? response.data.filter(hobby => hobby.hcategory === category) : response.data;
        setHobbies(filteredHobbies);
        setLoading(false);
      })
      .catch(error => {
        console.error('There was an error fetching the hobbies data!', error);
        setError(error);
        setLoading(false);
      });
  }, [category]);

  const handleImageClick = (hobby_id) => {
    navigate(`/product/${hobby_id}`);
  };

  if (loading) {
    return <Typography>Loading...</Typography>;
  }

  if (error) {
    return <Typography color="error">Error fetching hobbies data.</Typography>;
  }

  return (
    <div>
      {hobbies.map((hobby) => (
        <Paper
          key={hobby.hobby_id}
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
              <ButtonBase
                sx={{ width: 128, height: 128 }}
                onClick={() => handleImageClick(hobby.hobby_id)}
              >
                <Img alt="sample_image" src={hobby.hphoto} />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography variant="body2" fontSize={'10px'} color="text.secondary">
                    {hobby.hcategory} 
                  </Typography>
                  <Typography gutterBottom variant="subtitle1" component="div" sx={{ fontFamily: 'Gaegu, sans-serif' }}>
                    {hobby.hname}
                  </Typography>
                  <CustomerRating />
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
