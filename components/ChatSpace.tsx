"use client"
import React, { useEffect } from 'react'
import MessageBar from './MessageBar'
import MessageBubble from './MessageBubble'
import useMessageStore from '@/store/messagesStore'
import useChatStore from '@/store/chatsStore'
import { Avatar, ScrollShadow } from '@nextui-org/react'
import ChatNavbar from './ChatNavbar'
import { Banana, Bone } from 'lucide-react'

type Props = {}


function ChatSpace({}: Props) {
  const {messages} = useMessageStore()
  const {currentChat} = useChatStore()
  const scrollRef = React.useRef<HTMLDivElement|null>(null)
  const scrollDown = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop += 1000; // Adjust the scrolling amount as needed
    }
  };
  useEffect(() => {
    scrollDown()
  },[messages])
  return (
    <div className='flex-1  bg-[#f5f5f5] dark:bg-background h-screen flex flex-col'>
      {
        currentChat!=null ? 
        <>
      <ChatNavbar/>
        <ScrollShadow  ref={scrollRef} hideScrollBar size={0} className=' flex-1  overflow-y-auto flex flex-col'>
            <div className='max-w-[800px] px-4 mx-auto flex-1 flex w-full py-24 flex-col justify-end'>
              {
                  messages.map((msg) => (
                    <MessageBubble key={msg.id} msg={msg}/> as React.ReactElement
                  ))
              }
            </div>
        </ScrollShadow>
        <MessageBar/>
        </>
        :
        <div className='flex-1 flex items-center justify-center'>
          <Banana size={80} strokeWidth={1}/>
        </div>
      }
    </div>
  )
}



export default ChatSpace