import { ChatProvider } from './chatContext';
import FloatingChatBubble from './floatingChatBubble';

interface type {
  children: React.ReactNode;
}

export default function HomeLayout({ children }: type) {
  return (
    <ChatProvider>
      {children}
      <FloatingChatBubble />
    </ChatProvider>
  );
}