import Image from "next/image";
import Link from "next/link";
import { MapPin, Star, Clock, DollarSign } from "lucide-react";
import { Card, CardContent } from "@/src/components/ui/card";
import { Badge } from "@/src/components/ui/badge";
import { Location } from "@/src/lib/mock-data";
import { useLanguage } from "@/src/contexts/LanguageContext";

interface LocationCardProps {
    location: Location;
}

export function LocationCard({ location }: LocationCardProps) {
    const { t } = useLanguage();

    return (
        <Link href={`/locations/${location.slug}`}>
            <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                {/* Image */}
                <div className="relative h-40 md:h-48 w-full overflow-hidden">
                    <Image
                        src={location.images[0]}
                        alt={location.name}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                    <Badge className="absolute top-2 left-2 bg-white/90 text-foreground text-xs">
                        {t.categoryNames[location.category as keyof typeof t.categoryNames] || location.category}
                    </Badge>
                </div>

                {/* Content */}
                <CardContent className="p-3 md:p-4">
                    <h3 className="text-base md:text-lg font-semibold line-clamp-1 mb-2">
                        {location.name}
                    </h3>

                    {/* Rating & Reviews */}
                    <div className="flex items-center space-x-1 mb-2">
                        <Star className="h-3.5 w-3.5 md:h-4 md:w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-xs md:text-sm font-medium">{location.rating}</span>
                        <span className="text-xs md:text-sm text-muted-foreground">
                            ({location.reviewCount} {t.location.reviews})
                        </span>
                    </div>

                    {/* Address */}
                    <div className="flex items-start space-x-1.5 md:space-x-2 text-xs md:text-sm text-muted-foreground mb-2">
                        <MapPin className="h-3.5 w-3.5 md:h-4 md:w-4 mt-0.5 flex-shrink-0" />
                        <span className="line-clamp-1">{location.address}</span>
                    </div>

                    {/* Price & Hours */}
                    <div className="flex items-center justify-between text-xs md:text-sm mb-2">
                        <div className="flex items-center space-x-1 text-muted-foreground">
                            <DollarSign className="h-3.5 w-3.5 md:h-4 md:w-4" />
                            <span className="line-clamp-1 text-xs">{t.prices[location.priceRange as keyof typeof t.prices] || location.priceRange}</span>
                        </div>
                        <div className="flex items-center space-x-1 text-muted-foreground">
                            <Clock className="h-3.5 w-3.5 md:h-4 md:w-4" />
                            <span className="text-xs">{t.location.open}</span>
                        </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1 mt-2 md:mt-3">
                        {location.tags.slice(0, 3).map((tag) => (
                            <Badge key={tag} variant="secondary" className="text-[10px] md:text-xs px-1.5 md:px-2 py-0.5">
                                {t.tags[tag as keyof typeof t.tags] || tag}
                            </Badge>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </Link>
    );
}
