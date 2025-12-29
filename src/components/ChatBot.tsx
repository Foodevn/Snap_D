import { Send, Bot, User, Sparkles, MapPin, Clock, DollarSign, AlertCircle } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { BottomNav } from './BottomNav';
import ReactMarkdown from 'react-markdown';

interface ChatBotProps {
  onFavoritesClick: () => void;
  onProfileClick: () => void;
  onHomeClick: () => void;
  onLuckyDrawClick: () => void;
}

interface Message {
  id: number;
  type: 'user' | 'bot';
  text: string;
  timestamp: Date;
  suggestions?: string[];
  isError?: boolean;
}

export function ChatBot({ onFavoritesClick, onProfileClick, onHomeClick, onLuckyDrawClick }: ChatBotProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      type: 'bot',
      text: 'Hello! 👋 I\'m Snap D\'s AI travel assistant. I can help you find amazing places in Da Lat - from scenic cafes, delicious restaurants to popular attractions. What would you like to explore today?',
      timestamp: new Date(),
      suggestions: ['Popular places in Da Lat', 'Scenic cafes', 'Best restaurants', '1-day itinerary']
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessageToAPI = async (userMessage: string): Promise<{ text: string; suggestions?: string[] }> => {
    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          message: userMessage
        })
      });

      const data = await response.json();

      if (!response.ok) {
        console.error('API Error:', data);
        throw new Error(data.error || 'Failed to get response');
      }

      return {
        text: data.response,
        suggestions: data.suggestions
      };
    } catch (error) {
      console.error('Error calling chat API:', error);
      return {
        text: 'Sorry, I\'m having connection issues. Please try again later! 🙏',
        suggestions: ['Try again', 'Popular places', 'Cafes', 'Restaurants']
      };
    }
  };

  const handleSend = async () => {
    if (inputText.trim() === '' || isTyping) return;

    const userMessageText = inputText;

    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      type: 'user',
      text: userMessageText,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    // Call API
    const botResponseData = await sendMessageToAPI(userMessageText);

    const botMessage: Message = {
      id: messages.length + 2,
      type: 'bot',
      text: botResponseData.text,
      timestamp: new Date(),
      suggestions: botResponseData.suggestions
    };

    setMessages(prev => [...prev, botMessage]);
    setIsTyping(false);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setInputText(suggestion);
    inputRef.current?.focus();
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !isTyping) {
      handleSend();
    }
  };

  const handleQuickAction = (action: string) => {
    setInputText(action);
    inputRef.current?.focus();
  };

  return (
    <div className="max-w-7xl mx-auto bg-white lg:bg-transparent min-h-screen pb-24 lg:pb-8 flex flex-col">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#FAA935] to-[#E89820] text-white px-5 lg:px-8 py-6 lg:rounded-2xl lg:mb-4">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
            <Bot className="w-7 h-7 text-[#FAA935]" />
          </div>
          <div>
            <h1 className="text-xl lg:text-2xl">AI Travel Assistant</h1>
            <p className="text-sm text-white/90 flex items-center gap-1">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              Online now
            </p>
          </div>
        </div>
        <p className="text-sm text-white/90">
          Ask me anything about Da Lat - restaurants, hotels, activities, or plan your perfect trip! 🌟
        </p>
      </div>

      {/* Messages Container */}
      <div className="flex-1 px-5 lg:px-8 py-4 overflow-y-auto">
        <div className="space-y-4">
          {messages.map((message) => (
            <div key={message.id}>
              {message.type === 'bot' ? (
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-[#FAA935] to-[#E89820] rounded-full flex items-center justify-center flex-shrink-0">
                    <Bot className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="bg-gray-100 rounded-2xl rounded-tl-none px-4 py-3 inline-block max-w-[85%]">
                      <div className="text-sm lg:text-base text-gray-800 prose prose-sm max-w-none prose-p:my-1 prose-ul:my-1 prose-li:my-0 prose-headings:my-2 prose-strong:text-gray-900">
                        <ReactMarkdown>
                          {message.text}
                        </ReactMarkdown>
                      </div>
                    </div>
                    <p className="text-xs text-gray-400 mt-1 ml-1">
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                    {message.suggestions && (
                      <div className="flex flex-wrap gap-2 mt-3">
                        {message.suggestions.map((suggestion, index) => (
                          <button
                            key={index}
                            onClick={() => handleSuggestionClick(suggestion)}
                            className="px-3 py-2 bg-white border border-[#FAA935] text-[#FAA935] rounded-full text-xs lg:text-sm hover:bg-orange-50 transition-colors"
                          >
                            {suggestion}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <div className="flex items-start gap-3 justify-end">
                  <div className="flex-1 flex justify-end">
                    <div>
                      <div className="bg-gradient-to-r from-[#FAA935] to-[#E89820] text-white rounded-2xl rounded-tr-none px-4 py-3 inline-block max-w-[85%]">
                        <p className="text-sm lg:text-base">
                          {message.text}
                        </p>
                      </div>
                      <p className="text-xs text-gray-400 mt-1 mr-1 text-right">
                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </p>
                    </div>
                  </div>
                  <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                    <User className="w-5 h-5 text-gray-600" />
                  </div>
                </div>
              )}
            </div>
          ))}

          {/* Typing Indicator */}
          {isTyping && (
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-[#FAA935] to-[#E89820] rounded-full flex items-center justify-center flex-shrink-0">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <div className="bg-gray-100 rounded-2xl rounded-tl-none px-4 py-3">
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Quick Actions - Desktop Only */}
      <div className="hidden lg:flex gap-4 px-52 py-4">
        <button
          onClick={() => handleQuickAction('Popular places in Da Lat')}
          className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors text-sm"
        >
          <MapPin className="w-4 h-4 text-[#FAA935]" />
          <span>Popular Places</span>
        </button>
        <button
          onClick={() => handleQuickAction('1-day Da Lat travel itinerary')}
          className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors text-sm"
        >
          <Clock className="w-4 h-4 text-[#FAA935]" />
          <span>Plan Itinerary</span>
        </button>
        <button
          onClick={() => handleQuickAction('Budget-friendly Da Lat travel tips')}
          className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors text-sm"
        >
          <DollarSign className="w-4 h-4 text-[#FAA935]" />
          <span>Budget Tips</span>
        </button>
      </div>

      {/* Input Area */}
      <div className="px-5 lg:px-8 py-4 bg-white lg:bg-transparent border-t lg:border-0">
        <div className="relative flex items-center gap-2 max-w-4xl mx-auto">
          <div className="flex-1 relative">
            <input
              ref={inputRef}
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask me about Da Lat..."
              disabled={isTyping}
              className="w-full pl-4 pr-12 py-3 lg:py-4 bg-gray-100 lg:bg-white lg:border lg:border-gray-200 rounded-full text-sm lg:text-base focus:outline-none focus:ring-2 focus:ring-[#FAA935]/20 disabled:opacity-50"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors">
              <Sparkles className="w-4 h-4 text-gray-600" />
            </button>
          </div>
          <button
            onClick={handleSend}
            disabled={inputText.trim() === '' || isTyping}
            className="w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-r from-[#FAA935] to-[#E89820] rounded-full flex items-center justify-center hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex-shrink-0"
          >
            <Send className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
          </button>
        </div>
      </div>

      {/* Bottom Navigation - Mobile Only */}
      <BottomNav
        currentView="chatbot"
        onHomeClick={onHomeClick}
        onFavoritesClick={onFavoritesClick}
        onProfileClick={onProfileClick}
        onChatBotClick={() => { }}
        onLuckyDrawClick={onLuckyDrawClick}
      />
    </div>
  );
}
