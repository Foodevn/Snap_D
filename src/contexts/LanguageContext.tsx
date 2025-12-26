"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Locale, getTranslations } from '@/src/lib/i18n';

interface LanguageContextType {
    locale: Locale;
    setLocale: (locale: Locale) => void;
    t: ReturnType<typeof getTranslations>;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [locale, setLocaleState] = useState<Locale>('vi');
    const [t, setT] = useState(getTranslations('vi'));

    useEffect(() => {
        // Load saved language from localStorage
        const savedLocale = localStorage.getItem('locale') as Locale;
        if (savedLocale && ['vi', 'en', 'ko'].includes(savedLocale)) {
            setLocaleState(savedLocale);
            setT(getTranslations(savedLocale));
        }
    }, []);

    const setLocale = (newLocale: Locale) => {
        setLocaleState(newLocale);
        setT(getTranslations(newLocale));
        localStorage.setItem('locale', newLocale);
    };

    return (
        <LanguageContext.Provider value={{ locale, setLocale, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}
