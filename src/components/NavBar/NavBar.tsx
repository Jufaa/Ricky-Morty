import { Box, Button, Text } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

export type NavBarProps = unknown;

const NavBar: React.FC<NavBarProps> = () => {
  return (
    <>
      <Box
        h="60px"
        bg="green"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Text fontSize="4xl" as="b">
          Rick and Morty APP
        </Text>
        <Link to={'/'}>
          <Button
            size="md"
            height="48px"
            width="100px"
            border="4px"
            borderColor="white"
          >
            Logout
          </Button>
        </Link>
      </Box>
    </>
  );
};

export default NavBar;
