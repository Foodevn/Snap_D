"use client";

import { useState } from "react";
import { LocationCard } from "@/src/components/features/location-card";
import { mockLocations } from "@/src/lib/mock-data";
import { Button } from "@/src/components/ui/button";
import { Card, CardContent } from "@/src/components/ui/card";
import { Badge } from "@/src/components/ui/badge";
import {
  Heart,
  Plus,
  Trash2,
  Edit,
  MapPin,
  Share2,
  Download,
} from "lucide-react";
import { useLanguage } from "@/src/contexts/LanguageContext";

interface Wishlist {
  id: string;
  name: string;
  description: string;
  locationIds: string[];
  isPublic: boolean;
  createdAt: string;
}

export default function WishlistsPage() {
  const { t } = useLanguage();
  const [wishlists, setWishlists] = useState<Wishlist[]>([
    {
      id: "1",
      name: "Muốn đến",
      description: "Những địa điểm tôi muốn ghé thăm",
      locationIds: ["1", "2", "5"],
      isPublic: false,
      createdAt: "2024-12-01",
    },
    {
      id: "2",
      name: "Yêu thích",
      description: "Địa điểm tôi thích nhất",
      locationIds: ["2", "4", "6", "7"],
      isPublic: true,
      createdAt: "2024-11-15",
    },
    {
      id: "3",
      name: "Đã đến",
      description: "Những nơi tôi đã check-in",
      locationIds: ["1", "3", "8"],
      isPublic: false,
      createdAt: "2024-10-20",
    },
  ]);

  const [selectedWishlist, setSelectedWishlist] = useState<string>(
    wishlists[0]?.id || ""
  );

  const currentWishlist = wishlists.find((w) => w.id === selectedWishlist);
  const savedLocations = mockLocations.filter((loc) =>
    currentWishlist?.locationIds.includes(loc.id)
  );

  return (
    <div className="container px-4 py-6 md:py-8 max-w-7xl">
      {/* Header */}
      <div className="mb-6 md:mb-8">
        <h1 className="text-2xl md:text-3xl font-bold mb-2 flex items-center gap-2">
          <Heart className="h-6 w-6 md:h-8 md:w-8 text-red-500" />
          {t.wishlist.title}
        </h1>
        <p className="text-sm md:text-base text-muted-foreground">
          {t.wishlist.description}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 md:gap-6">
        {/* Sidebar - Wishlist List */}
        <div className="lg:col-span-1">
          <div className="space-y-2 md:space-y-3">
            <Button className="w-full" size="lg">
              <Plus className="mr-2 h-4 w-4" />
              {t.wishlist.createNew}
            </Button>

            {/* Wishlist Items */}
            {wishlists.map((wishlist) => {
              const isSelected = selectedWishlist === wishlist.id;
              return (
                <Card
                  key={wishlist.id}
                  className={`cursor-pointer transition-all ${isSelected
                    ? "ring-2 ring-blue-600 bg-blue-50"
                    : "hover:bg-gray-50"
                    }`}
                  onClick={() => setSelectedWishlist(wishlist.id)}
                >
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-semibold">{wishlist.name}</h3>
                      <Badge variant={wishlist.isPublic ? "default" : "secondary"}>
                        {wishlist.isPublic ? t.wishlist.public : t.wishlist.private}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">
                      {wishlist.description}
                    </p>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">
                        {wishlist.locationIds.length} địa điểm
                      </span>
                      <div className="flex gap-1">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-7 w-7"
                          onClick={(e) => {
                            e.stopPropagation();
                            // Handle edit
                          }}
                        >
                          <Edit className="h-3 w-3" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-7 w-7 text-red-600 hover:text-red-700"
                          onClick={(e) => {
                            e.stopPropagation();
                            // Handle delete
                          }}
                        >
                          <Trash2 className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Stats Card */}
          <Card className="mt-6">
            <CardContent className="p-4">
              <h3 className="font-semibold mb-3">Thống kê</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Tổng danh sách</span>
                  <span className="font-medium">{wishlists.length}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Tổng địa điểm</span>
                  <span className="font-medium">
                    {wishlists.reduce((sum, w) => sum + w.locationIds.length, 0)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Công khai</span>
                  <span className="font-medium">
                    {wishlists.filter((w) => w.isPublic).length}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content - Locations */}
        <div className="lg:col-span-3">
          {currentWishlist ? (
            <>
              {/* Wishlist Header */}
              <div className="mb-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h2 className="text-2xl font-bold mb-2">
                      {currentWishlist.name}
                    </h2>
                    <p className="text-muted-foreground">
                      {currentWishlist.description}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="icon">
                      <Share2 className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {currentWishlist.locationIds.length} địa điểm
                  </span>
                  <span>
                    {t.wishlist.created}{" "}
                    {new Date(currentWishlist.createdAt).toLocaleDateString(
                      "vi-VN"
                    )}
                  </span>
                  <Badge variant={currentWishlist.isPublic ? "default" : "secondary"}>
                    {currentWishlist.isPublic ? t.wishlist.public : t.wishlist.private}
                  </Badge>
                </div>
              </div>

              {/* Locations Grid */}
              {savedLocations.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                  {savedLocations.map((location) => (
                    <div key={location.id} className="relative group">
                      <LocationCard location={location} />
                      <Button
                        variant="destructive"
                        size="icon"
                        className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                        onClick={(e) => {
                          e.preventDefault();
                          // Handle remove from wishlist
                        }}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              ) : (
                <Card>
                  <CardContent className="p-12 text-center">
                    <Heart className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">
                      {t.wishlist.noLocations}
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      {t.wishlist.noLocationsDesc}
                    </p>
                    <Button>
                      <Plus className="mr-2 h-4 w-4" />
                      {t.wishlist.exploreLocations}
                    </Button>
                  </CardContent>
                </Card>
              )}
            </>
          ) : (
            <Card>
              <CardContent className="p-12 text-center">
                <Heart className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">
                  {t.wishlist.selectList}
                </h3>
                <p className="text-muted-foreground">
                  {t.wishlist.selectListDesc}
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
