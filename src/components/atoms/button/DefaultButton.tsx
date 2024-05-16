import React from 'react'
import { Button, ButtonProps } from '@chakra-ui/react'

type IProps = {
    label: string,
} & ButtonProps;

const DefaultButton = ({
    label,
    ...extraProps
}: IProps) => {
    return (
        <Button colorScheme='teal' variant='solid' {...extraProps} >
            {label}
        </Button>
    )
}

export default DefaultButton