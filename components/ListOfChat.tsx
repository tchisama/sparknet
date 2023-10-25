import React from 'react'
import OneChatItem from './OneChatItem'

type Props = {}

function ListOfChat({}: Props) {
  return (
    <div className='flex flex-col'>
        <OneChatItem/>
        <OneChatItem/>
    </div>
  )
}

export default ListOfChat