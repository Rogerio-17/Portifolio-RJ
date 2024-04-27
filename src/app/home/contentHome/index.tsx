import Particle from '@/components/Particle'
import { Flex, Grid, GridItem, Link, Text } from '@chakra-ui/react'

export default function ContentHome() {
    return (
        <Grid templateColumns="2fr 1fr" w="100%" h="85vh">
            <Flex lineHeight="2.8rem" position="absolute">
                <Particle />
                <Flex flexDirection="column" marginTop="10rem">
                    <Text fontSize="1.5rem">Olá, eu sou o</Text>
                    <Text
                        fontWeight="bold"
                        fontSize="3.5rem"
                        textTransform="uppercase"
                        color="blue.100"
                        bgGradient="linear-gradient(0deg, #85ac6e 21%, #6c6e5f 100%)a"
                        bgClip="text"
                    >
                        Rogerio José
                    </Text>
                    <Text fontSize="1.2rem">Desenvolvedor front-end</Text>
                </Flex>
            </Flex>
            <Flex></Flex>
        </Grid>
    )
}
