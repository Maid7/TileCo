import { Flex, Box,Heading,UnorderedList,ListItem}  from '@chakra-ui/react'
import React from 'react'

const WorkProcess = () => {
  return (
    <>
    <Heading mx="auto" color="blue.800" mt="2rem">Proces Postavljanja Keramike</Heading>
     <Flex minChildWidth="200px" w="100%" h={{base: "170vh",lg: "60vh"}}  mt="5rem" flexDirection={{base: "column", lg: "row"}} justifyContent="space-between" >
        <Box bg="gray.200" w={{base:"100%",lg: "18%"}} borderRadius="10px">
        <Flex flexDirection="column" textAlign="center">
            <Heading color="blue.800">1. Priprema podloge:</Heading>
            <UnorderedList pt="40px" w="80%" mx="auto">
             <ListItem color="gray.600">Podloga na koju postavljate keramiku mora biti ravna, čvrsta i suva.</ListItem>
             <ListItem color="gray.600">Ako je potrebno, popravite sve nepravilnosti i napravite ravnu površinu</ListItem>
   
          </UnorderedList>
        </Flex>
        </Box>
        <Box bg="gray.200" w={{base:"100%",lg: "18%"}} borderRadius="10px">
        <Flex flexDirection="column" textAlign="center">
            <Heading color="blue.800" as="h3">2.Postavljanje pločica</Heading>
            <UnorderedList pt="40px" w="80%" mx="auto">
             <ListItem color="gray.600">Počnite postavljanje pločica iz središnjeg dela površine kako biste osigurali da se ivice ne razdvajaju.</ListItem>
             <ListItem color="gray.600">Pratite smernice za postavljanje, koristeći ravnilo i nivo kako biste se uverili da su pločice pravilno poravnate i ravne.</ListItem>
   
          </UnorderedList>
        </Flex>

        </Box>
        <Box bg="gray.200"  w={{base:"100%",lg: "18%"}} borderRadius="10px">
        <Flex flexDirection="column" textAlign="center">
            <Heading color="blue.800" as="h3">3.Fugiranje:</Heading>
            <UnorderedList pt="40px" w="80%" mx="auto">
             <ListItem color="gray.600">Nakon što lepak osuši i pločice su postavljene, sledi proces fugiranja.</ListItem>
             <ListItem color="gray.600">Fuge se popunjavaju fug masom koja se ravnomerno nanosi i zatim briše višak.</ListItem>
             <ListItem color="gray.600">Fug masa može biti različitih boja, pa odaberite onu koja se slaže sa dizajnom.</ListItem>
          </UnorderedList>
        </Flex>
        </Box>
        <Box bg="gray.200"  w={{base:"100%",lg: "18%"}} borderRadius="10px">
        <Flex flexDirection="column" textAlign="center">
            <Heading color="blue.800" as="h3">4.Zavrsna Obrada</Heading>
            <UnorderedList pt="40px" w="80%" mx="auto">
             <ListItem color="gray.600">Nakon što fug masa osuši, obrišite površinu čistom krpom kako biste uklonili ostatke fuge sa pločica</ListItem>
             <ListItem color="gray.600">Ako su pločice izložene vodi, dodatno možete premazati hidroizolacionim premazom.</ListItem>
            
          </UnorderedList>
        </Flex>
        </Box>
        <Box bg="gray.200"  w={{base:"100%",lg: "18%"}} borderRadius="10px">
        <Flex flexDirection="column" textAlign="center">
            <Heading color="blue.800" as="h3">5.Održavanje:</Heading>
            <UnorderedList pt="40px" w="80%" mx="auto">
             <ListItem color="gray.600">Redovno čišćenje i održavanje keramike pomoći će da se produži njen vek trajanja.</ListItem>
             <ListItem color="gray.600">Koristite odgovarajuće sredstvo za čišćenje koje neće oštetiti pločice.</ListItem>
            
          </UnorderedList>
        </Flex>
        </Box>
    </Flex>
    </>
   
  )
}

export default WorkProcess
