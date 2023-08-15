import React from 'react'
import {  Box, FormControl, FormLabel, Input,Textarea, Button, FormHelperText,Heading} from '@chakra-ui/react';
import { useForm, ValidationError } from '@formspree/react';

function Contact() {

  const [state, handleSubmit] = useForm("mdorodyy");
  if (state.succeeded) {
      return (
        <Box h="85vh">
           <Heading color="blue.800" textAlign="center">Hvala na poruci! Javljamo se u sto kracem roku</Heading>
        </Box>
      )
  }


  return (
  <Box maxW="md" mx="auto" p={4} h="85vh" pt="3rem">
    <form onSubmit={handleSubmit}>
   <FormControl isRequired mb="40px"> 
    <FormLabel>
      Ime:
    </FormLabel>
    <Input type="text" name="name"/>
    <FormHelperText>Unesite vase ime</FormHelperText>
   </FormControl>
   <ValidationError 
        prefix="Name" 
        field="name"
        errors={state.errors}
      />
    
    <FormControl >
      <FormLabel>Email:(nije obavezno)</FormLabel>
      <Input type="email" name="email"/>
      <FormHelperText>Unesite vas email</FormHelperText>
    </FormControl>
    <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />

    <FormControl mt="40px" isRequired>
      <FormLabel >Vasa poruka:</FormLabel>
      <Textarea
      placeholder="Napisite vasu poruku ovdje..."
      name="message"
      >

      </Textarea>
    </FormControl>

    <Button mt="20px" colorScheme="orange" type="submit" disabled={state.submitting}>Submit</Button>
    </form>
  </Box>
  );
}

export default Contact;