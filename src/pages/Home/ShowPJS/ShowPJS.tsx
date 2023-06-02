import React, { useEffect, useState } from 'react';
import { Box, Card, Grid, Heading, Image, Stack } from '@chakra-ui/react';
import { Personajes } from '../../../types';
import { apiCall, nextPage } from '../../../services';
import ModalPersonaje from '../Modal/ModalPersonaje';
import { Pagination } from '../../../components/Pagination';

export type ShowPJSProps = unknown;

const ShowPJS: React.FC<ShowPJSProps> = () => {
  const [personajes, setPersonajes] = useState<Personajes[]>([]);

  useEffect(() => {
    const apiResults = async () => {
      try {
        const data = await apiCall();
        setPersonajes(data);
      } catch (error) {
        console.error(error);
      }
    };

    apiResults();
  }, []);

  const handlePageChange = async (page: number) => {
    try {
      const data = await nextPage(page);
      setPersonajes(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Grid
        templateColumns="repeat(5, 1fr)"
        gap={6}
        background="green.300"
        paddingTop={2}
      >
        {personajes.map((pj) => (
          <Card
            key={pj.id}
            alignItems="center"
            background="green"
            borderRadius="3xl"
          >
            <Box
              boxShadow="dark-lg"
              borderRadius="3xl"
              height="fit-content"
              display="contents"
            >
              <Image
                src={pj.image}
                alt={pj.name}
                borderRadius="2xl"
                objectFit="cover"
                mx="auto"
                paddingTop={3}
              />
              <Stack p="4" textAlign="center" alignItems="center">
                <Heading my="4" fontSize="4xl" as="b">
                  {pj.name}
                </Heading>
              </Stack>
              <ModalPersonaje pj={pj} />
            </Box>
          </Card>
        ))}
        ;
      </Grid>
      <Pagination handlePageChange={handlePageChange} />
    </>
  );
};

export default ShowPJS;
