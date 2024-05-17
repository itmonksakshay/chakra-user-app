import React from 'react'
import { Controller, UseControllerProps, useFormContext } from 'react-hook-form';
import InputTextareaField from '../input/InputTextareaField';
import { InputProps,TextareaProps } from '@chakra-ui/react';


type IProps = {
    label: string,
} & TextareaProps & UseControllerProps;

const FormLevelTextArea = ({
    name,
    label,
    placeholder,
    ...extraProps
}: IProps) => {
    const { control, formState: { errors } } = useFormContext();
    return (
        <Controller
            name={name}
            control={control}
            {...extraProps}
            render={({ field }) => {
                return (
                    <InputTextareaField
                        value={field.value || ''}
                        onChange={field.onChange}
                        name={name}
                        label={label}
                        placeholder={placeholder}
                        errorMessage={
                            errors?.root
                                ? String(errors.root[name]?.message || "")
                                : String(errors[name]?.message || "")
                        }
                    />
                )
            }}
        />
    )
}

export default FormLevelTextArea