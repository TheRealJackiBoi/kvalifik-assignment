'use client'

import { FC, useState } from 'react'
import { useFormState } from 'react-dom'
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Box,
} from '@chakra-ui/react'
import FormikCreateItemForm from './formik/FormikCreateItemForm'
import { createTodo } from './lib/actions'

const CreateItemModal: FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [code, action] = useFormState(createTodo, undefined)

  return (
    <>
      <Box mb={5}>
        <Button colorScheme='blue' onClick={onOpen} ml={2}>
          Create with Formik
        </Button>
      </Box>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent pb={10}>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormikCreateItemForm onSave={action} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

export default CreateItemModal
