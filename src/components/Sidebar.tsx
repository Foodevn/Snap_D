import { Home, MessageSquare, Heart, User, MapPin, Settings, LogOut, Gift } from 'lucide-react';

interface SidebarProps {
  currentView: string;
  onHomeClick: () => void;
  onFavoritesClick: () => void;
  onProfileClick: () => void;
  onChatBotClick: () => void;
  onLuckyDrawClick: () => void;
}

export function Sidebar({ currentView, onHomeClick, onFavoritesClick, onProfileClick, onChatBotClick, onLuckyDrawClick }: SidebarProps) {
  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex lg:flex-col lg:fixed lg:inset-y-0 lg:w-64 bg-white border-r border-gray-200">
        {/* Logo */}
        <div className="p-6 border-b border-gray-200">
          <img src="./logo-snap-d.png" alt="logo" className='w-40' />
          <div className="flex items-center gap-1 text-sm text-[#FAA935] mt-2 ml-3">
            <MapPin className="w-4 h-4" />
            <span>Dalat, Vietnam</span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4">
          <button
            onClick={onHomeClick}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors mb-2 ${currentView === 'home'
              ? 'bg-[#FFF5E6] text-[#FAA935]'
              : 'text-gray-600 hover:bg-gray-50'
              }`}
          >
            <Home className="w-5 h-5" />
            <span>Home</span>
          </button>

          <button
            onClick={onChatBotClick}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors mb-2 ${currentView === 'chatbot'
              ? 'bg-[#FFF5E6] text-[#FAA935]'
              : 'text-gray-600 hover:bg-gray-50'
              }`}
          >
            <MessageSquare className="w-5 h-5" />
            <span>Chat Bot</span>
          </button>

          <button
            onClick={onLuckyDrawClick}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors mb-2 ${currentView === 'luckydraw'
              ? 'bg-[#FFF5E6] text-[#FAA935]'
              : 'text-gray-600 hover:bg-gray-50'
              }`}
          >
            <Gift className="w-5 h-5" />
            <span>Lucky Draw</span>
          </button>
          <button
            onClick={onFavoritesClick}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors mb-2 ${currentView === 'favorites'
              ? 'bg-[#FFF5E6] text-[#FAA935]'
              : 'text-gray-600 hover:bg-gray-50'
              }`}
          >
            <Heart className="w-5 h-5" />
            <span>Favorites</span>
          </button>

          <button
            onClick={onProfileClick}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors mb-2 ${currentView === 'profile'
              ? 'bg-[#FFF5E6] text-[#FAA935]'
              : 'text-gray-600 hover:bg-gray-50'
              }`}
          >
            <User className="w-5 h-5" />
            <span>Profile</span>
          </button>

          <div className="my-6 border-t border-gray-200"></div>

          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors mb-2">
            <Settings className="w-5 h-5" />
            <span>Settings</span>
          </button>
        </nav>

        {/* User Profile */}
        <div className="p-4 border-t border-gray-200"
          onClick={() => {
            window.location.href = "/"
          }}
        >
          <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
            <div className="w-10 h-10 bg-gradient-to-br from-[#FAA935] to-[#FF8C42] rounded-full flex items-center justify-center text-white">
              <span>A</span>
            </div>
            <div className="flex-1">
              <p className="text-sm">Guest User</p>
              <p className="text-xs text-gray-500">guest@snapdl.com</p>
            </div>
            <LogOut className="w-4 h-4 text-gray-400" />
          </div>
        </div>
      </aside>
    </>
  );
}