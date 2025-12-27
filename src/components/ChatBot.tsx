import { Send, Bot, User, Sparkles, MapPin, Clock, DollarSign } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { BottomNav } from './BottomNav';

interface ChatBotProps {
  onFavoritesClick: () => void;
  onProfileClick: () => void;
  onHomeClick: () => void;
}

interface Message {
  id: number;
  type: 'user' | 'bot';
  text: string;
  timestamp: Date;
  suggestions?: string[];
}

export function ChatBot({ onFavoritesClick, onProfileClick, onHomeClick }: ChatBotProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      type: 'bot',
      text: 'Hello! 👋 I\'m your travel assistant for Dalat. I can help you find the perfect destinations, recommend restaurants, or plan your itinerary. What would you like to explore today?',
      timestamp: new Date(),
      suggestions: ['Find cafes nearby', 'Best restaurants', 'Plan a day trip', 'Budget-friendly hotels']
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

  const getBotResponse = (userMessage: string): { text: string; suggestions?: string[] } => {
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes('cafe') || lowerMessage.includes('coffee')) {
      return {
        text: 'Great choice! ☕ I recommend **The Garden Cafe** - it\'s a cozy spot with amazing Vietnamese coffee and beautiful outdoor seating. They\'re usually quiet between 4-6 PM. Would you like directions or see the menu?',
        suggestions: ['Show menu', 'Get directions', 'See photos', 'Other cafes']
      };
    } else if (lowerMessage.includes('restaurant') || lowerMessage.includes('food')) {
      return {
        text: 'I\'d love to help you find a great place to eat! 🍽️ **La Terrasse Restaurant** offers authentic Vietnamese cuisine with a modern twist. It\'s best to visit between 3-5 PM to avoid crowds. Average price is $45 per person. Interested?',
        suggestions: ['View details', 'See menu', 'Book a table', 'Other options']
      };
    } else if (lowerMessage.includes('hotel') || lowerMessage.includes('stay')) {
      return {
        text: 'Looking for accommodation? 🏨 I have some excellent options:\n\n**Alley Palace** - $199/night, historic building with stunning views\n**Coeurdes Alpes** - $199/night, alpine-style luxury\n\nBoth have heaters, pools, and great dining. Which one interests you?',
        suggestions: ['Alley Palace details', 'Coeurdes Alpes details', 'Budget options', 'Compare all']
      };
    } else if (lowerMessage.includes('budget') || lowerMessage.includes('cheap')) {
      return {
        text: '💰 Looking for budget-friendly options? The Garden Cafe is great at $25 per visit, and I can help you find affordable guesthouses starting from $50/night. What\'s your budget range?',
        suggestions: ['Under $50', '$50-$100', '$100-$200', 'Show all']
      };
    } else if (lowerMessage.includes('plan') || lowerMessage.includes('itinerary')) {
      return {
        text: '📅 Let me help you plan an amazing day in Dalat!\n\n**Morning (8-11 AM)**: Start with breakfast at The Garden Cafe\n**Lunch (12-2 PM)**: Try La Terrasse Restaurant\n**Afternoon (3-6 PM)**: Explore local attractions\n**Evening (7 PM+)**: Dinner and city walk\n\nWould you like more details for any part?',
        suggestions: ['Morning activities', 'Lunch spots', 'Evening plans', 'Full itinerary']
      };
    } else if (lowerMessage.includes('hello') || lowerMessage.includes('hi')) {
      return {
        text: 'Hello there! 😊 Welcome to SNAP DL! How can I make your Dalat experience unforgettable today?',
        suggestions: ['Find cafes', 'Best restaurants', 'Hotels', 'Plan my day']
      };
    } else if (lowerMessage.includes('thanks') || lowerMessage.includes('thank')) {
      return {
        text: 'You\'re very welcome! 🙏 Is there anything else you\'d like to know about Dalat? I\'m here to help!',
        suggestions: ['Find more places', 'Plan itinerary', 'Budget tips', 'Local tips']
      };
    } else {
      return {
        text: 'I can help you discover amazing places in Dalat! I can recommend:\n\n✨ Cafes and restaurants\n🏨 Hotels and accommodations\n🗺️ Attractions and activities\n📋 Custom itineraries\n\nWhat interests you most?',
        suggestions: ['Show cafes', 'Show restaurants', 'Show hotels', 'Create itinerary']
      };
    }
  };

  const handleSend = () => {
    if (inputText.trim() === '') return;

    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      type: 'user',
      text: inputText,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    // Simulate bot typing and response
    setTimeout(() => {
      const botResponseData = getBotResponse(inputText);
      const botMessage: Message = {
        id: messages.length + 2,
        type: 'bot',
        text: botResponseData.text,
        timestamp: new Date(),
        suggestions: botResponseData.suggestions
      };

      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setInputText(suggestion);
    inputRef.current?.focus();
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSend();
    }
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
          Ask me anything about Dalat - restaurants, hotels, activities, or planning your perfect trip! 🌟
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
                      <p className="text-sm lg:text-base text-gray-800 whitespace-pre-line">
                        {message.text}
                      </p>
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
      <div className="hidden lg:flex gap-3 px-8 py-4">
        <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors text-sm">
          <MapPin className="w-4 h-4 text-[#FAA935]" />
          <span>Nearby Places</span>
        </button>
        <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors text-sm">
          <Clock className="w-4 h-4 text-[#FAA935]" />
          <span>Plan Itinerary</span>
        </button>
        <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors text-sm">
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
              placeholder="Ask me anything about Dalat..."
              className="w-full pl-4 pr-12 py-3 lg:py-4 bg-gray-100 lg:bg-white lg:border lg:border-gray-200 rounded-full text-sm lg:text-base focus:outline-none focus:ring-2 focus:ring-[#FAA935]/20"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors">
              <Sparkles className="w-4 h-4 text-gray-600" />
            </button>
          </div>
          <button
            onClick={handleSend}
            disabled={inputText.trim() === ''}
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
        onChatBotClick={() => {}}
      />
    </div>
  );
}
