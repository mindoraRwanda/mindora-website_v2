import React from 'react'
import { Button } from "@/components/ui/button"
import { AppleIcon, PlayIcon, SparklesIcon } from 'lucide-react'
import Link from 'next/link'

export default function DownloadSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-50/60 to-calm-50/40 dark:from-brand-950/30 dark:to-stone-950/30">
        <div className="absolute inset-0 text-brand-500"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)',
            backgroundSize: '48px 48px',
            opacity: 0.1
          }}
        />
      </div>

      {/* Floating decorative blobs for a calm wellness feel */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-brand-200/30 dark:bg-brand-900/20
        rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 animate-float-slow" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-calm-200/30 dark:bg-calm-900/20
        rounded-full blur-3xl translate-x-1/2 translate-y-1/2 animate-float" />

      <div className="container relative mx-auto px-6 py-24">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-brand-100 dark:bg-brand-900/30 text-brand-600 dark:text-brand-300">
              <SparklesIcon className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">Coming soon</span>
            </div>
          </div>

          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-stone-900 dark:text-stone-100 mb-6">
              Transform Your Mental Health Journey
            </h2>
            <p className="text-lg text-stone-600 dark:text-stone-300 mb-8 max-w-2xl mx-auto">
              Get the Mindora app for your device and start your path to better mental well-being today. Join thousands of users already benefiting from our innovative solutions.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button
              asChild
              className="group relative w-full sm:w-auto bg-stone-900 hover:bg-stone-800 text-white
                dark:bg-stone-800 dark:hover:bg-stone-700 rounded-2xl py-6 px-8 shadow-md
                transform transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
            >
              <Link href="https://www.apple.com/app-store/">
                <div className="absolute inset-0 bg-gradient-to-r from-brand-600/20 to-transparent
                  opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-2xl" />
                <div className="flex items-center justify-center">
                  <AppleIcon className="w-8 h-8 mr-3" />
                  <div className="text-left">
                    <div className="text-xs">Download on the</div>
                    <div className="text-lg font-semibold">App Store</div>
                  </div>
                </div>
              </Link>
            </Button>

            <Button
              asChild
              className="group relative w-full sm:w-auto bg-brand-600 hover:bg-brand-500 text-white
                rounded-2xl py-6 px-8 shadow-md transform transition-all duration-200
                hover:-translate-y-1 hover:shadow-lg"
            >
              <Link href="https://play.google.com/store/apps">
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent
                  opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-2xl" />
                <div className="flex items-center justify-center">
                  <PlayIcon className="w-8 h-8 mr-3" />
                  <div className="text-left">
                    <div className="text-xs">Get it on</div>
                    <div className="text-lg font-semibold">Google Play</div>
                  </div>
                </div>
              </Link>
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-3 text-sm">
            <div className="px-4 py-2 rounded-full bg-brand-100/50 dark:bg-brand-900/30 
              text-brand-700 dark:text-brand-300">
              Free Download
            </div>
            <div className="px-4 py-2 rounded-full bg-brand-100/50 dark:bg-brand-900/30 
              text-brand-700 dark:text-brand-300">
              24/7 Support
            </div>
            <div className="px-4 py-2 rounded-full bg-brand-100/50 dark:bg-brand-900/30 
              text-brand-700 dark:text-brand-300">
              Secure & Private
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}