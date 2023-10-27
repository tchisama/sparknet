import create from 'zustand';
import { Chat, ChatMember } from "@/types";


type ChatStore = {
      chats: Chat[];
      addChat: (chat: Chat) => void;
      setChats: (chats: Chat[]) => void;
      currentChat: string | null;
      setCurrentChat: (currentChat: string | null) => void;
      chatMembers: ChatMember[];
      setChatMembers: (chatMembers: ChatMember[]) => void;
};


const useChatStore = create<ChatStore>((set) => ({
  chats: [],
  currentChat: null,
  setCurrentChat: (currentChat) => set({ currentChat }),
  chatMembers: [],
  setChatMembers: (chatMembers) => set({ chatMembers }),
  addChat: (chat) => set((state) => ({ chats: [...state.chats, chat] })),
  setChats: (chats) => set({ chats }),
}));

export default useChatStore;