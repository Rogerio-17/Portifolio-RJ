import { Box, Button, Flex, FlexProps, Image, Link, Text } from '@chakra-ui/react'
import ignite from '@/assets/ignite_shop.png'
import { ArrowLeftIcon } from '@/icons/arrowLeft'
import NextLink from 'next/link'
import { ArrowTopRightIcon } from '@/icons/arrowTopRight'
import { RocketIcon } from '@/icons/rocket'
import { InformationIcon } from '@/icons/information'
import { ReactNode } from 'react'

interface cardForProjectsProps extends FlexProps {
    project: {
        id: string
        name: string
        imgUrl: string
        description: string
        tools: {
            id: number
            name: string
            svg: ReactNode
        }[]
        linkRepository: string
        linkDeploy: string
    }
}

export function CardForProjects({ project, ...props }: cardForProjectsProps) {
    return (
        <Flex
            w="400px"
            bg="rgba(236, 233, 233, 0.041)"
            boxShadow="0px 4px 4px 0px rgba(0, 0, 0, 0.35)"
            borderRadius="10px"
            overflow="hidden"
            flexDirection="column"
            p="0.6rem"
            position="relative"
            {...props}
        >
            {project.imgUrl !== '' ? (
                <>
                    <Image
                        src={project.imgUrl}
                        w="100%"
                        h={{ base: '25vh', md: '32vh' }}
                        borderRadius="8px"
                        mb="0.5rem"
                    />
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
                            fontSize={{ base: '0.8rem', md: '1rem' }}
                        >
                            Ver detalhes <ArrowTopRightIcon w="20px" h="20px" />
                        </Link>

                        {project.linkDeploy !== '' ? (
                            <Button
                                as={NextLink}
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
                                py="1.4rem"
                                borderRadius="8px"
                                target="_blank"
                                href={project.linkDeploy}
                                fontSize={{ base: '0.8rem', md: '1rem' }}
                            >
                                Deploy <RocketIcon w="20px" h="20px" />
                            </Button>
                        ) : (
                            <Button
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
                                py="1.4rem"
                                borderRadius="8px"
                                isDisabled
                                title="Deploy inexistente."
                                fontSize={{ base: '0.8rem', md: '1rem' }}
                            >
                                Deploy <RocketIcon w="20px" h="20px" />
                            </Button>
                        )}
                    </Flex>
                </>
            ) : (
                <>
                    <Flex
                        bg="rgba(153, 153, 153, 0.075)"
                        w="100%"
                        h={{ base: '25vh', md: '32vh' }}
                        borderRadius="8px"
                        mb="0.5rem"
                        alignItems="center"
                        justifyContent="center"
                        fontSize={{ base: '1rem', md: '1.5rem' }}
                    >
                        Em desenvolvimento!
                    </Flex>

                    <Flex gap="0.3rem" alignItems="center" mb="0.2rem">
                        <Text
                            cursor="pointer"
                            title={`Este projeto está temporariamente\nindisponível pois está em\ndesenvolvimento. Assim que for\nconcluído, estará no meu\nportfólio.`}
                            whiteSpace="pre-line"
                        >
                            <InformationIcon
                                w={{ base: '18', md: '22' }}
                                h={{ base: '18', md: '22' }}
                            />
                        </Text>
                        <Text as="h3" fontSize={{ base: '1rem', md: '1.3rem' }} fontWeight="bold">
                            Indisponível
                        </Text>
                    </Flex>

                    <Text
                        lineHeight="4.5rem"
                        fontWeight="400"
                        fontSize="0.9rem"
                        textAlign="center"
                        color="gray"
                        sx={{
                            display: '-webkit-box',
                            overflow: 'hidden',
                            WebkitBoxOrient: 'vertical',
                            WebkitLineClamp: 4, // número de linhas
                        }}
                    >
                        Descrição indisponível!
                    </Text>

                    <Flex
                        justifyContent="space-between"
                        mt="1.5rem"
                        position="absolute"
                        bottom="0.6rem"
                        w={{ base: '93%', md: '95%' }}
                    >
                        <Button
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
                            py="1.4rem"
                            borderRadius="8px"
                            isDisabled
                            title="Indisponível"
                            fontSize={{ base: '0.8rem', md: '1rem' }}
                        >
                            Ver detalhes <ArrowTopRightIcon w="20px" h="20px" />
                        </Button>

                        <Button
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
                            py="1.4rem"
                            borderRadius="8px"
                            isDisabled
                            title="Deploy inexistente."
                            fontSize={{ base: '0.8rem', md: '1rem' }}
                        >
                            Deploy <RocketIcon w="20px" h="20px" />
                        </Button>
                    </Flex>
                </>
            )}
        </Flex>
    )
}
