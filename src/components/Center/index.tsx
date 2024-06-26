import { Flex } from '@chakra-ui/react'
import { ReactNode } from 'react'

export function Center({ children }: { children: ReactNode }) {
    return (
        <Flex flexDirection="column" w="95vw" margin="auto">
            {children}
        </Flex>
    )
}
