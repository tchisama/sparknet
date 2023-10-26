"use client"
import React from 'react'
import MessageBar from './MessageBar'
import MessageBubble from './MessageBubble'
import useMessageStore from '@/store/messagesStore'
import useChatStore from '@/store/chatsStore'

type Props = {}


function ChatSpace({}: Props) {
  const {messages} = useMessageStore()
  const {currentChat} = useChatStore()
  return (
    <div className='flex-1 px-4 bg-[#f5f5f5] dark:bg-background h-screen flex flex-col'>
        <div className=' flex-1  overflow-y-auto flex flex-col'>
          {currentChat}
            <div className='max-w-[800px] mx-auto flex-1 flex w-full py-24 flex-col justify-end'>
              {
                  messages.map((msg) => (
                    <MessageBubble key={msg.id} msg={msg}/>
                  ))
              }
            </div>
        </div>
        <MessageBar/>
    </div>
  )
}



export default ChatSpace