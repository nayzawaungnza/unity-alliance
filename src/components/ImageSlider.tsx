import  { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import slider1 from '@/assets/images/slider-1.jpg';

import slider2 from '@/assets/images/slider-2.jpg';
import slider3 from '@/assets/images/slider-3.webp';
const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const slides = [
    {
      image: slider1,
      title: 'Premium Tobacco Cultivation',
      description: 'Cultivating the finest tobacco leaves with traditional methods and modern techniques'
    },
    {
      image: slider2,
      title: 'Modern Cigarette Production',
      description: 'State-of-the-art manufacturing facilities ensuring quality and consistency'
    },
    {
      image: slider3,
      title: 'Quality Distribution Network',
      description: 'Ensuring premium cigarettes reach customers through our extensive distribution network'
    },
   
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      handleSlideChange('next');
    }, 5000); // 5-second intervals
    return () => clearInterval(timer);
  }, [slides.length]);

  const handleSlideChange = (direction: 'next' | 'prev' | number) => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    
    setTimeout(() => {
      if (direction === 'next') {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      } else if (direction === 'prev') {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      } else if (typeof direction === 'number') {
        setCurrentSlide(direction);
      }
      
      setTimeout(() => {
        setIsTransitioning(false);
      }, 800); // Allow time for fade animation to complete
    }, 100);
  };

  return (
    <div className="relative h-96 md:h-[500px] overflow-hidden rounded-lg shadow-2xl">
      {/* Image Container */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentSlide 
                ? 'opacity-100 scale-100' 
                : 'opacity-0 scale-105'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
      
      {/* Content overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/70 flex items-center justify-center z-30">
        <div className="text-center text-white px-4 max-w-4xl">
          <h3 className={`text-2xl md:text-4xl font-bold mb-4 transition-all duration-1000 ease-out ${
            !isTransitioning ? 'transform translate-y-0 opacity-100' : 'transform translate-y-8 opacity-0'
          }`}>
            {slides[currentSlide].title}
          </h3>
          <p className={`text-lg md:text-xl transition-all duration-1000 ease-out delay-300 ${
            !isTransitioning ? 'transform translate-y-0 opacity-100' : 'transform translate-y-8 opacity-0'
          }`}>
            {slides[currentSlide].description}
          </p>
        </div>
      </div>

      {/* Navigation buttons */}
      <button
        onClick={() => handleSlideChange('prev')}
        disabled={isTransitioning}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 disabled:opacity-50 disabled:cursor-not-allowed text-white p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-lg z-40"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={() => handleSlideChange('next')}
        disabled={isTransitioning}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 disabled:opacity-50 disabled:cursor-not-allowed text-white p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-lg z-40"
      >
        <ChevronRight size={24} />
      </button>

      {/* Slide indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 z-40">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => handleSlideChange(index)}
            disabled={isTransitioning}
            className={`w-3 h-3 rounded-full transition-all duration-300 disabled:cursor-not-allowed ${
              index === currentSlide 
                ? 'bg-tobacco-500 scale-125 shadow-lg shadow-tobacco-500/50' 
                : 'bg-white/50 hover:bg-white/75 hover:scale-110'
            }`}
          />
        ))}
      </div>

      {/* Loading indicator during transition */}
      {isTransitioning && (
        <div className="absolute top-4 left-4 bg-tobacco-600/90 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium z-40 animate-pulse border border-tobacco-400/50">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-white rounded-full animate-bounce" />
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageSlider;