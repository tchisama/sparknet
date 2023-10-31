import React from 'react'

import {
  Avatar,
  Listbox,
  ListboxItem,
  Divider,
  Image,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@nextui-org/react";
import { Check, CheckCheck, Copy, Edit, Forward, Heart, Trash } from "lucide-react";
import { Message } from '@/types';
import { deleteDoc, doc } from 'firebase/firestore';
import { messagesRef } from '@/firebase';

type Props = {}

const Pop = ({ children,right,msg }: { children: React.ReactNode ,right?:boolean,msg:Message}) => {
    const removeMessage = async ()=>{
        await deleteDoc(doc(messagesRef,msg.id))
    }
    
  return (
    <Popover className="cursor-pointer" placement={right?"left":"right"}>
      <PopoverTrigger>{children}</PopoverTrigger>
      <PopoverContent className="p-0">
        <Listbox
          className="min-w-[150px]"
          aria-label="Actions"
        >
          <ListboxItem startContent={<Heart size={16} />} key="copy">
            Like
          </ListboxItem>
          <ListboxItem startContent={<Copy size={16} />} key="copy">
            Copy
          </ListboxItem>
          <ListboxItem key="edit" startContent={<Edit size={16} />}>
            Edit
          </ListboxItem>
          <ListboxItem key="forward" startContent={<Forward size={16} />}>
            Forward
          </ListboxItem>
          <ListboxItem
            key="delete"
            startContent={<Trash size={16} />}
            className="text-danger"
            color="danger"
            onClick={removeMessage}
          >
            Delete
          </ListboxItem>
        </Listbox>
      </PopoverContent>
    </Popover>
  );
};

export default Pop