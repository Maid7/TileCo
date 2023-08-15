import React from 'react'
import { useState } from 'react';
import { SimpleGrid,Box,Heading} from '@chakra-ui/react'

const Images = () => {
  const [fullscreenImage, setFullscreenImage] = useState(null);
const images = [
  "../../public/images/20210709_143538.jpg",
  "../../public/images/20210709_143557.jpg",
  "../../public/images/20210709_143605.jpg",
  "../../public/images/20210711_131052.jpg",
  "../../public/images/20210716_115620.jpg",
  "../../public/images/20220528_080358.jpg",
  "../../public/images/20220528_080401.jpg",
  "../../public/images/20220528_080443.jpg",
  "../../public/images/20220528_080516.jpg",
  "../../public/images/20220531_094834.jpg",
  "../../public/images/20220602_174722.jpg",
  "../../public/images/20220610_151748.jpg"
]
const toggleFullscreen = (image) => {
  if (fullscreenImage === image) {
    setFullscreenImage(null);
  } else {
    setFullscreenImage(image);
  }
};

  return (
    <>
    <Heading textAlign="center" color="blue.800" m="5px">Pogledajte samo neke od slika nasih radova</Heading>
    <SimpleGrid p="10px" spacing={10} minChildWidth="30em" mx="auto" h="auto">
    {images.map((image,index)=> (
        
          <Box
          key={index}
          h="550px"
          w="600px"
          onClick={() => toggleFullscreen(image)}
          style={{ cursor: 'pointer' }}
          >
            <img src={image} style={{width: "100%",height: "100%"}}></img>
          </Box>
          
       
    ))}
    {fullscreenImage && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 9999,
          }}
          onClick={() => toggleFullscreen(null)}
        >
          <img src={fullscreenImage} style={{ maxHeight: '90%', maxWidth: '90%' }} alt="Fullscreen" />
        </div>
      )}
   
    
</SimpleGrid>
    </>
  )
}

export default Images
