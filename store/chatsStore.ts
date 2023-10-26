import create from 'zustand';
import { Chat } from "@/types";



type ChatStore = {
      chats: Chat[];
      addChat: (chat: Chat) => void;
      setChats: (chats: Chat[]) => void;
};


const useChatStore = create<ChatStore>((set) => ({
  chats: [],
  addChat: (chat) => set((state) => ({ chats: [...state.chats, chat] })),
  setChats: (chats) => set({ chats }),
}));

export default useChatStore;