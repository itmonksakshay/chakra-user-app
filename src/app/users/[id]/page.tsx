
"use client"
import React from 'react';
import DefaultButton from '@/components/atoms/button/DefaultButton';
import { useGetUserByIdQuery, useGetUserPostsQuery } from '@/store/api/coreApi';
import { useParams } from 'next/navigation';
import { Avatar, Box, Card, CardHeader, Container, Flex, Text, Heading, Stack, CardBody, StackDivider, Button, Spinner, Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel } from '@chakra-ui/react';
import { Divider } from '@chakra-ui/react'
import Comments from '@/components/oranisms/comments/Comments';
import { useActions, useAppSelector } from '@/store/hook';
import PostModal from '@/components/oranisms/modals/PostModal';

const User = () => {
  const { id } = useParams();
  const { data: userData, isLoading } = useGetUserByIdQuery(+id);
  const { data: userPosts } = useGetUserPostsQuery(+id);
  const { openNewPostModal } = useActions();
  const isOpen = useAppSelector((state) => state.posts.isOpen)

  return (
    <Container maxW='full'>
      <Box padding='4' w={'full'} color='black'>
        {isLoading ? <Spinner
          thickness='4px'
          speed='0.65s'
          emptyColor='gray.200'
          color='blue.500'
          size='xl'
        /> :
          <>
            {userData && <Card maxW='full'>
              <CardHeader>
                <Flex>
                  <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                    <Avatar size='lg' name={userData.name} src='' backgroundColor='teal' />
                    <Box>
                      <Heading size='sm'>{userData.name}</Heading>
                      <Text fontSize='xs'>{userData.email}</Text>
                      <Text fontSize='xs' as="i">
                        {`${userData.gender}, ${userData.status}`}
                      </Text>
                    </Box>
                  </Flex>
                  <Flex flex='1' gap='4' alignItems='center' justifyContent="flex-end" flexWrap='wrap'>
                    <DefaultButton label='Add Post' onClick={() => openNewPostModal()} />
                  </Flex>
                </Flex>
              </CardHeader>
            </Card>
            }
            <Card marginTop="10">
              <CardHeader>
                <Heading size='md'>Posts</Heading>
              </CardHeader>
              <Box>
                <Divider />
              </Box>
              <CardBody>
                <Stack divider={<StackDivider />} spacing='4'>
                  {userPosts && userPosts.map((post) => {
                    return (
                      <Box key={post.id}>
                        <Heading size='xs' textTransform='uppercase'>
                          {post.title}
                        </Heading>
                        <Text pt='2' fontSize='sm'>
                          {post.body}
                        </Text>
                        <Flex mt="10">
                          <Accordion w="full" allowToggle>
                            <AccordionItem>
                              <h2>
                                <AccordionButton>
                                  <Box as='span' flex='1' textAlign='left'>
                                    View Comments
                                  </Box>
                                  <AccordionIcon />
                                </AccordionButton>
                              </h2>
                              <AccordionPanel pb={4}>

                                {userData && <Comments
                                  id={post.id}
                                  userInfo={userData}
                                />}
                              </AccordionPanel>
                            </AccordionItem>
                          </Accordion>
                        </Flex>
                      </Box>
                    )
                  })}

                  {userPosts && userPosts.length === 0 && <>No post found.</>}
                </Stack>
              </CardBody>
            </Card>
          </>
        }
      </Box>
      {isOpen && userData && <PostModal id={userData?.id}/>}
    </Container>
  )
}

export default User