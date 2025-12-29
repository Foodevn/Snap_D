import React from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  showLogin: boolean;
  setShowLogin: (show: boolean) => void;
  currentPage: string;
  setCurrentPage: (page: any) => void;
}

export function Header({ showLogin, setShowLogin, currentPage, setCurrentPage }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const navItems = [
    { label: 'Home', value: 'home' },
    { label: 'About', value: 'about' },
    { label: 'Tours', value: 'tours' },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src="./logo-snap-d.png" alt="logo" className='w-40' />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.value}
                onClick={() => setCurrentPage(item.value)}
                className={`transition-colors ${currentPage === item.value
                  ? 'text-orange-500'
                  : 'text-gray-700 hover:text-orange-500'
                  }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => {
                setShowLogin(true);
                setCurrentPage('login');
              }}
              className="px-6 py-2 text-gray-700 hover:text-orange-500 transition-colors"
            >
              Login
            </button>
            <button
              onClick={() => {
                setShowLogin(false);
                setCurrentPage('login');
              }}
              className="px-6 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors"
            >
              Register
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-700 hover:text-orange-500"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-gray-200">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <button
                  key={item.value}
                  onClick={() => {
                    setCurrentPage(item.value);
                    setMobileMenuOpen(false);
                  }}
                  className={`text-left px-4 py-2 transition-colors ${currentPage === item.value
                    ? 'text-orange-500 bg-orange-50'
                    : 'text-gray-700 hover:text-orange-500 hover:bg-gray-50'
                    }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="flex flex-col gap-2 px-4 py-2">
                <button
                  onClick={() => {
                    setShowLogin(true);
                    setCurrentPage('login');
                    setMobileMenuOpen(false);
                  }}
                  className="w-full px-6 py-2 text-gray-700 border border-gray-300 rounded-full hover:border-orange-500 hover:text-orange-500 transition-colors"
                >
                  Login
                </button>
                <button
                  onClick={() => {
                    setShowLogin(false);
                    setCurrentPage('login');
                    setMobileMenuOpen(false);
                  }}
                  className="w-full px-6 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors"
                >
                  Register
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}