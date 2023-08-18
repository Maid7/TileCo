import React from 'react'
import { useState } from 'react';
import { SimpleGrid,Box,Heading} from '@chakra-ui/react'

const Images = () => {
  const [fullscreenImage, setFullscreenImage] = useState(null);
const images = [
  "https://cdn.mos.cms.futurecdn.net/BPdZxKcA8Dc8xW4uxjWLGY.jpg",
  "https://cdn.mos.cms.futurecdn.net/BPdZxKcA8Dc8xW4uxjWLGY.jpg",
   "https://cdn.mos.cms.futurecdn.net/BPdZxKcA8Dc8xW4uxjWLGY.jpg",
   "https://cdn.mos.cms.futurecdn.net/BPdZxKcA8Dc8xW4uxjWLGY.jpg",
   "https://cdn.mos.cms.futurecdn.net/BPdZxKcA8Dc8xW4uxjWLGY.jpg",
    "https://cdn.mos.cms.futurecdn.net/BPdZxKcA8Dc8xW4uxjWLGY.jpg",
     "https://cdn.mos.cms.futurecdn.net/BPdZxKcA8Dc8xW4uxjWLGY.jpg",
     "https://cdn.mos.cms.futurecdn.net/BPdZxKcA8Dc8xW4uxjWLGY.jpg",
     "https://cdn.mos.cms.futurecdn.net/BPdZxKcA8Dc8xW4uxjWLGY.jpg",
     "https://cdn.mos.cms.futurecdn.net/BPdZxKcA8Dc8xW4uxjWLGY.jpg",
     "https://cdn.mos.cms.futurecdn.net/BPdZxKcA8Dc8xW4uxjWLGY.jpg",
      "https://cdn.mos.cms.futurecdn.net/BPdZxKcA8Dc8xW4uxjWLGY.jpg",
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
    <SimpleGrid p="10px" spacing={10} minChildWidth="30rem" mx="auto" h="auto">
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
