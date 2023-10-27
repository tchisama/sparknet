"use client"
import { Button } from '@nextui-org/button'
import { Edit, Search } from 'lucide-react'
import React, { useEffect } from 'react'
import ChatsBarTabs from './ChatsBarTabs'
import { Divider } from '@nextui-org/react'
import ListOfChat from './ListOfChat'
import SearchFriend from './SearchFriend'
import useChatStore from '@/store/chatsStore'
import { auth, chatsRef, messagesRef, userRef } from '@/firebase'
import { and, getDocs, limit, onSnapshot, orderBy, query, where } from 'firebase/firestore'
import useUserStore from '@/store/userStore'
import { Chat } from '@/types'

type Props = {}

const iconsSize = 20

const ChatsBar = (props: Props) => {
  const {setChats} = useChatStore()
  const {user} = useUserStore()

  useEffect(() => {
    if(user!==null){
      console.log(user?.UserId)
      const q = query(chatsRef, where("participants","array-contains",user?.UserId),orderBy("lastMessageTimestamp", "desc"), limit(30));
      onSnapshot(
        q, 
        (snapShot)=>{
          let ch:Chat[] = []
          snapShot.docs.forEach((doc)=>{
              ch.push({...doc.data(), id: doc.id}as Chat)
          })
          console.log(ch)
          setChats(ch)
        }
        )
      }
  },[user])


  return (

    <div className='w-[400px] flex flex-col dark:bg-[#121212]  bg-[#fefefe] h-screen p-4'>
      <div className='flex items-center justify-between '>
        <h1 className='text-4xl'>Inbox</h1>
        <div className='flex'>
          <Button variant='ghost' className='border-none' isIconOnly><Edit size={iconsSize}/></Button>
          <SearchFriend/>
        </div>
      </div>
      <ChatsBarTabs/>
    </div>
  )
}

export default ChatsBar