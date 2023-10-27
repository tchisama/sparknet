"use client"
import React, { useEffect } from 'react'
import MessageBar from './MessageBar'
import MessageBubble from './MessageBubble'
import useMessageStore from '@/store/messagesStore'
import useChatStore from '@/store/chatsStore'
import { ScrollShadow } from '@nextui-org/react'

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
    <div className='flex-1 px-4 bg-[#f5f5f5] dark:bg-background h-screen flex flex-col'>
        <ScrollShadow  ref={scrollRef} hideScrollBar size={40} className=' flex-1  overflow-y-auto flex flex-col'>
            <div className='max-w-[800px] mx-auto flex-1 flex w-full py-24 flex-col justify-end'>
              {
                  messages.map((msg) => (
                    <MessageBubble key={msg.id} msg={msg}/>
                  ))
              }
            </div>
        </ScrollShadow>
        <MessageBar/>
    </div>
  )
}



export default ChatSpace