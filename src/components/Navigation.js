import {
  Text,
  HStack,
  Flex,
  Link,
  Spacer,
  useBreakpointValue,
  Button,
  Tooltip,
  useColorMode,
  Heading,
} from '@chakra-ui/react';

import {
  Link as Link1, 
  useLocation
} from 'react-router-dom';

const Navigation = (props) => {
  const isDesktop = useBreakpointValue({ base: false, lg: true })
  const isMobile = useBreakpointValue({ base: true, md: false })
  const { colorMode, toggleColorMode } = useColorMode();
  const location = useLocation().pathname;

  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  }

  const handleScroll = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop - 120,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Flex
      direction={{ base: 'column', lg: 'row' }}
      px={{ base: 2, md: 5, lg: 10 }}
      py={{ base: 2, md: 3, lg: 5 }}
      position='fixed'
      zIndex={20}
      w={'100%'}
      bgColor='#2B303A'
    >
      <Link1 to='/'>
        <Link>
          <Heading
            bgColor='white'
            bgClip='text'
            fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
            fontWeight='bold'
          >
            Cheng Du Taste
          </Heading>
        </Link>
      </Link1>
      <Spacer
        style={{ display: isDesktop ? 'flex' : 'none' }}
      />
      <HStack style={{ display: location === '/' ? 'flex' : 'none' }}>
        <Link1 
          to='/#projects' 
          style={{ display: !isMobile ? 'flex' : 'none' }}>
          <Link
            fontSize={{ base: 'md', md: 'lg', lg: 'xl' }}
            pr={{ base: 1, md: 2, lg: 3 }}
            color='white'
            onClick={() => { handleScroll(props.projectsRef) }}
          >
            ABOUT US
          </Link>
        </Link1>
        <Link1 
          to='/#experience' 
          style={{ display: !isMobile ? 'flex' : 'none' }}>
          <Link
            fontSize={{ base: 'md', md: 'lg', lg: 'xl' }}
            pr={{ base: 1, md: 2, lg: 3 }}
            color='white'
            onClick={() => { handleScroll(props.experienceRef) }}
          >
            GALLERY
          </Link>
        </Link1>
        <Link1 
          to='/#contact' 
          style={{ display: !isMobile ? 'flex' : 'none' }}>
          <Link
            fontSize={{ base: 'md', md: 'lg', lg: 'xl' }}
            pr={{ base: 1, md: 2, lg: 3 }}
            color='white'
            onClick={() => { handleScroll(props.contactRef) }}
          >
            VISIT US
          </Link>
        </Link1>
        <Button 
          colorScheme='red' 
          size={{ base: 'xs', md: 'sm', lg: 'md'}}
        >
          ORDER ONLINE
        </Button>
      </HStack>
    </Flex>
  )
};

export default Navigation;