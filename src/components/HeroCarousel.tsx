"use client";

import React, { useState, useEffect } from "react";

interface Slide {
  image: string;
  heading: string;
  subheading: string;
  buttonText: string;
}

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState<'left' | 'right'>('right');

  const slides: Slide[] = [
    {
      image: "/images/slide1.jpg",
      heading: "Welcome to Mindora Africa",
      subheading: "Discover how we're shaping the future of mental health with AI-powered solutions.",
      buttonText: "Learn More",
    },
    {
      image: "/images/slide2.jpg",
      heading: "Empowering Your Journey",
      subheading: "Join thousands who trust us to enhance their mental well-being with personalized tools and resources.",
      buttonText: "Explore Features",
    },
    {
      image: "/images/slide3.jpg",
      heading: "Take Control of Your Mental Health",
      subheading: "Our app provides tools and guidance for better mental health, anytime, anywhere.",
      buttonText: "Download App",
    },
  ];

  // Create a wrapped array for infinite scroll effect
  const wrappedSlides = [...slides, slides[0]];

  const handleSlideChange = (newSlide: number, slideDirection: 'left' | 'right') => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection(slideDirection);
    
    // Handle the wrap-around case
    if (newSlide >= slides.length) {
      setCurrentSlide(slides.length);
      setTimeout(() => {
        setIsAnimating(false);
        setCurrentSlide(0);
      }, 700);
    } else if (newSlide < 0) {
      setCurrentSlide(-1);
      setTimeout(() => {
        setIsAnimating(false);
        setCurrentSlide(slides.length - 1);
      }, 700);
    } else {
      setCurrentSlide(newSlide);
      setTimeout(() => setIsAnimating(false), 700);
    }
  };

  const nextSlide = () => {
    handleSlideChange(currentSlide + 1, 'right');
  };

  const prevSlide = () => {
    handleSlideChange(currentSlide - 1, 'left');
  };

  const goToSlide = (index: number) => {
    if (index === currentSlide) return;
    const slideDirection = index > currentSlide ? 'right' : 'left';
    handleSlideChange(index, slideDirection);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  const getSlideClassName = (index: number) => {
    if (index === currentSlide) {
      return "opacity-100 translate-x-0 scale-100 z-20";
    }

    if (direction === 'right') {
      if (currentSlide === slides.length && index === 0) {
        return "opacity-100 translate-x-0 scale-100 z-10";
      }
      return index < currentSlide
        ? "opacity-0 -translate-x-full scale-90 z-10"
        : "opacity-0 translate-x-full scale-90 z-10";
    } else {
      if (currentSlide === -1 && index === slides.length - 1) {
        return "opacity-100 translate-x-0 scale-100 z-10";
      }
      return index < currentSlide
        ? "opacity-0 translate-x-full scale-90 z-10"
        : "opacity-0 -translate-x-full scale-90 z-10";
    }
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {wrappedSlides.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-all duration-700 ease-in-out transform ${getSlideClassName(index)}`}
        >
          <div className="relative w-full h-full bg-cover bg-center" style={{ backgroundImage: `url('${slide.image}')` }}>
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6">
              <h1 className={`text-5xl lg:text-6xl font-bold text-white transform transition-all duration-700 ${currentSlide === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                {slide.heading}
              </h1>
              <p className={`text-xl text-white/90 mt-4 lg:mt-6 max-w-3xl transform transition-all duration-700 ${currentSlide === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                {slide.subheading}
              </p>
              <button className={`mt-8 bg-[#9333EA] text-white py-3 px-6 rounded-lg shadow-lg transition-all duration-700 ${currentSlide === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                {slide.buttonText}
              </button>
            </div>
          </div>
        </div>
      ))}

      <button 
        onClick={prevSlide} 
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 p-4 rounded-full transition-all duration-300"
        disabled={isAnimating}
      >
        ←
      </button>
      <button 
        onClick={nextSlide} 
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 p-4 rounded-full transition-all duration-300"
        disabled={isAnimating}
      >
        →
      </button>

      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSlide === index ? 'bg-[#9333EA]' : 'bg-white'}`}
            onClick={() => goToSlide(index)}
            disabled={isAnimating}
          />
        ))}
      </div>
    </div>
  );
}