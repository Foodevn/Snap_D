import { Home, MessageSquare, Heart, User } from 'lucide-react';

interface BottomNavProps {
  currentView?: string;
  onHomeClick?: () => void;
  onFavoritesClick?: () => void;
  onProfileClick?: () => void;
  onChatBotClick?: () => void;
}

export function BottomNav({ currentView = 'home', onHomeClick, onFavoritesClick, onProfileClick, onChatBotClick }: BottomNavProps) {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 p-4 pb-6">
      <div className="bg-white rounded-[28px] shadow-[0_-4px_20px_rgba(0,0,0,0.08)] border border-gray-100">
        <div className="flex items-center justify-around py-3 px-2">
          <button 
            onClick={onHomeClick}
            className={`flex flex-col items-center gap-1 ${currentView === 'home' ? 'text-[#FAA935]' : 'text-gray-400'}`}
          >
            <Home className={`w-6 h-6 ${currentView === 'home' ? 'fill-[#FAA935]' : ''}`} />
          </button>
          <button 
            onClick={onChatBotClick}
            className={`flex flex-col items-center gap-1 ${currentView === 'chatbot' ? 'text-[#FAA935]' : 'text-gray-400'}`}
          >
            <MessageSquare className={`w-6 h-6 ${currentView === 'chatbot' ? 'fill-[#FAA935]' : ''}`} />
          </button>
          <button 
            onClick={onFavoritesClick}
            className={`flex flex-col items-center gap-1 ${currentView === 'favorites' ? 'text-[#FAA935]' : 'text-gray-400'}`}
          >
            <Heart className={`w-6 h-6 ${currentView === 'favorites' ? 'fill-[#FAA935]' : ''}`} />
          </button>
          <button 
            onClick={onProfileClick}
            className={`flex flex-col items-center gap-1 ${currentView === 'profile' ? 'text-[#FAA935]' : 'text-gray-400'}`}
          >
            <User className={`w-6 h-6 ${currentView === 'profile' ? 'fill-[#FAA935]' : ''}`} />
          </button>
        </div>
      </div>
    </div>
  );
}