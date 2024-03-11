'use client'

import { FC } from 'react'
import { MdCheckCircle, MdPanoramaFishEye } from 'react-icons/md'
import { ListItem as ChakraListItem, ListIcon } from '@chakra-ui/react'
import { Todo } from '@prisma/client'
import { toggleCompleted } from '@/lib/actions'
import { useRouter } from 'next/navigation'

type Props = {
  todo: Todo
}

const ListItem: FC<Props> = ({ todo }) => {
  const icon = todo.completed ? MdCheckCircle : MdPanoramaFishEye
  const router = useRouter();
  
  const handleToggle = async () => {
    const res = await toggleCompleted(todo.id)
    if (res) {
      router.refresh()
    }
  }

  return (
    <ChakraListItem onClick={handleToggle}>
      <ListIcon as={icon} color='green.500' />
      <span>{todo.text}</span>
    </ChakraListItem>
  )
}

export default ListItem
