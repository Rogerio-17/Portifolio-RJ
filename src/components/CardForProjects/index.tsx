import { Button, Flex, Image, Text } from '@chakra-ui/react'
import ignite from '@/assets/ignite_shop.png'

export function CardForProjects() {
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
            <Image src={ignite.src} w="100%" h="170px" borderRadius="8px" mb="0.5rem" />
            <Text as="h3" fontSize="1.3rem" fontWeight="bold" mb="0.3rem">
                Ignite Shop
            </Text>
            <Text
                lineHeight="1rem"
                fontWeight="400"
                fontSize="0.9rem"
                textAlign="justify"
                color="gray"
            >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed consequuntur molestias
                eum voluptate impedit sit quasi temporibu.
            </Text>
            <Flex justifyContent="space-between" mt="1.5rem">
                <Button
                    bg="rgba(153, 153, 153, 0.2)"
                    _hover={{
                        filter: 'brightness(0.85)',
                        transition: 'filter 0.3s ease',
                    }}
                >
                    Ver detalhes
                </Button>
                <Button
                    bg="blue.200"
                    _hover={{
                        filter: 'brightness(0.85)',
                        transition: 'filter 0.3s ease',
                    }}
                >
                    Deploy
                </Button>
            </Flex>
        </Flex>
    )
}
