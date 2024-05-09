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
        <Flex w="100%" justifyContent="center" py="1.2rem">
            <Flex justifyContent="space-between" alignItems="center" w="85vw" px="1rem">
                <Link href="/">
                    <Image src={logo.src} w="180px" h="50px" />
                </Link>

                <Show above="md">
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

                        <ButtonContainer
                            href={curriculum}
                            download="Rogerio_Jose"
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            gap="0.2rem"
                        >
                            <DownloadIcon w="1.2rem" h="1.2rem" /> Download CV
                        </ButtonContainer>
                    </Flex>
                </Show>

                <Hide above="lg">
                    <Flex justifyContent="right" gap="1rem">
                        <ButtonContainer
                            href={curriculum}
                            download="Rogerio_Jose"
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            gap="0.2rem"
                        >
                            <DownloadIcon w="1.2rem" h="1.2rem" /> Download CV
                        </ButtonContainer>
                        <Button onClick={onOpen} bg="transparent" w="30px">
                            <ListIcon w="28px" h="28px" color="white" />
                        </Button>
                        <Drawer
                            placement="right"
                            onClose={onClose}
                            isOpen={isOpen}
                            returnFocusOnClose={false}
                            preserveScrollBarGap={false}
                        >
                            <DrawerOverlay />
                            <DrawerContent bg="#10192c">
                                <DrawerHeader borderBottomWidth="1px">
                                    <Flex alignItems="center" justifyContent="right" p="1rem">
                                        <Button bg="transparent" onClick={onClose}>
                                            <X w="24px" h="24px" />
                                        </Button>
                                    </Flex>
                                </DrawerHeader>
                                <DrawerBody
                                    display="flex"
                                    flexDirection="column"
                                    gap="1rem"
                                    mt="1rem"
                                    px="1rem"
                                >
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
                                </DrawerBody>
                            </DrawerContent>
                        </Drawer>
                    </Flex>
                </Hide>
            </Flex>
        </Flex>
    )
}
