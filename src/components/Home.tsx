import { MapPin, Search } from 'lucide-react';
import { DestinationCard } from './DestinationCard';
import { BottomNav } from './BottomNav';
import { Destination } from "../app/app/page";
import { useState } from 'react';
import { ImageSearchModal } from './ImageSearchModal';

interface HomeProps {
  onDestinationClick: (destination: Destination) => void;
  favorites: number[];
  toggleFavorite: (id: number) => void;
  onFavoritesClick: () => void;
  onProfileClick: () => void;
  onChatBotClick: () => void;
  onLuckyDrawClick: () => void;
}

export function Home({ onDestinationClick, favorites, toggleFavorite, onFavoritesClick, onProfileClick, onChatBotClick, onLuckyDrawClick }: HomeProps) {
  const [showImageSearch, setShowImageSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [searchResults, setSearchResults] = useState<Destination[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [activeTab, setActiveTab] = useState<string>('all');

  const popularDestinations: Destination[] = [
    // 1) Hotel
    {
      id: 1,
      name: 'Dalat Eco Hotel',
      image:
        'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1600&q=80',
      rating: 4.6,
      location: 'Dalat, Vietnam',
      price: 65,
      type: 'hotel' as const,
      description:
        'A calm stay surrounded by pine trees, with cozy rooms and a super relaxing vibe for a Dalat getaway.',
      facilities: ['WiFi', 'Breakfast', 'Heater', 'Parking'],
      reviews: [
        {
          id: 1,
          userName: 'Khanh Nguyen',
          userAvatar:
            'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=256&q=80',
          rating: 5,
          comment:
            'Phòng sạch, ấm áp đúng chất Đà Lạt. Đêm ngủ yên, sáng có sương nhìn chill lắm.',
          date: '3 days ago',
          images: [
            'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=900&q=80'
          ]
        },
        {
          id: 2,
          userName: 'David Tran',
          userAvatar:
            'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=256&q=80',
          rating: 4,
          comment:
            'Vị trí ổn, nhân viên thân thiện. Nên đặt phòng sớm vì cuối tuần khá đông.',
          date: '1 week ago',
          images: []
        }
      ]
    },

    // 2) Hotel
    {
      id: 2,
      name: 'Pine Hill Boutique',
      image:
        'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1600&q=80',
      rating: 4.4,
      location: 'Dalat, Vietnam',
      price: 89,
      type: 'hotel' as const,
      description:
        'Boutique hotel with modern comfort, great city access, and a warm atmosphere perfect for couples.',
      facilities: ['WiFi', 'Breakfast', 'Heater', 'Airport Pickup'],
      reviews: [
        {
          id: 1,
          userName: 'Thu Le',
          userAvatar:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=256&q=80',
          rating: 5,
          comment:
            'Phong cách boutique đẹp, decor xịn. Ở cặp đôi rất hợp, chụp hình lên cực sang.',
          date: '4 days ago',
          images: [
            'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=900&q=80'
          ]
        },
        {
          id: 2,
          userName: 'Michael Pham',
          userAvatar:
            'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=256&q=80',
          rating: 4,
          comment:
            'Phòng đẹp, hơi ít chỗ đậu xe giờ cao điểm. Bù lại dịch vụ ổn và yên tĩnh.',
          date: '2 weeks ago',
          images: []
        }
      ]
    },

    // 3) Cafe
    {
      id: 3,
      name: 'Pinewood Garden Cafe',
      image:
        'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1600&q=80',
      rating: 4.8,
      location: 'Dalat, Vietnam',
      price: 6,
      type: 'cafe' as const,
      description:
        'A green garden cafe with lots of natural light, perfect for chilling or working with a cup of coffee.',
      facilities: ['WiFi', 'Outdoor Seating', 'Parking', 'Pet Friendly'],
      crowdLevel: [
        { time: '8-10 AM', level: 'medium', percentage: 55 },
        { time: '10-12 PM', level: 'high', percentage: 80 },
        { time: '12-2 PM', level: 'high', percentage: 88 },
        { time: '2-4 PM', level: 'medium', percentage: 60 },
        { time: '4-6 PM', level: 'low', percentage: 35 },
        { time: '6-8 PM', level: 'medium', percentage: 65 }
      ],
      menu: [
        {
          id: 1,
          name: 'Vietnamese Coffee',
          description: 'Traditional drip coffee with condensed milk',
          price: 3,
          image:
            'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=800&q=80',
          category: 'Drinks'
        },
        {
          id: 2,
          name: 'Matcha Latte',
          description: 'Premium matcha with steamed milk',
          price: 4,
          image:
            'https://images.unsplash.com/photo-1536013814526-23b1d4b7e61d?auto=format&fit=crop&w=800&q=80',
          category: 'Drinks'
        },
        {
          id: 3,
          name: 'Croissant',
          description: 'Freshly baked butter croissant',
          price: 3,
          image:
            'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=80',
          category: 'Pastries'
        }
      ],
      reviews: [
        {
          id: 1,
          userName: 'Minh Tran',
          userAvatar:
            'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=256&q=80',
          rating: 5,
          comment:
            'View xanh mát, ngồi làm việc cực ổn. Cà phê thơm, nhân viên dễ thương.',
          date: '3 days ago',
          images: [
            'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=80',
            'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=900&q=80'
          ]
        },
        {
          id: 2,
          userName: 'Anna Nguyen',
          userAvatar:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=256&q=80',
          rating: 4,
          comment: 'Quán đẹp, hơi đông giờ trưa. Bánh ngon, wifi ổn.',
          date: '1 week ago',
          images: [
            'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=900&q=80'
          ]
        }
      ]
    },

    // 4) Cafe
    {
      id: 4,
      name: 'Fog & Brew Dalat',
      image:
        'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=1600&q=80',
      rating: 4.7,
      location: 'Dalat, Vietnam',
      price: 7,
      type: 'cafe' as const,
      description:
        'Minimal style cafe with a “Dalat sương” mood — great espresso and quiet corners.',
      facilities: ['WiFi', 'Quiet Space', 'Power Outlets', 'Parking'],
      crowdLevel: [
        { time: '7-9 AM', level: 'medium', percentage: 50 },
        { time: '9-11 AM', level: 'high', percentage: 78 },
        { time: '11-1 PM', level: 'medium', percentage: 60 },
        { time: '1-3 PM', level: 'low', percentage: 40 },
        { time: '3-5 PM', level: 'medium', percentage: 55 },
        { time: '5-7 PM', level: 'high', percentage: 82 }
      ],
      menu: [
        {
          id: 1,
          name: 'Cold Brew',
          description: 'Smooth cold brew, lightly sweet',
          price: 4,
          image:
            'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=800&q=80',
          category: 'Drinks'
        },
        {
          id: 2,
          name: 'Cheesecake',
          description: 'Creamy cheesecake with berry sauce',
          price: 5,
          image:
            'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=800&q=80',
          category: 'Desserts'
        }
      ],
      reviews: [
        {
          id: 1,
          userName: 'Huy Pham',
          userAvatar:
            'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=256&q=80',
          rating: 5,
          comment:
            'Không gian yên, hợp học bài. Cold brew ngon, không bị đắng gắt.',
          date: '5 days ago',
          images: [
            'https://images.unsplash.com/photo-1453614512568-c4024d13c247?auto=format&fit=crop&w=900&q=80'
          ]
        }
      ]
    },

    // 5) Restaurant
    {
      id: 5,
      name: 'Dalat Claypot Kitchen',
      image:
        'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=80',
      rating: 4.6,
      location: 'Dalat, Vietnam',
      price: 18,
      type: 'restaurant' as const,
      description:
        'Warm Vietnamese comfort food with claypot specials — perfect for chilly Dalat nights.',
      facilities: ['WiFi', 'Family Seating', 'Card Payment', 'Parking'],
      crowdLevel: [
        { time: '11-1 PM', level: 'medium', percentage: 60 },
        { time: '1-3 PM', level: 'low', percentage: 35 },
        { time: '5-7 PM', level: 'high', percentage: 90 },
        { time: '7-9 PM', level: 'high', percentage: 100 },
        { time: '9-11 PM', level: 'medium', percentage: 55 }
      ],
      menu: [
        {
          id: 1,
          name: 'Com Nieu (Claypot Rice)',
          description: 'Crispy rice with savory toppings',
          price: 9,
          image:
            'https://images.unsplash.com/photo-1604908554162-45c2bdcfd57b?auto=format&fit=crop&w=800&q=80',
          category: 'Main Course'
        },
        {
          id: 2,
          name: 'Grilled Pork Vermicelli',
          description: 'Bun with grilled pork and herbs',
          price: 8,
          image:
            'https://images.unsplash.com/photo-1626804475297-41608ea09aeb?auto=format&fit=crop&w=800&q=80',
          category: 'Main Course'
        },
        {
          id: 3,
          name: 'Spring Rolls',
          description: 'Fresh rolls with shrimp and herbs',
          price: 6,
          image:
            'https://images.unsplash.com/photo-1594007652940-c4d2e9e9d985?auto=format&fit=crop&w=800&q=80',
          category: 'Appetizers'
        }
      ],
      reviews: [
        {
          id: 1,
          userName: 'Linh Nguyen',
          userAvatar:
            'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=256&q=80',
          rating: 5,
          comment:
            'Món ăn đậm vị, trời lạnh ăn cơm niêu “đúng bài”. Phục vụ nhanh.',
          date: '4 days ago',
          images: [
            'https://images.unsplash.com/photo-1555126634-323283e090fa?auto=format&fit=crop&w=900&q=80'
          ]
        },
        {
          id: 2,
          userName: 'James Miller',
          userAvatar:
            'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=256&q=80',
          rating: 4,
          comment: 'Tasty and cozy. Gets noisy at peak dinner hours.',
          date: '2 weeks ago',
          images: [
            'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=900&q=80'
          ]
        }
      ]
    },

    // 6) Restaurant
    {
      id: 6,
      name: 'Highland Hotpot & BBQ',
      image:
        'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1600&q=80',
      rating: 4.5,
      location: 'Dalat, Vietnam',
      price: 22,
      type: 'restaurant' as const,
      description:
        'A lively place for hotpot and BBQ — ideal for groups who want something warm and filling.',
      facilities: ['Group Seating', 'Parking', 'Card Payment', 'Late Night'],
      crowdLevel: [
        { time: '5-7 PM', level: 'medium', percentage: 65 },
        { time: '7-9 PM', level: 'high', percentage: 95 },
        { time: '9-11 PM', level: 'medium', percentage: 55 }
      ],
      menu: [
        {
          id: 1,
          name: 'Beef Hotpot',
          description: 'Aromatic broth with sliced beef and veggies',
          price: 18,
          image:
            'https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=800&q=80',
          category: 'Main Course'
        },
        {
          id: 2,
          name: 'Grilled Pork Set',
          description: 'BBQ pork with dipping sauces and sides',
          price: 15,
          image:
            'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=800&q=80',
          category: 'Main Course'
        }
      ],
      reviews: [
        {
          id: 1,
          userName: 'Thanh Vu',
          userAvatar:
            'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=256&q=80',
          rating: 5,
          comment:
            'Hotpot ngon, rau tươi. Đi nhóm đông thì vui, nhớ đi sớm kẻo hết bàn.',
          date: '6 days ago',
          images: [
            'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=80'
          ]
        }
      ]
    },

    // 7) Location (Danh lam)
    {
      id: 7,
      name: 'Xuan Huong Lake Walk',
      image:
        'https://bizweb.dktcdn.net/100/006/093/files/ho-xuan-huong-da-lat-2.jpg?v=1701947652021',
      rating: 4.7,
      location: 'Dalat, Vietnam',
      price: 0,
      type: 'location' as const,
      description:
        'A classic Dalat experience: a peaceful walk by the lake, especially beautiful at sunrise and sunset.',
      facilities: ['Scenic View', 'Walking Path', 'Family Friendly', 'Photo Spots'],
      reviews: [
        {
          id: 1,
          userName: 'Thao Nguyen',
          userAvatar:
            'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=256&q=80',
          rating: 5,
          comment:
            'Buổi sáng đi dạo quanh hồ cực đã, không khí lạnh nhẹ và rất nhiều góc chụp đẹp.',
          date: '2 days ago',
          images: [
            'https://images.unsplash.com/photo-1526481280695-3c687fd5432c?auto=format&fit=crop&w=900&q=80'
          ]
        },
        {
          id: 2,
          userName: 'Quang Le',
          userAvatar:
            'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=256&q=80',
          rating: 4,
          comment: 'Hoàng hôn rất chill, hơi đông cuối tuần nhưng đáng đi.',
          date: '1 week ago',
          images: []
        }
      ]
    },

    // 8) Location (Danh lam)
    {
      id: 8,
      name: 'Dalat Flower Garden',
      image:
        'https://i.pinimg.com/1200x/b5/da/41/b5da4142a8fc864ce5495abb4ea852d8.jpg',
      rating: 4.4,
      location: 'Dalat, Vietnam',
      price: 3,
      type: 'location' as const,
      description:
        'Colorful flower displays and great photo corners — a must if you love Dalat’s “thành phố ngàn hoa”.',
      facilities: ['Tickets', 'Photo Spots', 'Family Friendly', 'Souvenir Shops'],
      reviews: [
        {
          id: 1,
          userName: 'Mai Pham',
          userAvatar:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=256&q=80',
          rating: 5,
          comment:
            'Hoa nhiều và được chăm rất đẹp. Đi buổi sáng nắng nhẹ chụp ảnh lên màu cực xinh.',
          date: '3 days ago',
          images: [
            'https://images.unsplash.com/photo-1456412684996-6d1a7a7b5c73?auto=format&fit=crop&w=900&q=80'
          ]
        },
        {
          id: 2,
          userName: 'Duc Tran',
          userAvatar:
            'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=256&q=80',
          rating: 4,
          comment:
            'Nhiều góc sống ảo, đi gia đình rất hợp. Hơi đông dịp lễ.',
          date: '2 weeks ago',
          images: []
        }
      ]
    },

    // 9) Location (Danh lam)
    {
      id: 9,
      name: 'Prenn Waterfall Viewpoint',
      image:
        'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1600&q=80',
      rating: 4.3,
      location: 'Dalat, Vietnam',
      price: 4,
      type: 'location' as const,
      description:
        'Fresh air, greenery, and waterfall vibes — a quick nature escape not too far from town.',
      facilities: ['Nature', 'Photo Spots', 'Easy Access', 'Souvenir Shops'],
      reviews: [
        {
          id: 1,
          userName: 'Bao Nguyen',
          userAvatar:
            'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=256&q=80',
          rating: 4,
          comment:
            'Không khí mát, nhiều cây xanh. Đi ngày thường sẽ vắng và chill hơn.',
          date: '5 days ago',
          images: [
            'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=900&q=80'
          ]
        },
        {
          id: 2,
          userName: 'Linh Tran',
          userAvatar:
            'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=256&q=80',
          rating: 5,
          comment:
            'Thác nhìn đẹp, chụp ảnh rất hợp. Có nhiều chỗ bán đồ lưu niệm.',
          date: '1 week ago',
          images: []
        }
      ]
    },

    // 10) Adventure
    {
      id: 10,
      name: 'Langbiang Summit Adventure',
      image:
        'https://images.unsplash.com/photo-1501555088652-021faa106b9b?auto=format&fit=crop&w=1600&q=80',
      rating: 4.6,
      location: 'Dalat, Vietnam',
      price: 12,
      type: 'adventure' as const,
      description:
        'Catch wide mountain views and cool weather — perfect if you want a bit of hiking and adventure.',
      facilities: ['Guided Tours', 'Hiking', 'Scenic View', 'Photo Spots'],
      reviews: [
        {
          id: 1,
          userName: 'Hoang Phuc',
          userAvatar:
            'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=256&q=80',
          rating: 5,
          comment:
            'Lên đỉnh gió mát, view rộng. Nên đi sớm để săn mây và tránh đông.',
          date: '2 days ago',
          images: [
            'https://images.unsplash.com/photo-1501555088652-021faa106b9b?auto=format&fit=crop&w=900&q=80'
          ]
        },
        {
          id: 2,
          userName: 'Trang Le',
          userAvatar:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=256&q=80',
          rating: 4,
          comment:
            'Đường đi ổn, có vài đoạn dốc. Đi nhóm bạn thì vui, chụp ảnh đẹp.',
          date: '1 week ago',
          images: []
        }
      ]
    },

    // 11) Adventure
    {
      id: 11,
      name: 'Pine Forest Sunrise Trek',
      image:
        'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1600&q=80',
      rating: 4.5,
      location: 'Dalat, Vietnam',
      price: 15,
      type: 'adventure' as const,
      description:
        'A short trek through pine forest to chase the sunrise — the “Dalat vibe” at its best.',
      facilities: ['Sunrise', 'Hiking', 'Fresh Air', 'Small Groups'],
      reviews: [
        {
          id: 1,
          userName: 'Hien Nguyen',
          userAvatar:
            'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=256&q=80',
          rating: 5,
          comment:
            'Săn bình minh siêu đã! Không khí trong và lạnh nhẹ, trải nghiệm rất đáng.',
          date: '3 days ago',
          images: [
            'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=900&q=80'
          ]
        },
        {
          id: 2,
          userName: 'Minh Pham',
          userAvatar:
            'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=256&q=80',
          rating: 4,
          comment:
            'Trek nhẹ nhàng, hợp người mới. Nhớ mang áo ấm và giày chống trượt.',
          date: '2 weeks ago',
          images: []
        }
      ]
    },

    // 12) Location (Danh lam)
    {
      id: 12,
      name: 'Tuyen Lam Lake Picnic Spot',
      image:
        'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80',
      rating: 4.7,
      location: 'Dalat, Vietnam',
      price: 0,
      type: 'location' as const,
      description:
        'Quiet lake corners with pine trees — great for picnic, chill, and taking cinematic photos.',
      facilities: ['Picnic', 'Scenic View', 'Fresh Air', 'Quiet'],
      reviews: [
        {
          id: 1,
          userName: 'Vy Tran',
          userAvatar:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=256&q=80',
          rating: 5,
          comment:
            'Hồ yên tĩnh, đi picnic cực hợp. Có nhiều chỗ ngồi và góc chụp “cinematic”.',
          date: '4 days ago',
          images: [
            'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80'
          ]
        },
        {
          id: 2,
          userName: 'Kiet Nguyen',
          userAvatar:
            'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=256&q=80',
          rating: 4,
          comment:
            'Không khí mát, nhiều thông. Đi sáng sớm đẹp nhất, ít người.',
          date: '1 week ago',
          images: []
        }
      ]
    }
  ];
  ;


  // Lấy 4 destination có rating cao nhất từ popularDestinations
  const recommendedDestinations: Destination[] = [...popularDestinations]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 4);

  // Filter destinations based on active tab
  const filteredDestinations = activeTab === 'all'
    ? popularDestinations
    : popularDestinations.filter(dest => dest.type === activeTab);

  // Filter suggestions based on search query
  const suggestions = searchQuery.trim()
    ? popularDestinations.filter(dest =>
      dest.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dest.location?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dest.type?.toLowerCase().includes(searchQuery.toLowerCase())
    ).slice(0, 5)
    : [];

  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
    setShowSuggestions(value.trim().length > 0);
    if (value.trim() === '') {
      setIsSearching(false);
      setSearchResults([]);
    }
  };

  // Handle Enter key press to search
  const handleSearchKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && searchQuery.trim()) {
      setShowSuggestions(false);
      setIsSearching(true);
      const results = popularDestinations.filter(dest =>
        dest.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        dest.location?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        dest.type?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        dest.description?.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSearchResults(results);
    }
  };

  // Handle suggestion click - go directly to detail
  const handleSuggestionClick = (destination: Destination) => {
    setShowSuggestions(false);
    setSearchQuery('');
    setIsSearching(false);
    onDestinationClick(destination);
  };

  // Clear search
  const clearSearch = () => {
    setSearchQuery('');
    setShowSuggestions(false);
    setIsSearching(false);
    setSearchResults([]);
  };

  return (
    <div className="max-w-7xl mx-auto bg-white lg:bg-transparent min-h-screen pb-20 lg:pb-8">
      {/* Header - Mobile Only */}
      <div className="px-5 pt-6 pb-4 lg:hidden">
        <div className="flex items-start justify-between mb-6">
          <div>
            <img src="./logo-snap-d.png" alt="logo" className='w-40' />
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
            value={searchQuery}
            onChange={handleSearchChange}
            onKeyDown={handleSearchKeyDown}
            onFocus={() => searchQuery.trim() && setShowSuggestions(true)}
          />
          {searchQuery ? (
            <button
              onClick={clearSearch}
              className="absolute right-12 top-1/2 -translate-y-1/2 w-6 h-6 flex items-center justify-center text-gray-400 hover:text-gray-600"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          ) : null}
          <button
            onClick={() => setShowImageSearch(true)}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-[#FAA935] rounded-lg flex items-center justify-center hover:bg-[#E89820] transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </button>

          {/* Suggestions Dropdown - Mobile */}
          {showSuggestions && suggestions.length > 0 && (
            <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-lg shadow-lg border border-gray-100 z-50 overflow-hidden">
              {suggestions.map((destination) => (
                <button
                  key={destination.id}
                  onClick={() => handleSuggestionClick(destination)}
                  className="w-full px-4 py-3 flex items-center gap-3 hover:bg-gray-50 transition-colors text-left"
                >
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-10 h-10 rounded-lg object-cover"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">{destination.name}</p>
                    <p className="text-xs text-gray-500 truncate">{destination.location}</p>
                  </div>
                  <span className="text-xs px-2 py-1 bg-gray-100 rounded-full text-gray-600 capitalize">
                    {destination.type}
                  </span>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Header - Desktop */}
      <div className="hidden lg:block px-8 pt-8 pb-6 bg-white rounded-2xl mb-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl mt-1">Discover Amazing Places</h1>
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative max-w-4xl">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Find things to do"
            className="w-full pl-12 pr-20 py-4 bg-gray-50 rounded-xl"
            value={searchQuery}
            onChange={handleSearchChange}
            onKeyDown={handleSearchKeyDown}
            onFocus={() => searchQuery.trim() && setShowSuggestions(true)}
          />
          {searchQuery ? (
            <button
              onClick={clearSearch}
              className="absolute right-16 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          ) : null}
          <button
            onClick={() => setShowImageSearch(true)}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-[#FAA935] rounded-lg flex items-center justify-center hover:bg-[#E89820] transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </button>

          {/* Suggestions Dropdown - Desktop */}
          {showSuggestions && suggestions.length > 0 && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-lg border border-gray-100 z-50 overflow-hidden">
              {suggestions.map((destination) => (
                <button
                  key={destination.id}
                  onClick={() => handleSuggestionClick(destination)}
                  className="w-full px-5 py-4 flex items-center gap-4 hover:bg-gray-50 transition-colors text-left"
                >
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-12 h-12 rounded-lg object-cover"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-gray-900 truncate">{destination.name}</p>
                    <p className="text-sm text-gray-500 truncate">{destination.location}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm px-3 py-1 bg-gray-100 rounded-full text-gray-600 capitalize">
                      {destination.type}
                    </span>
                    <span className="text-sm text-[#FAA935] font-medium">★ {destination.rating}</span>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Search Results Section */}
      {isSearching && (
        <div className="px-5 lg:px-8 mb-8">
          <div className="flex items-center justify-between mb-4 lg:mb-6">
            <h2 className="text-lg lg:text-2xl">
              Kết quả tìm kiếm cho "{searchQuery}" ({searchResults.length})
            </h2>
            <button
              onClick={clearSearch}
              className="text-sm lg:text-base text-[#FAA935] hover:text-[#E89820]"
            >
              Xóa tìm kiếm
            </button>
          </div>
          {searchResults.length > 0 ? (
            <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
              {searchResults.map((destination) => (
                <DestinationCard
                  key={destination.id}
                  destination={destination}
                  onClick={() => onDestinationClick(destination)}
                  isFavorite={favorites.includes(destination.id)}
                  onToggleFavorite={() => toggleFavorite(destination.id)}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <p className="text-gray-500">Không tìm thấy kết quả nào</p>
              <p className="text-sm text-gray-400 mt-1">Thử tìm kiếm với từ khóa khác</p>
            </div>
          )}
        </div>
      )}

      {/* Tabs */}
      <div className={`px-5 lg:px-8 mb-6 bg-white lg:bg-transparent ${isSearching ? 'hidden' : ''}`}>
        <div className="flex gap-3 lg:gap-6 pb-2 lg:pb-0 overflow-x-auto scrollbar-hide border-b lg:border-none">
          <button
            onClick={() => setActiveTab('all')}
            className={`pb-2 lg:pb-3 lg:px-6 lg:py-2 lg:rounded-full text-sm whitespace-nowrap shrink-0 transition-colors ${activeTab === 'all'
              ? 'text-[#FAA935] border-b-2 border-[#FAA935] lg:border-0 lg:bg-[#FAA935] lg:text-white'
              : 'text-gray-500 hover:text-gray-700 lg:bg-gray-100'
              }`}
          >
            All
          </button>
          <button
            onClick={() => setActiveTab('location')}
            className={`pb-2 lg:pb-3 lg:px-6 lg:py-2 lg:rounded-full text-sm whitespace-nowrap shrink-0 transition-colors ${activeTab === 'location'
              ? 'text-[#FAA935] border-b-2 border-[#FAA935] lg:border-0 lg:bg-[#FAA935] lg:text-white'
              : 'text-gray-500 hover:text-gray-700 lg:bg-gray-100'
              }`}
          >
            Location
          </button>
          <button
            onClick={() => setActiveTab('hotel')}
            className={`pb-2 lg:pb-3 lg:px-6 lg:py-2 lg:rounded-full text-sm whitespace-nowrap shrink-0 transition-colors ${activeTab === 'hotel'
              ? 'text-[#FAA935] border-b-2 border-[#FAA935] lg:border-0 lg:bg-[#FAA935] lg:text-white'
              : 'text-gray-500 hover:text-gray-700 lg:bg-gray-100'
              }`}
          >
            Hotel
          </button>
          <button
            onClick={() => setActiveTab('cafe')}
            className={`pb-2 lg:pb-3 lg:px-6 lg:py-2 lg:rounded-full text-sm whitespace-nowrap shrink-0 transition-colors ${activeTab === 'cafe'
              ? 'text-[#FAA935] border-b-2 border-[#FAA935] lg:border-0 lg:bg-[#FAA935] lg:text-white'
              : 'text-gray-500 hover:text-gray-700 lg:bg-gray-100'
              }`}
          >
            Cafe
          </button>
          <button
            onClick={() => setActiveTab('adventure')}
            className={`pb-2 lg:pb-3 lg:px-6 lg:py-2 lg:rounded-full text-sm whitespace-nowrap shrink-0 transition-colors ${activeTab === 'adventure'
              ? 'text-[#FAA935] border-b-2 border-[#FAA935] lg:border-0 lg:bg-[#FAA935] lg:text-white'
              : 'text-gray-500 hover:text-gray-700 lg:bg-gray-100'
              }`}
          >
            Adventure
          </button>
          <button
            onClick={() => setActiveTab('restaurant')}
            className={`pb-2 lg:pb-3 lg:px-6 lg:py-2 lg:rounded-full text-sm whitespace-nowrap shrink-0 transition-colors ${activeTab === 'restaurant'
              ? 'text-[#FAA935] border-b-2 border-[#FAA935] lg:border-0 lg:bg-[#FAA935] lg:text-white'
              : 'text-gray-500 hover:text-gray-700 lg:bg-gray-100'
              }`}
          >
            Restaurant
          </button>
        </div>
      </div>

      {/* Popular Section */}
      <div className={`px-5 lg:px-8 mb-8 ${isSearching ? 'hidden' : ''}`}>
        <div className="flex items-center justify-between mb-4 lg:mb-6">
          <h2 className="text-lg lg:text-2xl">
            {activeTab === 'all' ? 'Popular' : activeTab.charAt(0).toUpperCase() + activeTab.slice(1) + 's'}
          </h2>
          <button className="text-sm lg:text-base text-[#FAA935] hover:text-[#E89820]">See all</button>
        </div>
        {filteredDestinations.length > 0 ? (
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
            {filteredDestinations.map((destination) => (
              <DestinationCard
                key={destination.id}
                destination={destination}
                onClick={() => onDestinationClick(destination)}
                isFavorite={favorites.includes(destination.id)}
                onToggleFavorite={() => toggleFavorite(destination.id)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500">Không có địa điểm nào trong danh mục này</p>
          </div>
        )}
      </div>

      {/* Recommended Section */}
      <div className={`px-5 lg:px-8 mb-8 ${isSearching || activeTab !== 'all' ? 'hidden' : ''}`}>
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
      <BottomNav
        currentView="home"
        onFavoritesClick={onFavoritesClick}
        onProfileClick={onProfileClick}
        onChatBotClick={onChatBotClick}
        onLuckyDrawClick={onLuckyDrawClick}
      />

      {/* Image Search Modal */}
      {showImageSearch && (
        <ImageSearchModal
          onClose={() => setShowImageSearch(false)}
          destinations={popularDestinations}
          onDestinationClick={onDestinationClick}
        />
      )}
    </div>
  );
}