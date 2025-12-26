"use client";

import Image from "next/image";
import { notFound } from "next/navigation";
import { mockLocations, mockReviews } from "@/src/lib/mock-data";
import { Button } from "@/src/components/ui/button";
import { Badge } from "@/src/components/ui/badge";
import { Card, CardContent } from "@/src/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/src/components/ui/avatar";
import {
    MapPin,
    Star,
    Clock,
    DollarSign,
    Heart,
    Share2,
    Navigation,
    Phone,
    CheckCircle2,
    ThumbsUp,
} from "lucide-react";
import { useState, use } from "react";
import { useLanguage } from "@/src/contexts/LanguageContext";

export default function LocationDetailPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = use(params);
    const { t } = useLanguage();
    const location = mockLocations.find((loc) => loc.slug === slug);
    const [liked, setLiked] = useState(false);

    if (!location) {
        notFound();
    }

    const reviews = mockReviews.filter((r) => r.locationId === location.id);

    return (
        <div className="min-h-screen bg-gray-50 pb-8 md:pb-12 ">
            {/* Image Gallery */}
            <div className="mx-0 md:mx-20">
                <div className="relative h-[250px] md:h-[400px] w-full bg-gray-200 mb-4 md:mb-8 ">
                    <div className="grid grid-cols-4 gap-0.5 md:gap-1 h-full">
                        <div className="col-span-2 row-span-2 relative">
                            <Image
                                src={location.images[0]}
                                alt={location.name}
                                fill
                                className="object-cover"
                            />
                        </div>
                        {location.images.slice(1, 3).map((img, idx) => (
                            <div key={idx} className="relative">
                                <Image src={img} alt={`${location.name} ${idx + 2}`} fill className="object-cover" />
                            </div>
                        ))}
                        <div className="relative">
                            <Image
                                src={location.images[0]}
                                alt={location.name}
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                                <span className="text-white font-semibold text-sm md:text-base">+{location.images.length - 3}</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="container px-4 py-4 md:py-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
                        {/* Main Content */}
                        <div className="lg:col-span-2 space-y-4 md:space-y-6">
                            {/* Header */}
                            <div>
                                <div className="flex items-start justify-between mb-3 md:mb-4">
                                    <div className="flex-1">
                                        <Badge className="mb-2 text-xs">{location.category}</Badge>
                                        <h1 className="text-2xl md:text-3xl font-bold mb-2">{location.name}</h1>
                                        <div className="flex items-center space-x-3 md:space-x-4 text-xs md:text-sm">
                                            <div className="flex items-center space-x-1">
                                                <Star className="h-4 w-4 md:h-5 md:w-5 fill-yellow-400 text-yellow-400" />
                                                <span className="font-semibold">{location.rating}</span>
                                                <span className="text-muted-foreground">
                                                    ({location.reviewCount} {t.location.reviews})
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex space-x-1.5 md:space-x-2">
                                        <Button
                                            variant="outline"
                                            size="icon"
                                            className="h-8 w-8 md:h-10 md:w-10"
                                            onClick={() => setLiked(!liked)}
                                        >
                                            <Heart
                                                className={`h-4 w-4 md:h-5 md:w-5 ${liked ? "fill-red-500 text-red-500" : ""
                                                    }`}
                                            />
                                        </Button>
                                        <Button variant="outline" size="icon" className="h-8 w-8 md:h-10 md:w-10">
                                            <Share2 className="h-4 w-4 md:h-5 md:w-5" />
                                        </Button>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-2 text-sm md:text-base text-muted-foreground mb-3 md:mb-4">
                                    <MapPin className="h-4 w-4 md:h-5 md:w-5 mt-0.5 flex-shrink-0" />
                                    <span>{location.address}</span>
                                </div>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-1.5 md:gap-2">
                                    {location.tags.map((tag) => (
                                        <Badge key={tag} variant="secondary" className="text-xs">
                                            {tag}
                                        </Badge>
                                    ))}
                                </div>
                            </div>

                            {/* About */}
                            <Card>
                                <CardContent className="pt-6">
                                    <h2 className="text-xl font-semibold mb-4">{t.location.about}</h2>
                                    <p className="text-muted-foreground leading-relaxed">
                                        {location.description}
                                    </p>
                                </CardContent>
                            </Card>

                            {/* Info */}
                            <Card>
                                <CardContent className="pt-6">
                                    <h2 className="text-xl font-semibold mb-4">{t.location.information}</h2>
                                    <div className="space-y-4">
                                        <div className="flex items-center space-x-3">
                                            <Clock className="h-5 w-5 text-muted-foreground" />
                                            <div>
                                                <div className="font-medium">{t.location.openingHours}</div>
                                                <div className="text-sm text-muted-foreground">
                                                    {location.openingHours}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex items-center space-x-3">
                                            <DollarSign className="h-5 w-5 text-muted-foreground" />
                                            <div>
                                                <div className="font-medium">{t.location.priceRange}</div>
                                                <div className="text-sm text-muted-foreground">
                                                    {location.priceRange}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex items-start space-x-3">
                                            <CheckCircle2 className="h-5 w-5 text-muted-foreground mt-0.5" />
                                            <div>
                                                <div className="font-medium mb-2">{t.location.amenities}</div>
                                                <div className="flex flex-wrap gap-2">
                                                    {location.amenities.map((amenity) => (
                                                        <Badge key={amenity} variant="outline">
                                                            {amenity}
                                                        </Badge>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Visitor Stats */}
                            {location.stats && (
                                <Card>
                                    <CardContent className="pt-6">
                                        <h2 className="text-xl font-semibold mb-4">{t.location.visitorStats}</h2>
                                        <div className="grid grid-cols-3 gap-4">
                                            <div className="text-center p-4 bg-blue-50 rounded-lg">
                                                <div className="text-2xl font-bold text-blue-600">{location.stats.views.toLocaleString()}</div>
                                                <div className="text-sm text-muted-foreground mt-1">{t.location.views}</div>
                                            </div>
                                            <div className="text-center p-4 bg-red-50 rounded-lg">
                                                <div className="text-2xl font-bold text-red-600">{location.stats.saved.toLocaleString()}</div>
                                                <div className="text-sm text-muted-foreground mt-1">{t.location.saved}</div>
                                            </div>
                                            <div className="text-center p-4 bg-green-50 rounded-lg">
                                                <div className="text-2xl font-bold text-green-600">{location.stats.checkins.toLocaleString()}</div>
                                                <div className="text-sm text-muted-foreground mt-1">{t.location.checkins}</div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            )}

                            {/* Menu */}
                            {location.menu && location.menu.length > 0 && (
                                <Card>
                                    <CardContent className="pt-6">
                                        <h2 className="text-xl font-semibold mb-4">{t.location.menu}</h2>
                                        <div className="space-y-3">
                                            {location.menu.map((item, index) => (
                                                <div key={index} className="flex items-start gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                                                    {item.image && (
                                                        <div className="relative w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden">
                                                            <Image
                                                                src={item.image}
                                                                alt={item.name}
                                                                fill
                                                                className="object-cover"
                                                            />
                                                        </div>
                                                    )}
                                                    <div className="flex-1 min-w-0">
                                                        <div className="font-medium">{item.name}</div>
                                                        {item.description && (
                                                            <div className="text-sm text-muted-foreground mt-1">
                                                                {item.description}
                                                            </div>
                                                        )}
                                                    </div>
                                                    <div className="font-semibold text-blue-600 ml-4 flex-shrink-0">
                                                        {item.price}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            )}

                            {/* Reviews */}
                            <Card>
                                <CardContent className="pt-6">
                                    <div className="flex items-center justify-between mb-6">
                                        <h2 className="text-xl font-semibold">
                                            {t.location.reviews} ({reviews.length})
                                        </h2>
                                        <Button>{t.location.writeReview}</Button>
                                    </div>

                                    <div className="space-y-6">
                                        {reviews.map((review) => (
                                            <div key={review.id} className="border-b pb-6 last:border-0">
                                                <div className="flex items-start space-x-4">
                                                    <Avatar>
                                                        <AvatarImage src={review.userAvatar} />
                                                        <AvatarFallback>
                                                            {review.userName.charAt(0)}
                                                        </AvatarFallback>
                                                    </Avatar>
                                                    <div className="flex-1">
                                                        <div className="flex items-center justify-between mb-2">
                                                            <div>
                                                                <div className="font-semibold flex items-center gap-2">
                                                                    {review.userName}
                                                                    {review.verified && (
                                                                        <CheckCircle2 className="h-4 w-4 text-blue-600" />
                                                                    )}
                                                                </div>
                                                                <div className="text-sm text-muted-foreground">
                                                                    {new Date(review.visitDate).toLocaleDateString("vi-VN")}
                                                                </div>
                                                            </div>
                                                            <div className="flex items-center space-x-1">
                                                                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                                                <span className="font-semibold">{review.rating}</span>
                                                            </div>
                                                        </div>
                                                        <p className="text-muted-foreground mb-3">
                                                            {review.text}
                                                        </p>
                                                        {review.images.length > 0 && (
                                                            <div className="flex gap-2 mb-3">
                                                                {review.images.map((img, idx) => (
                                                                    <div
                                                                        key={idx}
                                                                        className="relative w-24 h-24 rounded-lg overflow-hidden"
                                                                    >
                                                                        <Image
                                                                            src={img}
                                                                            alt={`Review ${idx}`}
                                                                            fill
                                                                            className="object-cover"
                                                                        />
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        )}
                                                        <Button variant="ghost" size="sm">
                                                            <ThumbsUp className="h-4 w-4 mr-1" />
                                                            ({review.likes})
                                                        </Button>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Sidebar */}
                        <div className="lg:col-span-1">
                            <Card className="sticky top-20">
                                <CardContent className="pt-6 space-y-4">
                                    <h3 className="font-semibold text-lg">{t.location.actions}</h3>
                                    <Button className="w-full" size="lg">
                                        <Navigation className="mr-2 h-5 w-5" />
                                        {t.location.directions}
                                    </Button>
                                    <Button variant="outline" className="w-full" size="lg">
                                        <Phone className="mr-2 h-5 w-5" />
                                        {t.location.contact}
                                    </Button>
                                    <Button variant="outline" className="w-full" size="lg">
                                        <Heart className="mr-2 h-5 w-5" />
                                        {t.location.saveToList}
                                    </Button>

                                    <div className="pt-4 border-t">
                                        <h4 className="font-semibold mb-3">{t.location.bestTime}</h4>
                                        <p className="text-sm text-muted-foreground">
                                            {location.bestTimeToVisit}
                                        </p>
                                    </div>

                                    {/* Map Placeholder */}
                                    <div className="pt-4 border-t">
                                        <h4 className="font-semibold mb-3">{t.location.position}</h4>
                                        <div className="w-full h-48 bg-gray-200 rounded-lg flex items-center justify-center">
                                            <MapPin className="h-8 w-8 text-gray-400" />
                                        </div>
                                        <p className="text-sm text-muted-foreground mt-2">
                                            {location.coordinates.lat}, {location.coordinates.lng}
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
