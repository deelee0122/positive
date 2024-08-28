import React from 'react';
import { PageContainer } from '@toolpad/core/PageContainer';
import { AppProvider } from '@toolpad/core/AppProvider';
import { useDemoRouter } from '@toolpad/core/internals';
import { useTheme } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

// Styling for the image component
const Img = styled('img')({
  width: '100%',
  height: 'auto',
  borderRadius: '8px',
});

const Product = () => {
  const NAVIGATION = [
    { segment: '', title: 'Home' },
    { segment: 'orders', title: 'Orders' },
  ];

  const router = useDemoRouter('/orders');
  const theme = useTheme();

  return (
    <AppProvider navigation={NAVIGATION} router={router} theme={theme}>
      <Paper sx={{ width: '100%', p: 2 }}>
        <PageContainer>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4}>
              <Img src="path/to/your/photo.jpg" alt="Product Image" />
            </Grid>
            <Grid item xs={12} sm={8}>
              <Typography variant="h5" gutterBottom>
                Product Title
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Description of the product or any additional information.
              </Typography>
              <Typography variant="h6" color="primary">
                $Price
              </Typography>
            </Grid>
          </Grid>
        </PageContainer>
      </Paper>
    </AppProvider>
  );
};

export default Product;
