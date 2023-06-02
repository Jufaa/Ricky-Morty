import { Box, Button } from '@chakra-ui/react';
import { useState } from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Pagination = ({ handlePageChange }: any) => {
  const [page, setPage] = useState(1);
  const handlePageNext = () => {
    setPage(page + 1);
    handlePageChange(page + 1);
  };
  const handlePageBack = () => {
    setPage(page - 1);
    handlePageChange(page - 1);
  };

  return (
    <>
      <Box bg="green" display="flex" justifyContent="center" gap={10}>
        {page !== 1 ? (
          <Button
            onClick={handlePageBack}
            size="md"
            height="48px"
            width="100px"
            border="4px"
            borderColor="white"
          >
            Back Page
          </Button>
        ) : null}
        <Button
          onClick={handlePageNext}
          size="md"
          height="48px"
          width="100px"
          border="4px"
          borderColor="white"
        >
          Next Page
        </Button>
      </Box>
    </>
  );
};

export default Pagination;
