"use client"
import React, { useEffect } from 'react'
import { Button } from '@nextui-org/button'
import { Image as Img, Send, Smile } from 'lucide-react'
import { addDoc, and, collection, doc, getDoc, increment, limit, onSnapshot, orderBy, query, setDoc, updateDoc, where } from 'firebase/firestore'
import { auth, chatMembersRef, chatsRef, db, messagesRef } from '@/firebase'
import useMessageStore from '@/store/messagesStore'
import useChatStore from '@/store/chatsStore'
import SendPhoto from './SendPhoto'
import InputEmojiWithRef from 'react-input-emoji'
import InputEmoji from "react-input-emoji"; 
import EmojiPicker from 'emoji-picker-react'
import ImojiPicker from './ImojiPicker'

type Props = {}

const MessageBar = (props: Props) => {
  const [message, setMessage] = React.useState('')
  const {addMessage,setMessages} = useMessageStore()
  const {currentChat,chatMembers} = useChatStore()
  const [text, setText] = React.useState(""); 
  useEffect(() => {
    let unsub:()=>void; // Declare unsub variable outside the if block
  
    if (currentChat !== null) {
      const q = query(messagesRef, where("chatID", "==", currentChat), orderBy("timestamp", "desc"), limit(100));
      
      unsub = onSnapshot(q, (snapShot) => {
        let msgs:any = [];
        snapShot.docs.reverse().forEach((doc) => {
          msgs.push({ ...doc.data(), id: doc.id });
        });
        console.log(msgs);
        setMessages(msgs);
        snapShot.docs.filter((doc)=>doc.data().seen==false).forEach(async(dc)=>{
          if(dc.data().senderID!=auth.currentUser?.uid){

            await updateDoc(dc.ref,{
              seen:true
            })

            
            setTimeout(()=>{
                chatMembers.forEach(async(ch)=>{
                  if(ch.UserId==auth.currentUser?.uid){
                    await updateDoc(doc(db,"chatMembers",ch.frId),{
                      unreadMessages:0
                    })
                  }
                })
            },1000)

          }
        })

      })


          // }else if(chatMembersSnapshot.docs.length == 1){
          //   ch_.participantsUsers = chatMembersSnapshot.docs[0].data() as ChatParticipant;
          // }

      
    }


  
    return () => {
      if (unsub) {
        unsub(); // Unsubscribe from the previous onSnapshot when the component unmounts or when currentChat changes.
      }
    };
  }, [currentChat]);
  

  const handleSend =async (e:React.FormEvent) => {
    e.preventDefault();
    if(message){
      let saveMessage = message;
      setMessage('')
      await addDoc(collection(db,"messages"),{
        content:saveMessage,
        timestamp:Date.now(),
        senderID:auth.currentUser?.uid,
        chatID:currentChat,
        seen:false,
        type:"msg"
      })
      const chatRef = doc(db,"chats",currentChat as string);
      await updateDoc(chatRef,{
        lastMessage:saveMessage,
        lastMessageTimestamp:Date.now(),
      })

      console.log(chatMembers)
      chatMembers.forEach(async(ch)=>{
        if(ch.UserId!=auth.currentUser?.uid){
          await updateDoc(doc(db,"chatMembers",ch.frId),{
            unreadMessages:increment(1)
          })
        }else{
          await updateDoc(doc(db,"chatMembers",ch.frId),{
            unreadMessages:0
          })
        }
      })

    }
  }
  return (
        <div className='py-2 relative'>
          <form onSubmit={handleSend} className='max-w-[850px] shadow-xl bg-white dark:bg-[#1b1b1b] rounded-2xl p-1 w-full items-center flex gap-2 mx-auto'>
            
            <ImojiPicker setMessage={setMessage}/>
            <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} className='bg-transparent border-none outline-none p-3 flex-1'/>
            <SendPhoto/>
            <Button type='submit' onClick={handleSend} variant='solid' size='lg' className='bg-[#7448d9] hover:bg-[#6943c4] text-white flex items-center'>
              Send
              <Send size={20}/>
            </Button>
          </form>
        </div>
  )
}

export default MessageBar