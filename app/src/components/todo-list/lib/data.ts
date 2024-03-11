import prisma from '@/lib/prisma'
import { Todo } from '@prisma/client'

export async function fetchTodos(): Promise<Todo[]> {
  return await prisma.todo.findMany()
}

export async function fetchTodo(id: number): Promise<Todo | null> {
  return await prisma.todo.findUnique({ where: { id } })
}
