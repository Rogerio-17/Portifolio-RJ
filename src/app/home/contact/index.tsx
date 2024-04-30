import { CardForProjects } from '@/components/CardForProjects'
import { SendIcon } from '@/icons/send'
import {
    Box,
    Button,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Text,
    Textarea,
} from '@chakra-ui/react'

export function Contact() {
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
            <Heading fontWeight="bold">Contatos</Heading>
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

            <FormControl
                marginTop="3rem"
                w="40vw"
                p="2rem"
                bg="rgba(236, 233, 233, 0.041)"
                boxShadow="0px 4px 4px 0px rgba(0, 0, 0, 0.35)"
                borderRadius="10px"
                display="flex"
                flexDirection="column"
                gap="1.5rem"
            >
                <Box>
                    <FormLabel>Nome</FormLabel>
                    <Input placeholder="Digite seu nome" style={{ opacity: 0.7 }} />
                </Box>
                <Box>
                    <FormLabel>E-mail</FormLabel>
                    <Input placeholder="Seuemail@mail.com" style={{ opacity: 0.7 }} />
                </Box>

                <Box>
                    <FormLabel>Mensagem</FormLabel>
                    <Textarea
                        placeholder="Digite sua mensagem"
                        resize="none"
                        height="200px"
                        style={{ opacity: 0.7 }}
                    />
                </Box>

                <Button
                    bg="blue.200"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    gap="0.5rem"
                    h="50px"
                >
                    ENVIAR
                    <SendIcon w="18px" h="18px" />
                </Button>
            </FormControl>
        </Flex>
    )
}
