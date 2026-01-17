'use client';

import { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Loader2, Settings, X, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useChatContext } from './chatContext';

interface ChatComponentProps {
  initialMessage: string;
}

export default function ChatComponent({ initialMessage }: ChatComponentProps) {
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: 'Hello! I\'m the PWC Davao AI Assistant. How can I help you today?',
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  
  // Customizable settings
  const [botName, setBotName] = useState('YXA');
  const [botSubtitle, setBotSubtitle] = useState('Always here to help');
  const [userName, setUserName] = useState('You');
  const [botIcon, setBotIcon] = useState('🤖');
  const [userIcon, setUserIcon] = useState('👤');
  
  // Temporary settings for editing
  const [tempBotName, setTempBotName] = useState(botName);
  const [tempBotSubtitle, setTempBotSubtitle] = useState(botSubtitle);
  const [tempUserName, setTempUserName] = useState(userName);
  const [tempBotIcon, setTempBotIcon] = useState(botIcon);
  const [tempUserIcon, setTempUserIcon] = useState(userIcon);
  
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const { setInitialMessage } = useChatContext();
  const hasProcessedInitialMessage = useRef(false);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (initialMessage && !hasProcessedInitialMessage.current) {
      hasProcessedInitialMessage.current = true;
      handleSendMessage(initialMessage);
      setInitialMessage('');
    }
  }, [initialMessage]);

  const handleSendMessage = async (messageText: string) => {
    if (!messageText.trim() || isLoading) return;

    const userMessage = messageText.trim();
    
    setMessages((prev) => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMessage }),
      });

      const data = await response.json();
      
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: data.reply || 'Sorry, I could not process that.' },
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: 'Sorry, something went wrong. Please try again.' },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSend = () => {
    if (input.trim()) {
      handleSendMessage(input);
      setInput('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleSaveSettings = () => {
    setBotName(tempBotName);
    setBotSubtitle(tempBotSubtitle);
    setUserName(tempUserName);
    setBotIcon(tempBotIcon);
    setUserIcon(tempUserIcon);
    setShowSettings(false);
  };

  const handleCancelSettings = () => {
    setTempBotName(botName);
    setTempBotSubtitle(botSubtitle);
    setTempUserName(userName);
    setTempBotIcon(botIcon);
    setTempUserIcon(userIcon);
    setShowSettings(false);
  };

  return (
    <div className="flex flex-col h-[600px] max-w-3xl mx-auto bg-white rounded-2xl border-2 border-gray-200 shadow-lg overflow-hidden">
      
      {/* Chat Header */}
      <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-red-700 flex items-center justify-center text-2xl">
              {botIcon}
            </div>
            <div>
              <h3 className="font-bold text-gray-900">{botName}</h3>
              <p className="text-sm text-gray-500">{botSubtitle}</p>
            </div>
          </div>
          <button
            onClick={() => setShowSettings(true)}
            className="p-2 rounded-lg hover:bg-gray-200 transition-colors"
          >
            <Settings className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-gray-50">
        <AnimatePresence>
          {messages.map((message, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className={`flex gap-3 ${
                message.role === 'user' ? 'flex-row-reverse' : 'flex-row'
              }`}
            >
              {/* Avatar */}
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-lg ${
                  message.role === 'user'
                    ? 'bg-gray-700'
                    : 'bg-red-700'
                }`}
              >
                {message.role === 'user' ? userIcon : botIcon}
              </div>

              {/* Message Bubble */}
              <div
                className={`max-w-[70%] px-4 py-3 rounded-2xl ${
                  message.role === 'user'
                    ? 'bg-red-700 text-white rounded-tr-none'
                    : 'bg-white border border-gray-200 text-gray-900 rounded-tl-none'
                }`}
              >
                <p className="text-sm leading-relaxed whitespace-pre-wrap">
                  {message.content}
                </p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Loading Indicator */}
        {isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex gap-3"
          >
            <div className="w-8 h-8 rounded-full bg-red-700 flex items-center justify-center text-lg">
              {botIcon}
            </div>
            <div className="bg-white border border-gray-200 px-4 py-3 rounded-2xl rounded-tl-none">
              <Loader2 className="w-5 h-5 text-gray-400 animate-spin" />
            </div>
          </motion.div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="p-4 border-t border-gray-200 bg-white">
        <div className="flex gap-2">
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask me anything about PWC Davao..."
            disabled={isLoading}
            className="flex-1 px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-red-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleSend}
            disabled={!input.trim() || isLoading}
            className="px-4 py-3 rounded-xl bg-red-700 text-white hover:bg-red-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
          >
            {isLoading ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              <Send className="w-5 h-5" />
            )}
          </motion.button>
        </div>
      </div>

      {/* Settings Modal */}
      <AnimatePresence>
        {showSettings && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleCancelSettings}
              className="fixed inset-0 bg-black/50 z-50"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-md bg-white rounded-2xl shadow-2xl z-50 p-6"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-gray-900">Customize Chat</h3>
                <button
                  onClick={handleCancelSettings}
                  className="p-1 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <X className="w-5 h-5 text-gray-600" />
                </button>
              </div>

              <div className="space-y-4 mb-6">
                {/* Bot Settings */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Bot Name
                  </label>
                  <input
                    type="text"
                    value={tempBotName}
                    onChange={(e) => setTempBotName(e.target.value)}
                    className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-red-700"
                    placeholder="PWC Davao AI Assistant"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Bot Subtitle
                  </label>
                  <input
                    type="text"
                    value={tempBotSubtitle}
                    onChange={(e) => setTempBotSubtitle(e.target.value)}
                    className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-red-700"
                    placeholder="Always here to help"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Bot Icon (Emoji)
                  </label>
                  <input
                    type="text"
                    value={tempBotIcon}
                    onChange={(e) => setTempBotIcon(e.target.value)}
                    maxLength={2}
                    className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-red-700 text-2xl"
                    placeholder="🤖"
                  />
                  <p className="text-xs text-gray-500 mt-1">Use any emoji</p>
                </div>

                <div className="border-t border-gray-200 pt-4">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    value={tempUserName}
                    onChange={(e) => setTempUserName(e.target.value)}
                    className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-red-700"
                    placeholder="You"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Your Icon (Emoji)
                  </label>
                  <input
                    type="text"
                    value={tempUserIcon}
                    onChange={(e) => setTempUserIcon(e.target.value)}
                    maxLength={2}
                    className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-red-700 text-2xl"
                    placeholder="👤"
                  />
                  <p className="text-xs text-gray-500 mt-1">Use any emoji</p>
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={handleCancelSettings}
                  className="flex-1 px-4 py-3 bg-gray-100 text-gray-700 rounded-xl font-semibold hover:bg-gray-200 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSaveSettings}
                  className="flex-1 px-4 py-3 bg-red-700 text-white rounded-xl font-semibold hover:bg-red-800 transition-colors flex items-center justify-center gap-2"
                >
                  <Check className="w-5 h-5" />
                  Save
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}