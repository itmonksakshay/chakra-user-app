'use client';

import DefaultButton from '@/components/atoms/button/DefaultButton';
import UserTable from '@/components/oranisms/UserTable';
import UserModal from '@/components/oranisms/modals/UserModal';
import { useGetUsersQuery } from '@/store/api/coreApi';
import { useActions, useAppSelector } from '@/store/hook';
import { Box, Container, Heading, Spinner, Stack } from '@chakra-ui/react';
import React from 'react'

const Users = () => {

  const { data: userData, isLoading } = useGetUsersQuery();

  const { openNewUserModal } = useActions();

  const isOpen = useAppSelector((state)=>state.users.isOpen)

  return (
    <Container maxW='full'>
      <Box padding='4' w={'full'} color='black'>
        <Stack direction='row' justifyContent={'space-between'}>
          <Heading as='h4' noOfLines={1}>
            Users
          </Heading>
          <DefaultButton label='Add User' onClick={() => openNewUserModal()} />
        </Stack>
        <Box h='full' w='full' mt='4' display='flex' justifyContent={'center'}>
          {isLoading && <Spinner
            thickness='4px'
            speed='0.65s'
            emptyColor='gray.200'
            color='blue.500'
            size='xl'
          />}
          {userData && <UserTable data={userData} />}
        </Box>
      </Box>
      {isOpen && <UserModal/>}
    </Container>
  )
}

export default Users