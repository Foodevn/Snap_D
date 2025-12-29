import { MapPin, Search } from 'lucide-react';
import { DestinationCard } from './DestinationCard';
import { BottomNav } from './BottomNav';
import { Destination } from "../app/app/page";
import { useState } from 'react';
import { ImageSearchModal } from './ImageSearchModal';
import { data } from '../data/data';

interface HomeProps {
  onDestinationClick: (destination: Destination) => void;
  favorites: number[];
  toggleFavorite: (id: number) => void;
  onFavoritesClick: () => void;
  onProfileClick: () => void;
  onChatBotClick: () => void;
  onLuckyDrawClick: () => void;
}

export function Home({ onDestinationClick, favorites, toggleFavorite, onFavoritesClick, onProfileClick, onChatBotClick, onLuckyDrawClick }: HomeProps) {
  const [showImageSearch, setShowImageSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [searchResults, setSearchResults] = useState<Destination[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [activeTab, setActiveTab] = useState<string>('all');

  const popularDestinations: Destination[] = data;
  ;


  // Lấy 4 destination có rating cao nhất từ popularDestinations
  const recommendedDestinations: Destination[] = [...popularDestinations]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 4);

  // Filter destinations based on active tab
  const filteredDestinations = activeTab === 'all'
    ? popularDestinations
    : popularDestinations.filter(dest => dest.type === activeTab);

  // Filter suggestions based on search query
  const suggestions = searchQuery.trim()
    ? popularDestinations.filter(dest =>
      dest.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dest.location?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dest.type?.toLowerCase().includes(searchQuery.toLowerCase())
    ).slice(0, 5)
    : [];

  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
    setShowSuggestions(value.trim().length > 0);
    if (value.trim() === '') {
      setIsSearching(false);
      setSearchResults([]);
    }
  };

  // Handle Enter key press to search
  const handleSearchKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && searchQuery.trim()) {
      setShowSuggestions(false);
      setIsSearching(true);
      const results = popularDestinations.filter(dest =>
        dest.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        dest.location?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        dest.type?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        dest.description?.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSearchResults(results);
    }
  };

  // Handle suggestion click - go directly to detail
  const handleSuggestionClick = (destination: Destination) => {
    setShowSuggestions(false);
    setSearchQuery('');
    setIsSearching(false);
    onDestinationClick(destination);
  };

  // Clear search
  const clearSearch = () => {
    setSearchQuery('');
    setShowSuggestions(false);
    setIsSearching(false);
    setSearchResults([]);
  };

  return (
    <div className="max-w-7xl mx-auto bg-white lg:bg-transparent min-h-screen pb-20 lg:pb-8">
      {/* Header - Mobile Only */}
      <div className="px-5 pt-6 pb-4 lg:hidden">
        <div className="flex items-start justify-between mb-6">
          <div>
            <img src="./logo-snap-d.png" alt="logo" className='w-40' />
          </div>
          <div className="flex items-center gap-1 text-sm" style={{ color: '#FAA935' }}>
            <MapPin className="w-4 h-4" />
            <span>Dalat, Vietnam</span>
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Find things to do"
            className="w-full pl-10 pr-12 py-3 bg-gray-50 rounded-lg text-sm"
            value={searchQuery}
            onChange={handleSearchChange}
            onKeyDown={handleSearchKeyDown}
            onFocus={() => searchQuery.trim() && setShowSuggestions(true)}
          />
          {searchQuery ? (
            <button
              onClick={clearSearch}
              className="absolute right-12 top-1/2 -translate-y-1/2 w-6 h-6 flex items-center justify-center text-gray-400 hover:text-gray-600"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          ) : null}
          <button
            onClick={() => setShowImageSearch(true)}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-[#FAA935] rounded-lg flex items-center justify-center hover:bg-[#E89820] transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </button>

          {/* Suggestions Dropdown - Mobile */}
          {showSuggestions && suggestions.length > 0 && (
            <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-lg shadow-lg border border-gray-100 z-50 overflow-hidden">
              {suggestions.map((destination) => (
                <button
                  key={destination.id}
                  onClick={() => handleSuggestionClick(destination)}
                  className="w-full px-4 py-3 flex items-center gap-3 hover:bg-gray-50 transition-colors text-left"
                >
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-10 h-10 rounded-lg object-cover"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">{destination.name}</p>
                    <p className="text-xs text-gray-500 truncate">{destination.location}</p>
                  </div>
                  <span className="text-xs px-2 py-1 bg-gray-100 rounded-full text-gray-600 capitalize">
                    {destination.type}
                  </span>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Header - Desktop */}
      <div className="hidden lg:block px-8 pt-8 pb-6 bg-white rounded-2xl mb-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl mt-1">Discover Amazing Places</h1>
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative max-w-4xl">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Find things to do"
            className="w-full pl-12 pr-20 py-4 bg-gray-50 rounded-xl"
            value={searchQuery}
            onChange={handleSearchChange}
            onKeyDown={handleSearchKeyDown}
            onFocus={() => searchQuery.trim() && setShowSuggestions(true)}
          />
          {searchQuery ? (
            <button
              onClick={clearSearch}
              className="absolute right-16 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          ) : null}
          <button
            onClick={() => setShowImageSearch(true)}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-[#FAA935] rounded-lg flex items-center justify-center hover:bg-[#E89820] transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </button>

          {/* Suggestions Dropdown - Desktop */}
          {showSuggestions && suggestions.length > 0 && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-lg border border-gray-100 z-50 overflow-hidden">
              {suggestions.map((destination) => (
                <button
                  key={destination.id}
                  onClick={() => handleSuggestionClick(destination)}
                  className="w-full px-5 py-4 flex items-center gap-4 hover:bg-gray-50 transition-colors text-left"
                >
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-12 h-12 rounded-lg object-cover"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-gray-900 truncate">{destination.name}</p>
                    <p className="text-sm text-gray-500 truncate">{destination.location}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm px-3 py-1 bg-gray-100 rounded-full text-gray-600 capitalize">
                      {destination.type}
                    </span>
                    <span className="text-sm text-[#FAA935] font-medium">★ {destination.rating}</span>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Search Results Section */}
      {isSearching && (
        <div className="px-5 lg:px-8 mb-8">
          <div className="flex items-center justify-between mb-4 lg:mb-6">
            <h2 className="text-lg lg:text-2xl">
              Kết quả tìm kiếm cho "{searchQuery}" ({searchResults.length})
            </h2>
            <button
              onClick={clearSearch}
              className="text-sm lg:text-base text-[#FAA935] hover:text-[#E89820]"
            >
              Xóa tìm kiếm
            </button>
          </div>
          {searchResults.length > 0 ? (
            <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
              {searchResults.map((destination) => (
                <DestinationCard
                  key={destination.id}
                  destination={destination}
                  onClick={() => onDestinationClick(destination)}
                  isFavorite={favorites.includes(destination.id)}
                  onToggleFavorite={() => toggleFavorite(destination.id)}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <p className="text-gray-500">Không tìm thấy kết quả nào</p>
              <p className="text-sm text-gray-400 mt-1">Thử tìm kiếm với từ khóa khác</p>
            </div>
          )}
        </div>
      )}

      {/* Tabs */}
      <div className={`px-5 lg:px-8 mb-6 bg-white lg:bg-transparent ${isSearching ? 'hidden' : ''}`}>
        <div className="flex gap-3 lg:gap-6 pb-2 lg:pb-0 overflow-x-auto scrollbar-hide border-b lg:border-none">
          <button
            onClick={() => setActiveTab('all')}
            className={`pb-2 lg:pb-3 lg:px-6 lg:py-2 lg:rounded-full text-sm whitespace-nowrap shrink-0 transition-colors ${activeTab === 'all'
              ? 'text-[#FAA935] border-b-2 border-[#FAA935] lg:border-0 lg:bg-[#FAA935] lg:text-white'
              : 'text-gray-500 hover:text-gray-700 lg:bg-gray-100'
              }`}
          >
            All
          </button>
          <button
            onClick={() => setActiveTab('location')}
            className={`pb-2 lg:pb-3 lg:px-6 lg:py-2 lg:rounded-full text-sm whitespace-nowrap shrink-0 transition-colors ${activeTab === 'location'
              ? 'text-[#FAA935] border-b-2 border-[#FAA935] lg:border-0 lg:bg-[#FAA935] lg:text-white'
              : 'text-gray-500 hover:text-gray-700 lg:bg-gray-100'
              }`}
          >
            Location
          </button>
          <button
            onClick={() => setActiveTab('hotel')}
            className={`pb-2 lg:pb-3 lg:px-6 lg:py-2 lg:rounded-full text-sm whitespace-nowrap shrink-0 transition-colors ${activeTab === 'hotel'
              ? 'text-[#FAA935] border-b-2 border-[#FAA935] lg:border-0 lg:bg-[#FAA935] lg:text-white'
              : 'text-gray-500 hover:text-gray-700 lg:bg-gray-100'
              }`}
          >
            Hotel
          </button>
          <button
            onClick={() => setActiveTab('cafe')}
            className={`pb-2 lg:pb-3 lg:px-6 lg:py-2 lg:rounded-full text-sm whitespace-nowrap shrink-0 transition-colors ${activeTab === 'cafe'
              ? 'text-[#FAA935] border-b-2 border-[#FAA935] lg:border-0 lg:bg-[#FAA935] lg:text-white'
              : 'text-gray-500 hover:text-gray-700 lg:bg-gray-100'
              }`}
          >
            Cafe
          </button>
          <button
            onClick={() => setActiveTab('adventure')}
            className={`pb-2 lg:pb-3 lg:px-6 lg:py-2 lg:rounded-full text-sm whitespace-nowrap shrink-0 transition-colors ${activeTab === 'adventure'
              ? 'text-[#FAA935] border-b-2 border-[#FAA935] lg:border-0 lg:bg-[#FAA935] lg:text-white'
              : 'text-gray-500 hover:text-gray-700 lg:bg-gray-100'
              }`}
          >
            Adventure
          </button>
          <button
            onClick={() => setActiveTab('restaurant')}
            className={`pb-2 lg:pb-3 lg:px-6 lg:py-2 lg:rounded-full text-sm whitespace-nowrap shrink-0 transition-colors ${activeTab === 'restaurant'
              ? 'text-[#FAA935] border-b-2 border-[#FAA935] lg:border-0 lg:bg-[#FAA935] lg:text-white'
              : 'text-gray-500 hover:text-gray-700 lg:bg-gray-100'
              }`}
          >
            Restaurant
          </button>
        </div>
      </div>

      {/* Popular Section */}
      <div className={`px-5 lg:px-8 mb-8 ${isSearching ? 'hidden' : ''}`}>
        <div className="flex items-center justify-between mb-4 lg:mb-6">
          <h2 className="text-lg lg:text-2xl">
            {activeTab === 'all' ? 'Popular' : activeTab.charAt(0).toUpperCase() + activeTab.slice(1) + 's'}
          </h2>
          <button className="text-sm lg:text-base text-[#FAA935] hover:text-[#E89820]">See all</button>
        </div>
        {filteredDestinations.length > 0 ? (
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
            {filteredDestinations.map((destination) => (
              <DestinationCard
                key={destination.id}
                destination={destination}
                onClick={() => onDestinationClick(destination)}
                isFavorite={favorites.includes(destination.id)}
                onToggleFavorite={() => toggleFavorite(destination.id)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500">Không có địa điểm nào trong danh mục này</p>
          </div>
        )}
      </div>

      {/* Recommended Section */}
      <div className={`px-5 lg:px-8 mb-8 ${isSearching || activeTab !== 'all' ? 'hidden' : ''}`}>
        <div className="flex items-center justify-between mb-4 lg:mb-6">
          <h2 className="text-lg lg:text-2xl">Recommended</h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
          {recommendedDestinations.map((destination) => (
            <DestinationCard
              key={destination.id}
              destination={destination}
              onClick={() => onDestinationClick(destination)}
              isFavorite={favorites.includes(destination.id)}
              onToggleFavorite={() => toggleFavorite(destination.id)}
            />
          ))}
        </div>
      </div>

      {/* Bottom Navigation - Mobile Only */}
      <BottomNav
        currentView="home"
        onFavoritesClick={onFavoritesClick}
        onProfileClick={onProfileClick}
        onChatBotClick={onChatBotClick}
        onLuckyDrawClick={onLuckyDrawClick}
      />

      {/* Image Search Modal */}
      {showImageSearch && (
        <ImageSearchModal
          onClose={() => setShowImageSearch(false)}
          destinations={popularDestinations}
          onDestinationClick={onDestinationClick}
        />
      )}
    </div>
  );
}