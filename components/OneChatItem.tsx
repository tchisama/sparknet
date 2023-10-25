"use client"
import React from 'react'
import {Avatar,Divider} from "@nextui-org/react";
import { Button } from '@nextui-org/button';
type Props = {}

function OneChatItem({}: Props) {
  return (
    <div>
        <div className='flex rounded-xl duration-200 bg-[#fff0] gap-4 dark:hover:bg-[#1b1b1b] hover:bg-[#f5f5f5] items-center justify-start h-auto p-2 w-full '>
            <Avatar size='lg' src='https://avatars.githubusercontent.com/u/115560200?v=4' name="tchisama" />
            <div className='flex items-start flex-col'>
                <h1 className='text-md'>tchisama</h1>
                <h3 className='text-sm'>hello</h3>
            </div>
        </div>
    </div>
  )
}

export default OneChatItem