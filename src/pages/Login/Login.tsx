import { Box, Button, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

export type LoginProps = object;

const Login: React.FC<LoginProps> = () => {
  return (
    <Box
      h="100vh"
      bgSize="cover"
      bgRepeat="no-repeat"
      bgPosition="center"
      bgImage="https://i.postimg.cc/QN7WGG6j/wp6631294-rick-and-morty-desktop-hd-wallpapers.jpg"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Stack textAlign="center" spacing="4" alignItems="center">
        <Text fontSize="8xl" color="white" as="b">
          Rick and Morty APP
        </Text>
        <Link to={'/personajes'}>
          <Button
            size="md"
            height="48px"
            width="200px"
            border="2px"
            bg="green.400"
            as="b"
          >
            Ingresar
          </Button>
        </Link>
      </Stack>
    </Box>
  );
};

export default Login;
