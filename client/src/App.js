import { useRef } from 'react';

import { Routes, Route } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react';

import theme from './theme';
import Home from './pages/Home';
import Order from './pages/Order';
import Confirmation from './pages/Confirmation';
import Navigation from './components/Navigation';
import ScrollToTop from './components/ScrollTop';

function App() {
  const aboutRef = useRef(null);
  const galleryRef = useRef(null);
  const visitRef = useRef(null);

  return (
    <ChakraProvider theme={theme}>
      <ScrollToTop />
      <Navigation aboutRef={aboutRef} galleryRef={galleryRef} visitRef={visitRef} />
      <Routes>
        <Route path='order' element={<Order />}/>
        <Route path='confirmation' element={<Confirmation />} />
        <Route path='/' element={<Home aboutRef={aboutRef} galleryRef={galleryRef} visitRef={visitRef} />}/>
      </Routes>
    </ChakraProvider>
  );
}

export default App;
