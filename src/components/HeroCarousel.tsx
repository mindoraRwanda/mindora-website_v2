"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface Slide {
  image: string;
  heading: string;
  subheading: string;
  buttonText: string;
}

export default function HeroCarousel() {
  const slides: Slide[] = [
    {
      image: "/images/slide1.jpg",
      heading: "Welcome to Mindora Health",
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

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gray-900">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        navigation
        pagination={{ clickable: true }}
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url('${slide.image}')` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/20" />
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6">
                <h1 className="text-5xl lg:text-6xl font-extrabold text-white drop-shadow-md">{slide.heading}</h1>
                <p className="text-lg lg:text-xl text-white/90 mt-4 lg:mt-6 max-w-3xl leading-relaxed">{slide.subheading}</p>
                <button className="mt-8 bg-purple-600 hover:bg-purple-500 text-white py-3 px-8 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                  {slide.buttonText}
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
