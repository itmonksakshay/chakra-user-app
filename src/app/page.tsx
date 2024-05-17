"use client"


import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Button } from '@chakra-ui/react';
import Link from 'next/link'

export default function Home() {


  return (
    <>
      <Button type="button" colorScheme='teal' variant='solid' margin='20' leftIcon={<ArrowForwardIcon />}>
        <Link href="/users">Go to users page</Link>
      </Button>
    </>
  );
}
