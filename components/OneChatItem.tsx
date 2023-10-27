"use client"

import React, { useEffect } from 'react'
import {Avatar,Divider,Chip} from "@nextui-org/react";
import { Button } from '@nextui-org/button';
import { Chat, ChatMember } from '@/types';
import useUserStore from '@/store/userStore';
import useChatStore from '@/store/chatsStore';
import { auth, chatMembersRef, db } from '@/firebase';
import { doc, onSnapshot, query, updateDoc, where } from 'firebase/firestore';
type Props = {
  chat:Chat
}

function OneChatItem({chat}: Props) {
  const {user} = useUserStore()
  const {currentChat,setCurrentChat,chatMembers,setChatMembers} = useChatStore()
  const [chatMembers_,setChatMembers_] = React.useState<ChatMember[]>([])
  const [name,setName] = React.useState("")
  const [unreadMessages,setUnreadMessages] = React.useState(0)


  useEffect(() => {
    if (user !== null) {
      const q = query(
        chatMembersRef,
        where("chatID", "==", chat.id as string),
      );

      const unsubscribe = onSnapshot(q, (snapShot) => {
        const chatMData: ChatMember[] = [];

        snapShot.docs.forEach((doc) => {
          const ch_ = { ...doc.data(), frId: doc.id } as ChatMember;
          chatMData.push(ch_);
        });
      setChatMembers_(chatMData)
      console.log(chatMData)
      if(chatMData.length==1){
        setName(chatMData[0].name)
        setUnreadMessages(0)
      }else if(chatMData.length>1){
        setName(chatMData.filter((item)=>item.UserId!==user?.UserId)[0].name)
        setUnreadMessages(chatMData.filter((item)=>item.UserId==user?.UserId)[0].unreadMessages)
      }
      });


      return () => {
        unsubscribe();
      };
    }
  }, [user, setChatMembers]);

  useEffect(()=>{
    if(currentChat==chat.id&&user){
      setChatMembers(chatMembers_)
      chatMembers_.forEach(async(ch)=>{
        if(ch.UserId==user.UserId){
          await updateDoc(doc(db,"chatMembers",ch.frId),{
            unreadMessages:0
          })
        }
      })
    }
  },[currentChat,user])


  return (
    <div onClick={()=>{setCurrentChat(chat.id);setChatMembers(chatMembers_)}} className={'my-1 rounded-xl '+(currentChat === chat.id ? 'bg-foreground-100' : 'bg-[#fff0]')}>
        <div className='flex cursor-pointer rounded-xl duration-200 bg-[#fff0] gap-4  items-center justify-start h-auto px-3 p-2 w-full '>
            <Avatar isBordered radius='lg' size='md'  name={name} />
            <div className='flex items-start flex-col flex-1'>
                <h1 className='text-md text-foreground-700'>{name}</h1>
                <h3 className='text-sm'>{chat.lastMessage.slice(0,20)}{chat.lastMessage.length > 20 ? '...' : ''}</h3>
            </div>
            <div className='flex flex-col gap-2 h-full items-end'>
                <div className='text-xs'>10:03 PM</div>
                <div></div>
                {
                    unreadMessages>0 &&
                    <Chip color='secondary'>{unreadMessages}</Chip>
                }
            </div>
        </div>
    </div>
  )
}

export default OneChatItem