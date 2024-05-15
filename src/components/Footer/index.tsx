'use client'
import { GitHubIcon } from '@/icons/github'
import { InstagramIcon } from '@/icons/instagram'
import { LinkedinIcon } from '@/icons/linkedin'
import { WhatsappIcon } from '@/icons/whatsapp'
import { Flex, Link, Text } from '@chakra-ui/react'

export function Footer() {
    return (
        <Flex w="100vw" h="280px" bg="#03031def" position="relative" zIndex="1">
            <Flex w={{ base: '95vw', md: '75vw' }} margin="auto" flexDirection="column">
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
                            Um desenvolvedor web focado no front end, transformando ideias em
                            experiências digitais memoráveis, uma linha de código por vez.{' '}
                        </Text>

                        <Flex gap="0.5rem">
                            <Link>
                                {' '}
                                <GitHubIcon w="24px" h="24px" />
                            </Link>
                            <Link>
                                {' '}
                                <LinkedinIcon w="24px" h="24px" />
                            </Link>
                            <Link>
                                {' '}
                                <InstagramIcon w="24px" h="24px" />
                            </Link>
                            <Link>
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
                        © Direitos Autorais 2024. Feito por{' '}
                        <Link href="/#home" textDecoration="underline !important">
                            Rogério José
                        </Link>
                    </Text>
                </Flex>
            </Flex>
        </Flex>
    )
}
