import React from 'react';

interface TourCardProps {
  title: string;
  subtitle?: string;
  image: string;
  large?: boolean;
}

export function TourCard({ title, subtitle, image, large = false }: TourCardProps) {
  return (
    <div 
      className={`relative rounded-lg overflow-hidden shadow-lg group cursor-pointer ${
        large ? 'h-[280px] sm:h-[350px] md:h-[400px]' : 'h-[220px] sm:h-[250px] md:h-[280px]'
      }`}
    >
      <img 
        src={image} 
        alt={title}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      
      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 md:p-6 text-white">
        {subtitle && (
          <p 
            className="italic mb-1" 
            style={{ 
              fontSize: large ? 'clamp(20px, 5vw, 32px)' : 'clamp(16px, 4vw, 24px)',
              fontFamily: 'serif'
            }}
          >
            {title}
          </p>
        )}
        <h3 
          style={{ 
            fontSize: large ? 'clamp(24px, 6vw, 36px)' : 'clamp(20px, 5vw, 28px)',
            letterSpacing: '1px'
          }}
        >
          {subtitle || title}
        </h3>
      </div>

      {/* Hover Effect */}
      <div className="absolute inset-0 border-2 sm:border-4 border-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
    </div>
  );
}