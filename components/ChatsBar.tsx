"use client"
import { Button } from '@nextui-org/button'
import { Edit, Search } from 'lucide-react'
import React, { useEffect } from 'react'
import ChatsBarTabs from './ChatsBarTabs'
import { Divider } from '@nextui-org/react'
import ListOfChat from './ListOfChat'
import SearchFriend from './SearchFriend'
import useChatStore from '@/store/chatsStore'
import { auth, chatMembersRef, chatsRef, messagesRef, userRef } from '@/firebase'
import { and, getDocs, limit, onSnapshot, orderBy, query, where } from 'firebase/firestore'
import useUserStore from '@/store/userStore'
import { Chat, ChatMember, ChatParticipant } from '@/types'

type Props = {}

const iconsSize = 20

const ChatsBar = (props: Props) => {
  const {setChats,chats,currentChat,setChatMembers} = useChatStore()
  const {user} = useUserStore()

  useEffect(() => {
    if (user !== null) {
      const q = query(
        chatsRef,
        where("participants", "array-contains", user?.UserId),
        orderBy("lastMessageTimestamp", "desc"),
        limit(30)
      );

      const unsubscribe = onSnapshot(q, (snapShot) => {
        const chatData: Chat[] = [];

        snapShot.docs.forEach((doc) => {
          const ch_ = { ...doc.data(), id: doc.id } as Chat;
          chatData.push(ch_);
        });

      setChats(chatData)
      });


      return () => {
        unsubscribe();
      };
    }
  }, [user, setChats]);



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