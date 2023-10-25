import React from 'react'

type Props = {}

function MessageBubble({}: Props) {
  return (
    <>
        <div className="chat chat-start">
            <div className="chat-bubble text-foreground-600 bg-[#fff] shadow-sm dark:bg-[#1b1b1b]">Its over Anakin 😁, <br/>I have the high ground.</div>
        </div>
        <div className="chat chat-end">
            <div className="chat-bubble bg-[#7448d9] text-white shadow-sm">You underestimate my power!😀</div>
        </div>
        <div className="chat chat-end">
            <div className="chat-bubble bg-[#7448d9] text-white shadow-sm">Booo</div>
        </div>
    </>
  )
}

export default MessageBubble