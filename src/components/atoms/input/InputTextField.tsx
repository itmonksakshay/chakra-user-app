import { FormControl, FormHelperText, FormLabel, Input, InputProps } from '@chakra-ui/react'
import { UseControllerProps } from 'react-hook-form'

type IProps = {
    label: string,
} & InputProps & UseControllerProps;

const InputTextField = ({
    name,
    label,
    type,
    ...extraProps
}: IProps) => {
    return (
        <>
            <FormControl>
                <FormLabel>{label}</FormLabel>
                <Input type={type} name={name} {...extraProps} />
                <FormHelperText></FormHelperText>
            </FormControl>
        </>
    )
}

export default InputTextField