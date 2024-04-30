import { CardForProjects } from '@/components/CardForProjects'
import { Box, Flex, Heading, Text } from '@chakra-ui/react'

export function Projets() {
    return (
        <Flex
            id="projects"
            flexDirection="column"
            alignItems="center"
            py="2rem"
            w="1280px"
            maxW="1280px"
            px="1rem"
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
            <Flex flexWrap="wrap" gap="1rem" mt="3rem">
                <CardForProjects />
                <CardForProjects />
                <CardForProjects />
                <CardForProjects />
            </Flex>
        </Flex>
    )
}
