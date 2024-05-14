import { Flex } from '@chakra-ui/react'
import ContentHome from './contentHome'
import About from './about'
import { Projets } from './projects'
import { Contact } from './contact'

export default function Home() {
    return (
        <Flex flexDirection="column" alignItems="center" margin="0 auto">
            <ContentHome />
            <About />
            <Projets />
            <Contact />
        </Flex>
    )
}
