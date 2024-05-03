import { Icon, IconProps } from '@chakra-ui/react'

export function ArrowLeftIcon(props: IconProps) {
    return (
        <Icon
            width="32"
            height="32"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            {...props}
        >
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                fill="currentColor"
            />
        </Icon>
    )
}
