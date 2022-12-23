import {
  Box,
  Text,
  Image,
  Center,
  Heading,
  Button,
  VStack,
  Flex
} from '@chakra-ui/react';

import backgroundImage from './Background.png';

const Home = () => {
  return <Box
    // px={{ base: 2, md: 5, lg: 10}} 
    pt={{ base: 2, md: 5, lg: 20 }}
  // width={{ lg: '66%'}}
  // mt={{ base: 14, lg: 20}}
  // minW='sm' maxW='5xl'
  >
    <Box>
      <div
        style={{
          // width: '100%',
          // height: '100%',
          backgroundSize: 'cover',
          backgroundImage: `url(${backgroundImage})`,
          backgroundPosition: 'center',
        }}
      >
        <Center>
          <VStack
            pt={{ base: 32, md: 32, lg: 32, xl: 48 }}
            pb={{ base: 36, md: 36, lg: 48, lg: 56 }}>
            <Heading>Cheng Du Taste</Heading>
            <Button
              colorScheme='red'
              size={{ base: 'xs', md: 'sm', lg: 'md' }}
            >
              ORDER ONLINE
            </Button>
            <Text>📞 401-729-5699</Text>
            <Text>495 Smith St</Text>
            <Text> Providence, RI 02908</Text>
          </VStack>
        </Center>
      </div>
      <Center>
        <Box
          px={{ base: 2, md: 5, lg: 10 }}
          py={{ base: 2, md: 5, lg: 5 }}
          // minW='sm'
          maxW='6xl'
          mt={{ base: 14, lg: 20 }}
        >
          <Heading>About Us</Heading>
          <Flex wrap='wrap' pb={5}>
            <Box minW='xs' maxW='sm'>
              <Image src={process.env.PUBLIC_URL + '/restaurant.jpg'} />
            </Box>
            <Box minW='sm' maxW='xl' pl={10}>
              <Text py={2}>Cheng Du Taste is a Chinese restaurant in Providence, RI. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
            </Box>
          </Flex>
        </Box>
      </Center>

      {/* <Image 
        src={backgroundImage} 
        fit='cover'
      /> */}
    </Box>
  </Box>
};

export default Home;