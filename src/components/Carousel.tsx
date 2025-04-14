
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Slide {
  image: string;
  title: string;
  description: string;
}

interface CarouselProps {
  slides: Slide[];
}

const Carousel: React.FC<CarouselProps> = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[400px] overflow-hidden">
      {slides.map((slide, index) => (
        <div 
          key={index}
          className={`absolute w-full h-full transition-opacity duration-1000 ease-in-out
                     ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
        >
          <img 
            src={slide.image} 
            alt={slide.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white w-4/5 bg-black/20 p-5 rounded-lg font-serif">
            <h2 className="text-4xl font-bold capitalize">{slide.title}</h2>
            <p className="text-xl font-light mt-2">{slide.description}</p>
            <Button 
              variant="outline" 
              className="mt-4 text-white border-white hover:bg-white hover:text-black transition-colors"
            >
              MÁS INFO
            </Button>
          </div>
        </div>
      ))}

      <button 
        onClick={prevSlide}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-transparent text-white border-none p-2 cursor-pointer text-2xl opacity-60 hover:opacity-100 transition-opacity"
      >
        <ChevronLeft className="h-8 w-8" />
      </button>
      <button 
        onClick={nextSlide}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-transparent text-white border-none p-2 cursor-pointer text-2xl opacity-60 hover:opacity-100 transition-opacity"
      >
        <ChevronRight className="h-8 w-8" />
      </button>
    </div>
  );
};

export default Carousel;
