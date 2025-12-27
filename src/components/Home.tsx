import { MapPin, Search } from 'lucide-react';
import { DestinationCard } from './DestinationCard';
import { BottomNav } from './BottomNav';
import { Destination } from '../app/page';


interface HomeProps {
  onDestinationClick: (destination: Destination) => void;
  favorites: number[];
  toggleFavorite: (id: number) => void;
  onFavoritesClick: () => void;
  onProfileClick: () => void;
}

export function Home({ onDestinationClick, favorites, toggleFavorite, onFavoritesClick, onProfileClick }: HomeProps) {
  const popularDestinations: Destination[] = [
    {
      id: 1,
      name: 'Alley Palace',
      image: 'https://images.unsplash.com/photo-1673528797366-382b12f9ce69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXN0bGUlMjBwYWxhY2UlMjBldXJvcGV8ZW58MXx8fHwxNzY2ODAwNTI5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 4.1,
      location: 'Dalat, Vietnam',
      price: 199,
      description: 'Experience the historic beauty of Alley Palace with stunning architecture and breathtaking views. This magnificent palace offers a journey through time with its well-preserved medieval structure.',
      facilities: ['Heater', 'Dinner', 'Tub', 'Pool']
    },
    {
      id: 2,
      name: 'Coeurdes Alpes',
      image: 'https://images.unsplash.com/photo-1603598017939-c634f51c4b64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGhvdXNlJTIwc3Vuc2V0fGVufDF8fHx8MTc2NjgwMDUzMHww&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 4.5,
      location: 'Aspen, Switzerland',
      price: 199,
      description: 'Aspen is as close as one can get to a storybook alpine town in America. Choose your own adventure possibilities—skiing, hiking, dining shopping and …',
      facilities: ['Heater', 'Dinner', 'Tub', 'Pool']
    },
    {
      id: 3,
      name: 'Mountain View',
      image: 'https://images.unsplash.com/photo-1673528797366-382b12f9ce69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXN0bGUlMjBwYWxhY2UlMjBldXJvcGV8ZW58MXx8fHwxNzY2ODAwNTI5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 4.1,
      location: 'Dalat, Vietnam',
      price: 150,
      description: 'A beautiful mountain retreat with stunning panoramic views.',
      facilities: ['Heater', 'Dinner', 'Tub', 'Pool']
    },
    {
      id: 4,
      name: 'Lake Palace',
      image: 'https://images.unsplash.com/photo-1673528797366-382b12f9ce69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXN0bGUlMjBwYWxhY2UlMjBldXJvcGV8ZW58MXx8fHwxNzY2ODAwNTI5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 4.1,
      location: 'Dalat, Vietnam',
      price: 180,
      description: 'Serene lakeside palace offering peace and tranquility.',
      facilities: ['Heater', 'Dinner', 'Tub', 'Pool']
    },
    {
      id: 7,
      name: 'Forest Retreat',
      image: 'https://images.unsplash.com/photo-1603598017939-c634f51c4b64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGhvdXNlJTIwc3Vuc2V0fGVufDF8fHx8MTc2NjgwMDUzMHww&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 4.3,
      location: 'Dalat, Vietnam',
      price: 220,
      description: 'Escape to nature in this peaceful forest retreat.',
      facilities: ['Heater', 'Dinner', 'Tub', 'Pool']
    },
    {
      id: 8,
      name: 'Sunset Villa',
      image: 'https://images.unsplash.com/photo-1610651219730-6b580d616e72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXR5JTIwbGFuZHNjYXBlJTIwZXVyb3BlfGVufDF8fHx8MTc2NjgwMDUzMHww&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 4.6,
      location: 'Phan Thiet, Vietnam',
      price: 280,
      description: 'Watch stunning sunsets from this luxurious villa.',
      facilities: ['Heater', 'Dinner', 'Tub', 'Pool']
    }
  ];

  const recommendedDestinations: Destination[] = [
    {
      id: 5,
      name: 'Explore Aspen',
      image: 'https://images.unsplash.com/photo-1610651219730-6b580d616e72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXR5JTIwbGFuZHNjYXBlJTIwZXVyb3BlfGVufDF8fHx8MTc2NjgwMDUzMHww&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 4.4,
      location: 'Aspen, Colorado',
      price: 250,
      description: 'Discover the charm of Aspen with world-class skiing and dining.',
      facilities: ['Heater', 'Dinner', 'Tub', 'Pool']
    },
    {
      id: 6,
      name: 'Luxurious Aspen',
      image: 'https://images.unsplash.com/photo-1619164285070-f77a3d84e3db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXJib3IlMjB0b3duJTIwbm9yd2F5fGVufDF8fHx8MTc2NjgwMDUzMHww&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 4.8,
      location: 'Aspen, Colorado',
      price: 320,
      description: 'Experience luxury at its finest in this premium Aspen resort.',
      facilities: ['Heater', 'Dinner', 'Tub', 'Pool']
    },
    {
      id: 9,
      name: 'Alpine Cabin',
      image: 'https://images.unsplash.com/photo-1603598017939-c634f51c4b64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGhvdXNlJTIwc3Vuc2V0fGVufDF8fHx8MTc2NjgwMDUzMHww&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 4.7,
      location: 'Alps, France',
      price: 290,
      description: 'Cozy alpine cabin with breathtaking mountain views.',
      facilities: ['Heater', 'Dinner', 'Tub', 'Pool']
    }
  ];

  return (
    <div className="max-w-7xl mx-auto bg-white lg:bg-transparent min-h-screen pb-20 lg:pb-8">
      {/* Header - Mobile Only */}
      <div className="px-5 pt-6 pb-4 lg:hidden">
        <div className="flex items-start justify-between mb-6">
          <div>
            <p className="text-gray-600 text-sm">Explore</p>
            <h1 className="text-2xl mt-1">SNAP DL</h1>
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
            className="w-full pl-10 pr-4 py-3 bg-gray-50 rounded-lg text-sm"
          />
        </div>
      </div>

      {/* Header - Desktop */}
      <div className="hidden lg:block px-8 pt-8 pb-6 bg-white rounded-2xl mb-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <p className="text-gray-600">Explore</p>
            <h1 className="text-3xl mt-1">Discover Amazing Places</h1>
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative max-w-2xl">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Find things to do"
            className="w-full pl-12 pr-4 py-4 bg-gray-50 rounded-xl"
          />
        </div>
      </div>

      {/* Tabs */}
      <div className="px-5 lg:px-8 mb-6 bg-white lg:bg-transparent">
        <div className="flex gap-3 lg:gap-6 pb-2 lg:pb-0 overflow-x-auto scrollbar-hide border-b lg:border-none">
          <button className="pb-2 lg:pb-3 lg:px-6 lg:bg-[#FAA935] lg:text-white lg:rounded-full text-sm text-[#FAA935] lg:border-0 border-b-2 border-[#FAA935] whitespace-nowrap flex-shrink-0">
            Location
          </button>
          <button className="pb-2 lg:pb-3 lg:px-6 lg:bg-gray-100 lg:rounded-full text-sm text-gray-500 hover:text-gray-700 whitespace-nowrap flex-shrink-0">
            Cafe
          </button>
          <button className="pb-2 lg:pb-3 lg:px-6 lg:bg-gray-100 lg:rounded-full text-sm text-gray-500 hover:text-gray-700 whitespace-nowrap flex-shrink-0">
            Adventure
          </button>
          <button className="pb-2 lg:pb-3 lg:px-6 lg:bg-gray-100 lg:rounded-full text-sm text-gray-500 hover:text-gray-700 whitespace-nowrap flex-shrink-0">
            Restaurant
          </button>
        </div>
      </div>

      {/* Popular Section */}
      <div className="px-5 lg:px-8 mb-8">
        <div className="flex items-center justify-between mb-4 lg:mb-6">
          <h2 className="text-lg lg:text-2xl">Popular</h2>
          <button className="text-sm lg:text-base text-[#FAA935] hover:text-[#E89820]">See all</button>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
          {popularDestinations.map((destination) => (
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

      {/* Recommended Section */}
      <div className="px-5 lg:px-8 mb-8">
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
      <BottomNav currentView="home" onFavoritesClick={onFavoritesClick} onProfileClick={onProfileClick} />
    </div>
  );
}