'use client'
import { GitHubIcon } from '@/icons/github'
import { InstagramIcon } from '@/icons/instagram'
import { LinkedinIcon } from '@/icons/linkedin'
import { WhatsappIcon } from '@/icons/whatsapp'
import { Flex, Link, Text } from '@chakra-ui/react'
import NextLink from 'next/link'

export function Footer() {
    const linkWhtasApp =
        'https://wa.me/5584981301382?text=Ol%C3%A1%20Rog%C3%A9rio%2C%20encontrei%20seu%20portf%C3%B3lio%20e%20estou%20muito%20interessado%20em%20falar%20com%20voc%C3%AA.'
    return (
        <Flex w="100vw" h="280px" bg="#03031def" position="relative" zIndex="1">
            <Flex w={{ base: '95vw', md: '95vw' }} margin="auto" flexDirection="column">
                <Flex
                    h="150px"
                    gap="1rem"
                    flexDirection="column"
                    fontSize={{ base: '1rem', md: '1.7rem' }}
                >
                    <Flex w="100%" justifyContent="space-between">
                        <Text fontWeight="bold">Rogério José Martins Filho</Text>
                        <Text fontWeight="bold" w="7.5rem" textAlign="center">
                            Sociais
                        </Text>
                    </Flex>

                    <Flex w="100%" justifyContent="space-between">
                        <Text
                            fontSize={{ base: '0.8rem', md: '1rem' }}
                            w={{ base: '13rem', md: '22rem' }}
                            textAlign="justify"
                        >
                            Um desenvolvedor web focado no full-stack, transformando ideias em
                            experiências digitais memoráveis, uma linha de código por vez.{' '}
                        </Text>

                        <Flex gap="0.5rem">
                            <Link
                                as={NextLink}
                                href="https://github.com/Rogerio-17"
                                target="_blank"
                            >
                                {' '}
                                <GitHubIcon w="24px" h="24px" />
                            </Link>
                            <Link
                                as={NextLink}
                                href="https://www.linkedin.com/in/rog%C3%A9rio-jos%C3%A9-329a581aa/"
                                target="_blank"
                            >
                                {' '}
                                <LinkedinIcon w="24px" h="24px" />
                            </Link>
                            <Link
                                as={NextLink}
                                href="https://www.instagram.com/rogeriojose3556/"
                                target="_blank"
                            >
                                {' '}
                                <InstagramIcon w="24px" h="24px" />
                            </Link>
                            <Link as={NextLink} href={linkWhtasApp} target="_blank">
                                {' '}
                                <WhatsappIcon w="24px" h="24px" />
                            </Link>
                        </Flex>
                    </Flex>
                </Flex>

                <Flex
                    h="50px"
                    alignItems="flex-end"
                    justifyContent="center"
                    borderTop="2px solid rgba(153, 153, 153, 0.438)"
                >
                    <Text fontSize="0.8rem">
                        © Direitos Autorais {new Date().getFullYear()}. Feito por{' '}
                        <Link href="/#home" textDecoration="underline !important">
                            Rogério José
                        </Link>
                    </Text>
                </Flex>
            </Flex>
        </Flex>
    )
}
