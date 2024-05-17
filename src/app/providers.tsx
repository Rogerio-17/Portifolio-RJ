'use client'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '@/styles/global'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <ChakraProvider theme={theme}>
            {children}
            <ToastContainer />
        </ChakraProvider>
    )
}
