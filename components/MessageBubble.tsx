"use client"
import { auth } from '@/firebase'
import { Message } from '@/types'
import { Avatar } from '@nextui-org/react'
import { Check, CheckCheck } from 'lucide-react'
import React from 'react'

type Props = {
  msg:Message
}
function formatTime(date: Date) {
  if (!(date instanceof Date)) {
    throw new Error('Invalid input. Please provide a valid Date object.');
  }

  const hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? 'PM' : 'AM';

  // Convert hours to 12-hour format
  const formattedHours = hours % 12 || 12;

  // Add leading zeros to minutes if needed
  const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;

  const formattedTime = `${formattedHours}:${formattedMinutes} ${ampm}`;
  return formattedTime;
}
function MessageBubble({msg}: Props) {
  return (
    <>
    {
      !(msg.senderID==auth.currentUser?.uid) ? (
        <div className="chat chat-start">
            <div className="chat-bubble shadow-lg  border dark:border-[#242424] text-foreground-600 bg-[#fff] dark:bg-[#1b1b1b]">
              <div className='text-md'>{msg.content}</div>
              <div className='text-sm mt-1 w-full flex gap-2 justify-end items-center'>{formatTime(new Date(msg.timestamp))}</div> 
            </div>
        </div>
      ):
      (
        <div className="chat drop-shadow-lg chat-end flex">
            <div className="chat-bubble bg-[#7448d9] text-white ">
              <div className='text-md'>{msg.content}</div>
              <div className='text-sm mt-1 w-full flex gap-2 justify-end items-center'>
                {
                  msg.seen ?
                  <CheckCheck size={16}/>
                  :
                  <Check size={16}/>
                }
                {formatTime(new Date(msg.timestamp))}</div> 
            </div>
        </div>
      )
    }
    </>
  )
}

export default MessageBubble