import React, { ChangeEvent } from 'react'
import { Controller, UseControllerProps, useFormContext } from 'react-hook-form';
import InputTextField from '../input/InputTextField';
import { InputProps } from '@chakra-ui/react';
import InputRadioFeild from '../input/InputRadioFeild';


type IProps = {
    label: string,
    options: Array<{ name: string, value: string }>
} & InputProps & UseControllerProps;

const FormLevelRadioGroup = ({
    name,
    label,
    type,
    options,
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
                    <InputRadioFeild
                        value={field.value || ''}
                        onChange={field?.onChange }
                        name={name}
                        label={label}
                        options={options}
                        errorMessage={
                            errors?.root
                                ? String(errors.root[name]?.message || "")
                                : String(errors[name]?.message || "")
                        }
                        defaultValue={extraProps.defaultValue}
                    />
                )
            }}
        />
    )
}

export default FormLevelRadioGroup;