import { Heart, Star } from 'lucide-react';
import { Destination } from '../app/page';


interface DestinationCardProps {
  destination: Destination;
  onClick: () => void;
  isFavorite: boolean;
  onToggleFavorite: () => void;
}

export function DestinationCard({ destination, onClick, isFavorite, onToggleFavorite }: DestinationCardProps) {
  return (
    <div
      className="relative rounded-2xl overflow-hidden cursor-pointer group"
      onClick={onClick}
    >
      <img
        src={destination.image}
        alt={destination.name}
        className="w-full h-48 lg:h-64 object-cover group-hover:scale-105 transition-transform duration-300"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-3 lg:p-4 text-white">
        <div className="flex items-center gap-1 mb-1">
          <Star className="w-3 h-3 lg:w-4 lg:h-4 fill-yellow-400 text-yellow-400" />
          <span className="text-xs lg:text-sm">{destination.rating}</span>
        </div>
        <h3 className="text-sm lg:text-base">{destination.name}</h3>
        <p className="text-xs lg:text-sm text-gray-200 hidden lg:block">{destination.location}</p>
      </div>

      {/* Favorite Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onToggleFavorite();
        }}
        className="absolute top-3 right-3 w-8 h-8 lg:w-10 lg:h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-all hover:scale-110"
      >
        <Heart
          className={`w-4 h-4 lg:w-5 lg:h-5 ${isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-600'}`}
        />
      </button>
    </div>
  );
}