import { extendTheme} from '@chakra-ui/react'

const theme = extendTheme({
  fonts: {
    heading: `'Merriweather', serif`,
    body: `'Inter', sans-serif`,
  },
  colors: {
    heading: {
      100: "#C54430", // red
      200: "FFFFFF" // white
    },
  },
  initialColorMode: 'dark',
  useSystemColorMode: true,
  styles: {
    global: {
      body: {
        transitionProperty: "all",
        transitionDuration: "normal"
      }
    }
  },
  config: {
    disableTransitionOnChange: false
  }
})

export default theme
