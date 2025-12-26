export interface Location {
    id: string;
    name: string;
    slug: string;
    category: string;
    description: string;
    address: string;
    coordinates: {
        lat: number;
        lng: number;
    };
    images: string[];
    rating: number;
    reviewCount: number;
    priceRange: string;
    openingHours: string;
    amenities: string[];
    tags: string[];
    bestTimeToVisit: string;
    menu?: {
        name: string;
        price: string;
        description?: string;
        image?: string;
    }[];
    stats?: {
        views: number;
        saved: number;
        checkins: number;
    };
}

export interface Review {
    id: string;
    locationId: string;
    userName: string;
    userAvatar: string;
    rating: number;
    detailRatings: {
        quality: number;
        price: number;
        service: number;
        ambiance: number;
    };
    text: string;
    images: string[];
    visitDate: string;
    verified: boolean;
    likes: number;
}

export const mockLocations: Location[] = [
    {
        id: "1",
        name: "Hồ Xuân Hương",
        slug: "ho-xuan-huong",
        category: "Hồ & Suối",
        description: "Hồ Xuân Hương là một hồ nước ngọt nằm ở trung tâm thành phố Đà Lạt. Với diện tích khoảng 25 héc-ta, hồ có hình dáng như chiếc lá lương, được bao quanh bởi những con đường hoa phượng tím lãng mạn. Đây là địa điểm lý tưởng cho các hoạt động như đạp vịt, câu cá, và đi dạo ngắm cảnh.",
        address: "Trần Quốc Toản, Phường 3, Đà Lạt",
        coordinates: { lat: 11.9404, lng: 108.4383 },
        images: [
            "https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=800",
            "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
            "https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=800"
        ],
        rating: 4.7,
        reviewCount: 1243,
        priceRange: "Miễn phí",
        openingHours: "24/7",
        amenities: ["Bãi đậu xe", "Thuê vịt đạp", "Quán cafe", "Chụp ảnh"],
        tags: ["Hồ nước", "Romantic", "Phong cảnh đẹp", "Chụp ảnh"],
        bestTimeToVisit: "Sáng sớm (6h-8h) hoặc chiều tối (16h-18h)",
        stats: {
            views: 15420,
            saved: 892,
            checkins: 3456
        }
    },
    {
        id: "2",
        name: "Quán Cafe Mê Linh",
        slug: "cafe-me-linh",
        category: "Cafe & Đồ Uống",
        description: "Quán cafe view đẹp nhất nhì Đà Lạt với không gian vintage, nằm trên đồi có tầm nhìn ra toàn cảnh thành phố. Được yêu thích bởi không gian yên tĩnh, nhạc acoustic hay và các món đồ uống ngon. Phù hợp để làm việc, đọc sách hoặc hẹn hò.",
        address: "01 Cao Bá Quát, Phường 7, Đà Lạt",
        coordinates: { lat: 11.9374, lng: 108.4425 },
        images: [
            "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800",
            "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800",
            "https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=800"
        ],
        rating: 4.8,
        reviewCount: 892,
        priceRange: "50.000đ - 150.000đ",
        openingHours: "7:00 - 23:00",
        amenities: ["WiFi miễn phí", "Bãi đậu xe", "View đẹp", "Acoustic live"],
        tags: ["Cafe", "View đẹp", "Yên tĩnh", "Instagram-worthy"],
        bestTimeToVisit: "Chiều tối (17h-20h) để ngắm hoàng hôn",
        menu: [
            { name: "Cà phê đen", price: "35.000đ", description: "Cà phê robusta nguyên chất Đà Lạt", image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400" },
            { name: "Bạc xỉu", price: "40.000đ", description: "Cà phê sữa đặc truyền thống", image: "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=400" },
            { name: "Cappuccino", price: "50.000đ", description: "Espresso với sữa tươi và foam", image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400" },
            { name: "Latte", price: "50.000đ", description: "Espresso với nhiều sữa tươi", image: "https://images.unsplash.com/photo-1561882468-9110e03e0f78?w=400" },
            { name: "Trà sữa trân châu", price: "45.000đ", description: "Trà sữa Đài Loan với trân châu đen", image: "https://images.unsplash.com/photo-1525385133512-2f3bdd039054?w=400" },
            { name: "Sinh tố bơ", price: "55.000đ", description: "Bơ Đà Lạt tươi xay", image: "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?w=400" },
            { name: "Bánh mì que", price: "25.000đ", description: "Bánh mì que giòn", image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400" },
            { name: "Bánh flan", price: "30.000đ", description: "Bánh flan caramel", image: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=400" }
        ],
        stats: {
            views: 23456,
            saved: 1567,
            checkins: 2890
        }
    },
    {
        id: "3",
        name: "Chợ Đà Lạt",
        slug: "cho-da-lat",
        category: "Mua Sắm",
        description: "Chợ Đà Lạt là trung tâm mua sắm lớn nhất thành phố, nơi bán đủ loại đặc sản như dâu tây, atiso, mứt, rượu vang... Chợ có 3 tầng với hàng trăm quầy hàng. Đây cũng là nơi tuyệt vời để khám phá văn hóa ẩm thực địa phương với nhiều món ăn vặt ngon.",
        address: "Nguyễn Thị Minh Khai, Phường 1, Đà Lạt",
        coordinates: { lat: 11.9430, lng: 108.4378 },
        images: [
            "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800",
            "https://images.unsplash.com/photo-1542838132-92c53300491e?w=800",
            "https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=800"
        ],
        rating: 4.3,
        reviewCount: 2156,
        priceRange: "Từ 10.000đ",
        openingHours: "6:00 - 19:00",
        amenities: ["Bãi đậu xe", "Nhiều quầy ăn", "ATM", "Toilet"],
        tags: ["Chợ", "Đặc sản", "Mua sắm", "Ẩm thực"],
        bestTimeToVisit: "Sáng sớm (6h-9h) khi hàng hóa còn tươi"
    },
    {
        id: "4",
        name: "Thác Datanla",
        slug: "thac-datanla",
        category: "Thác Nước & Thiên Nhiên",
        description: "Thác Datanla nằm trong khu rừng thông xanh mát, cách trung tâm Đà Lạt khoảng 5km. Thác có chiều cao 20m với nhiều tầng. Du khách có thể trải nghiệm trượt ống trên đường ray hoặc đi bộ xuống thác qua cầu thang gỗ. Khu vực xung quanh có nhiều hoạt động mạo hiểm.",
        address: "Đèo Prenn, Phường 3, Đà Lạt",
        coordinates: { lat: 11.9125, lng: 108.4570 },
        images: [
            "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=800",
            "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800",
            "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800"
        ],
        rating: 4.5,
        reviewCount: 678,
        priceRange: "50.000đ - 200.000đ (vé vào + hoạt động)",
        openingHours: "7:00 - 17:00",
        amenities: ["Bãi đậu xe", "Nhà hàng", "Trượt ống", "Cầu đu dây"],
        tags: ["Thác nước", "Mạo hiểm", "Gia đình", "Thiên nhiên"],
        bestTimeToVisit: "Mùa mưa (tháng 5-10) khi thác đẹp nhất"
    },
    {
        id: "5",
        name: "Nhà Thờ Con Gà",
        slug: "nha-tho-con-ga",
        category: "Kiến Trúc & Lịch Sử",
        description: "Nhà thờ Con Gà (tên chính thức là Nhà thờ Thánh Nicolas) là biểu tượng kiến trúc nổi tiếng của Đà Lạt. Được xây dựng năm 1931 theo phong cách Gothic với tháp chuông cao 47m. Nội thất có nhiều cửa kính màu đẹp mắt. Đây là địa điểm chụp ảnh được yêu thích.",
        address: "Trần Phú, Phường 3, Đà Lạt",
        coordinates: { lat: 11.9416, lng: 108.4419 },
        images: [
            "https://images.unsplash.com/photo-1477414956199-7dafc86a4f1a?w=800",
            "https://images.unsplash.com/photo-1548625361-6eea05ae2c3b?w=800",
            "https://images.unsplash.com/photo-1519817914152-22d216bb9170?w=800"
        ],
        rating: 4.6,
        reviewCount: 1534,
        priceRange: "Miễn phí",
        openingHours: "7:00 - 11:30, 14:00 - 17:00",
        amenities: ["Bãi đậu xe", "Hướng dẫn viên", "Chụp ảnh"],
        tags: ["Nhà thờ", "Kiến trúc Pháp", "Lịch sử", "Chụp ảnh"],
        bestTimeToVisit: "Sáng sớm (7h-9h) hoặc chiều tối khi thắp đèn"
    },
    {
        id: "6",
        name: "Quán Lẩu Gà Lá É",
        slug: "lau-ga-la-e",
        category: "Ẩm Thực",
        description: "Món lẩu gà lá é đặc sản Đà Lạt với nước dùng từ lá é (lá chanh) có vị chua nhẹ, thơm ngon. Gà được ninh nhừ, kèm theo rau rừng đặc trưng vùng núi. Quán ăn gia đình với không gian ấm cúng, giá cả hợp lý. Rất đông khách vào cuối tuần.",
        address: "49 Phan Đình Phùng, Phường 2, Đà Lạt",
        coordinates: { lat: 11.9436, lng: 108.4395 },
        images: [
            "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800",
            "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800",
            "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=800"
        ],
        rating: 4.7,
        reviewCount: 945,
        priceRange: "150.000đ - 300.000đ/người",
        openingHours: "10:00 - 22:00",
        amenities: ["Bãi đậu xe", "Phục vụ nhóm", "Đặt bàn trước"],
        tags: ["Lẩu", "Đặc sản", "Gà lá é", "Ẩm thực địa phương"],
        bestTimeToVisit: "Tối (18h-20h) nên đặt bàn trước"
    },
    {
        id: "7",
        name: "Vườn Hoa Thành Phố",
        slug: "vuon-hoa-thanh-pho",
        category: "Công Viên & Vườn",
        description: "Vườn Hoa Thành Phố (hay Vườn Hoa Đà Lạt) rộng 7.000m2 với hơn 300 loài hoa khác nhau. Được thiết kế theo phong cách vườn Châu Âu với nhiều tiểu cảnh đẹp. Có Festival Hoa vào mùa Tết. Phù hợp cho gia đình và người yêu thích nhiếp ảnh.",
        address: "02 Trần Quốc Toản, Phường 1, Đà Lạt",
        coordinates: { lat: 11.9391, lng: 108.4364 },
        images: [
            "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=800",
            "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=800",
            "https://images.unsplash.com/photo-1464146072230-91cabc968266?w=800"
        ],
        rating: 4.4,
        reviewCount: 1089,
        priceRange: "30.000đ - 50.000đ",
        openingHours: "7:30 - 16:00",
        amenities: ["Bãi đậu xe", "Chụp ảnh", "Quầy hoa", "Cafe"],
        tags: ["Vườn hoa", "Gia đình", "Chụp ảnh", "Hoa"],
        bestTimeToVisit: "Mùa Festival Hoa (Tết Nguyên Đán)"
    },
    {
        id: "8",
        name: "Làng Cù Lần",
        slug: "lang-cu-lan",
        category: "Làng Văn Hóa",
        description: "Làng Cù Lần là ngôi làng của người dân tộc Cơ Ho, nằm cách trung tâm Đà Lạt khoảng 17km. Du khách có thể tìm hiểu văn hóa dân tộc thiểu số, thưởng thức cơm lam, gà nướng, và tham gia các hoạt động truyền thống như múa sạp, đánh cồng chiêng.",
        address: "Lạc Dương, Lâm Đồng (17km từ trung tâm)",
        coordinates: { lat: 11.9820, lng: 108.4103 },
        images: [
            "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?w=800",
            "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800",
            "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800"
        ],
        rating: 4.2,
        reviewCount: 387,
        priceRange: "100.000đ - 200.000đ (bao gồm ăn uống)",
        openingHours: "8:00 - 17:00",
        amenities: ["Bãi đậu xe", "Hướng dẫn viên", "Nhà hàng", "Biểu diễn"],
        tags: ["Văn hóa", "Dân tộc thiểu số", "Trải nghiệm", "Thiên nhiên"],
        bestTimeToVisit: "Cuối tuần khi có biểu diễn văn nghệ"
    }
];

export const mockReviews: Review[] = [
    {
        id: "r1",
        locationId: "1",
        userName: "Nguyễn Minh Anh",
        userAvatar: "https://i.pravatar.cc/150?u=user1",
        rating: 5,
        detailRatings: {
            quality: 5,
            price: 5,
            service: 4,
            ambiance: 5
        },
        text: "Hồ Xuân Hương thật sự rất đẹp, đặc biệt là vào buổi sáng sớm. Không khí trong lành, yên tĩnh. Mình đã đạp vịt quanh hồ và cảm thấy rất thư giãn. Recommend mọi người nên đến sớm để tránh đông người!",
        images: [
            "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400",
            "https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=400"
        ],
        visitDate: "2024-12-15",
        verified: true,
        likes: 24
    },
    {
        id: "r2",
        locationId: "1",
        userName: "Trần Đức Huy",
        userAvatar: "https://i.pravatar.cc/150?u=user2",
        rating: 4,
        detailRatings: {
            quality: 4,
            price: 5,
            service: 4,
            ambiance: 4
        },
        text: "Địa điểm miễn phí và đẹp ngay trung tâm thành phố. Tuy nhiên vào cuối tuần khá đông người. Xung quanh có nhiều quán cafe để ngồi ngắm hồ. Phù hợp cho các cặp đôi đi dạo buổi tối.",
        images: [],
        visitDate: "2024-12-10",
        verified: false,
        likes: 12
    },
    {
        id: "r3",
        locationId: "2",
        userName: "Lê Thu Hà",
        userAvatar: "https://i.pravatar.cc/150?u=user3",
        rating: 5,
        detailRatings: {
            quality: 5,
            price: 4,
            service: 5,
            ambiance: 5
        },
        text: "Quán cafe có view tuyệt vời nhất từng đến ở Đà Lạt! Nhân viên thân thiện, đồ uống ngon, không gian vintage cực kỳ hợp để chụp ảnh. Giá hơi cao một chút nhưng xứng đáng với không gian và view.",
        images: [
            "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=400"
        ],
        visitDate: "2024-12-18",
        verified: true,
        likes: 45
    }
];

export const categories = [
    { id: "all", name: "Tất cả", icon: "Sparkles" },
    { id: "ho-suoi", name: "Hồ & Suối", icon: "Droplet" },
    { id: "cafe", name: "Cafe & Đồ Uống", icon: "Coffee" },
    { id: "mua-sam", name: "Mua Sắm", icon: "ShoppingBag" },
    { id: "thac-nuoc", name: "Thác Nước", icon: "Waves" },
    { id: "kien-truc", name: "Kiến Trúc", icon: "Building" },
    { id: "am-thuc", name: "Ẩm Thực", icon: "UtensilsCrossed" },
    { id: "vuon-hoa", name: "Vườn Hoa", icon: "Flower" },
    { id: "van-hoa", name: "Văn Hóa", icon: "Users" }
];
