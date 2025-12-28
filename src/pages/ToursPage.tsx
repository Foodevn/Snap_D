import React, { useState } from 'react';
import { MapPin, Users, Search } from 'lucide-react';
import heroImage from 'figma:asset/0179610c417117bbc80d60891d61728b5754129e.png';
import { TourCard } from '../components/TourCard';
import { SubscribeSection } from '../components/SubscribeSection';

export function ToursPage() {
  const [location, setLocation] = useState('');
  const [distance, setDistance] = useState('');
  const [maxPeople, setMaxPeople] = useState('');

  const featuredTours = [
    {
      id: 1,
      title: 'Dubai',
      subtitle: 'UAE',
      image: 'https://images.unsplash.com/photo-1677474984541-6f8d1290c5ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxEdWJhaSUyMFVBRSUyMGNpdHlzY2FwZSUyMG5pZ2h0fGVufDF8fHx8MTc2Njg5ODU0Mnww&ixlib=rb-4.1.0&q=80&w=1080',
      large: true,
    },
    {
      id: 2,
      title: 'Bali',
      subtitle: 'INDONESIA',
      image: 'https://images.unsplash.com/photo-1653383187675-90c1b6cf1cc6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxCYWxpJTIwSW5kb25lc2lhJTIwdGVtcGxlJTIwb2NlYW58ZW58MXx8fHwxNzY2ODk4NTQyfDA&ixlib=rb-4.1.0&q=80&w=1080',
      large: true,
    },
    {
      id: 3,
      title: 'AUSTRALIA',
      image: 'https://images.unsplash.com/photo-1718185795639-c442aff612cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTeWRuZXklMjBBdXN0cmFsaWElMjBvcGVyYSUyMGhvdXNlfGVufDF8fHx8MTc2Njg5ODU0M3ww&ixlib=rb-4.1.0&q=80&w=1080',
      large: false,
    },
    {
      id: 4,
      title: 'Haciakan',
      subtitle: 'INDONESIA',
      image: 'https://images.unsplash.com/photo-1711365100888-1fa2378ed4d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRvbmVzaWElMjB0cm9waWNhbCUyMGJlYWNofGVufDF8fHx8MTc2Njg5ODU0M3ww&ixlib=rb-4.1.0&q=80&w=1080',
      large: false,
    },
    {
      id: 5,
      title: 'Y Sun',
      subtitle: 'CHINA',
      image: 'https://images.unsplash.com/photo-1608037521244-f1c6c7635194?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDaGluYSUyMEdyZWF0JTIwV2FsbHxlbnwxfHx8fDE3NjY4OTg1NDN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      large: false,
    },
      {
      id: 6,
      title: 'Dubai',
      subtitle: 'UAE',
      image: 'https://images.unsplash.com/photo-1677474984541-6f8d1290c5ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxEdWJhaSUyMFVBRSUyMGNpdHlzY2FwZSUyMG5pZ2h0fGVufDF8fHx8MTc2Njg5ODU0Mnww&ixlib=rb-4.1.0&q=80&w=1080',
      large: true,
    },
    {
      id: 7,
      title: 'Bali',
      subtitle: 'INDONESIA',
      image: 'https://images.unsplash.com/photo-1653383187675-90c1b6cf1cc6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxCYWxpJTIwSW5kb25lc2lhJTIwdGVtcGxlJTIwb2NlYW58ZW58MXx8fHwxNzY2ODk4NTQyfDA&ixlib=rb-4.1.0&q=80&w=1080',
      large: true,
    },
    {
      id: 8,
      title: 'AUSTRALIA',
      image: 'https://images.unsplash.com/photo-1718185795639-c442aff612cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTeWRuZXklMjBBdXN0cmFsaWElMjBvcGVyYSUyMGhvdXNlfGVufDF8fHx8MTc2Njg5ODU0M3ww&ixlib=rb-4.1.0&q=80&w=1080',
      large: false,
    },
    {
      id: 9,
      title: 'Haciakan',
      subtitle: 'INDONESIA',
      image: 'https://images.unsplash.com/photo-1711365100888-1fa2378ed4d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRvbmVzaWElMjB0cm9waWNhbCUyMGJlYWNofGVufDF8fHx8MTc2Njg5ODU0M3ww&ixlib=rb-4.1.0&q=80&w=1080',
      large: false,
    },
    {
      id: 10,
      title: 'Y Sun',
      subtitle: 'CHINA',
      image: 'https://images.unsplash.com/photo-1608037521244-f1c6c7635194?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDaGluYSUyMEdyZWF0JTIwV2FsbHxlbnwxfHx8fDE3NjY4OTg1NDN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      large: false,
    },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Search:', { location, distance, maxPeople });
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative h-[250px] sm:h-[350px] md:h-[400px] overflow-hidden">
        <img 
          src="https://i.pinimg.com/1200x/cb/d1/a7/cbd1a757a6b8b7eceea00ee82a0a490e.jpg"
          alt="All Tours"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 bg-opacity-30 flex items-center justify-center px-4">
          <h1 className="text-white text-center text-4xl sm:text-5xl md:text-6xl">
            All <span className="text-orange-500">Tours</span>
          </h1>
        </div>
      </div>

      {/* Search Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 sm:-mt-12 relative z-10">
        <form 
          onSubmit={handleSearch}
          className="bg-white rounded-2xl shadow-xl p-4 sm:p-6 flex flex-col gap-4"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="flex-1">
              <label className="flex items-center gap-2 text-gray-700 mb-2 text-sm sm:text-base">
                <MapPin size={18} className="text-orange-500" />
                <span>Location</span>
              </label>
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Where are you going?"
                className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
              />
            </div>

            <div className="flex-1">
              <label className="flex items-center gap-2 text-gray-700 mb-2 text-sm sm:text-base">
                <MapPin size={18} className="text-orange-500" />
                <span>Distance</span>
              </label>
              <input
                type="text"
                value={distance}
                onChange={(e) => setDistance(e.target.value)}
                placeholder="Distance K/m"
                className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
              />
            </div>

            <div className="flex-1">
              <label className="flex items-center gap-2 text-gray-700 mb-2 text-sm sm:text-base">
                <Users size={18} className="text-orange-500" />
                <span>Max People</span>
              </label>
              <input
                type="number"
                value={maxPeople}
                onChange={(e) => setMaxPeople(e.target.value)}
                placeholder="0"
                className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full sm:w-auto sm:self-end bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors flex items-center justify-center gap-2"
          >
            <Search size={20} />
            <span>Search</span>
          </button>
        </form>
      </div>

      {/* Featured Tours Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
        <h2 className="text-center mb-8 sm:mb-12 text-3xl sm:text-4xl md:text-5xl">
          Our Featured <span className="text-orange-500">Tours</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {/* First row - 2 large cards */}
          <div className="sm:col-span-2 lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {featuredTours.slice(0, 2).map((tour) => (
              <TourCard key={tour.id} {...tour} />
            ))}
          </div>

          {/* Second row - 3 small cards */}
          {featuredTours.slice(2).map((tour) => (
            <TourCard key={tour.id} {...tour} />
          ))}
        </div>
      </div>

      {/* Subscribe Section */}
      <SubscribeSection />
    </div>
  );
}