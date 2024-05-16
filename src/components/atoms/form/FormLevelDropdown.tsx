import React from 'react';
import { Controller, UseControllerProps, useFormContext } from 'react-hook-form';
import { SelectProps } from '@chakra-ui/react';
import InputDropdownField from '../input/InputDropdownField';
import { DropdownTypes } from '@/types/users';

type IProps = {
    label: string,
    dropDownItem: Array<DropdownTypes>
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
            render={({ field}) => (
                <InputDropdownField
                    value={field.value || ''}
                    onChange={field.onChange}
                    name={name}
                    label={label}
                    placeholder={placeholder}
                    dropDownItem={dropDownItem}
                    errorMessage={
                        errors?.root
                            ? String(errors.root[name]?.message || "")
                            : String(errors[name]?.message || "")
                    }
                />
            )}
        />
    )
}

export default FormLevelDropdown