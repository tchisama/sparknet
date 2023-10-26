"use client"
import { Button } from '@nextui-org/button'
import { Edit, Search } from 'lucide-react'
import React from 'react'
import ChatsBarTabs from './ChatsBarTabs'
import { Divider } from '@nextui-org/react'
import ListOfChat from './ListOfChat'
import SearchFriend from './SearchFriend'

type Props = {}

const iconsSize = 20

const ChatsBar = (props: Props) => {
  return (
    <div className='w-[400px] flex flex-col dark:bg-[#121212]  bg-[#fefefe] h-screen p-4'>
      <div className='flex items-center justify-between '>
        <h1 className='text-4xl'>Inbox</h1>
        <div className='flex'>
          <Button variant='ghost' className='border-none' isIconOnly><Edit size={iconsSize}/></Button>
          <SearchFriend/>
        </div>
      </div>
      <ChatsBarTabs/>
    </div>
  )
}

export default ChatsBar