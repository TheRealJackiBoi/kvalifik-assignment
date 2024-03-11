import { Box, Text, SkeletonText } from '@chakra-ui/react'
import { FC, Suspense } from 'react'
import CreateItemModal from './CreateItemModal'
import TodoList from './TodoList'

const Todos: FC = () => {
  return (
    <Box mb={10}>
      <Text fontSize='2em' mb={4}>
        Todo List
      </Text>
      <CreateItemModal />
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
