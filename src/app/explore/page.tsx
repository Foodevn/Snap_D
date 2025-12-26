"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { LocationCard } from "@/src/components/features/location-card";
import { mockLocations, categories } from "@/src/lib/mock-data";
import { Input } from "@/src/components/ui/input";
import { Button } from "@/src/components/ui/button";
import { Badge } from "@/src/components/ui/badge";
import { Search, SlidersHorizontal, MapPin } from "lucide-react";
import { useLanguage } from "@/src/contexts/LanguageContext";

function ExplorePageContent() {
    const { t } = useLanguage();
    const searchParams = useSearchParams();
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [searchQuery, setSearchQuery] = useState("");

    // Get search query from URL on mount
    useEffect(() => {
        const urlSearch = searchParams.get("search");
        if (urlSearch) {
            setSearchQuery(urlSearch);
        }
    }, [searchParams]);

    // Filter locations
    const filteredLocations = mockLocations.filter((location) => {
        const matchesCategory =
            selectedCategory === "all" || location.category === categories.find(c => c.id === selectedCategory)?.name;
        const matchesSearch =
            searchQuery === "" ||
            location.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            location.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
            location.address.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="container px-4 py-6 md:py-8">
            <div className="mx-0 md:mx-20">
                {/* Header */}
                <div className="mb-6 md:mb-8">
                    <h1 className="text-2xl md:text-3xl font-bold mb-2">{t.explore.title}</h1>
                    <p className="text-sm md:text-base text-muted-foreground">
                        {t.search.found} {filteredLocations.length} {t.search.locations}
                    </p>
                </div>

                {/* Search Bar */}
                <div className="mb-4 md:mb-6">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                        <Input
                            placeholder={t.search.placeholder}
                            className="pl-10 pr-4 h-10 md:h-12 text-sm md:text-base"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                </div>

                {/* Filters */}
                <div className="mb-6 md:mb-8">
                    <div className="flex items-center justify-between mb-3 md:mb-4">
                        <h2 className="text-base md:text-lg font-semibold">{t.explore.category}</h2>
                        <Button variant="ghost" size="sm" className="h-8 md:h-9">
                            <SlidersHorizontal className="h-3 w-3 md:h-4 md:w-4 mr-1 md:mr-2" />
                            <span className="text-xs md:text-sm">{t.explore.filters}</span>
                        </Button>
                    </div>

                    {/* Category Pills */}
                    <div className="flex flex-wrap gap-2">
                        {categories.map((category) => {
                            // Map category.id to translation key
                            const categoryKeyMap: Record<string, keyof typeof t.categories> = {
                                'all': 'all',
                                'ho-suoi': 'lakes',
                                'cafe': 'cafe',
                                'mua-sam': 'shopping',
                                'thac-nuoc': 'waterfalls',
                                'kien-truc': 'architecture',
                                'am-thuc': 'food',
                                'vuon-hoa': 'gardens',
                                'van-hoa': 'culture'
                            };
                            const translationKey = categoryKeyMap[category.id] || 'all';

                            return (
                                <Badge
                                    key={category.id}
                                    variant={selectedCategory === category.id ? "default" : "outline"}
                                    className="cursor-pointer px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm"
                                    onClick={() => setSelectedCategory(category.id)}
                                >
                                    {t.categories[translationKey]}
                                </Badge>
                            );
                        })}
                    </div>
                </div>

                {/* Results */}
                {filteredLocations.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredLocations.map((location) => (
                            <LocationCard key={location.id} location={location} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-16">
                        <MapPin className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                        <h3 className="text-xl font-semibold mb-2">
                            {t.explore.noResults}
                        </h3>
                        <p className="text-muted-foreground mb-6">
                            {t.explore.noResultsDesc}
                        </p>
                        <Button
                            variant="outline"
                            onClick={() => {
                                setSelectedCategory("all");
                                setSearchQuery("");
                            }}
                        >
                            {t.explore.clearFilters}
                        </Button>
                    </div>
                )}

                {/* Load More */}
                {filteredLocations.length > 0 && (
                    <div className="flex justify-center mt-12">
                        <Button variant="outline" size="lg">
                            {t.explore.loadMore}
                        </Button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default function ExplorePage() {
    const { t } = useLanguage();

    return (
        <Suspense fallback={
            <div className="container px-4 py-6 md:py-8">
                <div className="mx-0 md:mx-20">
                    <div className="mb-6 md:mb-8">
                        <h1 className="text-2xl md:text-3xl font-bold mb-2">{t.explore.title}</h1>
                        <p className="text-sm md:text-base text-muted-foreground">Đang tải...</p>
                    </div>
                </div>
            </div>
        }>
            <ExplorePageContent />
        </Suspense>
    );
}
