import { useRef, useState } from 'react';

import {
  useDisclosure,
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Input,
  DrawerFooter,
  Text,
  Flex,
  Divider,
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  AspectRatio
} from '@chakra-ui/react';

import CartItem from '../components/CartItem';

const Cart = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { isOpen: isMOpen, onOpen: onMOpen, onClose: onMClose } = useDisclosure()

  const btnRef = useRef()

  const [pickup, setPickup] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const dummyCart = [
    { name: 'dish', quantity: 1, price: 9.40 },
    { name: 'dish2', quantity: 2, price: 10.30 }
  ]

  const handleNameChange = (event) => {
    setName(event.target.value);
    event.preventDefault();

  }

  const handlePickupChange = (event) => {
    setPickup(event.target.value);
    event.preventDefault();

  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    event.preventDefault();

  }

  const placeOrder = (event) => {
    // onMOpen();
    onClose()
    onMOpen()
    console.log(isMOpen)
  }

  const onModalClose = (event) => {
    setPickup('');
    setName('');
    setEmail('');
    props.reset();
    onMClose();
    event.preventDefault();
  }

  return (
    <>
      <Button ref={btnRef} colorScheme='red' onClick={onOpen}>
        Your Order {` (${props.numItems})`}
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Your Order</DrawerHeader>

          <DrawerBody>
            <Text>Pickup Time</Text>
            <Input
              placeholder='Pickup Time'
              type='datetime-local'
              mb={5}
              value={pickup}
              onChange={handlePickupChange}
            />
            {props.cartTotal === 0.0 ? <Text>Your cart is empty; add items to your cart to place an order!</Text> : undefined}

            {props.contents.map((item, idx) =>
              <CartItem
                key={idx}
                name={item.name}
                price={item.price}
                quantity={item.quantity}
                removeFromCart={props.removeFromCart}
                addToCart={props.addToCart}
              />)}
            <Divider pt={2} />
            <Flex direction='row' justifyContent='space-between' pt={2}>
              <Text as='b'>Total</Text>
              <Text as='b'>{(Math.round(props.cartTotal * 100) / 100).toFixed(2)}</Text>
            </Flex>
            <Box py={12}>
              <Text as='b'>Contact Information</Text>
              <Text>Name</Text>
              <Input type='text' placeholder='Jane Doe' mb={2} value={name} onChange={handleNameChange} />
              <Text>Email</Text>
              <Input type="email" placeholder='janedoe@gmail.com' value={email} onChange={handleEmailChange} />
            </Box>

          </DrawerBody>

          <DrawerFooter flexDirection='column' alignItems='left'>
            <Button
              colorScheme='red'
              disabled={name === '' || pickup === '' || email === '' || props.cartTotal === 0}
              onClick={placeOrder}
            >
              Place Order
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>

      <Modal isOpen={isMOpen} onClose={onModalClose} size={{ base: 'md', lg: 'lg', xl: 'xl' }}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Order Confirmation</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text pb={5}>Thank you for ordering from Cheng Du Taste! Your order will be ready for pickup at {Date(pickup).toLocaleString()}. Your confirmation number is #123565.</Text>
            <Box w={{ base: '2xs', md: 'sm', lg: 'md'}} pb='5'>
            <AspectRatio ratio={4 / 3} >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11890.546902013386!2d-71.4271436!3d41.83612!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x24ab5e14c8dbdb73!2sChengdu%20Taste!5e0!3m2!1sen!2sus!4v1672283519650!5m2!1sen!2sus"
                title='cheng du taste map'
              ></iframe>
            </AspectRatio>
          </Box>
            <Text pb={5}>Below is a summary of your order:</Text>
            {props.contents.map((item, idx) =>
              <Box py={1} key={idx}>
                <Flex direction='row' justifyContent='space-between'>
                  <Text as='b'>{item.name}</Text>
                  <Text px={2}>{item.quantity}</Text>
                </Flex>
                <Text>${(Math.round(item.price * 100) / 100).toFixed(2)}</Text>
              </Box>)}
            <Divider pt={2} />
            <Flex direction='row' justifyContent='space-between' pt={2}>
              <Text as='b'>Total</Text>
              <Text as='b'>{(Math.round(props.cartTotal * 100) / 100).toFixed(2)}</Text>
            </Flex>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='red' mr={3} onClick={onModalClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default Cart;