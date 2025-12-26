"use client";

import Link from "next/link";
import { Button } from "@/src/components/ui/button";
import { LocationCard } from "@/src/components/features/location-card";
import { mockLocations, categories } from "@/src/lib/mock-data";
import { ArrowRight, MapPin, Star, TrendingUp, Sparkles } from "lucide-react";
import { useLanguage } from "@/src/contexts/LanguageContext";

export default function Home() {
  const { t } = useLanguage();
  const featuredLocations = mockLocations.slice(0, 6);
  const trendingLocations = mockLocations.slice(2, 5);

  return (
    <div className="flex flex-col ">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 text-white">
        <div className="container px-4 py-12 md:py-32">
          <div className="max-w-3xl mx-auto text-center space-y-4 md:space-y-6">
            <h1 className="text-3xl md:text-6xl font-bold leading-tight">
              {t.home.title} <br />
              <span className="text-yellow-300">{t.home.subtitle}</span>
            </h1>
            <p className="text-base md:text-xl text-white/90">
              {t.home.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/explore">
                  <Sparkles className="mr-2 h-5 w-5" />
                  {t.home.exploreNow}
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 border-white hover:bg-white/20 text-white" asChild>
                <Link href="/chat">
                  {t.home.askAI}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Wave decoration */}

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z" fill="white" />
          </svg>
        </div>
      </section>
      <div className="mx-0 md:mx-20">
        {/* Categories */}
        <section className="container px-4 py-8 md:py-12">
          <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">{t.home.categories}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4">
            {categories.slice(1, 9).map((category) => {
              // Map category.id to translation key
              const categoryKeyMap: Record<string, keyof typeof t.categories> = {
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
                <Link
                  key={category.id}
                  href={`/explore?category=${category.id}`}
                  className="flex flex-col items-center p-4 md:p-6 rounded-lg border bg-white hover:bg-gray-50 hover:shadow-md transition-all duration-200"
                >
                  <div className="h-10 w-10 md:h-12 md:w-12 rounded-full bg-blue-100 flex items-center justify-center mb-2 md:mb-3">
                    <MapPin className="h-5 w-5 md:h-6 md:w-6 text-blue-600" />
                  </div>
                  <span className="text-xs md:text-sm font-medium text-center">{t.categories[translationKey]}</span>
                </Link>
              );
            })}
          </div>
        </section>

        {/* Featured Locations */}
        <section className="container px-4 py-8 md:py-12">
          <div className="flex items-center justify-between mb-4 md:mb-6">
            <div>
              <h2 className="text-xl md:text-2xl font-bold flex items-center gap-2">
                <Star className="h-5 w-5 md:h-6 md:w-6 text-yellow-500" />
                {t.home.featured}
              </h2>
              <p className="text-sm md:text-base text-muted-foreground mt-1">
                {t.home.featuredDesc}
              </p>
            </div>
            <Button variant="ghost" asChild className="hidden md:flex">
              <Link href="/explore">
                {t.home.viewAll}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredLocations.map((location) => (
              <LocationCard key={location.id} location={location} />
            ))}
          </div>
        </section>

        {/* Trending Section */}
        <section className="bg-gray-50 py-8 md:py-12">
          <div className="container px-4">
            <div className="flex items-center justify-between mb-4 md:mb-6">
              <div>
                <h2 className="text-xl md:text-2xl font-bold flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 md:h-6 md:w-6 text-orange-500" />
                  {t.home.trending}
                </h2>
                <p className="text-sm md:text-base text-muted-foreground mt-1">
                  {t.home.trendingDesc}
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              {trendingLocations.map((location) => (
                <LocationCard key={location.id} location={location} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container px-4 py-8 md:py-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl md:rounded-2xl p-6 md:p-12 text-white text-center">
            <h2 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4">
              {t.home.ctaTitle}
            </h2>
            <p className="text-sm md:text-lg text-white/90 mb-6 md:mb-8 max-w-2xl mx-auto">
              {t.home.ctaDesc}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                {t.home.signupFree}
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 border-white hover:bg-white/20 text-white">
                {t.home.learnMore}
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
