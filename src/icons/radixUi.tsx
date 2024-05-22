import { Icon, IconProps } from '@chakra-ui/react'

export function RadixUiIcon(props: IconProps) {
    return (
        <Icon
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="none"
            viewBox="4 0 17 25"
            {...props}
        >
            <path
                d="M12 25a8 8 0 1 1 0-16v16zM12 0H4v8h8V0zM17 8a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"
                fill="currentcolor"
            />
        </Icon>
    )
}
