import prisma from '@/lib/prisma'
import SubmitButton from './submitButton'
import { redirect } from 'next/navigation'
import '../../styles/signup.css'
import { createUser } from '@/lib/actions'

export default function SignupPage() {
  const addUser = async (formData: FormData) => {
    'use server'
    await createUser(formData)
    redirect('/')
  }

  return (
    <div className='signup-container'>
      <div className='form-container'>
        <h1>Signup</h1>
        <form action={addUser}>
          <div>
            <label htmlFor='name'>Name</label>
            <input type='text' required name='name' id='name' />
          </div>
          <div>
            <label htmlFor='email'>Email</label>
            <input type='email' required name='email' id='email' />
          </div>
          <div>
            <label htmlFor='password'>Password</label>
            <input type='password' required name='password' id='password' />
          </div>
          <SubmitButton />
        </form>
      </div>
    </div>
  )
}
