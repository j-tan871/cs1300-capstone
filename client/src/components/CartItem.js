import {
  Box, 
  Text,
  Flex
} from '@chakra-ui/react';

import { AddIcon, MinusIcon } from '@chakra-ui/icons';

const CartItem = (props) => {
  return <Box py={2}>
    <Flex direction='row' justifyContent='space-between'>
      <Text as='b'>{props.name}</Text>
      <Flex direction='row' alignItems='center'>
        <MinusIcon onClick={() => props.removeFromCart(props.name, props.price)}/>
        <Text px={2}>{props.quantity}</Text>
        <AddIcon onClick={() => props.addToCart(props.name, props.price)}/>
      </Flex>
    </Flex>
    <Text>${(Math.round(props.price * 100) / 100).toFixed(2)}</Text>
  </Box>
}

export default CartItem;