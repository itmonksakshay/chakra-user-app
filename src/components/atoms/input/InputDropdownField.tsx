import React from 'react'
import { FormControl, FormErrorMessage, FormHelperText, FormLabel, Select, SelectProps } from '@chakra-ui/react';
import { UseControllerProps } from 'react-hook-form';
import { DropdownTypes } from '@/types/users';

type IProps = {
    label: string,
    dropDownItem: Array<DropdownTypes>,
    errorMessage: string;
} & SelectProps & UseControllerProps;

const InputDropdownField = ({
    name,
    label,
    dropDownItem,
    placeholder,
    errorMessage,
    ...extraProps
}: IProps) => {
    return (
        <FormControl isInvalid={!!errorMessage.length}>
            <FormLabel htmlFor={label}>{label}</FormLabel>
            <Select placeholder={placeholder} {...extraProps}>
                {dropDownItem.map((el: any) => (
                    <option key={el.keyValue} value={el.keyValue}>
                        {el.keyName}
                    </option>
                ))
                }
            </Select>
            {!!errorMessage.length && <FormErrorMessage>
                {errorMessage}
            </FormErrorMessage>}
        </FormControl>

    )
}

export default InputDropdownField