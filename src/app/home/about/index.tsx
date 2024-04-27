import { GitHubIcon } from '@/icons/github'
import { Flex, Grid, Img, Text } from '@chakra-ui/react'

export default function About() {
    return (
        <Grid templateColumns="2fr 1fr" w="100%">
            <Flex lineHeight="2.8rem">
                <Flex flexDirection="column" marginTop="10rem">
                    <Text fontSize="1.5rem">Olá, eu sou o</Text>
                    <Text
                        fontWeight="bold"
                        fontSize="3.5rem"
                        textTransform="uppercase"
                        color="blue.100"
                        bgGradient="linear-gradient(0deg, #5e794e 21%, #b0b687 100%)a"
                        bgClip="text"
                    >
                        Rogerio José
                    </Text>
                    <Text fontSize="1.2rem">Desenvolvedor front-end</Text>
                </Flex>
                <Flex></Flex>
            </Flex>
            <Flex></Flex>
        </Grid>
    )
}
