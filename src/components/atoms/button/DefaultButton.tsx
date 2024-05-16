import React from 'react'
import { Button, ButtonProps } from '@chakra-ui/react'

type IProps = {
    label: string
} & ButtonProps;

const DefaultButton = ({
    label
}: IProps) => {
    return (
        <Button colorScheme='teal' variant='solid'>
            {label}
        </Button>
    )
}

export default DefaultButton