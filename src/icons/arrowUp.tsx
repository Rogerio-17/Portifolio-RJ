import { Icon, IconProps } from '@chakra-ui/react'

export function ArrowUpIcon(props: IconProps) {
    return (
        <Icon
            width="32"
            height="32"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            {...props}
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"
            />
        </Icon>
    )
}
