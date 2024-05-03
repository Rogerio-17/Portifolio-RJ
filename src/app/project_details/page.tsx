import { Button, Flex, Heading, Image, Link, Text } from '@chakra-ui/react'
import ignite from '@/assets/ignite_shop.png'
import { ArrowLeftIcon } from '@/icons/arrowLeft'
import { RocketIcon } from '@/icons/rocket'
import { Tecs } from '@/data/tecs'
import { projects } from '@/data/projects'
import NextLink from 'next/link'

interface ProjectDetailsProps {
    searchParams: {
        projectId: string
    }
}

export default function ProjectDetails({ searchParams }: ProjectDetailsProps) {
    const paramsId = searchParams.projectId
    const filterProject = projects.filter((project) => project.id === paramsId)
    const project = filterProject[0]

    return (
        <Flex
            w="85vw"
            px="1rem"
            margin="auto"
            justifyContent="center"
            flexDirection="column"
            gap="3rem"
        >
            <Flex
                p="0.6rem"
                justifyContent="center"
                borderRadius="8px"
                bg="rgba(236, 233, 233, 0.041)"
                boxShadow="0px 4px 4px 0px rgba(0, 0, 0, 0.35)"
                flexDirection="column"
                marginTop="1rem"
            >
                <Image src={project.imgUrl} w="100%" borderRadius="8px"></Image>
                <Flex justifyContent="center" gap="2rem" mt="0.5rem">
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
                        href="/"
                    >
                        <ArrowLeftIcon w="20px" h="20px" /> Voltar
                    </Link>
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
                </Flex>
            </Flex>

            <Flex flexDirection="column" gap="3rem" marginBottom="3rem">
                <Flex flexDirection="column" gap="1rem">
                    <Heading>{project.name}</Heading>
                    <Text fontSize="1.2rem" textAlign="justify">
                        {project.description}
                    </Text>
                </Flex>

                <Flex flexDirection="column" gap="1rem">
                    <Heading>Ferramentas utilizadas</Heading>
                    <Flex textAlign="center" flexWrap="wrap" gap="1rem">
                        {project.tools.map((tec) => (
                            <Flex
                                key={tec}
                                bg="rgba(153, 153, 153, 0.2)"
                                w="120px"
                                p="0.5rem"
                                justifyContent="center"
                                alignItems="center"
                                borderRadius="10px"
                            >
                                {tec}
                            </Flex>
                        ))}
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    )
}
