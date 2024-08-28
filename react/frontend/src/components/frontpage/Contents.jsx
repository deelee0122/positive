import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import CustomerRating from '../CustomerRating';


const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
  borderRadius: '8px'
});

const Contents = () => {
  return (
    <div>
      <Paper
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
            <Img alt="sample_image" src="./static/images/image1.jpg" />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
            <Typography variant="body2" fontSize={'10px'} color="text.secondary">
                경기 전체
              </Typography>
              <Typography gutterBottom variant="subtitle1" component="div" sx={{fontFamily: 'Gaegu, sans-serif'}} >
                [풀장OPEN][혼자여행]국내최초 오리지널 혼펜_따로 또 같이
              </Typography>
              <CustomerRating />
              
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" component="div">
              179,000원
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
    </div>
  )
}

export default Contents