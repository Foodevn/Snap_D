import { X, Camera, Image, Upload } from 'lucide-react';
import { useState, useRef } from 'react';

interface ImageSearchModalProps {
  onClose: () => void;
}

export function ImageSearchModal({ onClose }: ImageSearchModalProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isSearching, setIsSearching] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const cameraInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSearch = () => {
    setIsSearching(true);
    // Simulate search - in real app, this would call an image recognition API
    setTimeout(() => {
      setIsSearching(false);
      alert('Image search feature coming soon! This will identify places from your photos.');
      onClose();
    }, 2000);
  };

  const isMobile = typeof window !== 'undefined' && window.innerWidth < 1024;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
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
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-100 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Search Button */}
              <button
                onClick={handleSearch}
                disabled={isSearching}
                className="w-full bg-gradient-to-r from-[#FAA935] to-[#E89820] text-white py-4 lg:py-5 rounded-xl flex items-center justify-center gap-3 hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSearching ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span className="text-base lg:text-lg">Searching...</span>
                  </>
                ) : (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 lg:w-6 lg:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <span className="text-base lg:text-lg">Search Similar Places</span>
                  </>
                )}
              </button>

              <button
                onClick={() => setSelectedImage(null)}
                className="w-full text-gray-600 py-3 text-sm lg:text-base hover:text-gray-800 transition-colors"
              >
                Choose Different Image
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
