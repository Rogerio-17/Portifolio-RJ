import { Center } from '@/components/Center'
import { Button, Flex, Heading, Text } from '@chakra-ui/react'
import { PostList } from './components/PostList'

export default function CreatePost() {
    return (
        <Center>
            <Heading>Cdastro de posts</Heading>
            <Flex flexDirection="column">
                <Flex justifyContent="right">
                    <Button bg="blue.600">Adicionar novo post</Button>
                </Flex>
                <Flex flexDirection="column">
                    <PostList />
                    <PostList />
                </Flex>
            </Flex>
        </Center>
    )
}
