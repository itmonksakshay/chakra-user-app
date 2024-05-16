"use client"

import FormLevelDropdown from '@/components/atoms/form/FormLevelDropdown';
import FormLevelInput from '@/components/atoms/form/FormLevelInput';
import FormWrapper from '@/components/atoms/form/FormWrapper';
import UiToast from '@/components/ui/Toast/UiToast';
import { Box, Container, Table, TableCaption, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr } from '@chakra-ui/react'
import { useForm } from 'react-hook-form';

export default function Home() {
  const methods = useForm<any>();
  const { handleSubmit, setError } = methods;

  const handleCreateUser = () => { };

  return (
    <Container maxW='2xl' border='1px' borderColor='gray.200' borderRadius="5" centerContent>
      <Box padding='4' color='black' maxW='md'>
        <TableContainer>
          <Table variant='simple'>
            <TableCaption>Imperial to metric conversion factors</TableCaption>
            <Thead>
              <Tr>
                <Th>To convert</Th>
                <Th>into</Th>
                <Th isNumeric>multiply by</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>inches</Td>
                <Td>millimetres (mm)</Td>
                <Td isNumeric>25.4</Td>
              </Tr>
              <Tr>
                <Td>feet</Td>
                <Td>centimetres (cm)</Td>
                <Td isNumeric>30.48</Td>
              </Tr>
              <Tr>
                <Td>yards</Td>
                <Td>metres (m)</Td>
                <Td isNumeric>0.91444</Td>
              </Tr>
            </Tbody>
            <Tfoot>
              <Tr>
                <Th>To convert</Th>
                <Th>into</Th>
                <Th isNumeric>multiply by</Th>
              </Tr>
            </Tfoot>
          </Table>
        </TableContainer>
        <FormWrapper
          methods={methods}
          id="user-form"
          onSubmit={handleSubmit(handleCreateUser)}
        >
          <UiToast
            label='SnackBar'
            title="test"
            isClosable
          />
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
