import { MapPin, Search } from 'lucide-react';
import { DestinationCard } from './DestinationCard';
import { BottomNav } from './BottomNav';
import { Destination } from '../app/page';
import { useState } from 'react';
import { ImageSearchModal } from './ImageSearchModal';

interface HomeProps {
  onDestinationClick: (destination: Destination) => void;
  favorites: number[];
  toggleFavorite: (id: number) => void;
  onFavoritesClick: () => void;
  onProfileClick: () => void;
}

export function Home({ onDestinationClick, favorites, toggleFavorite, onFavoritesClick, onProfileClick }: HomeProps) {
  const [showImageSearch, setShowImageSearch] = useState(false);

  const popularDestinations: Destination[] = [
    {
      id: 1,
      name: 'Alley Palace',
      image: 'https://images.unsplash.com/photo-1673528797366-382b12f9ce69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXN0bGUlMjBwYWxhY2UlMjBldXJvcGV8ZW58MXx8fHwxNzY2ODAwNTI5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 4.1,
      location: 'Dalat, Vietnam',
      price: 199,
      type: 'hotel' as const,
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
      type: 'hotel' as const,
      description: 'Aspen is as close as one can get to a storybook alpine town in America.',
      facilities: ['Heater', 'Dinner', 'Tub', 'Pool']
    },
    {
      id: 3,
      name: 'The Garden Cafe',
      image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWZlJTIwZ2FyZGVufGVufDB8fHx8MTczNTI5MTIwMHww&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 4.8,
      location: 'Dalat, Vietnam',
      price: 25,
      type: 'cafe' as const,
      description: 'A cozy garden cafe serving specialty coffee and delicious pastries in a beautiful outdoor setting. ',
      facilities: ['WiFi', 'Outdoor Seating', 'Parking', 'Pet Friendly'],
      crowdLevel: [
        { time: '8-10 AM', level: 'medium', percentage: 60 },
        { time: '10-12 PM', level: 'high', percentage: 85 },
        { time: '12-2 PM', level: 'high', percentage: 90 },
        { time: '2-4 PM', level: 'medium', percentage: 55 },
        { time: '4-6 PM', level: 'low', percentage: 30 },
        { time: '6-8 PM', level: 'medium', percentage: 65 }
      ],
      menu: [
        {
          id: 1,
          name: 'Vietnamese Coffee',
          description: 'Traditional drip coffee with condensed milk',
          price: 5,
          image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
          category: 'Drinks'
        },
        {
          id: 2,
          name: 'Croissant',
          description: 'Freshly baked butter croissant',
          price: 4,
          image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
          category: 'Pastries'
        },
        {
          id: 3,
          name: 'Avocado Toast',
          description: 'Smashed avocado on sourdough with poached egg',
          price: 8,
          image: 'https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
          category: 'Food'
        },
        {
          id: 4,
          name: 'Matcha Latte',
          description: 'Premium Japanese matcha with steamed milk',
          price: 6,
          image: 'https://images.unsplash.com/photo-1536013814526-23b1d4b7e61d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
          category: 'Drinks'
        },
        {
          id: 5,
          name: 'Berry Smoothie Bowl',
          description: 'Mixed berries, granola, and fresh fruits',
          price: 9,
          image: 'https://images.unsplash.com/photo-1590301157890-4810ed352733?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
          category: 'Food'
        },
        {
          id: 6,
          name: 'Chocolate Cake',
          description: 'Rich chocolate cake with ganache',
          price: 7,
          image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
          category: 'Desserts'
        }
      ],
      reviews: [
        {
          id: 1,
          userName: 'Sarah Johnson',
          userAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=150',
          rating: 5,
          comment: 'Amazing atmosphere and the best Vietnamese coffee I\'ve ever had! The garden setting is absolutely beautiful.',
          date: '2 days ago',
          images: [
            'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
            'https://images.unsplash.com/photo-1593536488177-1eb3c2d4e3d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWZlJTIwaW50ZXJpb3IlMjBjb3p5fGVufDF8fHx8MTc2NjczNzM0Mnww&ixlib=rb-4.1.0&q=80&w=1080',
            'https://images.unsplash.com/photo-1541167760496-1628856ab772?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBsYXR0ZSUyMGFydHxlbnwxfHx8fDE3NjY3NjYxMTF8MA&ixlib=rb-4.1.0&q=80&w=1080'
          ]
        },
        {
          id: 2,
          userName: 'Michael Chen',
          userAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=150',
          rating: 4,
          comment: 'Great cafe with cozy ambiance. The avocado toast was delicious. Only complaint is it can get quite crowded during lunch hours.',
          date: '1 week ago',
          images: [
            'https://images.unsplash.com/photo-1762715020147-9820679a6fdd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvdXRkb29yJTIwY2FmZSUyMHNlYXRpbmd8ZW58MXx8fHwxNzY2NzgxMjIyfDA&ixlib=rb-4.1.0&q=80&w=1080',
            'https://images.unsplash.com/photo-1692627806647-2ca49614fa44?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWZlJTIwZ2FyZGVuJTIwcGxhbnRzfGVufDF8fHx8MTc2NjgxNzQwN3ww&ixlib=rb-4.1.0&q=80&w=1080'
          ]
        },
        {
          id: 3,
          userName: 'Emma Wilson',
          userAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=150',
          rating: 5,
          comment: 'Perfect spot for working remotely. Fast WiFi, comfortable seating, and excellent pastries!',
          date: '2 weeks ago',
          images: [
            'https://images.unsplash.com/photo-1643551620454-0bd8f58487c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZWxpY2lvdXMlMjBwYXN0cnklMjBiYWtlcnl8ZW58MXx8fHwxNzY2ODE3NDAxfDA&ixlib=rb-4.1.0&q=80&w=1080'
          ]
        }
      ]
    },
    {
      id: 4,
      name: 'La Terrasse Restaurant',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwaW50ZXJpb3J8ZW58MHx8fHwxNzM1MjkxMjAwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 4.6,
      location: 'Dalat, Vietnam',
      price: 45,
      type: 'restaurant' as const,
      description: 'Fine dining restaurant offering authentic Vietnamese cuisine with a modern twist.',
      facilities: ['WiFi', 'Valet Parking', 'Bar', 'Private Dining'],
      crowdLevel: [
        { time: '11-1 PM', level: 'low', percentage: 35 },
        { time: '1-3 PM', level: 'high', percentage: 95 },
        { time: '3-5 PM', level: 'low', percentage: 25 },
        { time: '5-7 PM', level: 'medium', percentage: 70 },
        { time: '7-9 PM', level: 'high', percentage: 100 },
        { time: '9-11 PM', level: 'medium', percentage: 50 }
      ],
      menu: [
        {
          id: 1,
          name: 'Pho Bo',
          description: 'Traditional beef noodle soup with fresh herbs',
          price: 12,
          image: 'https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
          category: 'Main Course'
        },
        {
          id: 2,
          name: 'Banh Mi',
          description: 'Vietnamese baguette with pork and vegetables',
          price: 8,
          image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
          category: 'Appetizers'
        },
        {
          id: 3,
          name: 'Spring Rolls',
          description: 'Fresh spring rolls with shrimp and herbs',
          price: 10,
          image: 'https://images.unsplash.com/photo-1594007652940-c4d2e9e9d985?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
          category: 'Appetizers'
        },
        {
          id: 4,
          name: 'Grilled Pork Vermicelli',
          description: 'Bun cha with grilled pork and fresh noodles',
          price: 15,
          image: 'https://images.unsplash.com/photo-1626804475297-41608ea09aeb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
          category: 'Main Course'
        },
        {
          id: 5,
          name: 'Seafood Hotpot',
          description: 'Fresh seafood in aromatic broth',
          price: 28,
          image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
          category: 'Main Course'
        },
        {
          id: 6,
          name: 'Coconut Panna Cotta',
          description: 'Silky coconut dessert with tropical fruits',
          price: 8,
          image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
          category: 'Desserts'
        }
      ],
      reviews: [
        {
          id: 1,
          userName: 'David Lee',
          userAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=150',
          rating: 5,
          comment: 'Exceptional dining experience! The Pho Bo was absolutely divine and the service was impeccable. Highly recommend the seafood hotpot.',
          date: '3 days ago',
          images: [
            'https://images.unsplash.com/photo-1555126634-323283e090fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
            'https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
            'https://images.unsplash.com/photo-1684568519320-8c6b14f7e65f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwZm9vZCUyMHBsYXRpbmd8ZW58MXx8fHwxNzY2NzQwOTYwfDA&ixlib=rb-4.1.0&q=80&w=1080',
            'https://images.unsplash.com/photo-1701480253822-1842236c9a97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWV0bmFtZXNlJTIwcGhvJTIwYm93bHxlbnwxfHx8fDE3NjY3NTQxODF8MA&ixlib=rb-4.1.0&q=80&w=1080'
          ]
        },
        {
          id: 2,
          userName: 'Linh Nguyen',
          userAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=150',
          rating: 5,
          comment: 'Authentic Vietnamese flavors with a modern presentation. The atmosphere is elegant and the staff is very attentive.',
          date: '1 week ago',
          images: [
            'https://images.unsplash.com/photo-1756397481872-ed981ef72a51?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwaW50ZXJpb3IlMjBlbGVnYW50fGVufDF8fHx8MTc2NjcxNTIwOHww&ixlib=rb-4.1.0&q=80&w=1080',
            'https://images.unsplash.com/photo-1758977403438-1b8546560d31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwZGluaW5nJTIwdGFibGV8ZW58MXx8fHwxNzY2ODE3NDIzfDA&ixlib=rb-4.1.0&q=80&w=1080',
            'https://images.unsplash.com/photo-1558722199-56eabc94fb69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWV0bmFtZXNlJTIwY3Vpc2luZSUyMGRpc2h8ZW58MXx8fHwxNzY2ODE3NDI2fDA&ixlib=rb-4.1.0&q=80&w=1080'
          ]
        },
        {
          id: 3,
          userName: 'James Miller',
          userAvatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=150',
          rating: 4,
          comment: 'Great food and beautiful interior design. The only downside is it can be quite loud during peak hours.',
          date: '2 weeks ago',
          images: [
            'https://images.unsplash.com/photo-1762806883627-4bcbfad98a2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwYW1iaWFuY2UlMjBsaWdodGluZ3xlbnwxfHx8fDE3NjY4MTc0Mjh8MA&ixlib=rb-4.1.0&q=80&w=1080'
          ]
        }
      ]
    }
  ];

  const recommendedDestinations: Destination[] = [
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

  return (
    <div className="max-w-7xl mx-auto bg-white lg:bg-transparent min-h-screen pb-20 lg:pb-8">
      {/* Header - Mobile Only */}
      <div className="px-5 pt-6 pb-4 lg:hidden">
        <div className="flex items-start justify-between mb-6">
          <div>
            <p className="text-gray-600 text-sm">Explore</p>
            <h1 className="text-2xl mt-1">SNAP DL</h1>
          </div>
          <div className="flex items-center gap-1 text-sm" style={{ color: '#FAA935' }}>
            <MapPin className="w-4 h-4" />
            <span>Dalat, Vietnam</span>
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Find things to do"
            className="w-full pl-10 pr-12 py-3 bg-gray-50 rounded-lg text-sm"
          />
          <button
            onClick={() => setShowImageSearch(true)}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-[#FAA935] rounded-lg flex items-center justify-center hover:bg-[#E89820] transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Header - Desktop */}
      <div className="hidden lg:block px-8 pt-8 pb-6 bg-white rounded-2xl mb-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <p className="text-gray-600">Explore</p>
            <h1 className="text-3xl mt-1">Discover Amazing Places</h1>
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative max-w-2xl">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Find things to do"
            className="w-full pl-12 pr-16 py-4 bg-gray-50 rounded-xl"
          />
          <button
            onClick={() => setShowImageSearch(true)}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-[#FAA935] rounded-lg flex items-center justify-center hover:bg-[#E89820] transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="px-5 lg:px-8 mb-6 bg-white lg:bg-transparent">
        <div className="flex gap-3 lg:gap-6 pb-2 lg:pb-0 overflow-x-auto scrollbar-hide border-b lg:border-none">
          <button className="pb-2 lg:pb-3 lg:px-6 lg:bg-[#FAA935] lg:text-white lg:rounded-full text-sm text-[#FAA935] lg:border-0 border-b-2 border-[#FAA935] whitespace-nowrap flex-shrink-0">
            Location
          </button>
          <button className="pb-2 lg:pb-3 lg:px-6 lg:bg-gray-100 lg:rounded-full text-sm text-gray-500 hover:text-gray-700 whitespace-nowrap flex-shrink-0">
            Cafe
          </button>
          <button className="pb-2 lg:pb-3 lg:px-6 lg:bg-gray-100 lg:rounded-full text-sm text-gray-500 hover:text-gray-700 whitespace-nowrap flex-shrink-0">
            Adventure
          </button>
          <button className="pb-2 lg:pb-3 lg:px-6 lg:bg-gray-100 lg:rounded-full text-sm text-gray-500 hover:text-gray-700 whitespace-nowrap flex-shrink-0">
            Restaurant
          </button>
        </div>
      </div>

      {/* Popular Section */}
      <div className="px-5 lg:px-8 mb-8">
        <div className="flex items-center justify-between mb-4 lg:mb-6">
          <h2 className="text-lg lg:text-2xl">Popular</h2>
          <button className="text-sm lg:text-base text-[#FAA935] hover:text-[#E89820]">See all</button>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
          {popularDestinations.map((destination) => (
            <DestinationCard
              key={destination.id}
              destination={destination}
              onClick={() => onDestinationClick(destination)}
              isFavorite={favorites.includes(destination.id)}
              onToggleFavorite={() => toggleFavorite(destination.id)}
            />
          ))}
        </div>
      </div>

      {/* Recommended Section */}
      <div className="px-5 lg:px-8 mb-8">
        <div className="flex items-center justify-between mb-4 lg:mb-6">
          <h2 className="text-lg lg:text-2xl">Recommended</h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
          {recommendedDestinations.map((destination) => (
            <DestinationCard
              key={destination.id}
              destination={destination}
              onClick={() => onDestinationClick(destination)}
              isFavorite={favorites.includes(destination.id)}
              onToggleFavorite={() => toggleFavorite(destination.id)}
            />
          ))}
        </div>
      </div>

      {/* Bottom Navigation - Mobile Only */}
      <BottomNav currentView="home" onFavoritesClick={onFavoritesClick} onProfileClick={onProfileClick} />

      {/* Image Search Modal */}
      {showImageSearch && (
        <ImageSearchModal onClose={() => setShowImageSearch(false)} />
      )}
    </div>
  );
}