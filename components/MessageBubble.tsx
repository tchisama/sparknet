"use client"
import { Message } from '@/types'
import { Avatar } from '@nextui-org/react'
import { Check, CheckCheck } from 'lucide-react'
import React from 'react'

type Props = {
  msg:Message
}

function MessageBubble({msg}: Props) {
  return (
    <>
    {
      msg.senderID=="111" ? (
        <div className="chat chat-start">
            <div className="chat-bubble shadow-lg  border dark:border-[#242424] text-foreground-600 bg-[#fff] dark:bg-[#1b1b1b]">
              <div className='text-md'>{msg.content}</div>
              <div className='text-sm mt-1 w-full flex gap-2 justify-end items-center'>10:03 PM</div> 
            </div>
        </div>
      ):
      (
        <div className="chat drop-shadow-lg chat-end flex">
            <div className="chat-bubble bg-[#7448d9] text-white ">
              <div className='text-md'>{msg.content}</div>
              <div className='text-sm mt-1 w-full flex gap-2 justify-end items-center'><CheckCheck size={16}/> 10:03 PM</div> 
            </div>
        </div>
      )
    }
    </>
  )
}

export default MessageBubble