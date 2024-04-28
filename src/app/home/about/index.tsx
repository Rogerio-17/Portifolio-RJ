import { GitHubIcon } from '@/icons/github'
import { Box, Flex, Grid, Heading, Img, Text } from '@chakra-ui/react'

export default function About() {
    return (
        <Flex w="100%" justifyContent="center" margin="">
            <Flex
                flexDirection="column"
                alignItems="center"
                py="2rem"
                w="1280px"
                maxW="1280px"
                px="1rem"
            >
                <Heading fontWeight="bold">Sobre mim</Heading>
                <Box
                    w="35px"
                    h="10px"
                    bg="red"
                    borderRadius="5px"
                    marginTop="0.5rem"
                    marginBottom="0.5rem"
                ></Box>
                <Text textAlign="center">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. A aliquam nihil quis
                    odit omnis et facere ab consectetur tempore doloribus. Lorem ipsum, dolor sit
                    amet consectetur adipisicing elit. Rem aspernatur consequuntur praesentium nisi
                    in facere maiores beatae dolores debitis.
                </Text>
            </Flex>
        </Flex>
    )
}
