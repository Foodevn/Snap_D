import React, { useState } from 'react';

export function SubscribeSection() {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Subscribe email:', email);
    setEmail('');
  };

  return (
    <div className="w-full bg-gradient-to-r from-blue-100 to-blue-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl text-gray-800">
              Subscribe now to get useful traveling information
            </h2>

            {/* Subscribe Form */}
            <form onSubmit={handleSubscribe} className="flex gap-2 max-w-xl">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base border border-gray-300 rounded-lg focus:outline-none focus:border-orange-400 bg-white shadow-sm"
              />
              <button
                type="submit"
                className="bg-orange-400 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-orange-500 transition-colors shadow-md"
              >
                Subscribe
              </button>
            </form>

            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati adipisici sunt in, provident facere ipsam?
            </p>
          </div>

          {/* Right Image */}
          <div className="hidden lg:flex justify-end items-center">
            <img
              src="https://images.unsplash.com/photo-1758599668974-6da5d7cc6cc4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b3VyaXN0JTIwYmFja3BhY2slMjBzbWlsaW5nfGVufDF8fHx8MTc2NjkyMTgxNHww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Happy Traveler"
              className="h-[300px] object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
