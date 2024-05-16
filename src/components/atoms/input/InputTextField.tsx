import { FormControl, FormErrorMessage, FormHelperText, FormLabel, Input, InputProps } from '@chakra-ui/react'
import { UseControllerProps } from 'react-hook-form'

type IProps = {
    label: string,
    errorMessage: string,
} & InputProps & UseControllerProps;

const InputTextField = ({
    name,
    label,
    type,
    errorMessage,
    ...extraProps
}: IProps) => {
    return (
        <>
            <FormControl isInvalid={!!errorMessage.length}>
                <FormLabel htmlFor={label}>{label}</FormLabel>
                <Input type={type} name={name} {...extraProps} />
                {!!errorMessage.length && <FormErrorMessage>
                    {errorMessage}
                </FormErrorMessage>}
            </FormControl>
        </>
    )
}

export default InputTextField