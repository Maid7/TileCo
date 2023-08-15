import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Box bg="blue.600" as="footer" borderTop="1px solid" borderColor="gray.200" py={4}>
      <Flex
        direction={{ base: "column", md: "row" }}
        align={{ base: "center", md: "flex-start" }}
        justify={{ base: "center", md: "space-between" }}
        maxW="1200px"
        mx="auto"
        px={4}
      >
        <Text color="white" my="auto">&copy; {new Date().getFullYear()} TileCo</Text>
        <Box mt={{ base: 4, md: 0 }} color="white" p="15px">
          <Link style={{marginRight: "10px"}} to="/">Pocetna</Link>
          <Link style={{marginRight: "10px"}} to="/about">O Nama</Link>
          <Link style={{marginRight: "10px"}} to="/contact">Kontakt</Link>
          <Link style={{marginRight: "10px"}} to="/images">Slike Radova</Link>
          
        </Box>
      </Flex>
    </Box>
  );
};

export default Footer;
