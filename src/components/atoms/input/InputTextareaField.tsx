import { FormControl, FormErrorMessage, FormHelperText, FormLabel, InputProps, Textarea, TextareaProps } from '@chakra-ui/react'
import { UseControllerProps } from 'react-hook-form'
type IProps = {
    label: string,
    errorMessage: string,
} & TextareaProps & UseControllerProps;

const InputTextareaField = ({
    name,
    label,
    placeholder,
    errorMessage,
    ...extraProps
}: IProps) => {
    return (
        <>
            <FormControl isInvalid={!!errorMessage.length}>
                {!!label.length &&<FormLabel htmlFor={label}>{label}</FormLabel>}
                <Textarea  name={name} placeholder={placeholder} value={extraProps.value} onChange={extraProps.onChange} />
                {!!errorMessage.length && <FormErrorMessage>
                    {errorMessage}
                </FormErrorMessage>}
            </FormControl>
        </>
    )
}

export default InputTextareaField