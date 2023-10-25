import ChatSpace from '@/components/ChatSpace'
import ChatsBar from '@/components/ChatsBar'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <div className='flex flex-1'>
      <ChatsBar />
      <ChatSpace />
    </div>
  )
}

export default page