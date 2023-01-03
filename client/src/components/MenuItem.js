import { useState } from 'react';

import {
  Box,
  Text,
  Heading,
  Flex,
  Divider
} from '@chakra-ui/react';

import { AddIcon, MinusIcon } from '@chakra-ui/icons';

const MenuItem = (props) => {

  const quantity = props.findQuantity(props.name);

  const addItem = (event) => {
    event.preventDefault();
    props.addToCart(props.name, props.price);
  }

  const removeItem = (event) => {
    event.preventDefault();
    props.removeFromCart(props.name, props.price);
  }

  return <Box>
    <Flex alignItems='center' justifyContent='space-between' py={2}>
      <Box>
        <Text as='b'>{props.name}</Text>
        <Text>{props.price}</Text>
      </Box>
      <Flex direction='row' alignItems='center' px={2}>
        <MinusIcon 
          style={{ visibility: quantity ? 'visible' : 'hidden'}}
          onClick={removeItem}
        />
        <Text px={3} style={{ display: quantity ? 'block' : 'none'}}>{quantity}</Text>
        <AddIcon 
          onClick={addItem}
        />
      </Flex>
    </Flex>
    <Divider />
  </Box>
}

export default MenuItem;