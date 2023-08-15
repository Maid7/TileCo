import React, { useState } from 'react';
import { Button, Modal, ModalOverlay,Flex, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton,Text } from '@chakra-ui/react';

function ModalComponent() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <Button onClick={handleOpen} colorScheme='orange' mt="15px">Kontaktirajte Nas</Button>

      <Modal isOpen={isOpen} onClose={handleClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader color="orange.600">Kontaktirajte Nas</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          <Flex flexDirection="column" alignItems="center" justifyContent="space-evenly">
            <Text fontSize="1.4rem" color="blue.800">Email: maidsejdinovic3@gmail.com</Text>
            <Text fontSize="1.4rem" color="blue.800">Br. tel: 064 44 04 964</Text>
            <Text fontSize="1.4rem" color="blue.800">Ime: Maid Keramicar</Text>
          </Flex>
            
          </ModalBody>

          <ModalFooter>
            <Button variant="ghost" colorScheme="orange" onClick={handleClose}>
              Izadji
            </Button>
            
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}

export default ModalComponent;
