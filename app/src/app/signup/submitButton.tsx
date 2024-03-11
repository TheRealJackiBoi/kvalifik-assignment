'use client'
import { useFormStatus } from 'react-dom'
import '../../styles/signup.css'

export default function SubmitButton() {
  const { pending } = useFormStatus()

  return (
    <button type='submit' disabled={pending} className='submit-button'>
      Signup
    </button>
  )
}
