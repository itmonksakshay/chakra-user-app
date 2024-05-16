import React from 'react'
import { Button, UseToastOptions, useToast } from '@chakra-ui/react'

type IProps = {
    label: string
} & UseToastOptions;

const UiToast = ({
    label,
    title,
    description,
    status,
    duration,
    isClosable
}: IProps) => {
    const toast = useToast()
    return (
        <Button
            onClick={() =>
                toast({
                    title,
                    description,
                    status,
                    duration,
                    isClosable,
                })
            }
        >
            {label}
        </Button>
    )
}

export default UiToast