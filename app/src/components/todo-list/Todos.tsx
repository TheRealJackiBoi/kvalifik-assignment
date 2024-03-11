import { Box, Text, SkeletonText } from '@chakra-ui/react'
import { FC, Suspense } from 'react'
import CreateItemModal from './CreateItemModal'
import TodoList from './TodoList'
import { cookies } from 'next/dist/client/components/headers'

const Todos: FC = () => {
  const cookieStore = cookies()

  const token = cookieStore.get('next-auth.session-token')
  
  return (
    <Box mb={10}>
      <Text fontSize='2em' mb={4}>
        Todo List
      </Text>
      {token ? (
        <CreateItemModal />
      ) : (
        <Text fontSize='1.5em' mb={4}>
          Please login to add a new todo item
        </Text>
      )}
      <Suspense
        fallback={
          <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='3'>
            A long todo item with a lot of texts
          </SkeletonText>
        }
      >
        <TodoList />
      </Suspense>
    </Box>
  )
}

export default Todos
