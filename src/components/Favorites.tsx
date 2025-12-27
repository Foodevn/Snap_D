import { ArrowLeft, Heart } from 'lucide-react';
import { Destination } from '../app/page';
import { BottomNav } from './BottomNav';

interface FavoritesProps {
  favorites: number[];
  onDestinationClick: (destination: Destination) => void;
  toggleFavorite: (id: number) => void;
  onBackToHome: () => void;
  onProfileClick: () => void;
}

export function Favorites({ favorites, onDestinationClick, toggleFavorite, onBackToHome, onProfileClick }: FavoritesProps) {
  // All destinations data
  const allDestinations: Destination[] = [
    {
      id: 1,
      name: 'Alley Palace',
      image: 'https://images.unsplash.com/photo-1673528797366-382b12f9ce69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXN0bGUlMjBwYWxhY2UlMjBldXJvcGV8ZW58MXx8fHwxNzY2ODAwNTI5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 4.1,
      location: 'Dalat, Vietnam',
      price: 199,
      description: 'Experience the historic beauty of Alley Palace with stunning architecture and breathtaking views.',
      facilities: ['Heater', 'Dinner', 'Tub', 'Pool']
    },
    {
      id: 2,
      name: 'Coeurdes Alpes',
      image: 'https://images.unsplash.com/photo-1603598017939-c634f51c4b64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGhvdXNlJTIwc3Vuc2V0fGVufDF8fHx8MTc2NjgwMDUzMHww&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 4.5,
      location: 'Aspen, Switzerland',
      price: 199,
      description: 'Aspen is as close as one can get to a storybook alpine town in America.',
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

  const favoriteDestinations = allDestinations.filter(dest => favorites.includes(dest.id));

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
            <h1 className="text-2xl lg:text-3xl">My Favorites</h1>
            <p className="text-sm lg:text-base text-gray-600 mt-1">
              {favoriteDestinations.length} {favoriteDestinations.length === 1 ? 'place' : 'places'} saved
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="px-5 lg:px-8">
        {favoriteDestinations.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 lg:py-24">
            <div className="w-24 h-24 lg:w-32 lg:h-32 bg-gray-100 rounded-full flex items-center justify-center mb-6">
              <Heart className="w-12 h-12 lg:w-16 lg:h-16 text-gray-300" />
            </div>
            <h2 className="text-xl lg:text-2xl mb-2">No favorites yet</h2>
            <p className="text-gray-600 text-center mb-6 max-w-sm">
              Start exploring and save your favorite places by tapping the heart icon
            </p>
            <button
              onClick={onBackToHome}
              className="bg-[#FAA935] text-white px-6 py-3 rounded-xl hover:bg-[#E89820] transition-colors"
            >
              Explore Places
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
            {favoriteDestinations.map((destination) => (
              <div
                key={destination.id}
                className="relative rounded-2xl overflow-hidden cursor-pointer group bg-white shadow-sm hover:shadow-lg transition-shadow"
              >
                <div onClick={() => onDestinationClick(destination)}>
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-48 lg:h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <div className="flex items-center gap-1 mb-1">
                      <span className="text-xs lg:text-sm">⭐ {destination.rating}</span>
                    </div>
                    <h3 className="text-sm lg:text-base mb-1">{destination.name}</h3>
                    <p className="text-xs lg:text-sm text-gray-200">{destination.location}</p>
                    <p className="text-sm lg:text-base text-green-400 mt-2">${destination.price}/night</p>
                  </div>
                </div>

                {/* Remove from Favorites Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleFavorite(destination.id);
                  }}
                  className="absolute top-3 right-3 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-all hover:scale-110 z-10"
                >
                  <Heart className="w-5 h-5 fill-red-500 text-red-500" />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Bottom Navigation - Mobile Only */}
      <BottomNav currentView="favorites" onHomeClick={onBackToHome} onProfileClick={onProfileClick} />
    </div>
  );
}