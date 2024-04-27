import { Flex, Link } from '@chakra-ui/react'
import { ButtonContainer } from '../ButtonContainer'

export function Header() {
    return (
        <Flex w="100%" justifyContent="center" py="1.2rem">
            <Flex
                justifyContent="space-between"
                alignItems="center"
                w="1280px"
                maxW="1280px"
                px="1rem"
            >
                <Flex>
                    <Link href="/" fontSize="1.5rem">
                        Logo
                    </Link>
                </Flex>

                <Flex gap="3rem">
                    <Link
                        _hover={{
                            filter: 'brightness(0.85)',
                            transition: 'filter 0.3s ease',
                        }}
                    >
                        Home
                    </Link>
                    <Link
                        _hover={{
                            filter: 'brightness(0.90)',
                            transition: 'filter 0.3s ease',
                        }}
                    >
                        About
                    </Link>
                    <Link
                        _hover={{
                            filter: 'brightness(0.90)',
                            transition: 'filter 0.3s ease',
                        }}
                    >
                        Projetos
                    </Link>
                    <Link
                        _hover={{
                            filter: 'brightness(0.90)',
                            transition: 'filter 0.3s ease',
                        }}
                    >
                        Contact
                    </Link>
                </Flex>

                <ButtonContainer> Download CV</ButtonContainer>
            </Flex>
        </Flex>
    )
}
