'use client';

import { createContext, useContext, useState } from 'react';

interface ChatContextType {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  initialMessage: string;
  setInitialMessage: (message: string) => void;
  openChatWithMessage: (message: string) => void;
}

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export function ChatProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [initialMessage, setInitialMessage] = useState('');

  const openChatWithMessage = (message: string) => {
    setInitialMessage(message);
    setIsOpen(true);
  };

  return (
    <ChatContext.Provider value={{ isOpen, setIsOpen, initialMessage, setInitialMessage, openChatWithMessage }}>
      {children}
    </ChatContext.Provider>
  );
}

export const useChatContext = (): ChatContextType => {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error('useChatContext must be used within ChatProvider');
  }
  return context;
};