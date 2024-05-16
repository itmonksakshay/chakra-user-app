import { FormControl, FormErrorMessage, FormLabel, Input, Radio, RadioGroup, RadioProps, Stack } from '@chakra-ui/react'
import { ChangeEvent } from 'react';

type IProps = {
  label: string,
  errorMessage: string,
  options: Array<{ name: string, value: string }>
} & RadioProps;


const InputRadioFeild = ({
  label,
  name = "",
  options,
  errorMessage,
  value,
  onChange,
  defaultValue,
  ...extraProps
}: IProps) => {
  return (
    <FormControl isInvalid={!!errorMessage.length}>
      <FormLabel htmlFor={label}>{label}</FormLabel>
      <RadioGroup value={value} defaultValue={defaultValue as string|| ''}>
        <Stack spacing={5} direction='row'>
          {options.map((option,key) => {
            return (
              <Radio key={key} colorScheme='green' value={option.value} onChange={onChange}>
                {option.name}
              </Radio>
            )
          })
          }
        </Stack>
      </RadioGroup>
      {!!errorMessage.length && <FormErrorMessage>
        {errorMessage}
      </FormErrorMessage>}
    </FormControl>
  )
}

export default InputRadioFeild