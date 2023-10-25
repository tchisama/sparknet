"use client"
import React from 'react'
import { Button } from '@nextui-org/button'
import { Image as Img, Send, Smile } from 'lucide-react'
import { addDoc, collection, doc, setDoc } from 'firebase/firestore'
import { db } from '@/firebase'

type Props = {}

const MessageBar = (props: Props) => {
  const [message, setMessage] = React.useState('')
  const handleSend =async () => {
    await addDoc(collection(db,"messages"),{
      content:message,
      timestamp:Date.now(),
      senderID:"111",
      chatID:"222",
    })
    setMessage('')
  }
  return (
        <div className='py-2'>
          <div className='max-w-[850px] shadow-xl bg-white dark:bg-[#1b1b1b] rounded-2xl p-1 w-full items-center flex gap-2 mx-auto'>
            <Button isIconOnly  variant='ghost' className='border-none' size='lg' >
              <Smile/>
            </Button>
            <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} className='bg-transparent border-none outline-none p-3 flex-1'/>
            <Button isIconOnly  variant='ghost' className='border-none' size='lg' >
              <Img/>
            </Button>
            <Button onClick={handleSend} variant='solid' size='lg' className='bg-[#7448d9] hover:bg-[#6943c4] text-white flex items-center'>
              Send
              <Send size={20}/>
            </Button>
          </div>
        </div>
  )
}

export default MessageBar