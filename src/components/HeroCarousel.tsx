"use client"

import React, { useState, useEffect, JSX } from "react"

interface Slide {
  image: string
  heading: string
  subheading: string
  buttonText: string
}

export default function HeroCarousel(): JSX.Element {
  const [currentSlide, setCurrentSlide] = useState<number>(0)
  const [isAnimating, setIsAnimating] = useState<boolean>(false)
  const [direction, setDirection] = useState<'left' | 'right'>('right')

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
  ]

  const handleSlideChange = (newSlide: number, slideDirection: 'left' | 'right') => {
    if (isAnimating) return
    setIsAnimating(true)
    setDirection(slideDirection)
    setCurrentSlide(newSlide)
    setTimeout(() => setIsAnimating(false), 750) // Match this with animation duration
  }

  const nextSlide = () => {
    const newSlide = (currentSlide + 1) % slides.length
    handleSlideChange(newSlide, 'right')
  }

  const prevSlide = () => {
    const newSlide = (currentSlide - 1 + slides.length) % slides.length
    handleSlideChange(newSlide, 'left')
  }

  const goToSlide = (index: number) => {
    const direction = index > currentSlide ? 'right' : 'left'
    handleSlideChange(index, direction)
  }

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000)
    return () => clearInterval(interval)
  }, [currentSlide])

  const getSlideClassName = (index: number) => {
    if (index === currentSlide) {
      return "opacity-100 translate-x-0 scale-100 z-20"
    }
    
    if (direction === 'right') {
      return index < currentSlide 
        ? "opacity-0 -translate-x-full scale-90 z-10" 
        : "opacity-0 translate-x-full scale-90 z-10"
    } else {
      return index < currentSlide 
        ? "opacity-0 translate-x-full scale-90 z-10" 
        : "opacity-0 -translate-x-full scale-90 z-10"
    }
  }

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-all duration-700 ease-in-out transform
            ${getSlideClassName(index)}`}
        >
          <div
            className="relative w-full h-full bg-cover bg-center transform transition-transform duration-700"
            style={{ backgroundImage: `url('${slide.image}')` }}
          >
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6">
              <h1 
                className={`text-5xl lg:text-6xl font-bold text-white transform transition-all duration-700 delay-100
                  ${currentSlide === index ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
              >
                {slide.heading}
              </h1>
              <p 
                className={`text-xl text-white/90 mt-4 lg:mt-6 max-w-3xl transform transition-all duration-700 delay-200
                  ${currentSlide === index ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
              >
                {slide.subheading}
              </p>
              <button 
                className={`mt-8 bg-[#9333EA] text-white hover:bg-[#9333EA]/90 py-3 px-6 rounded-lg shadow-lg
                  transform transition-all duration-700 delay-300 hover:scale-105
                  ${currentSlide === index ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
              >
                {slide.buttonText}
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 p-4 rounded-full
          transform transition-transform hover:scale-110 hover:-translate-x-1"
        disabled={isAnimating}
      >
        <span className="text-white text-2xl">←</span>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 p-4 rounded-full
          transform transition-transform hover:scale-110 hover:translate-x-1"
        disabled={isAnimating}
      >
        <span className="text-white text-2xl">→</span>
      </button>

      {/* Navigation Dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 transform
              ${currentSlide === index 
                ? 'bg-[#9333EA] scale-125' 
                : 'bg-white scale-100 hover:scale-110'}`}
            onClick={() => goToSlide(index)}
            disabled={isAnimating}
          />
        ))}
      </div>
    </div>
  )
}