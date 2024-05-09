import { Icon, IconProps } from '@chakra-ui/react'

export function ListIcon(props: IconProps) {
    return (
        <Icon fill="none" {...props}>
            <path
                id="Vector"
                d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"
                fill="currentColor"
            />
        </Icon>
    )
}
