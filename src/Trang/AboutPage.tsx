import React from 'react';
import { SubscribeSection } from '../components/SubscribeSection';
import { MapPin, MessageCircle, Gift, Camera, Search, Heart, Users, Target, Lightbulb } from 'lucide-react';

export function AboutPage() {
  // const teamMembers = [
  //   {
  //     name: 'We\'re Different',
  //     role: 'Development',
  //     image: 'https://statics.vinpearl.com/canh-dep-da-lat-19_1688380356.jpg',
  //   },
  // ];

  const stats = [
    { number: '50+', label: 'Destinations' },
    { number: '1000+', label: 'Happy Users' },
    { number: '100+', label: 'Reviews' },
    { number: '24/7', label: 'AI Support' },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] w-full overflow-hidden">
        <img
          src="https://statics.vinpearl.com/canh-dep-da-lat-27_1688380567.jpg"
          alt="Da Lat City"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl text-white mb-4">
              About <span className="text-orange-400">Snap D</span>
            </h1>
            <p className="text-white/90 text-lg sm:text-xl max-w-2xl mx-auto px-4">
              Your smart companion for exploring Da Lat
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-orange-400 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center text-white">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold">{stat.number}</div>
                <div className="text-sm sm:text-base opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 lg:space-y-12">
            {/* Who We Are */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-orange-400 rounded-full flex items-center justify-center text-white">
                  <Users size={24} />
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl">
                  Who <span className="text-orange-400">We Are?</span>
                </h2>
              </div>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                Snap D is a smart travel companion app designed specifically for Da Lat. We help travelers discover the best hotels, cafes, and restaurants with AI-powered recommendations, real-time crowd insights, and exclusive voucher rewards.
              </p>
            </div>

            {/* Our Mission */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-orange-400 rounded-full flex items-center justify-center text-white">
                  <Target size={24} />
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl">
                  Our <span className="text-orange-400">Mission</span>
                </h2>
              </div>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                We believe exploring a new city should be effortless and exciting. Our mission is to make discovering Da Lat simple, personalized, and rewarding - whether you're a first-time visitor or a local looking for hidden gems.
              </p>
            </div>

            {/* What Makes Us Different */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-orange-400 rounded-full flex items-center justify-center text-white">
                  <Lightbulb size={24} />
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl">
                  Why <span className="text-orange-400">Snap D?</span>
                </h2>
              </div>
              <ul className="text-gray-600 text-base sm:text-lg leading-relaxed space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-orange-400 mt-1">•</span>
                  <span>AI-powered search and chatbot for personalized recommendations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-400 mt-1">•</span>
                  <span>Image search to find places from photos instantly</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-400 mt-1">•</span>
                  <span>Daily Lucky Draw for exclusive restaurant vouchers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-400 mt-1">•</span>
                  <span>Real crowd levels, menus & authentic reviews</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Image */}
          <div className="space-y-6">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[300px] lg:h-[350px]">
              <img
                src="https://statics.vinpearl.com/canh-dep-da-lat-29_1688380622.jpg"
                alt="Da Lat Cafe"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative rounded-2xl overflow-hidden shadow-xl h-[150px]">
                <img
                  src="https://statics.vinpearl.com/canh-dep-da-lat-31_1688380674.jpg"
                  alt="Hotel"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-xl h-[150px]">
                <img
                  src="https://statics.vinpearl.com/canh-dep-da-lat-32_1688380702.jpg"
                  alt="Restaurant"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="bg-gray-50 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4">
              What You Can <span className="text-orange-400">Do</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore all the features that make Snap D your perfect travel companion
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <Search size={28} />, title: 'Smart Search', desc: 'Find places with AI recommendations' },
              { icon: <Camera size={28} />, title: 'Image Search', desc: 'Upload a photo to discover locations' },
              { icon: <MessageCircle size={28} />, title: 'AI Chatbot', desc: 'Get personalized travel advice' },
              { icon: <Gift size={28} />, title: 'Lucky Draw', desc: 'Win vouchers daily' },
              { icon: <Heart size={28} />, title: 'Favorites', desc: 'Save your must-visit places' },
              { icon: <MapPin size={28} />, title: 'Local Insights', desc: 'Crowd levels & authentic reviews' },
            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                <div className="w-14 h-14 bg-orange-400 rounded-full flex items-center justify-center text-white mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
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