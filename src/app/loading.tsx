"use client";

import { useState, useEffect } from "react";

export default function LoadingPage() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const darkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setIsDarkMode(darkMode);
  }, []);

  const bars = [0, 1, 2, 3, 4];

  return (
    <>
      <style>{`
        @keyframes breath {
          0%, 100% { transform: scaleY(0.25); }
          50% { transform: scaleY(1); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scalePulse {
          0%, 100% { transform: scale(0.9); }
          50% { transform: scale(1.1); }
        }
        .animate-breath {
          animation: breath 4s ease-in-out infinite;
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease-in-out forwards;
        }
        .animate-scalePulse {
          animation: scalePulse 10s ease-in-out infinite;
        }
      `}</style>

      <div className={`flex items-center justify-center h-screen ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="relative flex flex-col items-center space-y-6">
          {/* Loader */}
          <div className="flex justify-center space-x-2">
            {bars.map((i) => (
              <div
                key={i}
                className={`w-4 h-16 rounded origin-bottom animate-breath ${
                  isDarkMode ? 'bg-gradient-to-t from-purple-400 to-purple-300' : 'bg-gradient-to-t from-purple-600 to-purple-500'
                }`}
                style={{ animationDelay: `${i * 0.4}s` }}
              />
            ))}
          </div>

          {/* Text */}
          <p className={`text-lg md:text-xl font-semibold text-center animate-fadeIn ${isDarkMode ? 'text-gray-100' : 'text-gray-800'}`}>
            We are preparing your space...
          </p>
        </div>
        <div className="absolute inset-0 z-[-1] overflow-hidden">
          <div
            className={`absolute top-0 left-0 w-64 h-64 rounded-full blur-[100px] ${
              isDarkMode ? 'bg-purple-800/20' : 'bg-purple-200/30'
            } animate-scalePulse`}
            style={{ animationDuration: '8s' }}
          />
          <div
            className={`absolute top-0 right-0 w-80 h-80 rounded-full blur-[120px] ${
              isDarkMode ? 'bg-purple-700/25' : 'bg-purple-300/35'
            } animate-scalePulse`}
            style={{ animationDuration: '10s' }}
          />
          <div
            className={`absolute bottom-0 left-0 w-72 h-72 rounded-full blur-[110px] ${
              isDarkMode ? 'bg-purple-900/15' : 'bg-purple-100/25'
            } animate-scalePulse`}
            style={{ animationDuration: '12s' }}
          />
          <div
            className={`absolute bottom-0 right-0 w-56 h-56 rounded-full blur-[90px] ${
              isDarkMode ? 'bg-purple-600/30' : 'bg-purple-400/40'
            } animate-scalePulse`}
            style={{ animationDuration: '9s' }}
          />
        </div>
      </div>
    </>
  );
}