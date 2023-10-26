"use client"

import React from 'react'
import OneChatItem from './OneChatItem'
import {Divider} from "@nextui-org/react"
type Props = {}

function ListOfChat({}: Props) {
  return (
    <div className='flex flex-1 overflow-y-auto flex-col'>
      {
        [1].map((item) => (
          // <OneChatItem key={item}/>
          ""
        ))
      }
    </div>
  )
}

export default ListOfChat