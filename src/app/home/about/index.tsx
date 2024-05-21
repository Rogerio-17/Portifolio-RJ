import { Tecs } from '@/data/tecs'
import { GitHubIcon } from '@/icons/github'
import { Box, Flex, Grid, Heading, Img, Text } from '@chakra-ui/react'

export default function About() {
    return (
        <Flex w="100%" justifyContent="center" id="sobre">
            <Flex flexDirection="column" alignItems="center" w="95vw" margin="auto">
                <Heading fontWeight="bold">Sobre mim</Heading>
                <Box
                    w="45px"
                    h="8px"
                    bg="red"
                    borderRadius="5px"
                    marginTop="0.5rem"
                    marginBottom="0.5rem"
                ></Box>
                <Text textAlign={{ base: 'justify', md: 'center' }} maxW="60rem">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. A aliquam nihil quis
                    odit omnis et facere ab consectetur tempore doloribus. Lorem ipsum, dolor sit
                    amet consectetur adipisicing elit. Rem aspernatur consequuntur praesentium nisi
                    in facere maiores beatae dolores debitis.
                </Text>
                {/* ------ colocar o carrossel aqui com as tecs */}
                <Flex
                    marginTop="3rem"
                    justifyContent="space-between"
                    flexDirection={{ base: 'column', md: 'row' }}
                    gap="1.5rem"
                >
                    <Flex flexDirection="column" w={{ base: '100%', md: '45%' }} gap="0.5rem">
                        <Heading fontSize="1.5rem" fontWeight="bold">
                            Um pouco sobre mim
                        </Heading>
                        <Flex textAlign="justify">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
                            error nam doloremque repellat totam iure consequuntur quam corrupti
                            ullam! Ipsum natus, impedit nemo aspernatur porro alias laboriosam!
                            Soluta, inventore minima? Lorem, ipsum dolor sit amet consectetur
                            adipisicing elit. Ipsum magnam possimus, repellendus quae omnis earum
                            vero in velit, temporibus optio saepe assumenda minima labore totam.
                            Cupiditate expedita esse soluta quas. Lorem ipsum dolor sit amet
                            consectetur adipisicing elit. Voluptates labore explicabo delectus
                            pariatur corrupti vero animi fuga voluptatibus? Ab sapiente voluptatibus
                            porro consequuntur facere soluta odio laudantium alias dolor eos.
                        </Flex>
                    </Flex>

                    <Flex flexDirection="column" w={{ base: '100%', md: '45%' }} gap="1rem">
                        <Heading fontSize="1.5rem" fontWeight="bold">
                            Minhas habilidades
                        </Heading>
                        <Flex
                            textAlign="center"
                            flexWrap="wrap"
                            gap="1rem"
                            justifyContent={{ base: 'center', md: 'normal' }}
                        >
                            {Tecs.map((tec) => (
                                <Flex
                                    key={tec.id}
                                    bg="rgba(153, 153, 153, 0.2)"
                                    p="0.5rem 1.2rem"
                                    justifyContent="left"
                                    alignItems="center"
                                    borderRadius="10px"
                                    gap="0.2rem"
                                >
                                    {tec.svg}
                                    <Text textAlign="start">{tec.name}</Text>
                                </Flex>
                            ))}
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    )
}
