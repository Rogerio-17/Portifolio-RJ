import { Tecs } from '@/data/tecs'
import { GitHubIcon } from '@/icons/github'
import { Box, Flex, Grid, Heading, Img, Text } from '@chakra-ui/react'

export default function About() {
    return (
        <Flex w="100%" justifyContent="center" id="sobre">
            <Flex flexDirection="column" alignItems="center" w="95vw" margin="auto">
                <Heading fontWeight="bold">Sobre mim</Heading>
                <Box
                    w="45px"
                    h="8px"
                    bg="red"
                    borderRadius="5px"
                    marginTop="0.5rem"
                    marginBottom="0.5rem"
                ></Box>
                <Text textAlign={{ base: 'justify', md: 'center' }} maxW="60rem">
                    Nesta seção, você encontrará informações sobre mim, incluindo o que faço, minhas
                    habilidades atuais e as ferramentas que utilizo no meu dia a dia como
                    programador.
                </Text>
                {/* ------ colocar o carrossel aqui com as tecs */}
                <Flex
                    marginTop="3rem"
                    justifyContent="space-between"
                    flexDirection={{ base: 'column', md: 'row' }}
                    gap="1.5rem"
                >
                    <Flex flexDirection="column" w={{ base: '100%', md: '45%' }} gap="0.5rem">
                        <Heading fontSize="1.5rem" fontWeight="bold">
                            Um pouco sobre mim
                        </Heading>
                        <Flex textAlign="justify">
                            <Text>
                                Meu nome é Rogério e atualmente trabalho como{' '}
                                <Text as="span" fontWeight="bold">
                                    {' '}
                                    desenvolvedor full-stack
                                </Text>{' '}
                                na BuildCode, no meu dia a dia, utilizo a linguagem de programação
                                <Text as="span" fontWeight="bold">
                                    {' '}
                                    TypeScript
                                </Text>
                                , além de ferramentas como{' '}
                                <Text as="span" fontWeight="bold">
                                    {' '}
                                    Next.js
                                </Text>
                                ,{' '}
                                <Text as="span" fontWeight="bold">
                                    {' '}
                                    Chakra UI
                                </Text>{' '}
                                e para o front-end, e{' '}
                                <Text as="span" fontWeight="bold">
                                    {' '}
                                    NodeJS
                                </Text>
                                ,
                                <Text as="span" fontWeight="bold">
                                    {' '}
                                    Prisma
                                </Text>{' '}
                                e{' '}
                                <Text as="span" fontWeight="bold">
                                    {' '}
                                    NestJS
                                </Text>{' '}
                                para o back-end. Busco constantemente aprimorar meus conhecimentos
                                técnicos e habilidades interpessoais.
                            </Text>
                        </Flex>
                    </Flex>

                    <Flex flexDirection="column" w={{ base: '100%', md: '45%' }} gap="1rem">
                        <Heading fontSize="1.5rem" fontWeight="bold">
                            Minhas habilidades
                        </Heading>
                        <Flex
                            textAlign="center"
                            flexWrap="wrap"
                            gap="1rem"
                            justifyContent={{ base: 'center', md: 'normal' }}
                        >
                            {Tecs.map((tec) => (
                                <Flex
                                    key={tec.id}
                                    bg="rgba(153, 153, 153, 0.2)"
                                    p="0.5rem 1.2rem"
                                    justifyContent="left"
                                    alignItems="center"
                                    borderRadius="10px"
                                    gap="0.2rem"
                                >
                                    {tec.svg}
                                    <Text textAlign="start">{tec.name}</Text>
                                </Flex>
                            ))}
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    )
}
