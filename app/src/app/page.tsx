import FetchAPI from '@/components/common/FetchAPI'
import Todos from '../components/todo-list/Todos'
import { Box, Flex, Divider, Text } from '@chakra-ui/react'
import { Metadata, NextPage } from 'next'
import Link from 'next/link'
import { FC } from 'react'
import { MdLogin, MdLockPerson } from 'react-icons/md'

export const metadata: Metadata = {
  title: 'Well hello!',
}

const HomePage: FC<NextPage> = () => {
  return (
    <Box>
      <Todos />
      <Divider />
      <Text mt={10} fontSize='20'>
        Menu
      </Text>
      <Flex alignItems='center'>
        <MdLogin style={{ marginRight: '5px' }} />
        <Link href='/login' passHref>
          Login
        </Link>
      </Flex>
      <Flex alignItems='center' mb={10}>
        <MdLockPerson style={{ marginRight: '5px' }} />
        <Link href='/protected-page' passHref>
          Protected Page
        </Link>
      </Flex>
      <FetchAPI />
    </Box>
  )
}

export default HomePage
