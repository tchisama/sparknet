"use client"

import React, { useEffect } from 'react'
import {Avatar,Divider,Chip} from "@nextui-org/react";
import { Button } from '@nextui-org/button';
import { Chat } from '@/types';
import useUserStore from '@/store/userStore';
import useChatStore from '@/store/chatsStore';
type Props = {
  chat:Chat
}

function OneChatItem({chat}: Props) {
  const {user} = useUserStore()
  const {currentChat,setCurrentChat} = useChatStore()
  const [chatName, setChatName] = React.useState(chat.name)
  useEffect(()=>{
    const OtherName  = chat.participantsUsers[0]?.id == user?.id ? chat.participantsUsers[1]?.name : chat.participantsUsers[0]?.name
    setChatName(OtherName)
  },[user])
  return (
    <div onClick={()=>setCurrentChat(chat.id)} className={'my-1 rounded-xl '+(currentChat === chat.id ? 'bg-foreground-100' : 'bg-[#fff0]')}>
        <div className='flex cursor-pointer rounded-xl duration-200 bg-[#fff0] gap-4  items-center justify-start h-auto px-3 p-2 w-full '>
            <Avatar isBordered radius='lg' size='md'  name={chatName} />
            <div className='flex items-start flex-col flex-1'>
                <h1 className='text-md text-foreground-700'>{chatName}</h1>
                <h3 className='text-sm'>{chat.lastMessage.slice(0,20)}{chat.lastMessage.length > 20 ? '...' : ''}</h3>
            </div>
            <div className='flex flex-col gap-2 h-full items-end'>
                <div className='text-xs'>10:03 PM</div>
                <div></div>
                {/* <Chip color='secondary'>3</Chip> */}
            </div>
        </div>
    </div>
  )
}

export default OneChatItem