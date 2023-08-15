import React, { useState } from 'react';
import { Heading,Box,Flex } from '@chakra-ui/react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <Flex flexDirection="column" style={{marginTop: "3rem"}} >
        <Heading textAlign="center" color="blue.800" mb="2rem">Samo Neke Slike Radova</Heading>
      <Carousel showThumbs={false} selectedItem={currentIndex}  >
        {images.map((imageUrl, index) => (
          <Box key={index} height={{base: "400px", md: "650px", lg: "1050px"}}>
            <img src={imageUrl} alt={`Slide ${index}`} style={{height: "100%"}}/>
          </Box>
        ))}
      </Carousel>
      
    </Flex>
  );
};

export default ImageSlider;
