'use client'
import { Flex, Grid, Link, Text, useBreakpointValue } from '@chakra-ui/react'
import { GitHubIcon } from '@/icons/github'
import { LinkedinIcon } from '@/icons/linkedin'
import { InstagramIcon } from '@/icons/instagram'
import { WhatsappIcon } from '@/icons/whatsapp'
import Particle from '@/components/Particle'
import NextLink from 'next/link'

export default function ContentHome() {
    const isMobile = useBreakpointValue({ base: true, md: false })
    const linkWhtasApp =
        'https://wa.me/5584981301382?text=Ol%C3%A1%20Rog%C3%A9rio%2C%20encontrei%20seu%20portf%C3%B3lio%20e%20estou%20muito%20interessado%20em%20falar%20com%20voc%C3%AA.'

    return (
        <Grid templateColumns="2fr 1fr" h="90vh" w="95vw" id="home">
            <Flex position="absolute">
                <Particle isMobile={isMobile || false} />
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
                    <Text fontSize="1.2rem">Desenvolvedor full-stack</Text>
                    <Flex gap="1rem">
                        <Link
                            as={NextLink}
                            py={{ base: '10px', md: '5px' }}
                            px={{ base: '10px', md: '10px' }}
                            border="2px solid #85ac6e"
                            borderRadius="50%"
                            href="https://github.com/Rogerio-17"
                            target="_blank"
                        >
                            <GitHubIcon color="#85ac6e" w="36px" h="36px" />
                        </Link>
                        <Link
                            as={NextLink}
                            py={{ base: '10px', md: '5px' }}
                            px={{ base: '10px', md: '10px' }}
                            border="2px solid #85ac6e"
                            borderRadius="50%"
                            href="https://www.linkedin.com/in/rog%C3%A9rio-jos%C3%A9-329a581aa/"
                            target="_blank"
                        >
                            <LinkedinIcon color="#85ac6e" w="36px" h="36px" />
                        </Link>
                        <Link
                            as={NextLink}
                            py={{ base: '10px', md: '5px' }}
                            px={{ base: '10px', md: '10px' }}
                            border="2px solid #85ac6e"
                            borderRadius="50%"
                            href="https://www.instagram.com/rogeriojose3556/"
                            target="_blank"
                        >
                            <InstagramIcon color="#85ac6e" w="36px" h="36px" />
                        </Link>
                        <Link
                            as={NextLink}
                            py={{ base: '10px', md: '5px' }}
                            px={{ base: '10px', md: '10px' }}
                            border="2px solid #85ac6e"
                            borderRadius="50%"
                            href={linkWhtasApp}
                            target="_blank"
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
