import { ArrowLeft, Heart, MapPin, Star, Wifi, Utensils, Bath, Waves } from 'lucide-react';
import { Destination } from '../app/page';
import { useState } from 'react';

interface DestinationDetailProps {
  destination: Destination;
  onBack: () => void;
  isFavorite: boolean;
  toggleFavorite: () => void;
}

export function DestinationDetail({ destination, onBack, isFavorite, toggleFavorite }: DestinationDetailProps) {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const facilityIcons: Record<string, React.ReactNode> = {
    'Heater': <Wifi className="w-6 h-6 text-gray-400" />,
    'Dinner': <Utensils className="w-6 h-6 text-gray-400" />,
    'Tub': <Bath className="w-6 h-6 text-gray-400" />,
    'Pool': <Waves className="w-6 h-6 text-gray-400" />
  };

  return (
    <div className="max-w-7xl mx-auto bg-white lg:bg-transparent min-h-screen">
      {/* Desktop Layout */}
      <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:p-8">
        {/* Image Section */}
        <div className="relative h-80 lg:h-[600px] lg:rounded-3xl lg:overflow-hidden lg:sticky lg:top-8">
          <img
            src={destination.image}
            alt={destination.name}
            className="w-full h-full object-cover"
          />

          {/* Back Button */}
          <button
            onClick={onBack}
            className="absolute top-6 left-5 w-10 h-10 lg:w-12 lg:h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
          >
            <ArrowLeft className="w-5 h-5 lg:w-6 lg:h-6" />
          </button>

          {/* Favorite Button */}
          <button
            onClick={toggleFavorite}
            className="absolute top-6 lg:bottom-6 lg:top-auto right-5 w-12 h-12 lg:w-14 lg:h-14 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
          >
            <Heart
              className={`w-6 h-6 lg:w-7 lg:h-7 ${isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-600'}`}
            />
          </button>
        </div>

        {/* Content Section */}
        <div className="px-5 lg:px-0 py-6 lg:py-0 bg-white lg:bg-transparent">
          {/* Title and Location */}
          <div className="flex items-start justify-between mb-4 lg:mb-6">
            <div className="flex-1">
              <h1 className="text-2xl lg:text-4xl mb-2 lg:mb-3">{destination.name}</h1>
              <div className="flex items-center gap-1 text-sm lg:text-base text-gray-600 mb-1">
                <Star className="w-4 h-4 lg:w-5 lg:h-5 fill-yellow-400 text-yellow-400" />
                <span>{destination.rating}</span>
                <span className="mx-1">•</span>
                <MapPin className="w-4 h-4 lg:w-5 lg:h-5" />
                <span>{destination.location}</span>
              </div>
            </div>
            <button className="text-sm lg:text-base text-[#FAA935] hover:text-[#E89820] whitespace-nowrap">
              Show map
            </button>
          </div>

          {/* Description */}
          <div className="mb-6 lg:mb-8">
            <p className="text-sm lg:text-base text-gray-600 leading-relaxed">
              {showFullDescription
                ? destination.description
                : `${destination.description?.slice(0, 120)}...`
              }
            </p>
            <button
              onClick={() => setShowFullDescription(!showFullDescription)}
              className="text-sm lg:text-base text-[#FAA935] hover:text-[#E89820] mt-1"
            >
              Read {showFullDescription ? 'less' : 'more'}
            </button>
          </div>

          {/* Facilities */}
          <div className="mb-8 lg:mb-12">
            <h2 className="text-lg lg:text-2xl mb-4 lg:mb-6">Facilities</h2>
            <div className="grid grid-cols-4 gap-4 lg:gap-6">
              {destination.facilities?.map((facility) => (
                <div key={facility} className="flex flex-col items-center">
                  <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gray-50 rounded-2xl flex items-center justify-center mb-2 hover:bg-gray-100 transition-colors">
                    {facilityIcons[facility]}
                  </div>
                  <span className="text-xs lg:text-sm text-gray-600">{facility}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Info - Desktop Only */}
          <div className="hidden lg:grid lg:grid-cols-2 lg:gap-6 lg:mb-8 lg:p-6 lg:bg-gray-50 lg:rounded-2xl">
            <div>
              <p className="text-sm text-gray-500 mb-1">Check-in</p>
              <p className="text-base">After 2:00 PM</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-1">Check-out</p>
              <p className="text-base">Before 12:00 PM</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-1">Cancellation</p>
              <p className="text-base">Free cancellation</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-1">Max Guests</p>
              <p className="text-base">4 people</p>
            </div>
          </div>

          {/* Price and CTA */}
          <div className="flex items-center gap-4 lg:gap-6 sticky bottom-0 lg:static bg-white lg:bg-transparent py-4 lg:py-0 -mx-5 lg:mx-0 px-5 lg:px-0 border-t lg:border-0">
            <div>
              <p className="text-sm lg:text-base text-gray-600">Price</p>
              <p className="text-2xl lg:text-3xl text-green-500">${destination.price}</p>
            </div>
            <button className="flex-1 bg-[#FAA935] text-white py-4 lg:py-5 rounded-2xl flex items-center justify-center gap-2 hover:bg-[#E89820] transition-colors shadow-lg hover:shadow-xl">
              <span className="lg:text-lg">Book Now</span>
              <ArrowLeft className="w-5 h-5 lg:w-6 lg:h-6 rotate-180" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}