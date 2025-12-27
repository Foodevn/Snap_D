import { Home, LayoutGrid, Heart, User } from 'lucide-react';

interface BottomNavProps {
  currentView?: string;
  onHomeClick?: () => void;
  onFavoritesClick?: () => void;
  onProfileClick?: () => void;
}

export function BottomNav({ currentView = 'home', onHomeClick, onFavoritesClick, onProfileClick }: BottomNavProps) {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
      <div className="flex items-center justify-around py-3">
        <button 
          onClick={onHomeClick}
          className={`flex flex-col items-center gap-1 ${currentView === 'home' ? 'text-[#FAA935]' : 'text-gray-400'}`}
        >
          <Home className={`w-6 h-6 ${currentView === 'home' ? 'fill-[#FAA935]' : ''}`} />
        </button>
        <button className="flex flex-col items-center gap-1 text-gray-400 hover:text-gray-600">
          <LayoutGrid className="w-6 h-6" />
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
  );
}