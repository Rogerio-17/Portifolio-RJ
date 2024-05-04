import { Link, LinkProps } from '@chakra-ui/react'

export function ButtonContainer({ ...props }: LinkProps) {
    return (
        <Link
            py="0.5rem"
            px="1rem"
            border="2px solid white"
            borderRadius="2rem"
            _active={{
                opacity: '1',
            }}
            _hover={{
                filter: 'brightness(0.85)',
                transition: 'filter 0.3s ease',
            }}
            {...props}
        >
            {props.children}
        </Link>
    )
}
