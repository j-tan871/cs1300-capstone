import {
  Box,
  Text,
  Image,
  Center,
  Heading,
  Button,
  VStack,
  Flex,
  useBreakpointValue
} from '@chakra-ui/react';

import backgroundImage from './Background.png';
import Footer from '../components/Footer';

const Home = (props) => {
  const isDesktop = useBreakpointValue({ base: false, lg: true })

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
          backgroundSize: 'cover',
          backgroundImage: `url(${backgroundImage})`,
          backgroundPosition: 'top',
        }}
      >
        <VStack
          pt={{ base: 32, md: 32, lg: 32, xl: 48 }}
          pb={{ base: 36, md: 36, lg: 48, xl: 56 }}>
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
      </div>
      <Center
        bgColor='#2B303A'
        color='white'
        ref={props.aboutRef}
      >
        <Box
          px={{ base: 2, md: 5, lg: 10 }}
          py={{ base: 2, md: 5, lg: 5 }}
          // minW='sm'
          w='6xl'
          mt={{ base: 14, lg: 20 }}
        >
          <Heading pb='5'>About Us</Heading>
          <Flex wrap='wrap' pb={5}>
            <Box maxW='sm'>
              <Image src={process.env.PUBLIC_URL + '/restaurant.jpg'} />
            </Box>
            <Box maxW='lg' pl={isDesktop ? 10 : 0}>
              <Text py={2} fontSize={{ base: 'sm', md: 'md', lg: 'lg' }}>Cheng Du Taste is a Chinese restaurant in Providence, RI. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
            </Box>
          </Flex>
        </Box>
      </Center>
      <Center ref={props.galleryRef}>
        <Box
          px={{ base: 2, md: 5, lg: 10 }}
          py={{ base: 2, md: 5, lg: 5 }}
          // minW='sm'
          w='6xl'
          mt={{ base: 14, lg: 20 }}
        >
          <Heading pb='5' color="#C54430">Gallery</Heading>
          <Flex wrap='wrap' pb={5}>
            <Box maxW='3xs' p={2}>
              <Image src={process.env.PUBLIC_URL + '/1_dumpling.jpg'} />
            </Box>
            <Box maxW='3xs' p={2}>
              <Image src={process.env.PUBLIC_URL + '/2.jpg'} />
            </Box>
            <Box maxW='3xs' p={2}>
              <Image src={process.env.PUBLIC_URL + '/3.jpg'} />
            </Box>
            <Box maxW='3xs' p={2}>
              <Image src={process.env.PUBLIC_URL + '/4.jpg'} />
            </Box>
            <Box maxW='3xs' p={2}>
              <Image src={process.env.PUBLIC_URL + '/5.jpg'} />
            </Box>
            <Box maxW='3xs' p={2}>
              <Image src={process.env.PUBLIC_URL + '/6.jpg'} />
            </Box>
            <Box maxW='3xs' p={2}>
              <Image src={process.env.PUBLIC_URL + '/7.jpg'} />
            </Box>
            <Box maxW='3xs' p={2}>
              <Image src={process.env.PUBLIC_URL + '/8.jpg'} />
            </Box>
            <Box maxW='3xs' p={2}>
              <Image src={process.env.PUBLIC_URL + '/9.jpg'} />
            </Box>

          </Flex>
        </Box>
      </Center>
      <Box ref={props.visitRef}>
        <Footer ref={props.visitRef}/>
      </Box>
    </Box>
  </Box>
};

export default Home;