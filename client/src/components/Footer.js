import {
  Box,
  Center,
  Heading,
  Text,
  Flex,
  AspectRatio
} from '@chakra-ui/react';

const Footer = (props) => {
  return <Box>
    <Center
      bgColor='#2B303A'
      color='white'
    >
      <Box
        px={{ base: 2, md: 5, lg: 10 }}
        py={{ base: 2, md: 5, lg: 5 }}
        w='6xl'
        mt={{ base: 14, lg: 20 }}
      >
        <Heading pb='5' color="white">Visit Us</Heading>
        <Flex direction='row' justifyContent='space-between' wrap='wrap'>
          <Box pb='5'>
            <Text fontSize={{ base: 'sm', md: 'md', lg: 'lg' }}>495 Smith St.</Text>
            <Text fontSize={{ base: 'sm', md: 'md', lg: 'lg' }}>Providence, RI 02908</Text>
            <Text as='b' fontSize={{ base: 'sm', md: 'md', lg: 'lg' }}>Business Hours</Text>
            <Text fontSize={{ base: 'sm', md: 'md', lg: 'lg' }}>Mon. - Tues. 11am - 9:30pm</Text>
            <Text fontSize={{ base: 'sm', md: 'md', lg: 'lg' }}>Wed.  Closed</Text>
            <Text fontSize={{ base: 'sm', md: 'md', lg: 'lg' }}>Thurs. - Sun.  11am - 9:30pm</Text>
          </Box>
          <Box w={{ base: '3xs', md: 'md', lg: 'lg', xl: 'xl'}} pb='5'>
            <AspectRatio ratio={16 / 9}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11890.546902013386!2d-71.4271436!3d41.83612!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x24ab5e14c8dbdb73!2sChengdu%20Taste!5e0!3m2!1sen!2sus!4v1672283519650!5m2!1sen!2sus"
                title='cheng du taste map'
              ></iframe>
            </AspectRatio>
          </Box>
        </Flex>
      </Box>
    </Center>
  </Box>
}

export default Footer;