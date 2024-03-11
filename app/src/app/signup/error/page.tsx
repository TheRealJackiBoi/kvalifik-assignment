'use client'
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Button,
} from '@chakra-ui/react'
import { navigate } from '@/lib/actions'
import '../../../styles/signup.css'

export default function errorPage() {
  return (
    <div>
      <Alert status='error'>
        <AlertIcon />
        <AlertTitle mr={2}>User already exists</AlertTitle>
        <AlertDescription>
          Please try again with a different email.
        </AlertDescription>
      </Alert>
      <div className='error-container'>
        <Button
          colorScheme='blue'
          variant='solid'
          onClick={() => {
            navigate('/signup')
          }}
        >
          Back to safety
        </Button>
      </div>
    </div>
  )
}
