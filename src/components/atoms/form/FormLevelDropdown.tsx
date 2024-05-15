import React from 'react';
import { Controller, UseControllerProps, useFormContext } from 'react-hook-form';
import { SelectProps } from '@chakra-ui/react';
import InputDropdownField from '../input/InputDropdownField';
import { DropdownTypes } from '@/types/users';

type IProps = {
    label: string,
    dropDownItem: Array<DropdownTypes | null>
} & SelectProps & UseControllerProps;

const FormLevelDropdown = ({
    name,
    label,
    placeholder,
    dropDownItem,
    ...extraProps
}: IProps) => {
    const { control, formState: { errors } } = useFormContext();
    return (
        <Controller
            name={name}
            control={control}
            {...extraProps}
            render={({ field: { onChange, value } }) => (
                <InputDropdownField
                    name={name}
                    label={label}
                    onChange={onChange}
                    placeholder={placeholder}
                    dropDownItem={dropDownItem}
                />
            )}
        />
    )
}

export default FormLevelDropdown