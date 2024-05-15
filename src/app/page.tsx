"use client"

import FormLevelDropdown from '@/components/atoms/form/FormLevelDropdown';
import FormLevelInput from '@/components/atoms/form/FormLevelInput';
import FormWrapper from '@/components/atoms/form/FormWrapper';
import { Box, Container } from '@chakra-ui/react'
import { useForm } from 'react-hook-form';

export default function Home() {
  const methods = useForm<any>();
  const { handleSubmit, setError } = methods;

  const handleCreateUser = () => {};

  return (
    <Container maxW='2xl' bg='blue.600' centerContent>
      <Box padding='4' bg='blue.400' color='black' maxW='md'>
        <FormWrapper
           methods={methods}
           id="user-form"
           onSubmit={handleSubmit(handleCreateUser)}
        >
          <FormLevelInput 
            name='name'
            label="Name"
            type='text'
          />
          <FormLevelDropdown
            name='select'
            label='Select'
            dropDownItem={[
              { keyName: "option 1", keyValue: "option1" },
              { keyName: "option 2", keyValue: "option2" }
            ]}
          />
        </FormWrapper>
      </Box>
    </Container>
  );
}
