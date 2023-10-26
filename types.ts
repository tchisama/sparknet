export type Message = {
      content:string,
      timestamp:Date,
      senderID:string,
      chatID:string,
      id:string
}

export type Chat = {
      id: string;
      chatType: "single";
      participants: [string, string];
      lastMessage: string;
      lastMessageTimestamp: Date;
    };
    
