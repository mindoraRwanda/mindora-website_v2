"use client";

import { useState, useEffect } from "react";

export default function LoadingPage() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const darkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setIsDarkMode(darkMode);
  }, []);

  return (
    <div
      className={`flex items-center justify-center h-screen ${
        isDarkMode
          ? "bg-gray-900 text-gray-100"
          : "bg-gradient-to-br from-purple-500 to-indigo-700 text-white"
      }`}
    >
      <div className="flex flex-col items-center space-y-6">
        <div className="relative w-24 h-24">
          <div
            className={`absolute w-full h-full border-4 border-t-transparent rounded-full animate-spin ${
              isDarkMode ? "border-gray-700" : "border-white"
            }`}
          ></div>
          <div
            className={`absolute w-3/4 h-3/4 border-4 border-t-transparent rounded-full animate-spin-slow ${
              isDarkMode ? "border-gray-600" : "border-indigo-300"
            }`}
          ></div>
        </div>


        <p className="text-lg md:text-xl font-semibold">
          Loading<span className="animate-dots">...</span>
        </p>
      </div>

      
      <div className="absolute inset-0 z-[-1] overflow-hidden">
        <div
          className={`absolute top-1/4 left-1/3 w-80 h-80 rounded-full blur-[150px] ${
            isDarkMode ? "bg-purple-900/20" : "bg-indigo-400/30"
          }`}
        ></div>
        <div
          className={`absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full blur-[200px] ${
            isDarkMode ? "bg-indigo-800/10" : "bg-blue-500/20"
          }`}
        ></div>
      </div>
    </div>
  );
}
