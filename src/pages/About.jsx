import React from 'react'
import { Box, Flex,Heading,Text,ListItem,UnorderedList,Button, ModalContent } from "@chakra-ui/react"
import { Link } from 'react-router-dom'
import ModalComponent from '../components/ModalComponent'

const About = () => {
    return (
      <>
       <Box
      bgImage={`https://www.designlike.com/wp-content/uploads/2021/02/pexels-photo-6207818.jpeg`}
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
        Tim specijaliziran za sve keramicarske radove, <br /> adaptacije kuca i stanova
        </Text>
        
        <ModalComponent/>
       
       </Flex>
    </Box>

       <Flex
       flexDirection="column"
       gap={10}>
        <Flex flexDirection={{base: "column", lg: "row"}}>
        <Box w={{base:"100%",lg: "50%"}} textAlign="center">
          <Heading bg="gray.200" color="blue.800" pt="10px">Nesto o nama</Heading>
       <UnorderedList w="45%" mx="auto" mt="1rem">
        <ListItem>Kvalitetno i stručno postavljanje svih dimenzija keramike.</ListItem>
        <ListItem>Postava keramike velikog formata do 332cm.</ListItem>
         <ListItem>Mlada ekipa sa iskustnim majstorom garantira kvalitetu postavljanja keramike.</ListItem>
         
       </UnorderedList>
        <Heading bg="gray.200" color="blue.800" pt="10px">Nase Usluge</Heading>
        <UnorderedList w="45%" mx="auto" mt="1rem">
        <ListItem>Postavljanje plocica</ListItem>
        <ListItem>Skidanje plocica</ListItem>
         <ListItem>Fugiranje</ListItem>
          <ListItem>Zavrsni radovi u gradjevinarstvu</ListItem>
       </UnorderedList>
       <Heading bg="gray.200" color="blue.800" pt="10px">Naš vrhunski tim keramičara nudi Vam:</Heading>
       <UnorderedList w="45%" mx="auto" mt="1rem">
        <ListItem>Sve Vrste Keramičarskih (Postavljanje Pločica, Skidanje Pločica, Fugiranje)</ListItem>
        <ListItem>Hidroizolacijskih (Hidroizolacija Terasa, Kupaonica)</ListItem>
         <ListItem>Završnih Radova (Gletanje, Ličilaćki Radovi)</ListItem>
         
       </UnorderedList>
       <Heading pt="5rem" color="blue.800">Pogledajte Slike Nasih Radova</Heading>
        <Link to="/images"><Button colorScheme='orange' m="1rem">Pogledajte Slike</Button></Link>
        </Box>
  
        <Box
         bgImage={`https://www.designlike.com/wp-content/uploads/2021/02/pexels-photo-6207818.jpeg`}
         bgSize="cover"
          bgPosition="center"
          bgRepeat="no-repeat"
          height="100vh"
          w={{base:"100%",lg: "50%"}}
          position="relative"
        ></Box>

      </Flex>
        
       </Flex>
      </>
     
    )
  }
  
  export default About