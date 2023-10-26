"use client"
import React from 'react'
import {Tabs, Tab, Card, CardBody} from "@nextui-org/react";
import ListOfChat from './ListOfChat';

type Props = {}

function ChatsBarTabs({}: Props) {
  return (
    <div className="flex w-full flex-col my-4">
    <Tabs radius='full' fullWidth aria-label="Options"  >
      <Tab key="Chat" title="Chat">
      <ListOfChat/>
      </Tab>
      <Tab key="Groups" title="Groups">
      </Tab>
      <Tab key="Channels" title="Channels">
      </Tab>
    </Tabs>
  </div>  
  )
}

export default ChatsBarTabs