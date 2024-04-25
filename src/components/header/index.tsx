import { Flex, Link } from '@chakra-ui/react'

export function Header() {
    return (
        <Flex w="100%" bg="red">
            <Flex>
                <Flex>
                    <Link href="/">Logo</Link>
                </Flex>

                <Flex>
                    <Link>Home</Link>
                    <Link>About</Link>
                    <Link>Projetos</Link>
                    <Link>Contact</Link>
                </Flex>
            </Flex>
        </Flex>
    )
}
