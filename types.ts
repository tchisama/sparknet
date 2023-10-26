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
      chatType: "single";
      participants: [string, string];
      participantsUsers:
            {
                  name: string;
                  UserId: string;
                  id: string;
            }[];
      lastMessage: string;
      lastMessageTimestamp: Date;
    };
    

export type User = {
    name: string;
    username: string;
    email: string;
    id: string;
    UserId: string;
};