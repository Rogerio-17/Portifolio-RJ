import { CardForProjects } from '@/components/CardForProjects'
import { projects } from '@/data/projects'
import { Box, Flex, Heading, Text } from '@chakra-ui/react'

export function Projets() {
    return (
        <Flex
            id="projects"
            flexDirection="column"
            alignItems="center"
            py="2rem"
            w="85vw"
            margin="auto"
            marginTop="5rem"
        >
            <Heading fontWeight="bold">Projetos</Heading>
            <Box
                w="45px"
                h="8px"
                bg="red"
                borderRadius="5px"
                marginTop="0.5rem"
                marginBottom="0.5rem"
            ></Box>
            <Text textAlign="center">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. A aliquam nihil quis odit
                omnis et facere ab consectetur tempore doloribus.
            </Text>
            <Flex flexWrap="wrap" gap="1rem" mt="3rem" justifyContent="center">
                {projects.map((project) => (
                    <CardForProjects key={project.id} project={project} />
                ))}
            </Flex>
        </Flex>
    )
}
