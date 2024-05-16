import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Button } from '@chakra-ui/react'
import React from 'react'

const PostModal = () => {
    
    
    const handleClose =()=>{

        console.log('close')

    }

    return (
        <>
          <Modal isOpen={true} onClose={handleClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Modal Title</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                hi 
              </ModalBody>
    
              <ModalFooter>
                <Button colorScheme='blue' mr={3} onClick={handleClose}>
                  Close
                </Button>
                <Button variant='ghost'>Add User</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </>
      )
}

export default PostModal