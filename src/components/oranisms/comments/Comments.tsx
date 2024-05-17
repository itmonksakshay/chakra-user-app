
import FormLevelTextArea from '@/components/atoms/form/FormLevelTextArea'
import FormWrapper from '@/components/atoms/form/FormWrapper'
import { CustomToast } from '@/components/atoms/toast/toast'
import { useCreateCommentMutation, useGetPostCommentsQuery } from '@/store/api/coreApi'
import { IUser } from '@/types/users'
import { Avatar, Box, Divider, List, Text, ListItem, Stack, Card, CardHeader, Heading, CardBody, Button, Spinner } from '@chakra-ui/react'
import React from 'react'
import { useForm } from 'react-hook-form';

type IProps = {
    id: number,
    userInfo: IUser
}
const Comments = ({
    id,
    userInfo
}: IProps) => {
    const methods = useForm<any>();
    const { handleSubmit, setValue, formState: { errors } } = methods;
    const { addToast } = CustomToast();

    const { data: commentsData, isLoading } = useGetPostCommentsQuery(+id);
    const [createComment] = useCreateCommentMutation();

    const handleCommentCreate = (data: { comment: string }) => {
        const { name, email } = userInfo;
        const body = {
            name,
            email,
            post_id: id,
            body: data.comment
        }

        createComment(body)
            .unwrap()
            .then((res) => {
                addToast({
                    type: 'success',
                    message: 'Comment Added Successfully'
                });
                setValue('comment', '');
            })
            .catch((e) => {
                addToast({
                    type: 'error',
                    message: `${e.data[0].field} ${e.data[0].message}`
                })
            });
    }

    return (
        <>
            {isLoading ? <Spinner
                thickness='4px'
                speed='0.65s'
                emptyColor='gray.200'
                color='blue.500'
                size='xl'
            />
                :
                <>
                    <Box marginY="5">
                        <Divider />
                    </Box>
                    <List spacing={3} marginTop="5">
                        {commentsData && commentsData.map((comment) => {
                            return (
                                <ListItem key={comment.id}>
                                    <Stack direction={'row'} spacing='12px'>
                                        <Avatar size='sm' name={comment.name} src='' backgroundColor='teal' />
                                        <Text fontSize='sm' as='b'>
                                            {comment.name}
                                        </Text>
                                    </Stack>
                                    <Text fontSize='md' margin='2'>{comment.body}</Text>
                                    <Divider />
                                </ListItem>
                            )
                        })}
                    </List>
                    <Card>
                        <CardHeader>
                            <Heading size='md'>Add Comment</Heading>
                        </CardHeader>

                        <CardBody>
                            <Stack spacing='4'>
                                <FormWrapper
                                    methods={methods}
                                    id="user-form"
                                    onSubmit={handleSubmit(handleCommentCreate)}
                                >
                                    <FormLevelTextArea
                                        name='comment'
                                        label=''
                                        rules={{
                                            required: 'Comment is Required'
                                        }}
                                    />
                                    <Button colorScheme='teal' type='submit' marginTop='2'>
                                        Submit
                                    </Button>
                                </FormWrapper>
                            </Stack>
                        </CardBody>
                    </Card>
                </>
            }

        </>
    )
}

export default Comments