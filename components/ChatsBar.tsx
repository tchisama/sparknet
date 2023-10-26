"use client"
import { Button } from '@nextui-org/button'
import { Edit, Search } from 'lucide-react'
import React, { useEffect } from 'react'
import ChatsBarTabs from './ChatsBarTabs'
import { Divider } from '@nextui-org/react'
import ListOfChat from './ListOfChat'
import SearchFriend from './SearchFriend'
import useChatStore from '@/store/chatsStore'
import { chatsRef } from '@/firebase'
import { getDocs, limit, onSnapshot, orderBy, query } from 'firebase/firestore'

type Props = {}

const iconsSize = 20

const ChatsBar = (props: Props) => {
  const {setChats} = useChatStore()
  useEffect(() => {
    const q = query(chatsRef, orderBy("lastMessageTimestamp", "desc"), limit(30));
    const getChats = onSnapshot(
      q, 
      (snapShot)=>{
        let ch:any = []
        snapShot.docs.reverse().forEach((doc)=>{
         ch.push({...doc.data(), id: doc.id})
         
        })
        console.log(ch)
        setChats(ch)
      }
      );
      return () => {
        getChats();
      }
  },[])

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