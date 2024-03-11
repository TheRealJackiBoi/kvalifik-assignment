import { Divider, Heading, Text } from '@chakra-ui/react'
import { fetchTodo } from '../../../components/todo-list/lib/data'
import { Metadata } from 'next'
import { FC } from 'react'
import BackLink from '@/components/common/BackLink'

export const metadata: Metadata = {
  title: 'Todo',
}

type Params = {
  params: {
    id: string
  }
}

const TodoPage: FC<Params> = async ({ params }) => {
  const todo = await fetchTodo(parseInt(params.id, 10))

  if (!todo) {
    return <div>Todo not found</div>
  }

  return (
    <>
      <BackLink />
      <Heading fontSize='4em' mb={4}>
        {todo.text}
      </Heading>
      <Text>
        <b>Created date: </b>
        {todo.createdAt.toDateString()}
      </Text>
      <Text>
        <b>Type: </b>
        {todo.type}
      </Text>
      <Text>
        <b>Completed: </b>
        {todo.completed ? 'Yes' : 'No'}
      </Text>
      <Divider bg='#141414' h={0.5} />
      <Text mb={10} mt={8}>
        {todo.description}
      </Text>
    </>
  )
}

export default TodoPage
