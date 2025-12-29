import React, { useState } from 'react';
import { MapPin, Star, Clock, Filter, Coffee, UtensilsCrossed, Building2, Compass } from 'lucide-react';
import { SubscribeSection } from '../components/SubscribeSection';

export function ToursPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Places', icon: <Compass size={18} /> },
    { id: 'hotel', name: 'Hotels', icon: <Building2 size={18} /> },
    { id: 'cafe', name: 'Cafes', icon: <Coffee size={18} /> },
    { id: 'restaurant', name: 'Restaurants', icon: <UtensilsCrossed size={18} /> },
  ];

  const destinations = [
    {
      id: 1,
      name: 'Dalat Eco Hotel',
      category: 'hotel',
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1600&q=80',
      rating: 4.6,
      reviews: 128,
      price: '$65/night',
      location: 'Tran Phu Street',
      highlight: 'Pine forest view',
    },
    {
      id: 2,
      name: 'Pine Hill Boutique',
      category: 'hotel',
      image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1600&q=80',
      rating: 4.4,
      reviews: 96,
      price: '$89/night',
      location: 'Xuan Huong Lake',
      highlight: 'Lake view rooms',
    },
    {
      id: 3,
      name: 'Pinewood Garden Cafe',
      category: 'cafe',
      image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1600&q=80',
      rating: 4.8,
      reviews: 256,
      price: '$3-8',
      location: 'Phan Dinh Phung',
      highlight: 'Garden seating',
    },
    {
      id: 4,
      name: 'Sunset Rooftop Cafe',
      category: 'cafe',
      image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1600&q=80',
      rating: 4.7,
      reviews: 189,
      price: '$4-10',
      location: 'Hai Ba Trung',
      highlight: 'Best sunset view',
    },
    {
      id: 5,
      name: 'La Terrasse Restaurant',
      category: 'restaurant',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=80',
      rating: 4.5,
      reviews: 312,
      price: '$15-30',
      location: 'Nguyen Chi Thanh',
      highlight: 'French-Vietnamese fusion',
    },
    {
      id: 6,
      name: 'The Garden Bistro',
      category: 'restaurant',
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1600&q=80',
      rating: 4.6,
      reviews: 178,
      price: '$12-25',
      location: 'Le Dai Hanh',
      highlight: 'Organic ingredients',
    },
    {
      id: 7,
      name: 'Dreamy Cloud Hotel',
      category: 'hotel',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1600&q=80',
      rating: 4.3,
      reviews: 87,
      price: '$55/night',
      location: 'Cam Ly',
      highlight: 'Mountain retreat',
    },
    {
      id: 8,
      name: 'Misty Morning Cafe',
      category: 'cafe',
      image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=800&q=80',
      rating: 4.9,
      reviews: 342,
      price: '$2-6',
      location: 'Hoang Dieu',
      highlight: 'Best Vietnamese coffee',
    },
    {
      id: 9,
      name: 'Dalat Night Market Eats',
      category: 'restaurant',
      image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1600&q=80',
      rating: 4.4,
      reviews: 421,
      price: '$5-15',
      location: 'Night Market Area',
      highlight: 'Local street food',
    },
  ];

  const filteredDestinations = activeCategory === 'all'
    ? destinations
    : destinations.filter(d => d.category === activeCategory);

  return (
    <div className="w-full bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[250px] sm:h-[350px] md:h-[400px] overflow-hidden">
        <img
          src="https://statics.vinpearl.com/canh-dep-da-lat-25_1688380514.jpg"
          alt="Explore Da Lat"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20 flex items-center justify-center px-4">
          <div className="text-center">
            <h1 className="text-white text-4xl sm:text-5xl md:text-6xl mb-4">
              Explore <span className="text-orange-400">Places</span>
            </h1>
            <p className="text-white/90 text-lg sm:text-xl max-w-2xl mx-auto">
              Discover top-rated hotels, cafes & restaurants in Da Lat
            </p>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-6">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-full transition-all ${activeCategory === cat.id
                  ? 'bg-orange-400 text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
              >
                {cat.icon}
                <span className="font-medium">{cat.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Results Count */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between">
          <p className="text-gray-600">
            Showing <span className="font-semibold text-gray-900">{filteredDestinations.length}</span> places
          </p>
          <div className="flex items-center gap-2 text-gray-600">
            <Filter size={18} />
            <span className="text-sm">Sort by: Popular</span>
          </div>
        </div>
      </div>

      {/* Destinations Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDestinations.map((destination) => (
            <div
              key={destination.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer group"
              onClick={() => {
                window.location.href = '/app';
              }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                {/* <div className="absolute top-3 left-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium text-white ${destination.category === 'hotel' ? 'bg-blue-500' :
                    destination.category === 'cafe' ? 'bg-green-500' : 'bg-purple-500'
                    }`}>
                    {destination.category.charAt(0).toUpperCase() + destination.category.slice(1)}
                  </span>
                </div> */}
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg flex items-center gap-1">
                  <Star size={14} className="text-yellow-500 fill-yellow-500" />
                  <span className="text-sm font-medium">{destination.rating}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-1 group-hover:text-orange-500 transition-colors">
                  {destination.name}
                </h3>
                <div className="flex items-center gap-1 text-gray-500 text-sm mb-3">
                  <MapPin size={14} />
                  <span>{destination.location}</span>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-orange-500 font-bold">{destination.price}</span>
                  </div>
                  <div className="text-sm text-gray-500">
                    {destination.reviews} reviews
                  </div>
                </div>

                <div className="mt-3 pt-3 border-t border-gray-100">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="bg-orange-50 text-orange-600 px-2 py-1 rounded-md text-xs">
                      ✨ {destination.highlight}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-10">
          <a
            href="/app"
            className="inline-flex items-center gap-2 bg-orange-400 text-white px-8 py-4 rounded-full hover:bg-orange-500 transition-colors shadow-md text-lg font-medium"
          >
            Explore More in App
            <span>→</span>
          </a>
        </div>
      </div>

      {/* Subscribe Section */}
      <SubscribeSection />
    </div>
  );
}
