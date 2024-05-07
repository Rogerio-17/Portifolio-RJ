import Particle from '@/components/Particle'
import { Flex, Grid, Link, Text } from '@chakra-ui/react'
import { GitHubIcon } from '@/icons/github'
import { LinkedinIcon } from '@/icons/linkedin'
import { InstagramIcon } from '@/icons/instagram'

export default function ContentHome() {
    return (
        <Grid templateColumns="2fr 1fr" h="90vh" w="85vw" id="home" px="1rem">
            <Flex lineHeight="2.8rem" position="absolute">
                <Particle />
                <Flex flexDirection="column" marginTop="12rem">
                    <Text fontSize="1.5rem">Olá, eu sou o</Text>
                    <Text
                        as="span"
                        fontWeight="bold"
                        fontSize="3.5rem"
                        textTransform="uppercase"
                        color="blue.100"
                        bgGradient="linear-gradient(0deg, #85ac6e 21%, #6c6e5f 100%)"
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
                            <LinkedinIcon color="#85ac6e" w="36px" h="36px" />
                        </Link>
                        <Link px="10px" py="5px" border="2px solid #85ac6e" borderRadius="50%">
                            <InstagramIcon color="#85ac6e" w="36px" h="36px" />
                        </Link>
                    </Flex>
                </Flex>
            </Flex>
            <Flex></Flex>
        </Grid>
    )
}
