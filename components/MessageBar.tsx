"use client"
import React, { useEffect } from 'react'
import { Button } from '@nextui-org/button'
import { Image as Img, Send, Smile } from 'lucide-react'
import { addDoc, collection, doc, limit, onSnapshot, orderBy, query, setDoc } from 'firebase/firestore'
import { db, messagesRef } from '@/firebase'
import useMessageStore from '@/store/messagesStore'

type Props = {}

const MessageBar = (props: Props) => {
  const [message, setMessage] = React.useState('')
  const {addMessage,setMessages} = useMessageStore()

  useEffect(() => {
    const q = query(messagesRef, orderBy("timestamp", "desc"), limit(100));
    const getMessages = onSnapshot(
      q, 
      (snapShot)=>{
        let msgs:any = []
        snapShot.docs.reverse().forEach((doc)=>{
          msgs.push({...doc.data(), id: doc.id})
        })
        console.log(msgs)
        setMessages(msgs)
      }
      );
      return () => {
        getMessages();
      }
  },[])

  const handleSend =async (e:React.FormEvent) => {
    e.preventDefault();
    if(message){

      let saveMessage = message;
      setMessage('')
      await addDoc(collection(db,"messages"),{
        content:saveMessage,
        timestamp:Date.now(),
        senderID:"111",
        chatID:"222",
      })

    }
  }
  return (
        <div className='py-2'>
          <form onSubmit={handleSend} className='max-w-[850px] shadow-xl bg-white dark:bg-[#1b1b1b] rounded-2xl p-1 w-full items-center flex gap-2 mx-auto'>
            <Button isIconOnly  variant='ghost' className='border-none' size='lg' >
              <Smile/>
            </Button>
            <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} className='bg-transparent border-none outline-none p-3 flex-1'/>
            <Button isIconOnly  variant='ghost' className='border-none' size='lg' >
              <Img/>
            </Button>
            <Button type='submit' onClick={handleSend} variant='solid' size='lg' className='bg-[#7448d9] hover:bg-[#6943c4] text-white flex items-center'>
              Send
              <Send size={20}/>
            </Button>
          </form>
        </div>
  )
}

export default MessageBar