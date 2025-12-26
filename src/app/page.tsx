'use client'
import { useState } from 'react'

type Language = 'en' | 'ko' | 'vi'

const translations = {
  en: {
    nav: { features: 'Features', getStarted: 'Get Started' },
    hero: {
      title: 'Responsive Design',
      description: 'Application automatically adjusts interface for all devices - from phones to computers',
      tryNow: 'Try Now',
      learnMore: 'Learn More'
    },
    features: {
      items: [
        { title: 'Mobile First', desc: 'Optimized for mobile devices' },
        { title: 'Desktop Ready', desc: 'Perfect experience on desktop' },
        { title: 'Flexible Layout', desc: 'Flexible Grid and Flexbox' },
        { title: 'Tailwind CSS', desc: 'Powerful responsive utilities' },
        { title: 'Next.js', desc: 'Best performance and SEO' },
        { title: 'Customizable', desc: 'Easy to change and extend' }
      ]
    },
    demo: {
      title: 'Responsive Layout Demo',
      menu: 'Menu',
      menuItems: ['Dashboard', 'Analytics', 'Settings', 'Profile'],
      card: 'Card',
      content: 'Responsive sample content'
    },
    footer: {
      tagline: 'Responsive design for all devices',
      product: 'Product',
      productItems: ['Features', 'Pricing', 'Demo'],
      company: 'Company',
      companyItems: ['About Us', 'Blog', 'Contact'],
      support: 'Support',
      supportItems: ['Documentation', 'Guide', 'FAQ'],
      copyright: '© 2025 Snap-d. All rights reserved.'
    }
  },
  ko: {
    nav: { features: '기능', getStarted: '시작하기' },
    hero: {
      title: '반응형 디자인',
      description: '휴대폰부터 컴퓨터까지 모든 기기에 맞게 자동으로 인터페이스를 조정하는 애플리케이션',
      tryNow: '지금 사용해보기',
      learnMore: '더 알아보기'
    },
    features: {
      items: [
        { title: '모바일 우선', desc: '모바일 기기에 최적화' },
        { title: '데스크톱 지원', desc: '데스크톱에서 완벽한 경험' },
        { title: '유연한 레이아웃', desc: '유연한 그리드 및 플렉스박스' },
        { title: 'Tailwind CSS', desc: '강력한 반응형 유틸리티' },
        { title: 'Next.js', desc: '최고의 성능과 SEO' },
        { title: '맞춤 설정', desc: '쉽게 변경하고 확장' }
      ]
    },
    demo: {
      title: '반응형 레이아웃 데모',
      menu: '메뉴',
      menuItems: ['대시보드', '분석', '설정', '프로필'],
      card: '카드',
      content: '반응형 샘플 콘텐츠'
    },
    footer: {
      tagline: '모든 기기를 위한 반응형 디자인',
      product: '제품',
      productItems: ['기능', '가격', '데모'],
      company: '회사',
      companyItems: ['회사 소개', '블로그', '연락처'],
      support: '지원',
      supportItems: ['문서', '가이드', 'FAQ'],
      copyright: '© 2025 Snap-d. 모든 권리 보유.'
    }
  },
  vi: {
    nav: { features: 'Tính năng', getStarted: 'Bắt đầu' },
    hero: {
      title: 'Thiết kế Responsive',
      description: 'Ứng dụng tự động điều chỉnh giao diện phù hợp với mọi thiết bị - từ điện thoại đến máy tính',
      tryNow: 'Dùng thử ngay',
      learnMore: 'Tìm hiểu thêm'
    },
    features: {
      items: [
        { title: 'Mobile First', desc: 'Tối ưu cho thiết bị di động' },
        { title: 'Desktop Ready', desc: 'Trải nghiệm hoàn hảo trên desktop' },
        { title: 'Flexible Layout', desc: 'Grid và Flexbox linh hoạt' },
        { title: 'Tailwind CSS', desc: 'Responsive utilities mạnh mẽ' },
        { title: 'Next.js', desc: 'Performance và SEO tốt nhất' },
        { title: 'Tùy chỉnh', desc: 'Dễ dàng thay đổi và mở rộng' }
      ]
    },
    demo: {
      title: 'Demo Layout Responsive',
      menu: 'Menu',
      menuItems: ['Dashboard', 'Analytics', 'Settings', 'Profile'],
      card: 'Card',
      content: 'Nội dung mẫu responsive'
    },
    footer: {
      tagline: 'Responsive design cho mọi thiết bị',
      product: 'Sản phẩm',
      productItems: ['Tính năng', 'Giá cả', 'Demo'],
      company: 'Công ty',
      companyItems: ['Về chúng tôi', 'Blog', 'Liên hệ'],
      support: 'Hỗ trợ',
      supportItems: ['Tài liệu', 'Hướng dẫn', 'FAQ'],
      copyright: '© 2025 Snap-d. All rights reserved.'
    }
  }
}

const languageNames = {
  en: 'English',
  ko: '한국어',
  vi: 'Tiếng Việt'
}

export default function Home() {
  const [language, setLanguage] = useState<Language>('vi')
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false)
  const t = translations[language]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header/Navigation - Responsive */}
      <header className="bg-white shadow-sm">
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-indigo-600">
              Snap-d
            </h1>
            <div className="flex gap-2 sm:gap-4 items-center">
              {/* Language Switcher */}
              <div className="relative">
                <button
                  onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                  className="flex items-center gap-2 px-3 py-2 text-sm sm:text-base text-gray-700 hover:text-indigo-600 transition border border-gray-300 rounded-lg hover:border-indigo-600"
                >
                  <span className="hidden sm:inline">{languageNames[language]}</span>
                  <span className="sm:hidden">{language.toUpperCase()}</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {isLangMenuOpen && (
                  <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg py-2 z-50 border border-gray-200">
                    {(Object.keys(languageNames) as Language[]).map((lang) => (
                      <button
                        key={lang}
                        onClick={() => {
                          setLanguage(lang)
                          setIsLangMenuOpen(false)
                        }}
                        className={`w-full text-left px-4 py-2 text-sm hover:bg-indigo-50 transition ${language === lang ? 'bg-indigo-100 text-indigo-600 font-semibold' : 'text-gray-700'
                          }`}
                      >
                        {languageNames[lang]}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <button className="px-3 py-2 sm:px-4 text-sm sm:text-base text-gray-700 hover:text-indigo-600 transition">
                {t.nav.features}
              </button>
              <button className="px-3 py-2 sm:px-4 text-sm sm:text-base bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">
                {t.nav.getStarted}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section - Responsive */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <section className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
            {t.hero.title}
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto mb-6 sm:mb-8 px-4">
            {t.hero.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition text-base sm:text-lg font-semibold">
              {t.hero.tryNow}
            </button>
            <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white text-indigo-600 border-2 border-indigo-600 rounded-lg hover:bg-indigo-50 transition text-base sm:text-lg font-semibold">
              {t.hero.learnMore}
            </button>
          </div>
        </section>

        {/* Features Grid - Responsive */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-12">
          {[
            { icon: '📱' },
            { icon: '💻' },
            { icon: '📊' },
            { icon: '🎨' },
            { icon: '⚡' },
            { icon: '🔧' },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 sm:p-8 rounded-xl shadow-md hover:shadow-lg transition transform hover:-translate-y-1"
            >
              <div className="text-4xl sm:text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                {t.features.items[index].title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600">{t.features.items[index].desc}</p>
            </div>
          ))}
        </section>

        {/* Demo Section - Responsive Layout */}
        <section className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 lg:p-12">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">
            {t.demo.title}
          </h3>
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
            {/* Sidebar - Full width on mobile, side column on desktop */}
            <aside className="w-full lg:w-64 bg-indigo-50 p-4 sm:p-6 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-4">{t.demo.menu}</h4>
              <ul className="space-y-2">
                {t.demo.menuItems.map((item) => (
                  <li key={item} className="text-gray-700 hover:text-indigo-600 cursor-pointer transition">
                    {item}
                  </li>
                ))}
              </ul>
            </aside>

            {/* Main Content */}
            <div className="flex-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[1, 2, 3, 4].map((item) => (
                  <div key={item} className="bg-gradient-to-br from-indigo-100 to-purple-100 p-6 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">{t.demo.card} {item}</h5>
                    <p className="text-sm text-gray-600">{t.demo.content}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer - Responsive */}
      <footer className="bg-gray-900 text-white mt-12 sm:mt-16 lg:mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div>
              <h4 className="font-bold text-lg mb-3">Snap-d</h4>
              <p className="text-sm text-gray-400">{t.footer.tagline}</p>
            </div>
            <div>
              <h5 className="font-semibold mb-3">{t.footer.product}</h5>
              <ul className="space-y-2 text-sm text-gray-400">
                {t.footer.productItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-3">{t.footer.company}</h5>
              <ul className="space-y-2 text-sm text-gray-400">
                {t.footer.companyItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-3">{t.footer.support}</h5>
              <ul className="space-y-2 text-sm text-gray-400">
                {t.footer.supportItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            {t.footer.copyright}
          </div>
        </div>
      </footer>
    </div>
  );
}
