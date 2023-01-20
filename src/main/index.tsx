import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from '@/presentation/components'
import { ChakraProvider } from '@chakra-ui/react'

ReactDOM.render(
  <ChakraProvider>
    <Router />
  </ChakraProvider>,
  document.getElementById('main')
)
