"use client"
import React from 'react'
import {Popover, PopoverTrigger, PopoverContent, Button, Input} from "@nextui-org/react";
import EmojiPicker,{Theme,EmojiStyle,EmojiClickData} from 'emoji-picker-react';
import { Smile } from 'lucide-react';
import { useTheme } from 'next-themes';

type Props = {
    setMessage: React.Dispatch<React.SetStateAction<string>>
}

const ImojiPicker = ({setMessage}: Props) => {
    const {theme} = useTheme()
    function onClick(emojiData: EmojiClickData, event: MouseEvent) {
        setMessage(
          (inputValue:string) =>
            inputValue + (emojiData.isCustom ? emojiData.unified : emojiData.emoji)
        );
      }
  return (
    <Popover placement="top-start" >
      <PopoverTrigger>
            <Button isIconOnly  variant='ghost' className='border-none' size='lg' >
              <Smile/>
            </Button>
      </PopoverTrigger>
      <PopoverContent className="border-none bg-transparent p-0">
        <EmojiPicker onEmojiClick={onClick} emojiStyle={"twitter" as EmojiStyle }  theme={theme as Theme}/>
      </PopoverContent>
    </Popover>
  )
}

export default ImojiPicker