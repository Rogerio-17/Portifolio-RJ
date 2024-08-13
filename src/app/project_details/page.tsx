import { Button, Flex, Heading, Image, Link, Text } from '@chakra-ui/react'
import ignite from '@/assets/ignite_shop.png'
import { ArrowLeftIcon } from '@/icons/arrowLeft'
import { RocketIcon } from '@/icons/rocket'
import { Tecs } from '@/data/tecs'
import { projects } from '@/data/projects'
import NextLink from 'next/link'
import { GitHubIcon } from '@/icons/github'
import type { Metadata } from 'next'
import { ReactNode } from 'react'

interface ProjectDetailsProps {
    searchParams: {
        projectId: string
    }
}

interface ToolsProps {
    id: number
    name: string
    svg: ReactNode
}

export const metadata: Metadata = {
    title: 'Portifolio RJ | Detalhes',
    description:
        'Portifolio para mostrar meus projetos, falar um pouco sobre mim e mostrar as tecnologias que estou por dentro.',
}

export default function ProjectDetails({ searchParams }: ProjectDetailsProps) {
    const paramsId = searchParams.projectId
    const filterProject = projects.filter((project) => project.id === paramsId)
    const project = filterProject[0]

    return (
        <Flex w="95vw" margin="auto" justifyContent="center" flexDirection="column" gap="1rem">
            <Link
                as={NextLink}
                bg="transparent"
                _hover={{
                    filter: 'brightness(0.85)',
                    transition: 'filter 0.3s ease',
                }}
                display="flex"
                alignItems="center"
                justifyContent="center"
                gap="0.5rem"
                borderRadius="8px"
                w="5rem"
                fontSize={{ base: '0.8rem', md: '1rem' }}
                href="/"
            >
                <ArrowLeftIcon w="22px" h="22px" /> Voltar
            </Link>
            <Flex flexDirection="column" gap="3rem">
                <Flex
                    p="0.6rem"
                    justifyContent="center"
                    borderRadius="8px"
                    bg="rgba(236, 233, 233, 0.041)"
                    boxShadow="0px 4px 4px 0px rgba(0, 0, 0, 0.35)"
                    flexDirection="column"
                >
                    <Image src={project.imgUrl} w="100%" borderRadius="8px" minH="30vh"></Image>
                    <Flex justifyContent="center" gap="2rem" mt="0.5rem">
                        {project.linkDeploy !== '' ? (
                            <Link
                                bg="blue.200"
                                _hover={{
                                    filter: 'brightness(0.85)',
                                    transition: 'filter 0.3s ease',
                                }}
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                                gap="0.5rem"
                                px="1rem"
                                py="0.6rem"
                                borderRadius="8px"
                                target="_blank"
                                href={project.linkDeploy}
                            >
                                Deploy <RocketIcon w="20px" h="20px" />
                            </Link>
                        ) : (
                            ''
                        )}
                        <Link
                            as={NextLink}
                            bg="rgba(153, 153, 153, 0.2)"
                            _hover={{
                                filter: 'brightness(0.85)',
                                transition: 'filter 0.3s ease',
                            }}
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            gap="0.5rem"
                            px="1rem"
                            py="0.6rem"
                            borderRadius="8px"
                            target="_blank"
                            href={project.linkRepository}
                        >
                            <GitHubIcon w="20px" h="20px" />
                            Ver repositorio
                        </Link>
                    </Flex>
                </Flex>

                <Flex
                    flexDirection="column"
                    gap={{ base: '1.5rem', md: '3rem' }}
                    marginBottom="3rem"
                >
                    <Flex
                        flexDirection="column"
                        gap="1rem"
                        fontSize={{ base: '0.8rem', md: '1rem' }}
                    >
                        <Heading>{project.name}</Heading>
                        <Text textAlign="justify">{project.description}</Text>
                    </Flex>

                    <Flex flexDirection="column" gap={{ base: '0.5rem', md: '1rem' }}>
                        <Heading textAlign={{ base: 'left', md: 'initial' }}>
                            Ferramentas utilizadas
                        </Heading>
                        <Flex
                            textAlign="center"
                            flexWrap="wrap"
                            gap={{ base: '0.5rem', md: '1rem' }}
                            justifyContent="left"
                        >
                            {project.tools.map((tec: ToolsProps) => (
                                <Flex
                                    key={tec.id}
                                    bg="rgba(153, 153, 153, 0.2)"
                                    p="0.5rem"
                                    justifyContent="center"
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
