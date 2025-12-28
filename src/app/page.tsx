"use client"
import React, { useState } from 'react';
import { LoginPage } from '../pages/LoginPage';
import { ToursPage } from '../pages/ToursPage';
import { HomePage } from '../pages/HomePage';
import { AboutPage } from '../pages/AboutPage';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

type Page = 'login' | 'tours' | 'home' | 'about';

export default function App() {
    const [showLogin, setShowLogin] = useState(true);
    const [currentPage, setCurrentPage] = useState<Page>('home');

    const renderPage = () => {
        switch (currentPage) {
            case 'home':
                return <HomePage />;
            case 'tours':
                return <ToursPage />;
            case 'about':
                return <AboutPage />;
            case 'login':
                return <LoginPage showLogin={showLogin} setShowLogin={setShowLogin} />;
            default:
                return <HomePage />;
        }
    };

    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            <Header
                showLogin={showLogin}
                setShowLogin={setShowLogin}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />

            <main className="flex-1">
                {renderPage()}
            </main>

            <Footer />
        </div>
    );
}