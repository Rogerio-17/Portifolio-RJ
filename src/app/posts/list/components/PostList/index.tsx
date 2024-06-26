import { Box, Button, Flex, Image, Text } from '@chakra-ui/react'
import img from '@/assets/blog_pessoal.png'

export function PostList() {
    return (
        <Flex
            bg="rgba(236, 233, 233, 0.041)"
            boxShadow="0px 4px 4px 0px rgba(0, 0, 0, 0.35)"
            h="200px"
            my="1rem"
            gap="1rem"
            borderRadius="8px"
            overflow="hidden"
        >
            <Image src={img.src} w="260px" h="100%" alt="Imagem do projeto" />
            <Flex justifyContent="space-between" py="0.5rem">
                <Flex w="70%" flexDirection="column" justifyContent="space-between">
                    <Box>
                        <Text as="h2" fontSize="2rem">
                            Titulo do post
                        </Text>
                        <Text>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis
                            iure quibusdam suscipit perferendis impedit aspernatur, dolores nisi
                            laborum soluta assumenda quas harum accusamus natus esse neque!
                            Reprehenderit vero a debitis?
                        </Text>
                    </Box>

                    <Flex gap="0.8rem">
                        <Text>Tec 1</Text>
                        <Text>Tec 2</Text>
                        <Text>Tec 3</Text>
                    </Flex>
                </Flex>

                <Flex gap="1rem" mt="1rem" mr="1rem">
                    <Button bg="rgba(196, 194, 194, 0.144)">Edit</Button>
                    <Button bg="rgba(196, 194, 194, 0.144)">Del</Button>
                </Flex>
            </Flex>
        </Flex>
    )
}
