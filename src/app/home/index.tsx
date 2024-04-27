import { Flex, Link, Text } from '@chakra-ui/react'
import ContentHome from './contentHome'
import About from './about'

export default function Home() {
    return (
        <Flex
            flexDirection="column"
            w="1280px"
            maxW="1280px"
            alignItems="center"
            margin="0 auto"
            px="1rem"
        >
            <ContentHome />
            <Flex bg="blue.900" position="relative" w="100vw">
                <About />
            </Flex>
        </Flex>
    )
}
