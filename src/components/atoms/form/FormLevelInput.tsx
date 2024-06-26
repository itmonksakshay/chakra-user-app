import React from 'react'
import { Controller, UseControllerProps, useFormContext } from 'react-hook-form';
import InputTextField from '../input/InputTextField';
import { InputProps } from '@chakra-ui/react';


type IProps = {
    label: string,
} & InputProps & UseControllerProps;

const FormLevelInput = ({
    name,
    label,
    type,
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
                    <InputTextField
                        value={field.value || ''}
                        onChange={field.onChange}
                        name={name}
                        label={label}
                        type={type}
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

export default FormLevelInput