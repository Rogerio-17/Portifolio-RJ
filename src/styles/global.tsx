import { extendTheme } from '@chakra-ui/react'
import { colors } from './themes/colors/colors'

export const theme = extendTheme({
    fonts: {
        heading: 'var(--font-inter)',
        body: 'var(--font-inter)',
    },

    colors,

    styles: {
        global: {
            html: {
                scrollBehavior: 'smooth',
            },

            body: {
                overflowX: 'hidden',
                background: 'blue.900',
                color: 'white',
            },

            a: {
                textDecoration: 'none !important',
                cursor: 'pointer !important',
            },
        },
    },
})
