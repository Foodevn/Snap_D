import { ArrowLeft, Heart } from 'lucide-react';
import { Destination } from '../app/page';
import { BottomNav } from './BottomNav';

interface FavoritesProps {
  favorites: number[];
  onDestinationClick: (destination: Destination) => void;
  toggleFavorite: (id: number) => void;
  onBackToHome: () => void;
  onProfileClick: () => void;
  onChatBotClick: () => void;
  onLuckyDrawClick: () => void;
}

export function Favorites({ favorites, onDestinationClick, toggleFavorite, onBackToHome, onProfileClick, onChatBotClick, onLuckyDrawClick }: FavoritesProps) {
  // All destinations data
  const allDestinations: Destination[] = [
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

  const favoriteDestinations = allDestinations.filter(dest => favorites.includes(dest.id));

  return (
    <div className="max-w-7xl mx-auto bg-white lg:bg-transparent min-h-screen pb-20 lg:pb-8">
      {/* Header */}
      <div className="px-5 lg:px-8 pt-6 lg:pt-8 pb-6 bg-white lg:bg-transparent">
        <div className="flex items-center gap-4 mb-6">
          <button
            onClick={onBackToHome}
            className="lg:hidden w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div className="flex-1">
            <h1 className="text-2xl lg:text-3xl">My Favorites</h1>
            <p className="text-sm lg:text-base text-gray-600 mt-1">
              {favoriteDestinations.length} {favoriteDestinations.length === 1 ? 'place' : 'places'} saved
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="px-5 lg:px-8">
        {favoriteDestinations.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 lg:py-24">
            <div className="w-24 h-24 lg:w-32 lg:h-32 bg-gray-100 rounded-full flex items-center justify-center mb-6">
              <Heart className="w-12 h-12 lg:w-16 lg:h-16 text-gray-300" />
            </div>
            <h2 className="text-xl lg:text-2xl mb-2">No favorites yet</h2>
            <p className="text-gray-600 text-center mb-6 max-w-sm">
              Start exploring and save your favorite places by tapping the heart icon
            </p>
            <button
              onClick={onBackToHome}
              className="bg-[#FAA935] text-white px-6 py-3 rounded-xl hover:bg-[#E89820] transition-colors"
            >
              Explore Places
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
            {favoriteDestinations.map((destination) => (
              <div
                key={destination.id}
                className="relative rounded-2xl overflow-hidden cursor-pointer group bg-white shadow-sm hover:shadow-lg transition-shadow"
              >
                <div onClick={() => onDestinationClick(destination)}>
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-48 lg:h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <div className="flex items-center gap-1 mb-1">
                      <span className="text-xs lg:text-sm">⭐ {destination.rating}</span>
                    </div>
                    <h3 className="text-sm lg:text-base mb-1">{destination.name}</h3>
                    <p className="text-xs lg:text-sm text-gray-200">{destination.location}</p>
                    {/* <p className="text-sm lg:text-base text-green-400 mt-2">${destination.price}/night</p> */}
                  </div>
                </div>

                {/* Remove from Favorites Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleFavorite(destination.id);
                  }}
                  className="absolute top-3 right-3 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-all hover:scale-110 z-10"
                >
                  <Heart className="w-5 h-5 fill-red-500 text-red-500" />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Bottom Navigation - Mobile Only */}
      <BottomNav
        currentView="favorites"
        onHomeClick={onBackToHome}
        onProfileClick={onProfileClick}
        onChatBotClick={onChatBotClick}
        onLuckyDrawClick={onLuckyDrawClick}
      />
    </div>
  );
}