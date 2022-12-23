import { Routes, Route } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react';

import theme from './theme';
import Home from './pages/Home';
import Order from './pages/Order';
import Navigation from './components/Navigation';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Navigation />
      <Routes>
        <Route path='order' element={<Order />}/>
        <Route path='/' element={<Home />}/>
      </Routes>
    </ChakraProvider>
  );
}

export default App;
