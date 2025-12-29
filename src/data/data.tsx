import { Destination } from "../app/app/page";

export const data: Destination[] = [


    // 13) Hotel
    {
        id: 13,
        name: 'MerPerle Dalat Hotel',
        image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/518745978.jpg?k=5262ef05e44dca223430c5f9ccd0b9dfce1f2c793bb1b7f19464f82632b42765&o=',
        rating: 4.6,
        location: '1 Đ. Hùng Vương, Phường 10, Đà Lạt, Lâm Đồng, Việt Nam',
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
                    'https://cf.bstatic.com/xdata/images/hotel/max1024x768/520715189.jpg?k=d2931bf8b6292fcf35ddb1679dccb70086351b9313a3a5b6b0f8b5dc78ce669b&o=',
                    'https://cf.bstatic.com/xdata/images/hotel/max1024x768/520714103.jpg?k=97db88ac31df9dbf8546186523f5c04e10da23c5136b72854c6bd9d10df70c7b&o=',
                    'https://cf.bstatic.com/xdata/images/hotel/max1024x768/520715177.jpg?k=054076481914b0c6aca76831afe53573c03ce4aeddcf5f7b6ee96a625eb0a34d&o=',

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
                images: [
                    "https://cf.bstatic.com/xdata/images/hotel/max1024x768/675410612.jpg?k=cd136d8642d11c5ccda075f5fc86caf49e5e662beb121cad0dcd25f0eb5b3ad5&o=",
                ]
            }
        ]
    },
    // 14) Hotel
    {
        id: 14,
        name: 'Hotel TALADALAT',
        image: 'https://ik.imagekit.io/tvlk/apr-asset/Ixf4aptF5N2Qdfmh4fGGYhTN274kJXuNMkUAzpL5HuD9jzSxIGG5kZNhhHY-p7nw/hotel/asset/20058634-e859865cd4a402f4a50f4ed570229c6d.jpeg?_src=imagekit&tr=dpr-2,c-at_max,f-jpg,h-360,pr-true,q-80,w-640',
        rating: 4.5,
        location: '14 11 Đường Khởi Nghĩa Bắc Sơn, Phường 10, Đà Lạt, Lâm Đồng',
        price: 58,
        type: 'hotel' as const,
        description:
            'Tala Dalat Hotel sở hữu phong cách hiện đại, phòng ốc mới, sạch sẽ và không gian yên tĩnh. Vị trí thuận tiện di chuyển vào trung tâm Đà Lạt.',
        facilities: [
            'WiFi',
            'Breakfast',
            'Parking',
            '24h Reception',
            'Elevator'
        ],
        reviews: [
            {
                id: 1,
                userName: 'Minh Pham',
                userAvatar:
                    'https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=256&q=80',
                rating: 5,
                comment:
                    'Khách sạn mới, phòng đẹp hơn hình. Nhân viên dễ thương và hỗ trợ rất nhanh.',
                date: '2 days ago',
                images: [
                    'https://ik.imagekit.io/tvlk/apr-asset/Ixf4aptF5N2Qdfmh4fGGYhTN274kJXuNMkUAzpL5HuD9jzSxIGG5kZNhhHY-p7nw/hotel/asset/20058634-9fb1a3cf4eb2378bb437a8d8d0ac319b.jpeg?_src=imagekit&tr=dpr-2,c-at_max,f-jpg,h-360,pr-true,q-80,w-640',
                    'https://ik.imagekit.io/tvlk/apr-asset/Ixf4aptF5N2Qdfmh4fGGYhTN274kJXuNMkUAzpL5HuD9jzSxIGG5kZNhhHY-p7nw/hotel/asset/20058634-cec47c00762013997278a64cf990f7f6.jpeg?_src=imagekit&tr=dpr-2,c-at_max,f-jpg,h-360,pr-true,q-80,w-640',
                    'https://ik.imagekit.io/tvlk/apr-asset/Ixf4aptF5N2Qdfmh4fGGYhTN274kJXuNMkUAzpL5HuD9jzSxIGG5kZNhhHY-p7nw/hotel/asset/20058634-3f0f4025be40f58da9d7e27dac78aa29.jpeg?_src=imagekit&tr=dpr-2,c-at_max,f-jpg,h-360,pr-true,q-80,w-640',
                    'https://ik.imagekit.io/tvlk/apr-asset/Ixf4aptF5N2Qdfmh4fGGYhTN274kJXuNMkUAzpL5HuD9jzSxIGG5kZNhhHY-p7nw/hotel/asset/20058634-18d5831020d0bf226881929c5dfe90e3.jpeg?_src=imagekit&tr=dpr-2,c-at_max,f-jpg,h-360,pr-true,q-80,w-640',
                ]
            },
            {
                id: 2,
                userName: 'Linh Nguyen',
                userAvatar:
                    'https://hoanghamobile.com/tin-tuc/wp-content/webp-express/webp-images/uploads/2024/04/anh-con-gai-4.jpg.webp',
                rating: 4,
                comment:
                    'Vị trí yên tĩnh, phòng rộng và sạch. Đi taxi vào chợ Đà Lạt khoảng 7 phút.',
                date: '5 days ago',
                images: [
                    'https://ik.imagekit.io/tvlk/apr-asset/Ixf4aptF5N2Qdfmh4fGGYhTN274kJXuNMkUAzpL5HuD9jzSxIGG5kZNhhHY-p7nw/hotel/asset/20058634-dca47e553f167aceca714130d0ded573.jpeg?_src=imagekit&tr=dpr-2,c-at_max,f-jpg,h-360,pr-true,q-80,w-640'
                ]
            }
        ]
    },
    // 15) Cafe
    {
        id: 15,
        name: 'Hoả Xương Rồng Café',
        image: 'https://hoaxuongrong.vn/uploads/2024/07/quan-ca-phe-hoa-xuong-rong-da-lat-1.jpeg',
        rating: 4.6,
        location: '50 Hùng Vương, Phường 9, Đà Lạt, Lâm Đồng, Việt Nam',
        price: 6,
        type: 'cafe' as const,
        description:
            'Quán cà phê phong cách xương rồng độc đáo, không gian mở nhiều ánh sáng, cực kỳ phù hợp chụp ảnh và thư giãn tại Đà Lạt.',
        facilities: [
            'WiFi',
            'Photo Spot',
            'Outdoor Space',
            'Parking'
        ],
        crowdLevel: [
            { time: '7-9 AM', level: 'low', percentage: 35 },
            { time: '9-11 AM', level: 'medium', percentage: 60 },
            { time: '11-1 PM', level: 'high', percentage: 80 },
            { time: '1-3 PM', level: 'medium', percentage: 55 },
            { time: '3-5 PM', level: 'high', percentage: 85 },
            { time: '5-7 PM', level: 'medium', percentage: 65 }
        ],
        menu: [
            {
                id: 1,
                name: 'Cà phê sữa Đà Lạt',
                description: 'Cà phê rang mộc, vị đậm, sữa béo nhẹ',
                price: 3,
                image:
                    'https://hoaxuongrong.vn/uploads/2024/07/cf-sua-nong2-400x400.JPG',
                category: 'Drinks'
            },
            {
                id: 2,
                name: 'Trà đào cam sả',
                description: 'Vị thanh mát, thơm cam sả',
                price: 4,
                image:
                    'https://hoaxuongrong.vn/uploads/2024/07/tra-dao-nong2-400x400.JPG',
                category: 'Drinks'
            },
            {
                id: 3,
                name: 'Bánh ngọt homemade',
                description: 'Bánh làm trong ngày, ít ngọt',
                price: 4,
                image:
                    'https://hoaxuongrong.vn/uploads/2024/07/tiramisu-400x400.JPG',
                category: 'Desserts'
            }
        ],
        reviews: [
            {
                id: 1,
                userName: 'Trang Le',
                userAvatar:
                    'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=256&q=80',
                rating: 5,
                comment:
                    'Quán rất nhiều góc sống ảo, decor xương rồng nhìn lạ mắt. Đi buổi sáng chụp hình đẹp lắm.',
                date: '3 days ago',
                images: [
                    'https://hoaxuongrong.vn/uploads/2024/07/quan-ca-phe-hoa-xuong-rong-da-lat-2.jpeg',
                    'https://hoaxuongrong.vn/uploads/2024/07/quan-ca-phe-hoa-xuong-rong-da-lat-4.jpeg',
                    'https://hoaxuongrong.vn/uploads/2024/07/quan-ca-phe-hoa-xuong-rong-da-lat-11.jpeg',
                ]
            },
            {
                id: 2,
                userName: 'Nam Nguyen',
                userAvatar:
                    'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=256&q=80',
                rating: 4,
                comment:
                    'Quán đông buổi trưa, nước ổn, giá hợp lý so với view.',
                date: '1 week ago',
                images: [
                    'https://hoaxuongrong.vn/uploads/2024/07/quan-ca-phe-hoa-xuong-rong-da-lat-29.jpeg',
                ]
            }
        ]
    }
    ,

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