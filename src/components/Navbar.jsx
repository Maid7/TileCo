import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Flex,
  Heading,
  IconButton,
  Button,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  VStack,
  HStack
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';


const ResponsiveNavbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); 

  return (
    <Box bg="blue.600" px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Link to="/"><Heading color="white">TileCo</Heading></Link>

        {isMobile ? (
          <IconButton
            aria-label="Open menu"
            icon={<HamburgerIcon />}
            color="blue.60"
            onClick={onOpen}
          />
        ) : (
          <HStack spacing={4}>
            <Link to="/"><Button variant="ghost">Pocetna</Button></Link>
            <Link to="about"><Button variant="ghost">O Nama</Button></Link>
            <Link to="contact"><Button variant="ghost">Kontakt</Button></Link>
            <Link to="images"><Button variant="ghost">Slike Radova</Button></Link>
          </HStack>
        )}
      </Flex>

      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay >
          <DrawerContent bg="gray.500">
            <DrawerCloseButton color="white"/>
            <DrawerHeader color="white">TileCo</DrawerHeader>
            <DrawerBody>
              <VStack spacing={4} color="white">
                <Link to="/"><Button variant="ghost">Pocetna</Button></Link>
               <Link to="about"><Button variant="ghost">O Nama</Button></Link> 
               <Link to="contact"><Button variant="ghost">Kontakt</Button></Link>
               <Link to="images"><Button variant="ghost">Slike Radova</Button></Link>
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </Box>
  );
};

export default ResponsiveNavbar;
