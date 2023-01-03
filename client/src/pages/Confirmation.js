import {
  Heading,
  Text,
  Box,
  Center
} from '@chakra-ui/react';

const Confirmation = () => {
  return (
    <Center>
      <Box pt={{ base: 2, md: 16, lg: 20 }} maxW='6xl' px={5}>
        <Heading mt={20} pb={{ base: 1, md: 2, lg: 3}}>Order Confirmation</Heading>
        <Text>Thank you for ordering from Cheng Du Taste. Your confirmation number is #123565.</Text>
        <Text>Below is a summary of your order:</Text>
      </Box>
    </Center>
  )
}

export default Confirmation;