import React from 'react';
import { LoginForm } from '../components/LoginForm';

interface LoginPageProps {
  showLogin: boolean;
  setShowLogin: (show: boolean) => void;
}

export function LoginPage({ showLogin, setShowLogin }: LoginPageProps) {
  return (
    <div className="flex items-center justify-center px-4 py-6 sm:py-8 min-h-[calc(100vh-200px)]">
      <div className="w-full max-w-6xl bg-white rounded-2xl sm:rounded-3xl shadow-xl overflow-hidden">
        <div className="grid md:grid-cols-2 gap-0">
          {/* Left side - Hero Image */}
          <div className="relative h-48 sm:h-64 md:h-auto">
            <img 
              src="https://hoanghamobile.com/tin-tuc/wp-content/uploads/2024/10/tai-anh-phong-canh-dep-thump.jpg" 
              alt="Travel Adventure" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right side - Login/Register Form */}
          <div className="p-6 sm:p-8 md:p-12 flex items-center justify-center">
            <LoginForm showLogin={showLogin} setShowLogin={setShowLogin} />
          </div>
        </div>
      </div>
    </div>
  );
}