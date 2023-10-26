"use client"
import React from 'react'
import {Avatar,Divider,Chip} from "@nextui-org/react";
import { Button } from '@nextui-org/button';
type Props = {}

function OneChatItem({}: Props) {
  return (
    <div className='my-1'>
        <div className='flex cursor-pointer rounded-xl duration-200 bg-[#fff0] gap-4 dark:hover:bg-[#1b1b1b] hover:bg-[#f5f5f5] items-center justify-start h-auto px-3 p-2 w-full '>
            <Avatar isBordered radius='lg' size='md' src='https://avatars.githubusercontent.com/u/115560200?v=4' name="tchisama" />
            <div className='flex items-start flex-col flex-1'>
                <h1 className='text-md text-foreground-700'>tchisama</h1>
                <h3 className='text-sm '>hello 😎😍</h3>
            </div>
            <div className='flex flex-col gap-2 items-end'>
                <div className='text-xs'>10:03 PM</div>
                <Chip color='secondary'>3</Chip>
            </div>
        </div>
    </div>
  )
}

export default OneChatItem