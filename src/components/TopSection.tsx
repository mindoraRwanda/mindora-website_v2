"use client";

import { useRouter } from "next/router";
import { cn } from "@/lib/utils";

interface TopSectionProps {
  backgroundImage: string;
  title: string;
  description: string;
}

export default function TopSection({
  backgroundImage,
  title,
  description,
}: TopSectionProps) {
  return (
    <div className="relative w-full h-[60vh] md:h-[70vh] lg:h-[80vh] overflow-hidden">
  {/* Background Image */}
  <div
    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
    style={{
      backgroundImage: `url(${backgroundImage})`,
    }}
  >
    {/* Overlay */}
    <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/80" />
  </div>

  {/* Creative Shapes */}
  {/* <div className="absolute top-0 left-0 w-64 h-64 bg-purple-500 rounded-full blur-2xl opacity-10 animate-pulse"></div>
  <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500 rounded-full blur-3xl opacity-20"></div> */}

  {/* Content */}
  <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
    <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight drop-shadow-lg">
      {title}
    </h1>
    <p className="mt-4 text-lg md:text-xl lg:text-2xl max-w-2xl drop-shadow-md">
      {description}
    </p>
  </div>
 </div>

  );
}
