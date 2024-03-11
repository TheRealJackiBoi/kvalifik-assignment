'use client'

import { FC } from 'react'
import { MdCheckCircle, MdPanoramaFishEye } from 'react-icons/md'
import { ListItem as ChakraListItem, ListIcon } from '@chakra-ui/react'
import Link from 'next/link'
import { Todo } from '@prisma/client'

type Props = {
  todo: Todo
}

const ListItem: FC<Props> = ({ todo }) => {
  const icon = todo.completed ? MdCheckCircle : MdPanoramaFishEye
  return (
    <ChakraListItem>
      <ListIcon as={icon} color='green.500' />
      <Link href={`/todo/${todo.id}`}>{todo.text}</Link>
    </ChakraListItem>
  )
}

export default ListItem
