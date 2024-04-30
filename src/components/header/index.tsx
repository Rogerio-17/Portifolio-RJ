import { Flex, Image, Link } from '@chakra-ui/react'
import { ButtonContainer } from '../ButtonContainer'
import logo from '@/assets/logo.png'

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
                <Link href="/">
                    <Image src={logo.src} w="180px" h="50px" />
                </Link>

                <Flex gap="3rem">
                    <Link
                        _hover={{
                            filter: 'brightness(0.85)',
                            transition: 'filter 0.3s ease',
                        }}
                        href="/"
                    >
                        Home
                    </Link>
                    <Link
                        _hover={{
                            filter: 'brightness(0.90)',
                            transition: 'filter 0.3s ease',
                        }}
                        href="/#sobre"
                    >
                        Sobre
                    </Link>
                    <Link
                        _hover={{
                            filter: 'brightness(0.90)',
                            transition: 'filter 0.3s ease',
                        }}
                        href="/#projects"
                    >
                        Projetos
                    </Link>
                    <Link
                        _hover={{
                            filter: 'brightness(0.90)',
                            transition: 'filter 0.3s ease',
                        }}
                    >
                        Contatos
                    </Link>
                </Flex>

                <ButtonContainer> Download CV</ButtonContainer>
            </Flex>
        </Flex>
    )
}
