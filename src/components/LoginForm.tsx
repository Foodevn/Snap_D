import React, { useState } from 'react';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';

interface LoginFormProps {
  showLogin: boolean;
  setShowLogin: (show: boolean) => void;
}

export function LoginForm({ showLogin, setShowLogin }: LoginFormProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (showLogin) {
      window.location.href = '/app';
      console.log('Login:', { email, password });
    } else {
      console.log('Register:', { username, email, password });
    }
  };

  return (
    <div className="w-full max-w-md">
      {/* Welcome Header */}
      <div className="text-center mb-6 sm:mb-8 relative">
        <div className="inline-block relative">
          <h1 className="text-orange-500 text-4xl sm:text-5xl md:text-6xl">
            Welcome
          </h1>
          <span className="absolute -top-2 -right-6 sm:-right-8 text-orange-400 text-2xl sm:text-3xl">⭐</span>
        </div>
        <p className="text-gray-600 mt-2 text-sm sm:text-base">
          {showLogin ? 'Login with Email' : 'Create your account'}
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {!showLogin && (
          <div className="relative">
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter Username"
              className="w-full px-4 py-3 border-2 border-orange-300 rounded-lg focus:outline-none focus:border-orange-500 transition-colors"
              required
            />
          </div>
        )}

        <div className="relative">
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Email or Username"
            className="w-full px-4 py-3 border-2 border-orange-300 rounded-lg focus:outline-none focus:border-orange-500 transition-colors"
            required
          />
        </div>

        <div className="relative">
          <input
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Password"
            className="w-full px-4 py-3 pr-12 border-2 border-orange-300 rounded-lg focus:outline-none focus:border-orange-500 transition-colors"
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>

        {!showLogin && (
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm Password"
              className="w-full px-4 py-3 border-2 border-orange-300 rounded-lg focus:outline-none focus:border-orange-500 transition-colors"
              required
            />
          </div>
        )}

        {showLogin && (
          <div className="text-right">
            <a href="#" className="text-orange-500 text-sm hover:underline">
              Forget your password?
            </a>
          </div>
        )}

        <button
          type="submit"
          className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition-colors"
        >
          {showLogin ? 'LOGIN' : 'REGISTER'}
        </button>

        {/* Divider */}
        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-4 bg-white text-orange-500">OR</span>
          </div>
        </div>

        {/* Social Login Buttons */}
        <div className="flex justify-center gap-4">
          <button
            type="button"
            className="w-12 h-12 border-2 border-gray-300 rounded-lg flex items-center justify-center hover:border-orange-500 transition-colors"
            aria-label="Login with Google"
          >
            <svg viewBox="0 0 24 24" className="w-6 h-6">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
          </button>

          <button
            type="button"
            className="w-12 h-12 border-2 border-gray-300 rounded-lg flex items-center justify-center hover:border-orange-500 transition-colors"
            aria-label="Login with Facebook"
          >
            <svg viewBox="0 0 24 24" className="w-6 h-6">
              <path
                fill="#1877F2"
                d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
              />
            </svg>
          </button>

          <button
            type="button"
            className="w-12 h-12 border-2 border-gray-300 rounded-lg flex items-center justify-center hover:border-orange-500 transition-colors"
            aria-label="Login with Apple"
          >
            <svg viewBox="0 0 24 24" className="w-6 h-6">
              <path
                d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"
              />
            </svg>
          </button>
        </div>

        {/* Register/Login Link */}
        <div className="text-center mt-6">
          <span className="text-gray-600">
            {showLogin ? "Don't have account? " : 'Already have an account? '}
          </span>
          <button
            type="button"
            onClick={() => setShowLogin(!showLogin)}
            className="text-orange-500 hover:underline"
          >
            {showLogin ? 'Register Now' : 'Login Now'}
          </button>
        </div>
      </form>
    </div>
  );
}