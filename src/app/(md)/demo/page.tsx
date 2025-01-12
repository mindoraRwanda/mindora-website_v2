"use client";

import { useState, useEffect } from "react";
import { Mail, Building2, MessageSquare, User, Sparkles } from "lucide-react";

export default function DemoRequestPage() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    message: ""
  });

  useEffect(() => {
    const darkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setIsDarkMode(darkMode);

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e: { matches: boolean | ((prevState: boolean) => boolean); }) => setIsDarkMode(e.matches);
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve): NodeJS.Timeout => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    alert("Demo request submitted successfully!");
    setFormData({ name: "", email: "", organization: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  return (
    <div className={`min-h-screen flex items-center justify-center px-4 py-12 
      ${isDarkMode 
        ? "bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900" 
        : "bg-gradient-to-br from-purple-400 via-pink-500 to-purple-600"}`}>
      
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 -top-48 -left-48 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"/>
        <div className="absolute w-96 h-96 -bottom-48 -right-48 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"/>
      </div>

      <div className={`relative w-full max-w-3xl p-8 rounded-2xl shadow-2xl backdrop-blur-sm
        ${isDarkMode 
          ? "bg-gray-800/90 text-gray-100" 
          : "bg-white/90 text-gray-900"}`}>
        
        {/* Header with animation */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center space-x-2 mb-2">
            <Sparkles className="w-8 h-8 text-purple-500 animate-pulse" />
            <h2 className="text-4xl font-bold">
              Request a Demo
            </h2>
          </div>
          <div className="relative">
            <h3 className="text-xl font-semibold text-purple-500 mb-4">
              Mindora Health
            </h3>
          </div>
          <p className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
            Experience the future of healthcare management
          </p>
        </div>

        {/* Enhanced Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name Input */}
            <div className="relative">
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                Full Name
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full pl-12 pr-4 py-3 rounded-lg border transition-all duration-200
                    ${isDarkMode 
                      ? "bg-gray-700/50 border-gray-600 text-gray-100" 
                      : "bg-gray-50 border-gray-200"} 
                    focus:ring-2 focus:ring-purple-500 focus:border-transparent`}
                  placeholder="John Doe"
                  required
                />
              </div>
            </div>

            {/* Email Input */}
            <div className="relative">
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full pl-12 pr-4 py-3 rounded-lg border transition-all duration-200
                    ${isDarkMode 
                      ? "bg-gray-700/50 border-gray-600 text-gray-100" 
                      : "bg-gray-50 border-gray-200"} 
                    focus:ring-2 focus:ring-purple-500 focus:border-transparent`}
                  placeholder="johndoe@example.com"
                  required
                />
              </div>
            </div>
          </div>

          {/* Organization Input */}
          <div className="relative">
            <label htmlFor="organization" className="block text-sm font-medium mb-1">
              Organization Name
            </label>
            <div className="relative">
              <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                id="organization"
                value={formData.organization}
                onChange={handleChange}
                className={`w-full pl-12 pr-4 py-3 rounded-lg border transition-all duration-200
                  ${isDarkMode 
                    ? "bg-gray-700/50 border-gray-600 text-gray-100" 
                    : "bg-gray-50 border-gray-200"} 
                  focus:ring-2 focus:ring-purple-500 focus:border-transparent`}
                placeholder="Mindora Inc."
                required
              />
            </div>
          </div>

          {/* Message Input */}
          <div className="relative">
            <label htmlFor="message" className="block text-sm font-medium mb-1">
              Additional Message (Optional)
            </label>
            <div className="relative">
              <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <textarea
                id="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className={`w-full pl-12 pr-4 py-3 rounded-lg border transition-all duration-200
                  ${isDarkMode 
                    ? "bg-gray-700/50 border-gray-600 text-gray-100" 
                    : "bg-gray-50 border-gray-200"} 
                  focus:ring-2 focus:ring-purple-500 focus:border-transparent`}
                placeholder="Tell us more about your needs..."
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`relative w-full px-6 py-3 text-lg font-medium rounded-lg
                transition-all duration-200 transform hover:scale-[1.02]
                ${isDarkMode 
                  ? "bg-purple-600 hover:bg-purple-700" 
                  : "bg-purple-500 hover:bg-purple-600"}
                text-white shadow-lg hover:shadow-xl
                disabled:opacity-70 disabled:cursor-not-allowed`}
            >
              {isSubmitting ? (
                <span className="inline-flex items-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </span>
              ) : (
                "Request Demo"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}