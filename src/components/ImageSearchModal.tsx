import { X, Camera, Image, Upload, MapPin, Star } from 'lucide-react';
import { useState, useRef } from 'react';
import { Destination } from "../app/app/page";
interface ImageSearchModalProps {
  onClose: () => void;
  destinations: Destination[];
  onDestinationClick: (destination: Destination) => void;
}

// Image analysis keywords mapping
const imageKeywords: Record<string, string[]> = {
  // Nature & Landscapes
  'lake': ['lake', 'water', 'pond', 'reflection', 'blue'],
  'mountain': ['mountain', 'hill', 'peak', 'summit', 'hiking', 'trek', 'langbiang'],
  'forest': ['forest', 'pine', 'tree', 'green', 'nature', 'wood'],
  'waterfall': ['waterfall', 'falls', 'cascade', 'prenn'],
  'flower': ['flower', 'garden', 'bloom', 'floral', 'colorful'],
  'sunrise': ['sunrise', 'sunset', 'dawn', 'morning', 'golden'],

  // Places
  'cafe': ['cafe', 'coffee', 'drink', 'cup', 'cozy', 'brew'],
  'restaurant': ['restaurant', 'food', 'dining', 'kitchen', 'meal', 'hotpot', 'bbq'],
  'hotel': ['hotel', 'room', 'bed', 'accommodation', 'boutique', 'eco'],

  // Activities
  'adventure': ['adventure', 'hiking', 'outdoor', 'trek', 'explore'],
  'scenic': ['scenic', 'view', 'panorama', 'landscape', 'picnic'],
};

// Map destination types and names to keywords
const getDestinationKeywords = (dest: Destination): string[] => {
  const keywords: string[] = [];

  // Add type
  if (dest.type) {
    keywords.push(dest.type);
  }

  // Add name words
  const nameWords = dest.name.toLowerCase().split(' ');
  keywords.push(...nameWords);

  // Add description words
  if (dest.description) {
    const descWords = dest.description.toLowerCase().split(' ');
    keywords.push(...descWords);
  }

  // Add facilities
  if (dest.facilities) {
    keywords.push(...dest.facilities.map(f => f.toLowerCase()));
  }

  return keywords;
};

// Analyze image using canvas to extract colors
const analyzeImage = (imageData: string): Promise<{ colors: string[], brightness: string }> => {
  return new Promise((resolve) => {
    const img = new window.Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');

      if (!ctx) {
        resolve({ colors: [], brightness: 'medium' });
        return;
      }

      // Resize for faster analysis
      const size = 50;
      canvas.width = size;
      canvas.height = size;
      ctx.drawImage(img, 0, 0, size, size);

      const imageData = ctx.getImageData(0, 0, size, size);
      const data = imageData.data;

      let totalR = 0, totalG = 0, totalB = 0;
      let greenCount = 0, blueCount = 0, brownCount = 0, brightCount = 0;

      for (let i = 0; i < data.length; i += 4) {
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];

        totalR += r;
        totalG += g;
        totalB += b;

        // Detect dominant colors
        if (g > r && g > b && g > 100) greenCount++;
        if (b > r && b > g && b > 100) blueCount++;
        if (r > 100 && g > 60 && g < 150 && b < 100) brownCount++;
        if (r > 200 && g > 200 && b > 200) brightCount++;
      }

      const pixelCount = data.length / 4;
      const avgBrightness = (totalR + totalG + totalB) / (3 * pixelCount);

      const colors: string[] = [];
      if (greenCount > pixelCount * 0.2) colors.push('green');
      if (blueCount > pixelCount * 0.15) colors.push('blue');
      if (brownCount > pixelCount * 0.1) colors.push('brown');
      if (brightCount > pixelCount * 0.3) colors.push('bright');

      const brightness = avgBrightness > 170 ? 'bright' : avgBrightness > 85 ? 'medium' : 'dark';

      resolve({ colors, brightness });
    };

    img.onerror = () => resolve({ colors: [], brightness: 'medium' });
    img.src = imageData;
  });
};

// Score destination based on image analysis
const scoreDestination = (
  dest: Destination,
  colors: string[],
  brightness: string
): number => {
  let score = 0;
  const keywords = getDestinationKeywords(dest);
  const keywordsLower = keywords.join(' ').toLowerCase();

  // Color-based scoring
  if (colors.includes('green')) {
    if (keywordsLower.includes('forest') || keywordsLower.includes('pine') ||
      keywordsLower.includes('garden') || keywordsLower.includes('nature') ||
      keywordsLower.includes('tree') || keywordsLower.includes('outdoor')) {
      score += 30;
    }
    if (dest.type === 'location' || dest.type === 'adventure') score += 15;
  }

  if (colors.includes('blue')) {
    if (keywordsLower.includes('lake') || keywordsLower.includes('water') ||
      keywordsLower.includes('sky') || keywordsLower.includes('pool')) {
      score += 30;
    }
  }

  if (colors.includes('brown')) {
    if (keywordsLower.includes('coffee') || keywordsLower.includes('cafe') ||
      keywordsLower.includes('wood') || keywordsLower.includes('mountain')) {
      score += 20;
    }
    if (dest.type === 'cafe') score += 10;
  }

  if (colors.includes('bright')) {
    if (keywordsLower.includes('flower') || keywordsLower.includes('garden') ||
      keywordsLower.includes('sunny') || keywordsLower.includes('view')) {
      score += 15;
    }
  }

  // Brightness-based scoring
  if (brightness === 'bright' && (dest.type === 'location' || keywordsLower.includes('sunrise'))) {
    score += 10;
  }
  if (brightness === 'dark' && (dest.type === 'restaurant' || dest.type === 'cafe')) {
    score += 10;
  }

  // Base score by rating
  score += dest.rating * 2;

  return score;
};

export function ImageSearchModal({ onClose, destinations, onDestinationClick }: ImageSearchModalProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isSearching, setIsSearching] = useState(false);
  const [searchResults, setSearchResults] = useState<Destination[]>([]);
  const [showResults, setShowResults] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const cameraInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target?.result as string);
        setShowResults(false);
        setSearchResults([]);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSearch = async () => {
    if (!selectedImage) return;

    setIsSearching(true);

    try {
      // Analyze the uploaded image
      const analysis = await analyzeImage(selectedImage);

      // Score all destinations
      const scoredDestinations = destinations.map(dest => ({
        destination: dest,
        score: scoreDestination(dest, analysis.colors, analysis.brightness)
      }));

      // Sort by score and get top results
      scoredDestinations.sort((a, b) => b.score - a.score);
      const topResults = scoredDestinations.slice(0, 6).map(s => s.destination);

      // Simulate a small delay for UX
      await new Promise(resolve => setTimeout(resolve, 1500));

      setSearchResults(topResults);
      setShowResults(true);
    } catch (error) {
      console.error('Error analyzing image:', error);
      // Fallback: show random destinations
      const shuffled = [...destinations].sort(() => 0.5 - Math.random());
      setSearchResults(shuffled.slice(0, 6));
      setShowResults(true);
    }

    setIsSearching(false);
  };

  const isMobile = typeof window !== 'undefined' && window.innerWidth < 1024;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/5 backdrop-blur-sm p-4">
      <div className="bg-white rounded-2xl w-full max-w-md lg:max-w-lg overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between p-5 lg:p-6 border-b">
          <h2 className="text-lg lg:text-xl">Search by Image</h2>
          <button
            onClick={onClose}
            className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
          >
            <X className="w-5 h-5 lg:w-6 lg:h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 lg:p-8">
          {!selectedImage ? (
            <div className="space-y-4">
              <p className="text-sm lg:text-base text-gray-600 text-center mb-6">
                Upload or capture an image to find similar destinations
              </p>

              {/* Desktop - Upload Only */}
              {!isMobile && (
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="w-full bg-gradient-to-r from-[#FAA935] to-[#E89820] text-white py-4 lg:py-5 rounded-xl flex items-center justify-center gap-3 hover:shadow-lg transition-all"
                >
                  <Upload className="w-5 h-5 lg:w-6 lg:h-6" />
                  <span className="text-base lg:text-lg">Upload Image</span>
                </button>
              )}

              {/* Mobile - Camera + Upload */}
              {isMobile && (
                <>
                  <button
                    onClick={() => cameraInputRef.current?.click()}
                    className="w-full bg-gradient-to-r from-[#FAA935] to-[#E89820] text-white py-4 rounded-xl flex items-center justify-center gap-3 hover:shadow-lg transition-all"
                  >
                    <Camera className="w-5 h-5" />
                    <span className="text-base">Take Photo</span>
                  </button>

                  <div className="flex items-center gap-3">
                    <div className="flex-1 h-px bg-gray-300"></div>
                    <span className="text-sm text-gray-500">OR</span>
                    <div className="flex-1 h-px bg-gray-300"></div>
                  </div>

                  <button
                    onClick={() => fileInputRef.current?.click()}
                    className="w-full bg-white border-2 border-[#FAA935] text-[#FAA935] py-4 rounded-xl flex items-center justify-center gap-3 hover:bg-orange-50 transition-all"
                  >
                    <Image className="w-5 h-5" />
                    <span className="text-base">Choose from Gallery</span>
                  </button>
                </>
              )}

              {/* Hidden File Inputs */}
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileSelect}
                className="hidden"
              />
              <input
                ref={cameraInputRef}
                type="file"
                accept="image/*"
                capture="environment"
                onChange={handleFileSelect}
                className="hidden"
              />

              <div className="mt-6 p-4 bg-orange-50 rounded-xl">
                <p className="text-xs lg:text-sm text-gray-600 text-center">
                  <strong className="text-[#FAA935]">Tip:</strong> Take a photo of a place or upload an image to find similar destinations nearby
                </p>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              {/* Image Preview */}
              <div className="relative w-full aspect-video bg-gray-100 rounded-xl overflow-hidden">
                <img
                  src={selectedImage}
                  alt="Selected"
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => {
                    setSelectedImage(null);
                    setShowResults(false);
                    setSearchResults([]);
                  }}
                  className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-100 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Search Results */}
              {showResults && searchResults.length > 0 ? (
                <div className="space-y-3">
                  <h3 className="text-sm font-medium text-gray-700">
                    Found {searchResults.length} similar places
                  </h3>
                  <div className="max-h-64 overflow-y-auto space-y-2 pr-1">
                    {searchResults.map((dest) => (
                      <button
                        key={dest.id}
                        onClick={() => {
                          onDestinationClick(dest);
                          onClose();
                        }}
                        className="w-full flex items-center gap-3 p-3 bg-gray-50 hover:bg-gray-100 rounded-xl transition-colors text-left"
                      >
                        <img
                          src={dest.image}
                          alt={dest.name}
                          className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
                        />
                        <div className="flex-1 min-w-0">
                          <p className="font-medium text-gray-900 truncate">{dest.name}</p>
                          <div className="flex items-center gap-1 text-xs text-gray-500 mt-1">
                            <MapPin className="w-3 h-3" />
                            <span className="truncate">{dest.location}</span>
                          </div>
                          <div className="flex items-center gap-2 mt-1">
                            <div className="flex items-center gap-1">
                              <Star className="w-3 h-3 fill-[#FAA935] text-[#FAA935]" />
                              <span className="text-xs font-medium">{dest.rating}</span>
                            </div>
                            <span className="text-xs px-2 py-0.5 bg-gray-200 rounded-full capitalize">
                              {dest.type}
                            </span>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                  <button
                    onClick={() => {
                      setShowResults(false);
                      setSearchResults([]);
                    }}
                    className="w-full text-[#FAA935] py-2 text-sm hover:text-[#E89820] transition-colors"
                  >
                    Search Again
                  </button>
                </div>
              ) : (
                <>
                  {/* Search Button */}
                  <button
                    onClick={handleSearch}
                    disabled={isSearching}
                    className="w-full bg-gradient-to-r from-[#FAA935] to-[#E89820] text-white py-4 lg:py-5 rounded-xl flex items-center justify-center gap-3 hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSearching ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span className="text-base lg:text-lg">Analyzing image...</span>
                      </>
                    ) : (
                      <>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 lg:w-6 lg:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                        <span className="text-base lg:text-lg">Find Similar Places</span>
                      </>
                    )}
                  </button>

                  <button
                    onClick={() => {
                      setSelectedImage(null);
                      setShowResults(false);
                      setSearchResults([]);
                    }}
                    className="w-full text-gray-600 py-3 text-sm lg:text-base hover:text-gray-800 transition-colors"
                  >
                    Choose Different Image
                  </button>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
