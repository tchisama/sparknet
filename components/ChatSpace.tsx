import { Button } from '@nextui-org/button'
import { Image, Send, Smile } from 'lucide-react'
import React from 'react'

type Props = {}

function ChatSpace({}: Props) {
  return (
    <div className='flex-1   h-screen flex flex-col'>
        <div className=' flex-1  overflow-y-auto'>
            <div className='max-w-[800px] mx-auto'>
            </div>
        </div>
        <div className='py-2'>
          <div className='max-w-[850px] bg-white dark:bg-[#1b1b1b] rounded-2xl p-1 w-full items-center flex gap-2 mx-auto'>
            <Button isIconOnly  variant='ghost' className='border-none' size='lg' >
              <Smile/>
            </Button>
            <input type="text" className='bg-transparent border-none outline-none p-3 flex-1'/>
            <Button isIconOnly  variant='ghost' className='border-none' size='lg' >
              <Image/>
            </Button>
            <Button variant='solid' size='lg' >
              Send
              <Send/>
            </Button>
          </div>
        </div>
    </div>
  )
}

export default ChatSpace