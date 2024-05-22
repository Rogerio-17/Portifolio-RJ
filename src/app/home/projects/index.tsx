'use client'
import { CardForProjects } from '@/components/CardForProjects'
import { projects } from '@/data/projects'
import { Box, Flex, Heading, Hide, Show, Text } from '@chakra-ui/react'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'

export function Projets() {
    const [sliderRef] = useKeenSlider({
        breakpoints: {
            '(min-width: 763px)': {
                slides: { perView: 2.25, spacing: 20 },
            },
            '(min-width: 1000px)': {
                slides: { perView: 3, spacing: 20 },
            },
        },
        slides: { perView: 1.125, spacing: 20 },
    })

    return (
        <Flex
            id="projects"
            flexDirection="column"
            alignItems="center"
            py="2rem"
            w="95vw"
            margin="auto"
            marginTop="5rem"
        >
            <Heading fontWeight="bold">Projetos</Heading>
            <Box
                w="45px"
                h="8px"
                bg="red"
                borderRadius="5px"
                marginTop="0.5rem"
                marginBottom="0.5rem"
            ></Box>
            <Text textAlign={{ base: 'justify', md: 'center' }} marginBottom="1rem">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. A aliquam nihil quis odit
                omnis et facere ab consectetur tempore doloribus.
            </Text>

            <Show above="md">
                <Flex p="5px" flexWrap="wrap" gap="2rem" justifyContent="center">
                    {projects.map((project) => (
                        <CardForProjects key={project.id} project={project} />
                    ))}
                </Flex>
            </Show>

            <Hide above="md">
                <Flex ref={sliderRef} className="keen-slider" p="5px">
                    {projects.map((project) => (
                        <CardForProjects
                            key={project.id}
                            project={project}
                            className="keen-slider__slide"
                        />
                    ))}
                </Flex>
            </Hide>
        </Flex>
    )
}
