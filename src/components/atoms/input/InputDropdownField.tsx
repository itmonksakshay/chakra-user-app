import React from 'react'
import { FormControl, FormHelperText, FormLabel, Select, SelectProps } from '@chakra-ui/react';
import { UseControllerProps } from 'react-hook-form';
import { DropdownTypes } from '@/types/users';

type IProps = {
    label: string,
    dropDownItem: Array<DropdownTypes | null>,
} & SelectProps & UseControllerProps;

const InputDropdownField = ({
    name,
    label,
    dropDownItem,
    placeholder,
    ...extraProps
}: IProps) => {
    return (
        <FormControl>
            <FormLabel>{label}</FormLabel>
            <Select placeholder={placeholder}>
                {dropDownItem
                    && dropDownItem.length > 0
                    && dropDownItem.map((el: any) => (
                        <option key={el?.keyValue} value={el?.keyValue}>
                            {el?.keyName}
                        </option>
                    ))
                }
            </Select>
            <FormHelperText></FormHelperText>
        </FormControl>

    )
}

export default InputDropdownField