"use client";
import { auth } from "@/firebase";
import { Message } from "@/types";
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
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Button, ButtonGroup, ButtonGroupProvider } from "@nextui-org/button";
import Pop from "./Pop";

type Props = {
  msg: Message;
};
function formatTime(date: Date) {
  if (!(date instanceof Date)) {
    throw new Error("Invalid input. Please provide a valid Date object.");
  }

  const hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? "PM" : "AM";

  // Convert hours to 12-hour format
  const formattedHours = hours % 12 || 12;

  // Add leading zeros to minutes if needed
  const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;

  const formattedTime = `${formattedHours}:${formattedMinutes} ${ampm}`;
  return formattedTime;
}
function MessageBubble({ msg }: Props) {
  const [loading, setLoading] = React.useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  if (msg.type == "msg") {
    return (
      <>
        {!(msg.senderID == auth.currentUser?.uid) ? (
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="chat chat-start"
          >
            <Pop right={false} msg={msg}>
              <div className="chat-bubble shadow-lg cursor-pointer border dark:border-[#242424] text-foreground-600 bg-[#fff] dark:bg-[#1b1b1b]">
                <div className="text-md">{msg.content}</div>
                <div className="text-sm mt-1 w-full flex gap-2 justify-end items-center">
                  {formatTime(new Date(msg.timestamp))}
                </div>
              </div>
            </Pop>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="chat drop-shadow-lg chat-end flex"
          >
            <Pop right={true} msg={msg}>
            <div className="chat-bubble cursor-pointer bg-[#7448d9] text-white ">
              <div className="text-md">{msg.content}</div>
              <div className="text-sm mt-1 w-full flex gap-2 justify-end items-center">
                {msg.seen ? <CheckCheck size={16} /> : <Check size={16} />}
                {formatTime(new Date(msg.timestamp))}
              </div>
            </div>
            </Pop>
          </motion.div>
        )}
      </>
    );
  } else if (msg.type == "image") {
    return !(msg.senderID == auth.currentUser?.uid) ? (
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        className=" relative p-4 chat-start flex flex-col"
      >
        <Image
          isLoading={loading}
          shadow="md"
          isBlurred
          src={msg.img}
          alt=""
          className="max-w-[500px] w-full max-h-[500px] rounded-lg"
        />
        <div className="text-sm mt-1 w-full flex gap-2 justify-start items-center">
          {formatTime(new Date(msg.timestamp))}
        </div>
      </motion.div>
    ) : (
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        className=" relative p-4 chat-end flex flex-col"
      >
        <Image
          isLoading={loading}
          shadow="md"
          isBlurred
          src={msg.img}
          alt=""
          className="max-w-[500px] w-full max-h-[500px] rounded-lg"
        />
        <div className="text-sm mt-1 w-full flex gap-2 justify-end items-center">
          {msg.seen ? <CheckCheck size={16} /> : <Check size={16} />}
          {formatTime(new Date(msg.timestamp))}
        </div>
      </motion.div>
    );
  } else {
    return <></>;
  }
}


export default MessageBubble;
