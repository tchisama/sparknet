export type Message = {
      content:string,
      timestamp:Date,
      senderID:string,
      chatID:string,
      id:string,
      seen:boolean
}

export type Chat = {
      id: string;
      name: string;
      unreadCount: number;
      chatType: "single";
      participants: [string, string];
      lastMessage: string;
      lastMessageTimestamp: Date;
};
   
export type ChatParticipant = {
      id: string;
      chatID: string;
      UserId: string;
      unreadMessages: number;
      name: string;
};

export type User = {
    name: string;
    username: string;
    email: string;
    id: string;
    UserId: string;
};

export type ChatMember = {
  chatID: string;
  name: string;
  id: string;
  UserId: string;
  frId: string;
  unreadMessages: number;
}