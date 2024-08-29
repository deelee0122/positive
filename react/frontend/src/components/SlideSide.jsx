import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import imageData from "./img";
import { Box, styled } from "@mui/material";

// Styled component for the slider container to manage responsiveness and centering
const StyledSliderContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginLeft: 'auto',
  marginRight: 'auto',
  width: '100%',
  height: '60vh', // Full viewport height to center vertically
  [theme.breakpoints.up('sm')]: {
    width: '100%',
  },
  [theme.breakpoints.up('md')]: {
    width: '80%',
  },
  [theme.breakpoints.up('lg')]: {
    width: '80%',
  },
}));

// Styled component for each slide item to center the content and make the image responsive
const StyledSlideItem = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '100%', // Ensure slide item takes the full height of the container
  overflow: 'hidden', // Ensure no overflow is visible
  '& img': {
    width: '100%', // Makes the image responsive
    height: '100%', // Makes the image responsive
    objectFit: 'cover', // Ensures the image covers the container, cropping if necessary
  },
});

const SlideSide = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false, 
  };

  return (
    <StyledSliderContainer>
      <Box width="100%" maxWidth="400px">
        <Slider {...settings}>
          {imageData.map((image) => (
            <StyledSlideItem key={image.alt}>
              <img src={image.url} alt={image.alt} />
            </StyledSlideItem>
          ))}
        </Slider>
      </Box>
    </StyledSliderContainer>
  );
};

export default SlideSide;
