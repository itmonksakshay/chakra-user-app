

import FormLevelInput from '@/components/atoms/form/FormLevelInput';
import FormLevelTextArea from '@/components/atoms/form/FormLevelTextArea';
import FormWrapper from '@/components/atoms/form/FormWrapper';
import { CustomToast } from '@/components/atoms/toast/toast';
import { useCreatePostMutation } from '@/store/api/coreApi';
import { useActions } from '@/store/hook'
import { IPost } from '@/types/post';
import { Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Stack } from '@chakra-ui/react'

import { useForm } from 'react-hook-form';

const PostModal = ({
  id
}: {
  id: number
}) => {
  const methods = useForm<IPost>();
  const { handleSubmit, formState: { errors } } = methods;
  const { closePostModal } = useActions();
  const [createPost] = useCreatePostMutation();
  const { addToast } = CustomToast();


  const handleClose = () => {
    closePostModal();
  }

  const handleCreatePost = (data: IPost) => {
    console.log("🚀 ~ handleCreatePost ~ data:", data)
    data.user_id = id;
    createPost(data)
      .unwrap()
      .then((res) => {
        addToast({
          type: 'success',
          message: 'Post Added Successfully'
        });
        closePostModal();
      })
      .catch((e) => {
        console.log("🚀 ~ handleCreatePost ~ e:", e)
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
          <ModalHeader>Create New Post</ModalHeader>
          <hr />
          <ModalCloseButton />
          <FormWrapper
            methods={methods}
            id="post-form"
            onSubmit={handleSubmit(handleCreatePost)}
          >
            <ModalBody>
              <Stack spacing={'4'}>

                <FormLevelInput
                  name='title'
                  label="Title"
                  type='text'
                  rules={{
                    required: 'Title is Required'
                  }}
                />
                <FormLevelTextArea
                  name='body'
                  label='Description'
                  rules={{
                    required: 'Comment is Required'
                  }}
                />

              </Stack>
            </ModalBody>
            <ModalFooter>
              <Button variant='ghost' mr={3} onClick={handleClose}>
                Close
              </Button>
              <Button colorScheme='teal' type='submit'>
                Submit
              </Button>
            </ModalFooter>
          </FormWrapper>
        </ModalContent>
      </Modal >
    </>
  )
}

export default PostModal