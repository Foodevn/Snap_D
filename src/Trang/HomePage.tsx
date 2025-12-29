import React from 'react';
import { MapPin, MessageCircle, Gift, Camera, Search, Heart } from 'lucide-react';
import { SubscribeSection } from '../components/SubscribeSection';

export function HomePage() {
  const services = [
    {
      icon: <Search size={32} />,
      title: 'Smart Search',
      description: 'Find hotels, cafes & restaurants with AI-powered recommendations',
    },
    {
      icon: <Camera size={32} />,
      title: 'Image Search',
      description: 'Upload a photo and discover matching destinations instantly',
    },
    {
      icon: <MessageCircle size={32} />,
      title: 'AI Assistant',
      description: 'Chat with our travel bot for personalized Da Lat suggestions',
    },
    {
      icon: <Gift size={32} />,
      title: 'Lucky Draw',
      description: 'Spin the wheel daily for exclusive restaurant vouchers',
    },
    {
      icon: <Heart size={32} />,
      title: 'Favorites',
      description: 'Save and organize your must-visit places in one place',
    },
    {
      icon: <MapPin size={32} />,
      title: 'Local Insights',
      description: 'Real crowd levels, menus & reviews from local travelers',
    },
  ];

  const featuredImages = [
    'https://statics.vinpearl.com/canh-dep-da-lat-6_1688379889.jpg',
    'https://statics.vinpearl.com/canh-dep-da-lat-3_1688379797.jpg',
    'https://statics.vinpearl.com/canh-dep-da-lat-4_1688379829.jpg',
  ];

  const galleryImages = [
    {
      url: 'https://statics.vinpearl.com/canh-dep-da-lat-18_1688380322.jpg',
      gridClass: 'col-span-2 row-span-2',
      label: 'Hotels',
    },
    {
      url: 'https://statics.vinpearl.com/canh-dep-da-lat-10_1688379997.jpg',
      gridClass: 'col-span-1 row-span-1',
      label: 'Cafes',
    },
    {
      url: 'https://statics.vinpearl.com/canh-dep-da-lat-11_1688380022.jpg',
      gridClass: 'col-span-1 row-span-1',
      label: 'Restaurants',
    },
    {
      url: 'https://statics.vinpearl.com/canh-dep-da-lat-12_1688380050.jpg',
      gridClass: 'col-span-1 row-span-1',
      label: 'Boutique Stay',
    },
    {
      url: 'https://statics.vinpearl.com/canh-dep-da-lat-13_1688380078.jpg',
      gridClass: 'col-span-1 row-span-1',
      label: 'Coffee',
    },
    {
      url: 'https://statics.vinpearl.com/canh-dep-da-lat-15_1688380187.jpg',
      gridClass: 'col-span-2 row-span-1',
      label: 'Fine Dining',
    },
    {
      url: 'https://statics.vinpearl.com/canh-dep-da-lat-17_1688380290.jpg',
      gridClass: 'col-span-1 row-span-1',
      label: 'Resort',
    },
    {
      url: 'https://statics.vinpearl.com/canh-dep-da-lat-8_1688379950.jpg',
      gridClass: 'col-span-1 row-span-1',
      label: 'Cozy Spot',
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
              <span className="text-sm sm:text-base">Discover Da Lat</span>
              <span className="text-lg">🏔️</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl">
              Explore Da Lat,<br />
              Your <span className="italic">Perfect Way</span>
            </h1>

            {/* Description */}
            <p className="text-gray-600 text-base sm:text-lg max-w-lg">
              Discover the best hotels, cafes, and restaurants in Da Lat. Get AI-powered recommendations, spin for vouchers, and save your favorite spots all in one app.
            </p>

            {/* CTA Button */}
            <a
              href="/app"
              className="inline-flex items-center gap-2 bg-orange-400 text-white px-8 py-4 rounded-full hover:bg-orange-500 transition-colors shadow-md text-lg font-medium"
            >
              Get Started
              <span>→</span>
            </a>
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
                    height: '360px',
                    left: `${index * 200}px`,
                    top: `${index * 100}px`,
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
          Everything you need to <span className="italic">explore</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
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
              <span className="text-sm sm:text-base">Featured Places</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl">
              Popular destinations in Da Lat
            </h2>
          </div>

          {/* Masonry Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 auto-rows-[180px] gap-3 sm:gap-4">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className={`${image.gridClass} overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all hover:scale-105 cursor-pointer relative group`}
              >
                <img
                  src={image.url}
                  alt={image.label}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <span className="text-white font-medium">{image.label}</span>
                </div>
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