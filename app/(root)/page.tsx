import ChatSpace from '@/components/ChatSpace'
import ChatsBar from '@/components/ChatsBar'
import { chatMembersRef } from '@/firebase'
import useChatStore from '@/store/chatsStore'
import { onSnapshot, query, where } from 'firebase/firestore'
import React,{useEffect} from 'react'

type Props = {}

const Page = (props: Props) => {
  
  return (
    <div className='flex flex-1'>
      <ChatsBar />
      <ChatSpace />
    </div>
  )
}

export default Page