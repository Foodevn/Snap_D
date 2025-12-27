import { ArrowLeft, Camera, Heart, MapPin, Calendar, Settings, LogOut, ChevronRight, Bell, Lock, CreditCard, HelpCircle } from 'lucide-react';
import { BottomNav } from './BottomNav';

interface ProfileProps {
  onBackToHome: () => void;
  favoritesCount: number;
  onFavoritesClick: () => void;
  onChatBotClick: () => void;
}

export function Profile({ onBackToHome, favoritesCount, onFavoritesClick, onChatBotClick }: ProfileProps) {
  return (
    <div className="max-w-7xl mx-auto bg-white lg:bg-transparent min-h-screen pb-20 lg:pb-8">
      {/* Header */}
      <div className="px-5 lg:px-8 pt-6 lg:pt-8 pb-6 bg-white lg:bg-transparent">
        <div className="flex items-center gap-4 mb-6">
          <button
            onClick={onBackToHome}
            className="lg:hidden w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div className="flex-1">
            <h1 className="text-2xl lg:text-3xl">My Profile</h1>
          </div>
        </div>
      </div>

      {/* Profile Card */}
      <div className="px-5 lg:px-8 mb-6">
        <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-sm border border-gray-100">
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6">
            {/* Avatar */}
            <div className="relative">
              <div className="w-24 h-24 lg:w-32 lg:h-32 bg-gradient-to-br from-[#FAA935] to-[#FF8C42] rounded-full flex items-center justify-center text-white text-3xl lg:text-4xl">
                A
              </div>
              <button className="absolute bottom-0 right-0 w-10 h-10 bg-[#FAA935] rounded-full flex items-center justify-center text-white shadow-lg hover:bg-[#E89820] transition-colors">
                <Camera className="w-5 h-5" />
              </button>
            </div>

            {/* User Info */}
            <div className="flex-1 text-center lg:text-left">
              <h2 className="text-xl lg:text-2xl mb-1">Guest User</h2>
              <p className="text-gray-600 mb-3">guest@snapdl.com</p>
              <div className="flex items-center justify-center lg:justify-start gap-2 text-sm text-gray-500">
                <MapPin className="w-4 h-4" />
                <span>Dalat, Vietnam</span>
              </div>
              <button className="mt-4 px-6 py-2 bg-[#FAA935] text-white rounded-lg hover:bg-[#E89820] transition-colors">
                Edit Profile
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 lg:gap-8 w-full lg:w-auto lg:ml-auto">
              <div className="text-center">
                <p className="text-2xl lg:text-3xl text-[#FAA935] mb-1">{favoritesCount}</p>
                <p className="text-xs lg:text-sm text-gray-600">Favorites</p>
              </div>
              <div className="text-center">
                <p className="text-2xl lg:text-3xl text-[#FAA935] mb-1">12</p>
                <p className="text-xs lg:text-sm text-gray-600">Bookings</p>
              </div>
              <div className="text-center">
                <p className="text-2xl lg:text-3xl text-[#FAA935] mb-1">8</p>
                <p className="text-xs lg:text-sm text-gray-600">Reviews</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="px-5 lg:px-8 mb-6">
        <h2 className="text-lg lg:text-xl mb-4">Recent Activity</h2>
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 divide-y">
          <div className="p-4 lg:p-5 flex items-center gap-4 hover:bg-gray-50 transition-colors cursor-pointer">
            <div className="w-12 h-12 bg-[#FFF5E6] rounded-full flex items-center justify-center">
              <Heart className="w-6 h-6 text-[#FAA935]" />
            </div>
            <div className="flex-1">
              <p className="text-sm lg:text-base">Added to favorites</p>
              <p className="text-xs lg:text-sm text-gray-500">Alley Palace - 2 hours ago</p>
            </div>
          </div>

          <div className="p-4 lg:p-5 flex items-center gap-4 hover:bg-gray-50 transition-colors cursor-pointer">
            <div className="w-12 h-12 bg-[#FFF5E6] rounded-full flex items-center justify-center">
              <Calendar className="w-6 h-6 text-[#FAA935]" />
            </div>
            <div className="flex-1">
              <p className="text-sm lg:text-base">Booking confirmed</p>
              <p className="text-xs lg:text-sm text-gray-500">Coeurdes Alpes - 1 day ago</p>
            </div>
          </div>

          <div className="p-4 lg:p-5 flex items-center gap-4 hover:bg-gray-50 transition-colors cursor-pointer">
            <div className="w-12 h-12 bg-[#FFF5E6] rounded-full flex items-center justify-center">
              <MapPin className="w-6 h-6 text-[#FAA935]" />
            </div>
            <div className="flex-1">
              <p className="text-sm lg:text-base">Explored new destination</p>
              <p className="text-xs lg:text-sm text-gray-500">Mountain View - 3 days ago</p>
            </div>
          </div>
        </div>
      </div>

      {/* Settings & Preferences */}
      <div className="px-5 lg:px-8 mb-6">
        <h2 className="text-lg lg:text-xl mb-4">Settings & Preferences</h2>
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 divide-y">
          <button className="w-full p-4 lg:p-5 flex items-center gap-4 hover:bg-gray-50 transition-colors">
            <div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center">
              <Bell className="w-5 h-5 text-gray-600" />
            </div>
            <span className="flex-1 text-left text-sm lg:text-base">Notifications</span>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </button>

          <button className="w-full p-4 lg:p-5 flex items-center gap-4 hover:bg-gray-50 transition-colors">
            <div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center">
              <Lock className="w-5 h-5 text-gray-600" />
            </div>
            <span className="flex-1 text-left text-sm lg:text-base">Privacy & Security</span>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </button>

          <button className="w-full p-4 lg:p-5 flex items-center gap-4 hover:bg-gray-50 transition-colors">
            <div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center">
              <CreditCard className="w-5 h-5 text-gray-600" />
            </div>
            <span className="flex-1 text-left text-sm lg:text-base">Payment Methods</span>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </button>

          <button className="w-full p-4 lg:p-5 flex items-center gap-4 hover:bg-gray-50 transition-colors">
            <div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center">
              <Settings className="w-5 h-5 text-gray-600" />
            </div>
            <span className="flex-1 text-left text-sm lg:text-base">App Settings</span>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </button>

          <button className="w-full p-4 lg:p-5 flex items-center gap-4 hover:bg-gray-50 transition-colors">
            <div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center">
              <HelpCircle className="w-5 h-5 text-gray-600" />
            </div>
            <span className="flex-1 text-left text-sm lg:text-base">Help & Support</span>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </button>
        </div>
      </div>

      {/* Logout */}
      <div className="px-5 lg:px-8 mb-6">
        <button className="w-full p-4 lg:p-5 bg-white rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center gap-3 hover:bg-red-50 hover:border-red-200 transition-colors text-red-600">
          <LogOut className="w-5 h-5" />
          <span className="text-sm lg:text-base">Logout</span>
        </button>
      </div>

      {/* Bottom Navigation - Mobile Only */}
      <BottomNav
        currentView="profile"
        onHomeClick={onBackToHome}
        onFavoritesClick={onFavoritesClick}
        onChatBotClick={onChatBotClick}
      />
    </div>
  );
}
