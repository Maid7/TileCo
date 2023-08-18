import React from 'react'
import { useState } from 'react';
import { SimpleGrid,Box,Heading} from '@chakra-ui/react'

const Images = () => {
  const [fullscreenImage, setFullscreenImage] = useState(null);
const images = [
  "https://cdn.mos.cms.futurecdn.net/BPdZxKcA8Dc8xW4uxjWLGY.jpg",
  "https://images.pexels.com/photos/1457847/pexels-photo-1457847.jpeg?cs=srgb&dl=pexels-jean-van-der-meulen-1457847.jpg&fm=jpg",
   "https://www.designlike.com/wp-content/uploads/2021/02/pexels-photo-6207818.jpeg",
   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbnVGdeCDfJUk4P-m6Z8bKQkgCIGVn0NApLqwbVuPC3VNuFrve6YIll_RtY1zXPSapQq0&usqp=CAU",
   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqm7oqm6mWhyvq9Ts5AbgxnbT-F9n5ukLdAQ&usqp=CAU",
    "https://cottagelife.com/wp-content/uploads/2021/01/shutterstock_50943826.jpg",
     "https://media.angi.com/s3fs-public/installing-ceramic-tile-floor.jpg",
     "https://www.britishceramictile.com/image?w=970&h=545&fit=crop-50-50&src=production%2Fcms%2Fprocessed%2F3b3b4e43ff07974f9ced5d3e5043ee54.jpg&s=9a692a2e157f74b06360c149b23159e3",
     "https://www.betterbathrooms.com/Images/BeBa_15641_1_supersize.jpg?v=2",
     "https://5.imimg.com/data5/SELLER/Default/2021/8/BL/NL/VR/135337296/bathroom-wall-tiles.jpg",
    
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
    <SimpleGrid spacing={10} minChildWidth={300} >
    {images.map((image,index)=> (
        
          <Box
          key={index}
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