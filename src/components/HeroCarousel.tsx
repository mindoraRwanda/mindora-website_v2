"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import Link from "next/link";
import { ArrowRight, Sparkles, CheckCircle } from "lucide-react";

interface Slide {
  image: string;
  heading: string;
  subheading: string;
  buttonText: string;
  href: string;
}

export default function HeroCarousel() {
  const slides: Slide[] = [
    {
      image: "/images/slide1.jpg",
      heading: "Transform Your Mental Health Journey",
      subheading: "Experience the future of mental wellness with AI-powered, personalized support designed specifically for your unique needs and goals.",
      buttonText: "Start Your Journey",
      href: "/demo",
    },
    {
      image: "/images/slide2.jpg",
      heading: "Join 10,000+ Users Worldwide",
      subheading: "Become part of a global community that trusts MindoraHealth for comprehensive, accessible, and effective mental health support.",
      buttonText: "Explore Platform",
      href: "/about",
    },
    {
      image: "/images/slide3.jpg",
      heading: "24/7 Professional Support",
      subheading: "Access expert mental health resources, crisis support, and therapeutic tools whenever you need them, anywhere in the world.",
      buttonText: "Get Support Now",
      href: "/contact",
    },
  ];

  return (
    <section className="relative w-full h-screen overflow-hidden">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        navigation={{
          nextEl: '.swiper-button-next-custom',
          prevEl: '.swiper-button-prev-custom',
        }}
        pagination={{
          clickable: true,
          bulletClass: 'swiper-pagination-bullet-custom',
          bulletActiveClass: 'swiper-pagination-bullet-active-custom',
        }}
        className="w-full h-full hero-swiper"
        loop={true}
        speed={1000}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.heading}>
            <div
              className="relative w-full h-full bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url('${slide.image}')` }}
            >
              {/* Enhanced Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary/60 to-primary/90" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

              {/* Animated Background Elements */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-primary-foreground/20 rounded-full animate-ping delay-0"></div>
                <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-primary-foreground/30 rounded-full animate-ping delay-1000"></div>
                <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-primary-foreground/25 rounded-full animate-ping delay-2000"></div>
                <div className="absolute bottom-1/3 right-1/4 w-5 h-5 bg-primary-foreground/15 rounded-full animate-ping delay-500"></div>
              </div>

              {/* Content Container */}
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6 relative z-10">
                <div className="max-w-6xl mx-auto">
                  {/* Premium Badge */}
                  <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm text-primary-foreground px-4 py-2 rounded-full text-sm font-bold mb-8 border border-primary-foreground/20">
                    <CheckCircle className="w-4 h-4 text-green-300" />
                    <span>Trusted by 10,000+ Users</span>
                  </div>

                  {/* Main Heading */}
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground drop-shadow-2xl mb-6 leading-tight">
                    {slide.heading}
                  </h1>

                  {/* Subheading */}
                  <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto leading-relaxed">
                    {slide.subheading}
                  </p>

                  {/* Enhanced CTA Button */}
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Link
                      href={slide.href}
                      className="group relative bg-background text-foreground hover:bg-background/90 px-12 py-6 rounded-2xl text-xl font-bold shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 overflow-hidden inline-flex items-center gap-3"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <span className="relative z-10">{slide.buttonText}</span>
                      <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300 relative z-10" />
                    </Link>

                    <Link
                      href="/about"
                      className="group border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:border-primary-foreground/50 px-12 py-6 rounded-2xl text-xl font-bold backdrop-blur-sm transition-all duration-500 hover:scale-105 inline-flex items-center gap-3"
                    >
                      <span>Learn More</span>
                      <Sparkles className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                    </Link>
                  </div>

                  {/* Trust Indicators */}
                  <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-16 text-primary-foreground/80">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-300" />
                      <span className="font-semibold">HIPAA Compliant</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-300" />
                      <span className="font-semibold">24/7 Support</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-300" />
                      <span className="font-semibold">AI-Powered</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation */}
      <div className="swiper-button-prev-custom absolute left-8 top-1/2 -translate-y-1/2 z-20 w-14 h-14 bg-primary-foreground/10 backdrop-blur-sm rounded-full flex items-center justify-center text-primary-foreground hover:bg-primary-foreground/20 transition-all duration-300 cursor-pointer group">
        <ArrowRight className="w-6 h-6 rotate-180 group-hover:scale-110 transition-transform" />
      </div>
      <div className="swiper-button-next-custom absolute right-8 top-1/2 -translate-y-1/2 z-20 w-14 h-14 bg-primary-foreground/10 backdrop-blur-sm rounded-full flex items-center justify-center text-primary-foreground hover:bg-primary-foreground/20 transition-all duration-300 cursor-pointer group">
        <ArrowRight className="w-6 h-6 group-hover:scale-110 transition-transform" />
      </div>


    </section>
  );
}