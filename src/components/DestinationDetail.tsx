import { ArrowLeft, Heart, MapPin, Star, Wifi, Utensils, Bath, Waves, Flame, Car, Dog, Wine, Users, TreePine, Clock, MessageCircle, Upload, X, Camera, Image, ChevronLeft, ChevronRight } from 'lucide-react';
import { Destination } from '../app/page';
import { useState, useRef } from 'react';
import { BottomNav } from './BottomNav';

interface DestinationDetailProps {
  destination: Destination;
  onBack: () => void;
  isFavorite: boolean;
  toggleFavorite: () => void;
  onFavoritesClick: () => void;
  onProfileClick: () => void;
  onChatBotClick: () => void;
}

export function DestinationDetail({ destination, onBack, isFavorite, toggleFavorite, onFavoritesClick, onProfileClick, onChatBotClick }: DestinationDetailProps) {
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showAllReviews, setShowAllReviews] = useState(false);
  const [newReview, setNewReview] = useState({ rating: 5, comment: '', images: [] as string[] });
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [showGallery, setShowGallery] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [galleryImages, setGalleryImages] = useState<string[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const facilityIcons: Record<string, React.ReactNode> = {
    'Heater': <Flame className="w-6 h-6 text-[#FAA935]" />,
    'Dinner': <Utensils className="w-6 h-6 text-[#FAA935]" />,
    'Tub': <Bath className="w-6 h-6 text-[#FAA935]" />,
    'Pool': <Waves className="w-6 h-6 text-[#FAA935]" />,
    'WiFi': <Wifi className="w-6 h-6 text-[#FAA935]" />,
    'Wifi': <Wifi className="w-6 h-6 text-[#FAA935]" />,
    'Outdoor Seating': <TreePine className="w-6 h-6 text-[#FAA935]" />,
    'Parking': <Car className="w-6 h-6 text-[#FAA935]" />,
    'Pet Friendly': <Dog className="w-6 h-6 text-[#FAA935]" />,
    'Valet Parking': <Car className="w-6 h-6 text-[#FAA935]" />,
    'Bar': <Wine className="w-6 h-6 text-[#FAA935]" />,
    'Private Dining': <Users className="w-6 h-6 text-[#FAA935]" />
  };

  // Collect all images for gallery
  const getAllImages = () => {
    const images: string[] = [destination.image];

    // Add menu images if available
    if (destination.menu) {
      destination.menu.forEach(item => images.push(item.image));
    }

    // Add review images if available
    if (destination.reviews) {
      destination.reviews.forEach(review => {
        if (review.images) {
          images.push(...review.images);
        }
      });
    }

    return images;
  };

  const openGallery = (startIndex: number = 0, customImages?: string[]) => {
    const images = customImages || getAllImages();
    setGalleryImages(images);
    setCurrentImageIndex(startIndex);
    setShowGallery(true);
  };

  const closeGallery = () => {
    setShowGallery(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') prevImage();
    if (e.key === 'Escape') closeGallery();
  };

  return (
    <div className="max-w-7xl mx-auto bg-white lg:bg-transparent min-h-screen">
      {/* Image Gallery Modal */}
      {showGallery && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={closeGallery}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          {/* Close Button */}
          <button
            onClick={closeGallery}
            className="absolute top-4 right-4 lg:top-8 lg:right-8 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors z-10"
          >
            <X className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
          </button>

          {/* Image Counter */}
          <div className="absolute top-4 left-4 lg:top-8 lg:left-8 bg-black/50 px-4 py-2 rounded-full text-white z-10">
            <span className="text-sm lg:text-base">
              {currentImageIndex + 1} / {galleryImages.length}
            </span>
          </div>

          {/* Previous Button */}
          {galleryImages.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-4 lg:left-8 w-12 h-12 lg:w-14 lg:h-14 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors z-10"
            >
              <ChevronLeft className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
            </button>
          )}

          {/* Main Image */}
          <div className="relative w-full h-full flex items-center justify-center p-4 lg:p-16" onClick={(e) => e.stopPropagation()}>
            <img
              src={galleryImages[currentImageIndex]}
              alt={`Image ${currentImageIndex + 1}`}
              className="max-w-full max-h-full object-contain"
            />
          </div>

          {/* Next Button */}
          {galleryImages.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-4 lg:right-8 w-12 h-12 lg:w-14 lg:h-14 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors z-10"
            >
              <ChevronRight className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
            </button>
          )}

          {/* Thumbnail Strip */}
          {galleryImages.length > 1 && (
            <div className="absolute bottom-4 lg:bottom-8 left-1/2 -translate-x-1/2 flex gap-2 overflow-x-auto max-w-[90vw] p-2 bg-black/50 rounded-full scrollbar-hide">
              {galleryImages.map((img, index) => (
                <button
                  key={index}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentImageIndex(index);
                  }}
                  className={`flex-shrink-0 w-16 h-16 lg:w-20 lg:h-20 rounded-lg overflow-hidden border-2 transition-all ${index === currentImageIndex
                      ? 'border-[#FAA935] scale-110'
                      : 'border-white/30 hover:border-white/60'
                    }`}
                >
                  <img
                    src={img}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Desktop Layout */}
      <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:p-8">
        {/* Image Section */}
        <div className="relative h-80 lg:h-[600px] p-5 lg:p-0 lg:rounded-3xl lg:overflow-hidden lg:sticky lg:top-8">
          <img
            src={destination.image}
            alt={destination.name}
            className="w-full h-full object-cover rounded-3xl lg:rounded-none cursor-pointer hover:opacity-95 transition-opacity"
            onClick={() => openGallery(0)}
          />

          {/* View Gallery Button Overlay */}
          <button
            onClick={() => openGallery(0)}
            className="absolute bottom-8 left-10 lg:bottom-6 lg:left-6 px-4 py-2 bg-black/50 hover:bg-black/70 text-white rounded-lg flex items-center gap-2 transition-colors"
          >
            <Image className="w-4 h-4 lg:w-5 lg:h-5" />
            <span className="text-sm lg:text-base">View All Photos ({getAllImages().length})</span>
          </button>

          {/* Back Button */}
          <button
            onClick={onBack}
            className="absolute top-10 left-10 lg:top-6 lg:left-5 w-10 h-10 lg:w-12 lg:h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
          >
            <ArrowLeft className="w-5 h-5 lg:w-6 lg:h-6" />
          </button>

          {/* Favorite Button */}
          <button
            onClick={toggleFavorite}
            className="absolute bottom-10 right-10 lg:bottom-6 lg:top-auto lg:right-5 w-12 h-12 lg:w-14 lg:h-14 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
          >
            <Heart
              className={`w-6 h-6 lg:w-7 lg:h-7 ${isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-600'}`}
            />
          </button>
        </div>

        {/* Content Section */}
        <div className="px-5 lg:px-0 py-6 lg:py-0 bg-white lg:bg-transparent">
          {/* Title and Location */}
          <div className="flex items-start justify-between mb-4 lg:mb-6">
            <div className="flex-1">
              <h1 className="text-2xl lg:text-4xl mb-2 lg:mb-3">{destination.name}</h1>
              <div className="flex items-center gap-1 text-sm lg:text-base text-gray-600 mb-1">
                <Star className="w-4 h-4 lg:w-5 lg:h-5 fill-yellow-400 text-yellow-400" />
                <span>{destination.rating}</span>
                <span className="mx-1">•</span>
                <MapPin className="w-4 h-4 lg:w-5 lg:h-5" />
                <span>{destination.location}</span>
              </div>
            </div>
            <button className="text-sm lg:text-base text-[#FAA935] hover:text-[#E89820] whitespace-nowrap">
              Show map
            </button>
          </div>

          {/* Description */}
          <div className="mb-6 lg:mb-8">
            <p className="text-sm lg:text-base text-gray-600 leading-relaxed">
              {showFullDescription
                ? destination.description
                : `${destination.description?.slice(0, 120)}...`
              }
            </p>
            <button
              onClick={() => setShowFullDescription(!showFullDescription)}
              className="text-sm lg:text-base text-[#FAA935] hover:text-[#E89820] mt-1"
            >
              Read {showFullDescription ? 'less' : 'more'}
            </button>
          </div>

          {/* Menu Section - Only for restaurants and cafes */}
          {(destination.type === 'restaurant' || destination.type === 'cafe') && destination.menu && (
            <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-sm mb-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl lg:text-2xl">Menu</h2>
                <button
                  onClick={() => setShowMenu(!showMenu)}
                  className="text-sm lg:text-base text-[#FAA935] hover:text-[#E89820]"
                >
                  {showMenu ? 'Hide' : 'View All'}
                </button>
              </div>

              <div className={`grid grid-cols-1 gap-4 ${!showMenu ? 'max-h-[400px] overflow-hidden' : ''}`}>
                {destination.menu.map((item) => (
                  <div key={item.id} className="flex gap-4 p-4 border border-gray-100 rounded-xl hover:shadow-md transition-shadow">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-24 h-24 lg:w-32 lg:h-32 object-cover rounded-lg flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2 mb-1">
                        <h3 className="text-sm lg:text-base">{item.name}</h3>
                        <span className="text-[#FAA935] text-base lg:text-lg whitespace-nowrap flex-shrink-0">${item.price}</span>
                      </div>
                      <p className="text-xs text-gray-500 mb-2">{item.category}</p>
                      <p className="text-xs lg:text-sm text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Facilities */}
          <div className="mb-8 lg:mb-12">
            <h2 className="text-lg lg:text-2xl mb-4 lg:mb-6">Facilities</h2>
            <div className="grid grid-cols-4 gap-4 lg:gap-6">
              {destination.facilities?.map((facility) => (
                <div key={facility} className="flex flex-col items-center">
                  <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gray-50 rounded-2xl flex items-center justify-center mb-2 hover:bg-gray-100 transition-colors">
                    {facilityIcons[facility]}
                  </div>
                  <span className="text-xs lg:text-sm text-gray-600">{facility}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Crowd Level - Only for restaurants and cafes */}
          {(destination.type === 'restaurant' || destination.type === 'cafe') && destination.crowdLevel && (
            <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-sm mb-6">
              <div className="flex items-center gap-2 mb-6">
                <Clock className="w-5 h-5 lg:w-6 lg:h-6 text-[#FAA935]" />
                <h2 className="text-xl lg:text-2xl">Crowd Level</h2>
              </div>

              <div className="space-y-4">
                {destination.crowdLevel.map((crowd, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between text-sm lg:text-base">
                      <span className="text-gray-700">{crowd.time}</span>
                      <span className={`px-3 py-1 rounded-full text-xs lg:text-sm ${crowd.level === 'low'
                          ? 'bg-green-100 text-green-700'
                          : crowd.level === 'medium'
                            ? 'bg-yellow-100 text-yellow-700'
                            : 'bg-red-100 text-red-700'
                        }`}>
                        {crowd.level === 'low' ? 'Quiet' : crowd.level === 'medium' ? 'Moderate' : 'Busy'}
                      </span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-2 lg:h-3 overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all ${crowd.level === 'low'
                            ? 'bg-green-500'
                            : crowd.level === 'medium'
                              ? 'bg-yellow-500'
                              : 'bg-red-500'
                          }`}
                        style={{ width: `${crowd.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-xs lg:text-sm text-gray-500 mt-4 lg:mt-6 italic">
                * Crowd levels are based on typical busy times. Actual conditions may vary.
              </p>
            </div>
          )}

          {/* Reviews Section */}
          {destination.reviews && destination.reviews.length > 0 && (
            <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-sm mb-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <MessageCircle className="w-5 h-5 lg:w-6 lg:h-6 text-[#FAA935]" />
                  <h2 className="text-xl lg:text-2xl">Reviews</h2>
                  <span className="text-sm lg:text-base text-gray-500">({destination.reviews.length})</span>
                </div>
                {destination.reviews.length > 2 && (
                  <button
                    onClick={() => setShowAllReviews(!showAllReviews)}
                    className="text-sm lg:text-base text-[#FAA935] hover:text-[#E89820]"
                  >
                    {showAllReviews ? 'Show Less' : 'View All'}
                  </button>
                )}
              </div>

              <div className="space-y-6">
                {(showAllReviews ? destination.reviews : destination.reviews.slice(0, 2)).map((review) => (
                  <div key={review.id} className="pb-6 border-b border-gray-100 last:border-0 last:pb-0">
                    <div className="flex items-start gap-4 mb-3">
                      <img
                        src={review.userAvatar}
                        alt={review.userName}
                        className="w-10 h-10 lg:w-12 lg:h-12 rounded-full object-cover flex-shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <h3 className="text-sm lg:text-base">{review.userName}</h3>
                          <span className="text-xs lg:text-sm text-gray-500">{review.date}</span>
                        </div>
                        <div className="flex items-center gap-1 mb-2">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-3 h-3 lg:w-4 lg:h-4 ${i < review.rating
                                  ? 'fill-yellow-400 text-yellow-400'
                                  : 'fill-gray-200 text-gray-200'
                                }`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-sm lg:text-base text-gray-600 leading-relaxed mb-3">
                      {review.comment}
                    </p>
                    {review.images && review.images.length > 0 && (
                      <div className="flex gap-2 overflow-x-auto scrollbar-hide">
                        {review.images.map((image, imageIndex) => {
                          // Find the global index of this image in all images
                          const globalIndex = getAllImages().findIndex(img => img === image);
                          return (
                            <img
                              key={imageIndex}
                              src={image}
                              alt={`Review image ${imageIndex + 1}`}
                              onClick={() => openGallery(globalIndex >= 0 ? globalIndex : 0)}
                              className="w-20 h-20 lg:w-24 lg:h-24 rounded-lg object-cover flex-shrink-0 cursor-pointer hover:opacity-90 transition-opacity"
                            />
                          );
                        })}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Add Review Form */}
          {showReviewForm ? (
            <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-sm mb-6 border-2 border-[#FAA935]">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <MessageCircle className="w-5 h-5 lg:w-6 lg:h-6 text-[#FAA935]" />
                  <h2 className="text-xl lg:text-2xl">Write Your Review</h2>
                </div>
                <button
                  onClick={() => {
                    setShowReviewForm(false);
                    setNewReview({ rating: 5, comment: '', images: [] });
                  }}
                  className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-4 lg:space-y-6">
                {/* Rating */}
                <div>
                  <p className="text-sm lg:text-base mb-2">Your Rating</p>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setNewReview({ ...newReview, rating: i + 1 })}
                        className="transition-transform hover:scale-110"
                      >
                        <Star
                          className={`w-8 h-8 lg:w-10 lg:h-10 cursor-pointer ${i < newReview.rating
                              ? 'fill-yellow-400 text-yellow-400'
                              : 'fill-gray-200 text-gray-200'
                            }`}
                        />
                      </button>
                    ))}
                    <span className="ml-2 text-sm lg:text-base text-gray-600">
                      ({newReview.rating} star{newReview.rating !== 1 ? 's' : ''})
                    </span>
                  </div>
                </div>

                {/* Comment */}
                <div>
                  <p className="text-sm lg:text-base mb-2">Your Review</p>
                  <textarea
                    value={newReview.comment}
                    onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                    className="w-full h-32 lg:h-40 p-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#FAA935] resize-none text-sm lg:text-base"
                    placeholder="Share your experience with others... What did you like? What could be improved?"
                  />
                </div>

                {/* Add Photos */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-sm lg:text-base">Add Photos (Optional)</p>
                    <button
                      onClick={() => fileInputRef.current?.click()}
                      className="flex items-center gap-2 px-4 py-2 bg-[#FAA935] text-white rounded-lg hover:bg-[#E89820] transition-colors"
                    >
                      <Camera className="w-4 h-4 lg:w-5 lg:h-5" />
                      <span className="text-sm lg:text-base">Add Photos</span>
                    </button>
                  </div>

                  <input
                    type="file"
                    ref={fileInputRef}
                    className="hidden"
                    multiple
                    accept="image/*"
                    onChange={(e) => {
                      const files = e.target.files;
                      if (files) {
                        const newImages = Array.from(files).map(file => URL.createObjectURL(file));
                        setNewReview({ ...newReview, images: [...newReview.images, ...newImages] });
                      }
                    }}
                  />

                  {newReview.images.length > 0 && (
                    <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-2">
                      {newReview.images.map((image, index) => (
                        <div key={index} className="relative flex-shrink-0">
                          <img
                            src={image}
                            alt={`Review image ${index + 1}`}
                            className="w-24 h-24 lg:w-32 lg:h-32 rounded-xl object-cover"
                          />
                          <button
                            onClick={() => setNewReview({
                              ...newReview,
                              images: newReview.images.filter((_, i) => i !== index)
                            })}
                            className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-red-600 transition-colors"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  onClick={() => {
                    if (newReview.comment.trim()) {
                      alert(`Review submitted!\nRating: ${newReview.rating} stars\nComment: ${newReview.comment}\nPhotos: ${newReview.images.length}`);
                      setShowReviewForm(false);
                      setNewReview({ rating: 5, comment: '', images: [] });
                    } else {
                      alert('Please write a comment before submitting.');
                    }
                  }}
                  disabled={!newReview.comment.trim()}
                  className="w-full bg-gradient-to-r from-[#FAA935] to-[#E89820] text-white py-4 lg:py-5 rounded-xl flex items-center justify-center gap-2 hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <MessageCircle className="w-5 h-5 lg:w-6 lg:h-6" />
                  <span className="text-base lg:text-lg">Submit Review</span>
                </button>
              </div>
            </div>
          ) : (
            /* Write Review Button */
            <button
              onClick={() => setShowReviewForm(true)}
              className="w-full bg-white rounded-2xl p-6 lg:p-8 shadow-sm mb-6 border-2 border-gray-200 hover:border-[#FAA935] transition-colors group"
            >
              <div className="flex items-center justify-center gap-3">
                <MessageCircle className="w-6 h-6 text-[#FAA935]" />
                <span className="text-lg lg:text-xl text-gray-700 group-hover:text-[#FAA935] transition-colors">
                  Write a Review
                </span>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 lg:w-5 lg:h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
              </div>
            </button>
          )}

          {/* Additional Info - Desktop Only */}
          <div className="hidden lg:grid lg:grid-cols-2 lg:gap-6 lg:mb-8 lg:p-6 lg:bg-gray-50 lg:rounded-2xl">
            <div>
              <p className="text-sm text-gray-500 mb-1">Check-in</p>
              <p className="text-base">After 2:00 PM</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-1">Check-out</p>
              <p className="text-base">Before 12:00 PM</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-1">Cancellation</p>
              <p className="text-base">Free cancellation</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-1">Max Guests</p>
              <p className="text-base">4 people</p>
            </div>
          </div>

          {/* Book Now Button */}
          <div className="sticky bottom-0 lg:relative bg-white border-t lg:border-0 p-5 lg:p-8 -mx-5 lg:mx-0">
            <div className="flex items-center gap-4">
              <div>
                <p className="text-xs lg:text-sm text-gray-500">
                  {destination.type === 'restaurant' || destination.type === 'cafe' ? 'Average per person' : 'Per night'}
                </p>
                <p className="text-2xl lg:text-3xl text-green-500">${destination.price}</p>
              </div>
              <button className="flex-1 bg-[#FAA935] text-white py-4 lg:py-5 rounded-2xl flex items-center justify-center gap-2 hover:bg-[#E89820] transition-colors shadow-lg hover:shadow-xl">
                <span className="lg:text-lg">
                  {destination.type === 'restaurant' || destination.type === 'cafe' ? 'Reserve Table' : 'Book Now'}
                </span>
                <ArrowLeft className="w-5 h-5 lg:w-6 lg:h-6 rotate-180" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <BottomNav onFavoritesClick={onFavoritesClick} onProfileClick={onProfileClick} onChatBotClick={onChatBotClick} />
    </div>
  );
}