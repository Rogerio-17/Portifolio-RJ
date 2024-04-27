import Particle from '@/components/Particle'
import { Flex, Grid, GridItem, Img, Link, Text } from '@chakra-ui/react'
import { GitHubIcon } from '@/icons/github'

export default function ContentHome() {
    return (
        <Grid templateColumns="2fr 1fr" w="100%" h="90vh">
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
                    <Flex gap="1rem">
                        <Link px="10px" py="5px" border="2px solid #85ac6e" borderRadius="50%">
                            <GitHubIcon color="#85ac6e" w="36px" h="36px" />
                        </Link>
                        <Link px="10px" py="5px" border="2px solid #85ac6e" borderRadius="50%">
                            <GitHubIcon color="#85ac6e" w="36px" h="36px" />
                        </Link>
                        <Link px="10px" py="5px" border="2px solid #85ac6e" borderRadius="50%">
                            <GitHubIcon color="#85ac6e" w="36px" h="36px" />
                        </Link>
                    </Flex>
                </Flex>
            </Flex>
            <Flex></Flex>
        </Grid>
    )
}