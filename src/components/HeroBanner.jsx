import React from 'react';
import { Box , Button, Stack , Typography } from '@mui/material';
import HerroBannerImage from "../assets/images/banner.png"
const HeroBanner = () => {
  return (
    <Box sx={{
      mt: { lg: "212px" , xs: "70px"} ,
      ml: { sm: "50px"}
    }} position="relative" p="20px">
      <Typography color="#FF2625" fontWeight="600px" fontSize="26px">
        Fitness Club
      </Typography>
      <Typography fontWeight={700} mb="23px" mt="30px"
       sx={{
         fontSize : {lg: "44px" , xs: "40px"}
       }}
      >
        Sewat , Smile <br /> And Repeat
      </Typography>
      <Typography fontSize="22px" lineHeight="35px" mb={4}>
        Check out the most effective exercises
      </Typography>
      <Button href="#exercises" variant="contained"
       sx={
        {
          backgroundColor : "#FF2625",
          padding :"10px"
          
        }
       }
       >
        Explore Exercises
      </Button>
      <Typography
      fontWeight={600}
      color="#FF2625"
      sx={{
        opacity : 0.1 ,
        display : {lg : "block" , xs : "none"}
      }}
      fontSize="200px"
      >
        Exercise
      </Typography>
      <img src={HerroBannerImage} alt="Header Image" className="hero-banner-img" />
    </Box>
  )
}

export default HeroBanner