import {
  Box,
  Button,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure
} from '@chakra-ui/react';
import React from 'react';
import { Personajes } from '../../../types';
interface ModalPersonajeProps {
  pj: Personajes;
}

const ModalPersonaje: React.FC<ModalPersonajeProps> = ({ pj }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box paddingBottom={6}>
        <Button
          size="lg"
          height="48px"
          width="200px"
          border="4px"
          onClick={onOpen}
        >
          More
        </Button>
        <Modal onClose={onClose} isOpen={isOpen} isCentered>
          <ModalOverlay />
          <ModalContent
            backgroundColor="green.700"
            display="flex"
            textAlign="center"
            alignItems="center"
          >
            {pj.status === 'Dead' ? (
              <ModalHeader as="del" fontSize="4xl">
                {pj.name}
              </ModalHeader>
            ) : (
              <ModalHeader fontSize="4xl" as="b">
                {pj.name}
              </ModalHeader>
            )}
            <ModalCloseButton />
            <ModalBody fontSize="3xl" as="b">
              <Image
                borderRadius="2xl"
                objectFit="cover"
                mx="auto"
                src={pj.image}
                alt={pj.name}
              />
              {pj.status === 'Dead' ? (
                <Text color="red">{pj.status}</Text>
              ) : pj.status === 'Alive' ? (
                <Text color="green">{pj.status}</Text>
              ) : (
                <Text color="gray">{pj.status}</Text>
              )}
              <Text>{pj.type}</Text>
              <Text>{pj.gender.name}</Text>
              <Text>{pj.location.name}</Text>
            </ModalBody>
            <ModalFooter>
              <Button onClick={onClose}>Close</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
    </>
  );
};

export default ModalPersonaje;
