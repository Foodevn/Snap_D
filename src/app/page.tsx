"use client";

import React, { useState } from 'react';
import { Header } from '../components/Header';
import { LoginForm } from '../components/LoginForm';
import { Footer } from '../components/Footer';

export default function App() {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header showLogin={showLogin} setShowLogin={setShowLogin} />

      <main className="flex-1 flex items-center justify-center px-4 py-8">
        <div className="w-full max-w-6xl bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-2 gap-0">
            {/* Left side - Hero Image */}
            <div className="relative h-64 md:h-auto">
              <img
                src={"https://hoanghamobile.com/tin-tuc/wp-content/uploads/2024/10/tai-anh-phong-canh-dep-thump.jpg"}
                alt="Travel Adventure"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right side - Login/Register Form */}
            <div className="p-8 md:p-12 flex items-center justify-center">
              <LoginForm showLogin={showLogin} setShowLogin={setShowLogin} />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
