import React, { useState } from 'react';
import { Search, Sun, Sparkles, Camera } from 'lucide-react';
import { SubscribeSection } from '../components/SubscribeSection';

export function HomePage() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Search:', searchQuery);
  };

  const services = [
    {
      icon: <Sun size={32} />,
      title: 'Sun-Chaser',
      description: 'Real-time Golden Hour Guide',
    },
    {
      icon: <Sparkles size={32} />,
      title: 'Random Quest',
      description: 'Hidden Gems Cards for Local College Students',
    },
    {
      icon: <Camera size={32} />,
      title: 'Natural Mood',
      description: 'Natural lit shots without artificial guides',
    },
  ];

  const featuredImages = [
    'https://images.unsplash.com/photo-1697850085870-5f248fcb1ff2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYWxhdCUyMHZpZXRuYW0lMjBsYW5kc2NhcGUlMjBnb2xkZW4lMjBob3VyfGVufDF8fHx8MTc2NjkyMDQyNXww&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1682416480878-cfe14c646c6b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWV0bmFtJTIwbmF0dXJlJTIwcGhvdG9ncmFwaHl8ZW58MXx8fHwxNzY2OTIwNDI1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1635658000439-2eb70e3fc6a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMHN1bnNldCUyMHRyYXZlbHxlbnwxfHx8fDE3NjY5MjA0MjV8MA&ixlib=rb-4.1.0&q=80&w=1080',
  ];

  const galleryImages = [
    {
      url: 'https://images.unsplash.com/photo-1664029934400-b7bb1f5744e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGhpa2luZyUyMHNub3d8ZW58MXx8fHwxNzY2OTIxNTI2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      gridClass: 'col-span-2 row-span-2',
    },
    {
      url: 'https://images.unsplash.com/photo-1728466698701-2eb2af4117d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYW11a2thbGUlMjB0dXJrZXklMjB0cmF2ZXJ0aW5lfGVufDF8fHx8MTc2NjkyMTUyN3ww&ixlib=rb-4.1.0&q=80&w=1080',
      gridClass: 'col-span-1 row-span-1',
    },
    {
      url: 'https://images.unsplash.com/photo-1762723111768-8c2ff4630e85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2VuaWMlMjB2aWV3cG9pbnQlMjBiZW5jaHxlbnwxfHx8fDE3NjY5MjE1Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      gridClass: 'col-span-1 row-span-1',
    },
    {
      url: 'https://images.unsplash.com/photo-1765854160365-fd56c052e5ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGJlYWNoJTIwcGFsbXxlbnwxfHx8fDE3NjY5MjE1Mjh8MA&ixlib=rb-4.1.0&q=80&w=1080',
      gridClass: 'col-span-1 row-span-1',
    },
    {
      url: 'https://images.unsplash.com/photo-1637576308588-6647bf80944d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxkaXZlcyUyMG92ZXJ3YXRlciUyMGJ1bmdhbG93fGVufDF8fHx8MTc2NjkyMTUyOHww&ixlib=rb-4.1.0&q=80&w=1080',
      gridClass: 'col-span-1 row-span-1',
    },
    {
      url: 'https://images.unsplash.com/photo-1764753318064-89b67a18d91f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaW1lc3RvbmUlMjBjbGlmZnMlMjBib2F0fGVufDF8fHx8MTc2NjkyMTUyOXww&ixlib=rb-4.1.0&q=80&w=1080',
      gridClass: 'col-span-2 row-span-1',
    },
    {
      url: 'https://images.unsplash.com/photo-1630839625742-fbb52bf31f76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXRoZWRyYWwlMjBhcmNoaXRlY3R1cmUlMjBldXJvcGV8ZW58MXx8fHwxNzY2OTIxNTMwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      gridClass: 'col-span-1 row-span-1',
    },
    {
      url: 'https://images.unsplash.com/photo-1763401190078-6e15b59ae2bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaW1lc3RvbmUlMjBrYXJzdCUyMGxhZ29vbnxlbnwxfHx8fDE3NjY5MjE1MzB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      gridClass: 'col-span-1 row-span-1',
    },
  ];

  return (
    <div className="w-full bg-gray-50">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-orange-400 text-black px-4 py-2 rounded-full">
              <span className="text-sm sm:text-base">Cinematic Da Lat</span>
              <span className="text-lg">🌏</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl">
              Chasing the Light,<br />
              Finding the <span className="italic">Hidden Gem</span>
            </h1>

            {/* Description */}
            <p className="text-gray-600 text-base sm:text-lg max-w-lg">
              We analyze Dalat's topography and sunlight to determine the perfect time to capture your perfect photo. Start your cinematic journey today.
            </p>

            {/* Search Bar */}
            <form onSubmit={handleSearch} className="flex gap-2 max-w-xl">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for destinations..."
                className="flex-1 px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base border border-gray-200 rounded-full focus:outline-none focus:border-orange-400 shadow-sm"
              />
              <button
                type="submit"
                className="bg-orange-400 text-white p-3 sm:p-4 rounded-full hover:bg-orange-500 transition-colors shadow-md"
                aria-label="Search"
              >
                <Search size={20} />
              </button>
            </form>
          </div>

          {/* Right Content - Image Cards */}
          <div className="hidden lg:block relative h-[500px]">
            <div className="relative w-full h-full flex items-start justify-center">
              {featuredImages.map((image, index) => (
                <div
                  key={index}
                  className="absolute overflow-hidden rounded-3xl border-2 border-orange-400 shadow-xl transition-all hover:scale-105"
                  style={{
                    width: '180px',
                    height: '320px',
                    left: `${index * 140}px`,
                    top: `${index * 80}px`,
                    zIndex: index + 1,
                  }}
                >
                  <img
                    src={image}
                    alt={`Featured ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          
        </div>
      </div>

      {/* Services Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-8 sm:mb-12">
          We offer our best <span className="italic">services</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 sm:p-8 rounded-2xl border-2 border-orange-400 hover:border-orange-500 shadow-lg hover:shadow-xl transition-all group"
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-orange-400 rounded-full flex items-center justify-center text-white mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl sm:text-2xl mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Gallery Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
        <div className="space-y-6 sm:space-y-8">
          {/* Gallery Header */}
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 bg-orange-400 text-black px-4 py-2 rounded-full">
              <span className="text-sm sm:text-base">Gallery</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl">
              Visit our customers tour gallery
            </h2>
          </div>

          {/* Masonry Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 auto-rows-[180px] gap-3 sm:gap-4">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className={`${image.gridClass} overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all hover:scale-105 cursor-pointer`}
              >
                <img
                  src={image.url}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Subscribe Section */}
      <SubscribeSection />
    </div>
  );
}