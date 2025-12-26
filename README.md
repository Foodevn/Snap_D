Bạn là một senior full-stack developer chuyên về Next.js. Hãy xây dựng ứng dụng web "Snap D" - nền tảng khám phá và đánh giá địa điểm du lịch tại Đà Lạt với các yêu cầu sau:

## TECH STACK
- Framework: Next.js 14+ (App Router)
- Language: TypeScript
- Styling: Tailwind CSS + shadcn/ui
- Database: PostgreSQL với Prisma ORM
- Authentication: NextAuth.js (hỗ trợ Email, Google, Facebook)
- Maps: Google Maps API hoặc Mapbox
- AI Chatbot: OpenAI API hoặc Gemini API
- State Management: Zustand
- Form Validation: React Hook Form + Zod
- Image Upload: Cloudinary hoặc AWS S3
- Real-time: Pusher hoặc Socket.io
- Deployment: Vercel

## CẤU TRÚC DỰ ÁN

### Module 1: Hệ Thống Authentication
- Tạo API routes cho đăng ký/đăng nhập (email, phone, social login)
- Implement 2FA với OTP
- Forgot password flow
- Xác thực sinh viên Đà Lạt qua email domain hoặc mã sinh viên
- Protected routes với middleware
- Session management

### Module 2: Quản Lý User Profile
- Trang profile với khả năng edit (avatar, bio, interests)
- Upload và crop ảnh đại diện
- Thiết lập preferences (ngân sách, ngôn ngữ, địa chỉ)
- Follow/unfollow system
- Messaging system giữa users
- Tạo và tham gia nhóm du lịch

### Module 3: Quản Lý Địa Điểm
Tạo schema Prisma cho Location với các fields:
- Thông tin cơ bản (name, slug, category, description, address, coordinates)
- Giờ mở cửa (JSON structure cho từng ngày)
- Tiện nghi (array of amenities)
- Pricing info, payment methods
- Media (images array, video URL)
- Tags và hashtags
- Accessibility level
- Best time to visit

Tạo CRUD operations:
- API POST /api/locations - Thêm địa điểm mới
- API GET /api/locations - List với pagination, filtering, sorting
- API GET /api/locations/[slug] - Chi tiết địa điểm
- API PATCH /api/locations/[id] - Update thông tin
- API DELETE /api/locations/[id] - Soft delete

Implement features:
- Upload multiple images với preview
- Rich text editor cho description
- Auto-suggest address với Google Places API
- Generate slug tự động từ tên

### Module 4: Đánh Giá & Review System
Schema Review:
- Overall rating (1-5 stars)
- Detail ratings (quality, price, service, ambiance, crowdedness)
- Review text (min 50 chars)
- Photos/videos (max 10)
- Visit timestamp
- Verification status (GPS check-in)

Features:
- Review form với image upload
- Like/comment system trên reviews
- Report spam/fake reviews
- Sort & filter reviews
- Verified review badge
- Review analytics cho location owners

### Module 5: Search & Discovery
Implement advanced search với:
- Full-text search (Algolia hoặc Postgres full-text search)
- Voice search (Web Speech API)
- Filters: category, distance, price range, rating, amenities, opening status
- Sort options: nearest, highest rated, most reviewed, least crowded, newest
- Search suggestions/autocomplete
- Recent searches history

AI-powered recommendations:
- Gợi ý dựa trên location
- Gợi ý theo weather (integrate weather API)
- Gợi ý theo time of day
- Trending locations algorithm
- "Hidden gems" algorithm (high rating, low review count)
- Similar places recommendation

### Module 6: AI Chatbot
Integrate AI chatbot với context về:
- Toàn bộ database locations
- User preferences và search history
- Real-time weather data

Features:
- Text và voice chat interface
- Multi-language support (Vietnamese, English, Korean, Chinese)
- Context-aware conversation
- Auto-generate itinerary:
  * Input: duration, preferences, budget
  * Output: optimized route với time estimates
  * Weather-adaptive adjustments
- Compare locations
- Proactive notifications (closing time alerts, weather alerts, crowd alerts)

### Module 7: Maps & Navigation
- Interactive map với location markers
- Cluster markers khi zoom out
- Color-coded pins theo category
- User location tracking
- Route planning với multiple waypoints
- Time & distance estimation
- Multi-modal transport options
- Integration với Google Maps/Apple Maps cho turn-by-turn navigation
- (Future) AR navigation overlay

### Module 8: Wishlists & Itineraries
- Multiple wishlists per user (Want to go, Been there, My favorites)
- Drag-and-drop itinerary builder
- Timeline view của itinerary
- Map view của planned route
- Add notes to each stop
- Share itineraries với friends
- Export to PDF
- History tracking (searches, viewed locations, check-ins)

### Module 9: Notifications System
Implement 3 types:
1. Push notifications (với service worker)
2. In-app notifications (real-time với Pusher)
3. Email notifications (với Resend hoặc SendGrid)

Notification triggers:
- New locations nearby
- Upcoming events/festivals
- Promotions từ saved locations
- Comment replies
- Location updates
- System announcements
- Weekly digest email

### Module 10: Events & Festivals
Schema Event:
- Name, description, dates (start-end)
- Location, ticketing info
- Schedule, images/videos
- Interested/going counts

Features:
- Mark interested/going
- Event reminders
- Check-in tại event
- Post-event reviews
- Event calendar view
- Filter by date/category

### Module 11: Admin Dashboard
Protected admin routes với role-based access:

User Management:
- User list với search/filter
- View user details
- Ban/unban accounts
- Assign "Trusted Reviewer" badges

Location Management:
- Approve user-submitted locations
- Edit location info
- Handle duplicates
- Update status (temporarily/permanently closed)

Review Moderation:
- Review all reviews
- Handle reported reviews
- Remove spam/fake reviews
- Optional: pre-moderation toggle

Analytics Dashboard:
- User growth charts (Chart.js hoặc Recharts)
- Top locations by views/reviews
- Category breakdowns
- Revenue reports (if monetized)
- Export data to CSV

Content Management:
- Blog CMS
- Banner/ads management
- System announcements
- FAQ management

### Module 12: Gamification
- Point system cho activities (review, check-in, referrals)
- Leaderboard
- Achievement badges (Explorer, Foodie, Nature Lover, etc.)
- Monthly challenges
- Progress tracking

### Module 13: Social Feed
- Activity feed từ followed users
- Create posts với location tags
- Image posts
- Like, comment, share
- Tag friends in posts

### Module 14: Business Features
- Business account registration
- Business dashboard cho location owners
- Self-service location updates
- Voucher/promotion management
- Student discount system
- Analytics cho business owners

## CODE ORGANIZATION

/app
  /(auth)
    /login
    /register
    /forgot-password
  /(main)
    /page.tsx (Homepage with search)
    /explore
    /locations/[slug]
    /search
    /chat
    /profile/[username]
    /wishlists
    /itinerary
    /events
    /feed
  /(admin)
    /dashboard
    /users
    /locations
    /reviews
    /analytics
  /api
    /auth/[...nextauth]
    /locations
    /reviews
    /search
    /chat
    /notifications
    /admin

/components
  /ui (shadcn components)
  /layout (Header, Footer, Sidebar)
  /features (LocationCard, ReviewCard, ChatBot, Map, etc.)

/lib
  /prisma.ts
  /auth.ts
  /utils.ts
  /validators (Zod schemas)

/hooks (custom React hooks)
/types (TypeScript types)
/constants

## BEST PRACTICES
- Server Components mặc định, Client Components khi cần interactivity
- Server Actions cho mutations
- Route Handlers cho external API integrations
- Implement proper error boundaries
- Loading states và Skeleton screens
- Image optimization với next/image
- SEO optimization (metadata, sitemap, robots.txt)
- Accessibility (ARIA labels, keyboard navigation)
- Responsive design (mobile-first)
- Performance optimization (lazy loading, code splitting)
- Security (input sanitization, rate limiting, CSRF protection)
- Proper error handling và user feedback
- i18n support với next-intl
- Dark mode support

## DATABASE SCHEMA (Prisma)
Tạo schemas cho:
- User (with roles, preferences, verification status)
- Location (với relationships)
- Review (với ratings breakdown)
- Comment
- Like
- Wishlist
- Itinerary
- Event
- Notification
- Message
- Group
- Achievement
- Post

Với proper relations, indexes, và constraints.

## DEPLOYMENT CHECKLIST
- Environment variables setup
- Database migrations
- API keys configuration
- Error tracking (Sentry)
- Analytics (Google Analytics hoặc Plausible)
- Performance monitoring
- CI/CD pipeline

Hãy bắt đầu với việc setup project structure, cài đặt dependencies, và implement từng module theo thứ tự priority. Viết code clean, có comments, và follow Next.js 14 best practices.
