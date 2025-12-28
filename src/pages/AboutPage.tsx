import React from 'react';
import { SubscribeSection } from '../components/SubscribeSection';

export function AboutPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] w-full overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1758675975325-e225d30d9d43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvdmVyd2F0ZXIlMjBidW5nYWxvd3MlMjB0cm9waWNhbHxlbnwxfHx8fDE3NjY5MjE3Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="About Us Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl text-white">
            About <span className="text-orange-400">Us</span>
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 lg:space-y-12">
            {/* Who We Are */}
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl">
                Who <span className="text-orange-400">We Are?</span>
              </h2>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                We're all about creating unforgettable experiences for our guests. Our journey began with a simple passion for exploring the beauty of the World.
              </p>
            </div>

            {/* Our Mission */}
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl">
                Our <span className="text-orange-400">Mission</span>
              </h2>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                We believe that travel is not just about visiting new places, but about immersing yourself in new cultures, connecting with nature, and making memories that last a lifetime.
              </p>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[400px] lg:h-[500px]">
            <img
              src="https://images.unsplash.com/photo-1763583374819-c75873f9f2b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaW1lc3RvbmUlMjBjbGlmZnMlMjBib2F0JTIwbGFnb29ufGVufDF8fHx8MTc2NjkyMTcyOHww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Our Mission"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Subscribe Section */}
      <SubscribeSection />
    </div>
  );
}