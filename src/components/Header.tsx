import React from 'react';

interface HeaderProps {
  showLogin: boolean;
  setShowLogin: (show: boolean) => void;
}

export function Header({ showLogin, setShowLogin }: HeaderProps) {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="text-orange-500 italic" style={{ fontSize: '24px', fontWeight: 'bold' }}>
              Snap
            </span>
            <span className="text-gray-800" style={{ fontSize: '24px', fontWeight: 'bold' }}>
              -BL
            </span>
            <span className="text-2xl">🏛️</span>
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowLogin(true)}
              className={`px-6 py-2 rounded-full transition-all ${
                showLogin
                  ? 'bg-orange-500 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              Login
            </button>
            <button
              onClick={() => setShowLogin(false)}
              className={`px-6 py-2 rounded-full transition-all ${
                !showLogin
                  ? 'bg-orange-500 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
