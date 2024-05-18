'use client'
import { useState, useEffect } from 'react'
import { Button } from '@chakra-ui/react'
import { ArrowUpIcon } from '@/icons/arrowUp'

export function ScrollToTopButton() {
    const [isVisible, setIsVisible] = useState(false)

    const toggleVisibility = () => {
        if (window.pageYOffset > 400) {
            setIsVisible(true)
        } else {
            setIsVisible(false)
        }
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility)
        return () => {
            window.removeEventListener('scroll', toggleVisibility)
        }
    }, [])

    return (
        <Button
            position="fixed"
            bottom={{ base: '25px', md: '50px' }}
            right={{ base: '25px', md: '50px' }}
            display={isVisible ? 'flex' : 'none'}
            onClick={scrollToTop}
            boxShadow="0px 4px 4px 0px rgba(0, 0, 0, 0.35)"
            bg="blue.800"
            aria-label="Scroll to top"
            size="lg"
            borderRadius="full"
            zIndex={10}
        >
            <ArrowUpIcon w="1.2rem" h="1.2rem" />
        </Button>
    )
}
