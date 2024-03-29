'use server'

import prisma from '@/lib/prisma'
import { Todo, User } from '@prisma/client'
import { signIn } from '@/auth'
import { Credentials } from '@/lib/definitions'
import { redirect } from 'next/navigation'

export async function authenticate(
  prevState: string | undefined,
  data: Credentials,
) {
  try {
    await signIn('credentials', { ...data, callbackUrl: '/protected-page' })
  } catch (error) {
    if ((error as Error).message.includes('CredentialsSignin')) {
      return 'CredentialsSignin'
    }
    throw error
  }
}

export async function getUser(email: string): Promise<User | null> {
  try {
    return await prisma.user.findFirst({
      where: {
        email,
      },
    })
  } catch (error) {
    console.error('Failed to fetch user:', error)
    throw new Error('Failed to fetch user.')
  }
}

export async function getAllUsers() {
  try {
    return await prisma.user.findMany()
  } catch (error) {
    console.error('Failed to fetch users:', error)
    throw new Error('Failed to fetch users.')
  }
}


export async function createUser(formData: FormData): Promise<boolean> {
  try {
    const userExists = await prisma.user.findFirst({
      where: {
        email: formData.get('email') as string,
      },
    })

    if (userExists) {
      return false
    } else {
      await prisma.user.create({
        data: {
          name: formData.get('name') as string,
          email: formData.get('email') as string,
          password: formData.get('password') as string,
        },
      })
      return true
    }
  } catch (error) {
    console.error('Failed to create user:', error)
    throw new Error('Failed to create user.')
  }
}

export async function navigate(path: string) {
  redirect(path)
}

export async function toggleCompleted(id: number): Promise<Todo | null> {
  try {
    const currentRecord = await prisma.todo.findUnique({
      where: { id: id },
    })

    if (!currentRecord) {
      throw new Error(`No todo with id: ${id}`)
    }
    return await prisma.todo.update({
      where: {
        id,
      },
      data: {
        completed: {
          set: !currentRecord.completed,
        },
      },
    })
  } catch (error) {
    console.log(`Failed to toggle todo: ${id}`, error)
    throw new Error(`Failed to toggle todo: ${id}`)
  }
}
