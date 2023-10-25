import React from 'react'
import MessageBar from './MessageBar'
import MessageBubble from './MessageBubble'

type Props = {}


const msg = {
  content: "Hello",
  right: true,
  sender: {
    name: "tchisama",
  },
  date: "10:03 PM",
}
function ChatSpace({}: Props) {

  return (
    <div className='flex-1 px-4 bg-[#f5f5f5] dark:bg-background h-screen flex flex-col'>
        <div className=' flex-1  overflow-y-auto flex flex-col'>
            <div className='max-w-[800px] mx-auto flex-1 flex w-full py-24 flex-col justify-end'>
              <MessageBubble msg={msg}/>
              <MessageBubble msg={{...msg, right: false}}/>
            </div>
        </div>
        <MessageBar/>
    </div>
  )
}



export default ChatSpace