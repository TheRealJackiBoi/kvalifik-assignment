'use client'

import { FC } from 'react'
import { MdCheckCircle, MdPanoramaFishEye } from 'react-icons/md'
import {
  Box,
  ListItem as ChakraListItem,
  Flex,
  ListIcon,
  Spacer,
} from '@chakra-ui/react'
import { Todo } from '@prisma/client'
import { toggleCompleted } from '@/lib/actions'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

type Props = {
  todo: Todo
}

const ListItem: FC<Props> = ({ todo }) => {
  const icon = todo.completed ? MdCheckCircle : MdPanoramaFishEye
  const router = useRouter()

  const handleToggle = async () => {
    const res = await toggleCompleted(todo.id)
    if (res) {
      router.refresh()
    }
  }

  return (
    <ChakraListItem onClick={handleToggle}>
      <Flex>
        <Box as='span' mr={2}>
          <ListIcon as={icon} color='green.500' />
          <span>{todo.text}</span>
        </Box>
        <Spacer />
        <Box>
          <Link href={`/todo/${todo.id}`} className='list-view'>
            View
          </Link>
        </Box>
      </Flex>
    </ChakraListItem>
  )
}

export default ListItem
