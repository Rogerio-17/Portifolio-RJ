import { GitHubIcon } from '@/icons/github'
import { InstagramIcon } from '@/icons/instagram'
import { LinkedinIcon } from '@/icons/linkedin'
import { Flex, Link, Text } from '@chakra-ui/react'

export function Footer() {
    return (
        <Flex w="100vw" h="280px" bg="#03031def" position="relative" zIndex="1">
            <Flex w="75vw" margin="auto" flexDirection="column">
                <Flex h="150px" gap="1rem" flexDirection="column">
                    <Flex w="100%" justifyContent="space-between">
                        <Text fontSize="1.5rem" fontWeight="bold">
                            Rogério José Martins Filho
                        </Text>
                        <Text fontSize="1.5rem" fontWeight="bold">
                            Sociais
                        </Text>
                    </Flex>

                    <Flex w="100%" justifyContent="space-between">
                        <Text fontSize="0.8rem" w="28rem">
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
