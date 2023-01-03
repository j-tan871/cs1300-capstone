import { useState } from 'react';

import {
  Box,
  Heading,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Flex,
} from '@chakra-ui/react';

import MenuItem from '../components/MenuItem';
import Cart from '../components/Cart';

const Order = () => {
  const popularDishes = [
    { name: 'Spicy Twice Cooked Pork', price: 13.40 },
    { name: 'Chongqing Chicken', price: 12.40 },
    { name: 'Dan Dan Noodle', price: 8.95 },
    { name: 'Kung Pao Chicken', price: 15.95 },
    { name: 'Spicy Hunan Beef', price: 12.95 }
  ]

  const chengduAppetizers = [
    { name: 'Cold Beef with Special Sauce', price: 15.95},
    { name: 'Flavored Cold Wood Ear', price: 10.95},
    { name: 'Mala Beef', price: 15.95},
    { name: 'Dan Dan Noodle',price: 8.95},
    { name: 'Spicy Sichuan Cold Noodle', price: 8.95},
    { name: 'Pork Dumpling in Chili Oil', price: 9.95}, 
    { name: 'Pork Wonton in Red Sesame Oil', price: 9.95}, 
    { name: 'Sliced Pork Belly with Fresh Garlic', price: 10.95}, 
    { name: 'Shredded Chicken with Sesame Sauce', price: 10.95}, 
    { name: 'Sichuan Cucumber', price: 8.95}, 
    { name: 'Smoked Tea Duck (Half)', price: 19.95}, 
    { name: 'Smoked Tea Duck (Whole)', price: 38.95
  }, 
  ]

  const friedRice = [
    { name: 'Pork Fried Rice', price: 10.95}, 
    { name: 'Chicken Fried Rice', price: 10.95}, 
    { name: 'Vegetable Fried Rice', price: 10.95}, 
    { name: 'Beef Fried Rice', price: 11.95}, 
    { name: 'Shrimp Fried Rice', price: 11.95}, 
    { name: 'White Rice', price: 1.50}, 
  ]

  const noodles = [
    { name: 'Pork Lo Mein', price: 11.95}, 
    { name: 'Chicken Lo Mein', price: 11.95}, 
    { name: 'Veg Lo Mein', price: 11.95}, 
    { name: 'Beef Lo Mein', price: 12.95}, 
    { name: 'Shrimp Lo Mein', price: 12.95}, 
    { name: 'House Special Lo Mein', price: 12.95}, 
    { name: 'Pork Mei Fun', price: 11.95}, 
  ]

  const specialties = [
    { name: 'Spicy Whole Fish', price: 39.95}, 
    { name: 'Spicy Twice Cooked Pork', price: 13.40 },
    { name: 'Chongqing Chicken', price: 12.40 },
    { name: 'Kung Pao Chicken', price: 15.95 },
    { name: 'Spicy Hunan Beef', price: 12.95 }
  ]

  const dessert = [
    { name: 'Fermented Rice Balls', price:  12.95},
    { name: 'Sesame Rice Balls (6)', price:  8.95},
    { name: 'Pumpkin Cake (6)', price:  8.95}
  ]

  const [cart, setCart] = useState([]);
  const [numItems, setNumItems] = useState(0);
  const [cartTotal, setCartTotal] = useState(0.0);

  const reset = () => {
    setCart([]);
    setNumItems(0);
    setCartTotal(0.0);
  }

  const findItem = (name) => {
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].name === name) {
        return i;
      }
    }

    return -1;
  }

  const findQuantity = (name) => {
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].name === name) {
        return cart[i].quantity;
      }
    }

    return 0;
  }

  const addToCart = (name, price) => {
    const idx = findItem(name);

    if (idx === -1) {
      setCart([...cart, { name: name, price: price, quantity: 1 }])
    } else {
      setCart(cart.map(elem =>
        elem.name === name ?
          { name: elem.name, price: elem.price, quantity: elem.quantity + 1 } :
          elem))
    }

    setNumItems(numItems + 1);
    setCartTotal(cartTotal + price);
  }

  const removeFromCart = (name, price) => {
    const idx = findItem(name);

    if (idx === -1) {
      setCart([...cart, { name: name, price: price, quantity: 1 }])
    } else {
      setCart(cart.map(elem =>
        elem.name === name ?
          { name: elem.name, price: elem.price, quantity: elem.quantity - 1 } :
          elem).filter(elem => elem.quantity > 0));
    }

    setNumItems(numItems - 1);
    console.log(price);
    setCartTotal(cartTotal - price);
  }

  return <Box pt={{ base: 2, md: 16, lg: 20 }} maxW='6xl' px={{ base: 5, lg: 12, xl: 16}}>
    <Flex
      direction='row'
      wrap='wrap'
      pb={{ base: 1, md: 2, lg: 3 }}
      mt={20}
      justifyContent='space-between'
    >
      <Heading>Order Online</Heading>
      <Cart
        contents={cart}
        numItems={numItems}
        cartTotal={cartTotal}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        reset={reset}
      />
    </Flex>
    <Tabs>
      <TabList
        overflowY="hidden"
        sx={{
          scrollbarWidth: 'none',
          '::-webkit-scrollbar': {
            display: 'none',
          },
        }}
      >
        <Tab flexShrink={0}>Popular Dishes</Tab>
        <Tab flexShrink={0}>Chengdu Appetizers</Tab>
        <Tab flexShrink={0}>Fried Rice</Tab>
        <Tab flexShrink={0}>Noodles</Tab>
        <Tab flexShrink={0}>Specialties</Tab>
        <Tab flexShrink={0}>Dessert</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          {popularDishes.map((item, idx) =>
            <MenuItem
              name={item.name}
              price={item.price}
              key={idx}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
              findQuantity={findQuantity}
            />)}
        </TabPanel>
        <TabPanel>
          {chengduAppetizers.map((item, idx) =>
            <MenuItem
              name={item.name}
              price={item.price}
              key={idx}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
              findQuantity={findQuantity}
            />)}
        </TabPanel>
        <TabPanel>
          {friedRice.map((item, idx) =>
            <MenuItem
              name={item.name}
              price={item.price}
              key={idx}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
              findQuantity={findQuantity}
            />)}
        </TabPanel>
        <TabPanel>
          {noodles.map((item, idx) =>
            <MenuItem
              name={item.name}
              price={item.price}
              key={idx}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
              findQuantity={findQuantity}
            />)}
        </TabPanel>
        <TabPanel>
          {specialties.map((item, idx) =>
            <MenuItem
              name={item.name}
              price={item.price}
              key={idx}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
              findQuantity={findQuantity}
            />)}
        </TabPanel>
        <TabPanel>
          {dessert.map((item, idx) =>
            <MenuItem
              name={item.name}
              price={item.price}
              key={idx}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
              findQuantity={findQuantity}
            />)}
        </TabPanel>
      </TabPanels>
    </Tabs>

  </Box>

};

export default Order;