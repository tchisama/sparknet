import create from 'zustand';
import { Chat } from "@/types";



type ChatStore = {
      chats: Chat[];
      addChat: (chat: Chat) => void;
      setChats: (chats: Chat[]) => void;
      currentChat: string | null;
      setCurrentChat: (currentChat: string | null) => void;
};


const useChatStore = create<ChatStore>((set) => ({
  chats: [],
  currentChat: null,
  setCurrentChat: (currentChat) => set({ currentChat }),
  addChat: (chat) => set((state) => ({ chats: [...state.chats, chat] })),
  setChats: (chats) => set({ chats }),
}));

export default useChatStore;