"use client"
import { useState } from 'react';
import { Sidebar } from '../components/Sidebar';
import { Home } from '../components/Home';
import { DestinationDetail } from '../components/DestinationDetail';
import { Favorites } from '../components/Favorites';
import { Profile } from '../components/Profile';
import { ChatBot } from '../components/ChatBot';


export interface Destination {
  id: number;
  name: string;
  image: string;
  rating: number;
  location?: string;
  price?: number;
  type?: 'hotel' | 'cafe' | 'restaurant';
  description?: string;
  facilities?: string[];

  crowdLevel?: Array<{
    time: string;
    level: 'low' | 'medium' | 'high';
    percentage: number;
  }>;

  menu?: Array<{
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
    category: string;
  }>;

  reviews?: Array<{
    id: number;
    userName: string;
    userAvatar: string;
    rating: number;
    comment: string;
    date: string;
    images?: string[];
  }>;
}

export default function App() {
  const [currentView, setCurrentView] = useState<'home' | 'detail' | 'favorites' | 'profile' | 'chatbot'>('home');
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);
  const [favorites, setFavorites] = useState<number[]>([]);

  const handleDestinationClick = (destination: Destination) => {
    setSelectedDestination(destination);
    setCurrentView('detail');
  };

  const handleBackToHome = () => {
    setCurrentView('home');
    setSelectedDestination(null);
  };

  const handleGoToFavorites = () => {
    setCurrentView('favorites');
    setSelectedDestination(null);
  };

  const handleGoToProfile = () => {
    setCurrentView('profile');
    setSelectedDestination(null);
  };

  const toggleFavorite = (id: number) => {
    setFavorites(prev =>
      prev.includes(id)
        ? prev.filter(favId => favId !== id)
        : [...prev, id]
    );
  };
  const handleGoToChatBot = () => {
    setCurrentView('chatbot');
    setSelectedDestination(null);
  };
  const isFavorite = (id: number) => favorites.includes(id);

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar for Desktop */}
      <Sidebar
        currentView={currentView}
        onHomeClick={handleBackToHome}
        onFavoritesClick={handleGoToFavorites}
        onProfileClick={handleGoToProfile}
        onChatBotClick={handleGoToChatBot}
      />

      {/* Main Content */}
      <div className="flex-1 lg:ml-64">
        {currentView === 'home' && (
          <Home
            onDestinationClick={handleDestinationClick}
            favorites={favorites}
            toggleFavorite={toggleFavorite}
            onFavoritesClick={handleGoToFavorites}
            onProfileClick={handleGoToProfile}
            onChatBotClick={handleGoToChatBot}
          />
        )}
        {currentView === 'detail' && selectedDestination && (
          <DestinationDetail
            destination={selectedDestination}
            onBack={handleBackToHome}
            isFavorite={isFavorite(selectedDestination.id)}
            toggleFavorite={() => toggleFavorite(selectedDestination.id)}
            onFavoritesClick={handleGoToFavorites}
            onProfileClick={handleGoToProfile}
            onChatBotClick={handleGoToChatBot}
          />
        )}
        {currentView === 'favorites' && (
          <Favorites
            favorites={favorites}
            onDestinationClick={handleDestinationClick}
            toggleFavorite={toggleFavorite}
            onBackToHome={handleBackToHome}
            onProfileClick={handleGoToProfile}
            onChatBotClick={handleGoToChatBot}
          />
        )}
        {currentView === 'profile' && (
          <Profile
            onBackToHome={handleBackToHome}
            favoritesCount={favorites.length}
            onFavoritesClick={handleGoToFavorites}
            onChatBotClick={handleGoToChatBot}
          />
        )}
        {currentView === 'chatbot' && (
          <ChatBot
            onHomeClick={handleBackToHome}
            onFavoritesClick={handleGoToFavorites}
            onProfileClick={handleGoToProfile}
          />
        )}
      </div>
    </div>
  );
}