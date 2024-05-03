import { Button, Flex, Image, Link, Text } from '@chakra-ui/react'
import ignite from '@/assets/ignite_shop.png'
import { ArrowLeftIcon } from '@/icons/arrowLeft'
import NextLink from 'next/link'
import { ArrowTopRightIcon } from '@/icons/arrowTopRight'
import { RocketIcon } from '@/icons/rocket'

interface cardForProjectsProps {
    project: {
        id: string
        name: string
        imgUrl: string
        description: string
        tools: string[]
        linkRepository: string
        linkDeploy: string
    }
}

export function CardForProjects({ project }: cardForProjectsProps) {
    return (
        <Flex
            w="300px"
            bg="rgba(236, 233, 233, 0.041)"
            boxShadow="0px 4px 4px 0px rgba(0, 0, 0, 0.35)"
            borderRadius="10px"
            overflow="hidden"
            flexDirection="column"
            p="0.6rem"
        >
            <Image src={project.imgUrl} w="100%" h="170px" borderRadius="8px" mb="0.5rem" />
            <Text as="h3" fontSize="1.3rem" fontWeight="bold" mb="0.3rem">
                {project.name}
            </Text>
            <Text
                lineHeight="1rem"
                fontWeight="400"
                fontSize="0.9rem"
                textAlign="justify"
                color="gray"
                sx={{
                    display: '-webkit-box',
                    overflow: 'hidden',
                    WebkitBoxOrient: 'vertical',
                    WebkitLineClamp: 4, // número de linhas
                }}
            >
                {project.description}
            </Text>
            <Flex justifyContent="space-between" mt="1.5rem">
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
                    href={`project_details?projectId=${project.id}`}
                >
                    Ver detalhes <ArrowTopRightIcon w="20px" h="20px" />
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
    )
}
