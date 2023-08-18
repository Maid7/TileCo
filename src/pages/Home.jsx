import React from 'react'
import { Text,Box,Flex,Button} from '@chakra-ui/react'
import heroImage from "../images/assets/hero-imagee.jpg"
import ModalComponent from '../components/ModalComponent'
import MainContent from '../components/MainContent'

const Home = () => {
  return (
    <>
      <Box
     bgImage={heroImage}
     bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
      height="100vh"
      position="relative"
    >
      <Flex
        direction="column"
        h="100%"
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        bg="rgba(0, 0, 0, 0.6)"
        pl="50px" 
      >
        <Text fontWeight="bold" fontSize={{sm: "35px", lg: "55px"}} color="orange.600" mt="7rem">
         Trebate Keramicara?
        </Text>
        <Text fontSize={{sm: "28px", lg: "25px"}} color="gray.400">
       Na Pravom Ste Mjestu
        </Text>
        <Text fontSize={{sm: "28px", lg: "25px"}} color="gray.400">
        Tim specijaliziran za sve keramicarske <br /> radove,adaptacije kuca i stanova


        </Text>
        <ModalComponent/>
       </Flex>
    </Box>
    <MainContent/>
    </>
  
  )
}

export default Home
