'use client'
import {
    Button,
    Drawer,
    DrawerBody,
    DrawerContent,
    DrawerHeader,
    DrawerOverlay,
    Flex,
    Hide,
    Image,
    Link,
    Show,
    useDisclosure,
} from '@chakra-ui/react'
import { ButtonContainer } from '../ButtonContainer'
import logo from '@/assets/logo.png'
import { DownloadIcon } from '@/icons/download'
import { ListIcon } from '@/icons/list'
import { X } from '@/icons/X'

export function Header() {
    const curriculum = '/pdfs/rogerio_jose.pdf'
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <Flex justifyContent="center" py="1.2rem">
            <Flex justifyContent="space-between" w="95vw">
                <Link href="/">
                    <Image src={logo.src} w={{ base: '160px', md: '180px' }} h="50px" />
                </Link>

                <Show above="md">
                    <Flex alignItems="center" gap="2rem">
                        <Flex gap="2rem">
                            <Link
                                _hover={{
                                    filter: 'brightness(0.85)',
                                    transition: 'filter 0.3s ease',
                                }}
                                href="/#home"
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
                                Contato
                            </Link>
                        </Flex>

                        <ButtonContainer
                            href={curriculum}
                            download="Rogerio_Jose"
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            gap="0.2rem"
                            px="8px"
                            fontSize="0.8rem"
                        >
                            <DownloadIcon w="1.2rem" h="1.2rem" /> Download CV
                        </ButtonContainer>
                    </Flex>
                </Show>

                <Hide above="md">
                    <Flex alignItems="center" gap="0.2rem">
                        <ButtonContainer
                            href={curriculum}
                            download="Rogerio_Jose"
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            gap="0.2rem"
                            p="6px"
                            fontSize="0.8rem"
                            h="35px"
                        >
                            <DownloadIcon w="1.2rem" h="1.2rem" /> Download CV
                        </ButtonContainer>
                        <Button onClick={onOpen} bg="transparent" w="20px">
                            <ListIcon w="28px" h="28px" color="white" />
                        </Button>
                        <Drawer
                            placement="right"
                            onClose={onClose}
                            isOpen={isOpen}
                            returnFocusOnClose={false}
                            preserveScrollBarGap={false}
                            size="full"
                        >
                            <DrawerOverlay />
                            <DrawerContent bg="#10192c">
                                <DrawerHeader p="0.5rem">
                                    <Flex justifyContent="right">
                                        <Button bg="transparent" onClick={onClose}>
                                            <X w="32px" h="32px" />
                                        </Button>
                                    </Flex>
                                </DrawerHeader>
                                <DrawerBody
                                    display="flex"
                                    flexDirection="column"
                                    alignItems="center"
                                    gap="2rem"
                                    mt="1rem"
                                    px="1rem"
                                    fontSize="2rem"
                                    marginTop="2rem"
                                >
                                    <Link
                                        _hover={{
                                            filter: 'brightness(0.85)',
                                            transition: 'filter 0.3s ease',
                                        }}
                                        href="/#home"
                                        onClick={onClose}
                                    >
                                        Home
                                    </Link>

                                    <Link
                                        _hover={{
                                            filter: 'brightness(0.90)',
                                            transition: 'filter 0.3s ease',
                                        }}
                                        href="/#sobre"
                                        onClick={onClose}
                                    >
                                        Sobre
                                    </Link>
                                    <Link
                                        _hover={{
                                            filter: 'brightness(0.90)',
                                            transition: 'filter 0.3s ease',
                                        }}
                                        href="/#projects"
                                        onClick={onClose}
                                    >
                                        Projetos
                                    </Link>
                                    <Link
                                        _hover={{
                                            filter: 'brightness(0.90)',
                                            transition: 'filter 0.3s ease',
                                        }}
                                        href="/#contacts"
                                        onClick={onClose}
                                    >
                                        Contato
                                    </Link>
                                </DrawerBody>
                            </DrawerContent>
                        </Drawer>
                    </Flex>
                </Hide>
            </Flex>
        </Flex>
    )
}
