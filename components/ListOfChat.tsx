"use client"

import React from 'react'
import OneChatItem from './OneChatItem'
import {Divider} from "@nextui-org/react"
type Props = {}

function ListOfChat({}: Props) {
  return (
    <div className='flex flex-col'>
        <OneChatItem/>
        <Divider className='opacity-30'/>
        <OneChatItem/>
    </div>
  )
}

export default ListOfChat