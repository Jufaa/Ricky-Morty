import { extendTheme } from '@chakra-ui/react';

export default extendTheme({
  config: {
    initialColorMode: 'dark'
  },
  styles: {
    global: () => ({
      '#root': {
        height: '100vh' // Establece la altura del contenedor al 100% de la altura de la ventana
      }
    })
  }
});
