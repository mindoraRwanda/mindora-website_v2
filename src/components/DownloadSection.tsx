import React from 'react'
import { Button } from "@/components/ui/button"
import { AppleIcon, PlayIcon, SparklesIcon } from 'lucide-react'

export default function DownloadSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Background with gradient and pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-purple-100/50 dark:from-purple-950/30 dark:to-gray-950/30">
        <div className="absolute inset-0" 
          style={{ 
            backgroundImage: 'radial-gradient(circle at 2px 2px, purple 1px, transparent 0)', 
            backgroundSize: '48px 48px',
            opacity: 0.1 
          }} 
        />
      </div>

      <div className="container relative mx-auto px-6 py-24">
        <div className="max-w-4xl mx-auto">
          {/* Top Decoration */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-300">
              <SparklesIcon className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">Available Now</span>
            </div>
          </div>

          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              Transform Your Mental Health Journey
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Get the Mindora app for your device and start your path to better mental well-being today. Join thousands of users already benefiting from our innovative solutions.
            </p>
          </div>

          {/* Download Buttons with Enhanced Design */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button 
              className="group relative w-full sm:w-auto bg-black hover:bg-gray-900 text-white 
                dark:bg-gray-800 dark:hover:bg-gray-700 rounded-xl py-6 px-8
                transform transition-all duration-200 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-transparent 
                opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-xl" />
              <div className="flex items-center justify-center">
                <AppleIcon className="w-8 h-8 mr-3" />
                <div className="text-left">
                  <div className="text-xs">Download on the</div>
                  <div className="text-lg font-semibold">App Store</div>
                </div>
              </div>
            </Button>

            <Button 
              className="group relative w-full sm:w-auto bg-purple-600 hover:bg-purple-500 text-white 
                rounded-xl py-6 px-8 transform transition-all duration-200 
                hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent 
                opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-xl" />
              <div className="flex items-center justify-center">
                <PlayIcon className="w-8 h-8 mr-3" />
                <div className="text-left">
                  <div className="text-xs">Get it on</div>
                  <div className="text-lg font-semibold">Google Play</div>
                </div>
              </div>
            </Button>
          </div>

          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-3 text-sm">
            <div className="px-4 py-2 rounded-full bg-purple-100/50 dark:bg-purple-900/30 
              text-purple-700 dark:text-purple-300">
              Free Download
            </div>
            <div className="px-4 py-2 rounded-full bg-purple-100/50 dark:bg-purple-900/30 
              text-purple-700 dark:text-purple-300">
              24/7 Support
            </div>
            <div className="px-4 py-2 rounded-full bg-purple-100/50 dark:bg-purple-900/30 
              text-purple-700 dark:text-purple-300">
              Secure & Private
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-purple-200/30 dark:bg-purple-900/20 
            rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-200/30 dark:bg-purple-900/20 
            rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        </div>
      </div>
    </section>
  )
}