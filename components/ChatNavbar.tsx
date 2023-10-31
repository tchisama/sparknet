import { auth } from '@/firebase'
import useChatStore from '@/store/chatsStore'
import { Button } from '@nextui-org/button'
import { Avatar } from '@nextui-org/react'
import { PanelRight, Search } from 'lucide-react'
import React, { useEffect } from 'react'
import {motion} from "framer-motion"

type Props = {}

const ChatNavbar = (props: Props) => {
    const {chatMembers} = useChatStore()
    const [name,setName] = React.useState("")
    useEffect(() => {
      if(chatMembers.length==1){
        setName(chatMembers[0].name)
      }else if(chatMembers.length>1){
        setName(chatMembers.filter((item)=>item.UserId!==auth.currentUser?.uid)[0].name)
      }
    },[chatMembers])
  return (
        <div className='p-4 px-8 flex dark:bg-[#1b1b1b] bg-background justify-between dark:border-none border-b border-l'>
            <motion.div initial={{opacity:0,x:-30}} animate={{opacity:1,x:0}} className='flex gap-4  items-center'>
            <Avatar name={name} />
            <div>
                <h1 className='text-md'>{name}</h1>
                <p className='text-sm'>Online</p>
            </div>
            </motion.div>
            <div className='flex gap-2'>
            <Button variant='light' isIconOnly>
                <Search />
            </Button>
            <Button variant='light' isIconOnly>
                <PanelRight />
            </Button>
            </div>
        </div>
  )
}

export default ChatNavbar