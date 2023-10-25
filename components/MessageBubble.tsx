import { CheckCheck } from 'lucide-react'
import React from 'react'

type Props = {}

function MessageBubble({}: Props) {
  return (
    <>
        <div className="chat chat-start">
            <div className="chat-bubble text-foreground-600 bg-[#fff] shadow-sm dark:bg-[#1b1b1b]">
              Its over Anakin 😁, <br/>I have the high ground.
              <div className='text-sm mt-1 w-full flex gap-2 justify-end items-center'>10:03 PM</div> 
            </div>
        </div>
        <div className="chat chat-end flex">
            <div className="chat-bubble bg-[#7448d9] text-white shadow-sm">
              You power Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore voluptates rerum perferendis dolores nihil modi fugit illum necessitatibus debitis dolore delectus accusantium facere aperiam accusamus, tempora assumenda quam, nemo maiores.!😀
              <div className='text-sm mt-1 w-full flex gap-2 justify-end items-center'><CheckCheck size={16}/> 10:03 PM</div> 
            </div>
        </div>
        <div className="chat chat-end flex">
            <div className="chat-bubble bg-[#7448d9] text-white shadow-sm">
              Hi
              <div className='text-sm mt-1 w-full flex gap-2 justify-end items-center'><CheckCheck size={16}/> 10:03 PM</div> 
            </div>
        </div>
    </>
  )
}

export default MessageBubble