"use client"

import React from 'react'
import OneChatItem from './OneChatItem'
import {Divider} from "@nextui-org/react"
import useChatStore from '@/store/chatsStore'
type Props = {}

function ListOfChat({}: Props) {
  const {chats} = useChatStore()
  return (
    <div className='flex flex-1 overflow-y-auto flex-col'>
      {
        chats.map((chat) => (
          <OneChatItem chat={chat} key={chat.id}/>
        ))
      }
    </div>
  )
}

export default ListOfChat