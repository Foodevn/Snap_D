"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { Search, MapPin, Heart, User, Menu, X, Languages } from "lucide-react";
import { Input } from "@/src/components/ui/input";
import { Button } from "@/src/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
    DropdownMenuSeparator,
} from "@/src/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/src/components/ui/avatar";
import { Card, CardContent } from "@/src/components/ui/card";
import { mockLocations } from "@/src/lib/mock-data";
import { useLanguage } from "@/src/contexts/LanguageContext";
import { Locale } from "@/src/lib/i18n";

export function Header() {
    const router = useRouter();
    const { locale, setLocale, t } = useLanguage();
    const [searchQuery, setSearchQuery] = useState("");
    const [showSuggestions, setShowSuggestions] = useState(false);
    const searchRef = useRef<HTMLDivElement>(null);

    // Filter suggestions based on search query
    const suggestions = searchQuery.length > 0
        ? mockLocations
            .filter((loc) =>
                loc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                loc.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
                loc.address.toLowerCase().includes(searchQuery.toLowerCase())
            )
            .slice(0, 5)
        : [];

    // Handle search submit
    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            router.push(`/explore?search=${encodeURIComponent(searchQuery)}`);
            setShowSuggestions(false);
            setSearchQuery("");
        }
    };

    // Close suggestions when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
                setShowSuggestions(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
            <div className="container flex h-16 items-center justify-between px-4">
                {/* Logo */}
                <Link href="/" className="flex items-center space-x-2">
                    <MapPin className="h-6 w-6 text-blue-600" />
                    <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        Snap D
                    </span>
                </Link>

                {/* Search Bar - Hidden on mobile */}
                <div className="hidden md:flex flex-1 max-w-2xl mx-8" ref={searchRef}>
                    <form onSubmit={handleSearch} className="relative w-full">
                        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                        <Input
                            value={searchQuery}
                            onChange={(e) => {
                                setSearchQuery(e.target.value);
                                setShowSuggestions(true);
                            }}
                            onFocus={() => setShowSuggestions(true)}
                            placeholder={t.search.placeholder}
                            className="w-full pl-10 pr-10"
                        />
                        {searchQuery && (
                            <button
                                type="button"
                                onClick={() => {
                                    setSearchQuery("");
                                    setShowSuggestions(false);
                                }}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                            >
                                <X className="h-4 w-4" />
                            </button>
                        )}

                        {/* Search Suggestions Dropdown */}
                        {showSuggestions && suggestions.length > 0 && (
                            <Card className="absolute top-full mt-2 w-full shadow-lg">
                                <CardContent className="p-2">
                                    {suggestions.map((location) => (
                                        <Link
                                            key={location.id}
                                            href={`/locations/${location.slug}`}
                                            onClick={() => {
                                                setShowSuggestions(false);
                                                setSearchQuery("");
                                            }}
                                            className="flex items-center gap-3 p-3 hover:bg-gray-100 rounded-lg transition-colors"
                                        >
                                            <MapPin className="h-4 w-4 text-blue-600 flex-shrink-0" />
                                            <div className="flex-1 min-w-0">
                                                <div className="font-medium text-sm truncate">
                                                    {location.name}
                                                </div>
                                                <div className="text-xs text-muted-foreground truncate">
                                                    {location.category} • {location.address}
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                                </CardContent>
                            </Card>
                        )}
                    </form>
                </div>

                {/* Navigation */}
                <nav className="flex items-center space-x-4">
                    <Button variant="ghost" asChild className="hidden md:flex">
                        <Link href="/explore">
                            {t.nav.explore}
                        </Link>
                    </Button>

                    <Button variant="ghost" size="icon" asChild>
                        <Link href="/wishlists">
                            <Heart className="h-5 w-5" />
                        </Link>
                    </Button>

                    {/* Language Switcher */}
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                                <Languages className="h-5 w-5" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-48">
                            <DropdownMenuItem
                                onClick={() => setLocale("vi")}
                                className={locale === "vi" ? "bg-gray-100" : ""}
                            >
                                🇻🇳 Tiếng Việt
                            </DropdownMenuItem>
                            <DropdownMenuItem
                                onClick={() => setLocale("en")}
                                className={locale === "en" ? "bg-gray-100" : ""}
                            >
                                🇬🇧 English
                            </DropdownMenuItem>
                            <DropdownMenuItem
                                onClick={() => setLocale("ko")}
                                className={locale === "ko" ? "bg-gray-100" : ""}
                            >
                                🇰🇷 한국어
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>

                    {/* User Menu */}
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="relative h-9 w-9 rounded-full">
                                <Avatar className="h-9 w-9">
                                    <AvatarImage src="https://i.pravatar.cc/150?u=demo" alt="User" />
                                    <AvatarFallback>U</AvatarFallback>
                                </Avatar>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-56">
                            <DropdownMenuItem asChild>
                                <Link href="/profile">
                                    <User className="mr-2 h-4 w-4" />
                                    {t.nav.profile}
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                                <Link href="/wishlists">
                                    <Heart className="mr-2 h-4 w-4" />
                                    {t.nav.wishlist}
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                                <Link href="/itinerary">
                                    <MapPin className="mr-2 h-4 w-4" />
                                    {t.nav.itinerary}
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                                {t.nav.logout}
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>

                    {/* Mobile Menu */}
                    <Button variant="ghost" size="icon" className="md:hidden">
                        <Menu className="h-5 w-5" />
                    </Button>
                </nav>
            </div>

            {/* Mobile Search - Visible on mobile only */}
            <div className="md:hidden px-4 pb-3">
                <form onSubmit={handleSearch} className="relative w-full">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder={t.search.placeholder}
                        className="w-full pl-10 pr-10"
                    />
                    {searchQuery && (
                        <button
                            type="button"
                            onClick={() => setSearchQuery("")}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                        >
                            <X className="h-4 w-4" />
                        </button>
                    )}
                </form>
            </div>
        </header>
    );
}
