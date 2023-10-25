import create from 'zustand';

// Define the Message type
export type Message = {
  content: string;
  timestamp: Date;
  senderID: string;
  chatID: string;
  id: string;
};

// Create a Zustand store
interface MessageStore {
  messages: Message[];
  setMessages: (messages: Message[]) => void;
  addMessage: (message: Message) => void;
}

const useMessageStore = create<MessageStore>((set) => ({
  messages: [],

  // Set messages in the store
  setMessages: (messages) => {
    set({ messages });
  },

  // Add a new message to the store
  addMessage: (message) => {
    set((state) => ({ messages: [...state.messages, message] }));
  },
}));

export default useMessageStore;

