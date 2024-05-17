import DefaultButton from '@/components/atoms/button/DefaultButton';
import FormLevelDropdown from '@/components/atoms/form/FormLevelDropdown';
import FormLevelInput from '@/components/atoms/form/FormLevelInput';
import FormLevelRadioGroup from '@/components/atoms/form/FormLevelRadioGroup';
import FormWrapper from '@/components/atoms/form/FormWrapper';
import { CustomToast } from '@/components/atoms/toast/toast';
import { useCreateUserMutation } from '@/store/api/coreApi';
import { useActions } from '@/store/hook'
import { IUser } from '@/types/users';
import { Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Input, Stack, useToast } from '@chakra-ui/react'
import { useRef } from 'react';
import { useForm } from 'react-hook-form';



const UserModal = () => {
  const methods = useForm<IUser>();
  const { register, handleSubmit, formState: { errors, isSubmitting } } = methods;
  const { closeUserModal } = useActions();
  const [createUser, { isLoading }] = useCreateUserMutation();
  const { addToast } = CustomToast();


  const handleClose = () => {
    closeUserModal();
  }

  const handleCreateUser = (data: IUser) => {

    createUser(data).unwrap()
      .then((res) => {
        closeUserModal();
        addToast({
          type: 'success',
          message: 'User Added Successfully'
        })

      })
      .catch((e) => {
        addToast({
          type: 'error',
          message: `${e.data[0].field} ${e.data[0].message}`
        })
      });
  }


  const emailPatten = /\S+@\S+\.\S+/;

  return (
    <>
      <Modal isOpen={true} onClose={handleClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create New User</ModalHeader>
          <hr />
          <ModalCloseButton />
          <FormWrapper
            methods={methods}
            id="user-form"
            onSubmit={handleSubmit(handleCreateUser)}
          >
            <ModalBody>
              <Stack spacing={'4'}>

                <FormLevelInput
                  name='name'
                  label="Name"
                  type='text'
                  rules={{
                    required: 'Name is Required'
                  }}
                />
                <FormLevelInput
                  name='email'
                  label="Email"
                  type='text'
                  rules={{
                    required: "Email is Required",
                    pattern: {
                      value: emailPatten,
                      message: "Invalid Email Format",
                    },
                  }}
                />
                <FormLevelRadioGroup
                  label="Gender"
                  name="gender"
                  defaultValue='male'
                  rules={{
                    required: 'Gender is Required'
                  }}
                  options={[
                    { name: "Male", value: "male" },
                    { name: "Female", value: "Female" }
                  ]}
                />
                <FormLevelDropdown
                  name='status'
                  label='Status'
                  dropDownItem={[
                    { keyName: "Active", keyValue: "active" },
                    { keyName: "InActive", keyValue: "inactive" }
                  ]}
                  placeholder='Please Select Status'
                  rules={{
                    required: 'Status is Required'
                  }}
                />

              </Stack>
            </ModalBody>
            <ModalFooter>
              <Button variant='ghost' mr={3} onClick={handleClose}>
                Close
              </Button>
              <Button colorScheme='teal' type='submit' disabled={isLoading}>
                Submit
              </Button>
            </ModalFooter>
          </FormWrapper>
        </ModalContent>
      </Modal >
    </>
  )
}

export default UserModal