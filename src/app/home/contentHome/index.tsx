import { Flex, Grid, Hide, Link, Show, Text } from '@chakra-ui/react'
import { GitHubIcon } from '@/icons/github'
import { LinkedinIcon } from '@/icons/linkedin'
import { InstagramIcon } from '@/icons/instagram'
import { WhatsappIcon } from '@/icons/whatsapp'

export default function ContentHome() {
    return (
        <Grid templateColumns="2fr 1fr" h="90vh" w="90vw" id="home">
            <Flex position="absolute">
                <Flex
                    flexDirection="column"
                    marginTop={{ base: '25vh', md: '28vh' }}
                    lineHeight={{ base: '2.4rem', md: '2.8rem' }}
                >
                    <Text fontSize="1.5rem">Olá, eu sou o</Text>
                    <Text
                        as="span"
                        fontWeight="bold"
                        fontSize={{ base: '2.8rem', md: '3.5rem' }}
                        textTransform="uppercase"
                        color="blue.100"
                        bgGradient="linear-gradient(0deg, #85ac6e 21%, #6c6e5f 100%)"
                        bgClip="text"
                    >
                        Rogerio José
                    </Text>
                    <Text fontSize="1.2rem">Desenvolvedor front-end</Text>
                    <Flex gap="1rem">
                        <Link
                            p="10px"
                            px={{ base: '10px', md: '15px' }}
                            border="2px solid #85ac6e"
                            borderRadius="50%"
                        >
                            <GitHubIcon color="#85ac6e" w="36px" h="36px" />
                        </Link>
                        <Link
                            p="10px"
                            px={{ base: '10px', md: '15px' }}
                            border="2px solid #85ac6e"
                            borderRadius="50%"
                        >
                            <LinkedinIcon color="#85ac6e" w="36px" h="36px" />
                        </Link>
                        <Link
                            p="10px"
                            px={{ base: '10px', md: '15px' }}
                            border="2px solid #85ac6e"
                            borderRadius="50%"
                        >
                            <InstagramIcon color="#85ac6e" w="36px" h="36px" />
                        </Link>
                        <Link
                            p="10px"
                            px={{ base: '10px', md: '15px' }}
                            border="2px solid #85ac6e"
                            borderRadius="50%"
                        >
                            <WhatsappIcon color="#85ac6e" w="36px" h="36px" />
                        </Link>
                    </Flex>
                </Flex>
            </Flex>
            <Flex></Flex>
        </Grid>
    )
}
