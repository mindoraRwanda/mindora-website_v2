"use client";

import Link from "next/link";
import { useState, useEffect } from "react";


export default function NotFound() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const darkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setIsDarkMode(darkMode);
  }, []);

  return (
    <div
      className={`relative flex flex-col items-center justify-center h-screen transition-all ${
        isDarkMode
          ? "bg-gray-900 text-gray-100"
          : "bg-gradient-to-br from-purple-600 via-blue-500 to-indigo-800 text-white"
      }`}
    >
      <h1
        className={`text-9xl font-bold tracking-widest drop-shadow-lg transition-all ${
          isDarkMode ? "text-gray-100" : "text-white"
        }`}
      >
        404
      </h1>
      <p className="text-xl md:text-xl mt-4 mb-8 text-center">
        The page you&apos;re looking for doesn&apos;t exist. <br />
        Maybe it got lost in the void!
      </p>

      <Link href="/" className={`px-6 py-3 font-semibold text-lg rounded-lg shadow-md hover:scale-105 transform transition-all duration-300 ${
            isDarkMode
              ? "bg-gray-800 text-gray-100 hover:bg-gray-700"
              : "bg-white text-indigo-800 hover:bg-gray-100"
          }`}
        >
          Go Back Home
        
      </Link>

      <div className="absolute inset-0 z-[-1] overflow-hidden">
        <div
          className={`absolute top-1/3 left-1/4 w-96 h-96 rounded-full blur-[150px] transition-all duration-500 ${
            isDarkMode ? "bg-purple-600/20" : "bg-purple-400/30"
          }`}
        ></div>
        <div
          className={`absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-[150px] transition-all duration-500 ${
            isDarkMode ? "bg-blue-700/10" : "bg-blue-400/20"
          }`}
        ></div>
      </div>

      <div className="absolute top-10 right-10 animate-float">
        <svg
          className={`w-16 h-16 ${
            isDarkMode ? "text-gray-500" : "text-indigo-300"
          }`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 10h11M9 21V3m0 18l-6-6m6 6l6-6"
          />
        </svg>
      </div>
      <div className="absolute bottom-10 left-10 animate-float delay-200">
        <svg
          className={`w-12 h-12 ${
            isDarkMode ? "text-gray-600" : "text-indigo-200"
          }`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 4v16m8-8H4"
          />
        </svg>
      </div>


      {isDarkMode && (
        <div className="absolute inset-0 z-[-2] overflow-hidden">
          <div className="absolute w-[2px] h-[2px] bg-gray-100 rounded-full top-1/3 left-1/4 animate-twinkle"></div>
          <div className="absolute w-[2px] h-[2px] bg-gray-100 rounded-full top-1/2 right-1/3 animate-twinkle"></div>
          <div className="absolute w-[3px] h-[3px] bg-gray-300 rounded-full bottom-1/3 left-1/3 animate-twinkle"></div>
          <div className="absolute w-[1px] h-[1px] bg-gray-400 rounded-full top-1/4 right-1/5 animate-twinkle"></div>
        </div>
      )}
    </div>
  );
}
