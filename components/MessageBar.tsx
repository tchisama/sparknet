import React from 'react'
import { Button } from '@nextui-org/button'
import { Image as Img, Send, Smile } from 'lucide-react'

type Props = {}

const MessageBar = (props: Props) => {
  return (
        <div className='py-2'>
          <div className='max-w-[850px] shadow-xl bg-white dark:bg-[#1b1b1b] rounded-2xl p-1 w-full items-center flex gap-2 mx-auto'>
            <Button isIconOnly  variant='ghost' className='border-none' size='lg' >
              <Smile/>
            </Button>
            <input type="text" className='bg-transparent border-none outline-none p-3 flex-1'/>
            <Button isIconOnly  variant='ghost' className='border-none' size='lg' >
              <Img/>
            </Button>
            <Button variant='solid' size='lg' className='bg-[#7448d9] hover:bg-[#6943c4] text-white flex items-center'>
              Send
              <Send size={20}/>
            </Button>
          </div>
        </div>
  )
}

export default MessageBar