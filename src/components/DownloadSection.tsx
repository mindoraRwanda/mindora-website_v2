import React from 'react'
import { Button } from "@/components/ui/button"
import { AppleIcon, PlayIcon, SparklesIcon, CheckCircle, Smartphone } from 'lucide-react'
import Link from 'next/link'

export default function DownloadSection() {
  return (
    <section className="relative overflow-hidden py-32">
      {/* Modern Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-primary/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(147,51,234,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(147,51,234,0.05),transparent_50%)]" />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-primary/30 rounded-full animate-ping delay-0"></div>
        <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-primary/40 rounded-full animate-ping delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-4 h-4 bg-primary/20 rounded-full animate-ping delay-2000"></div>
        <div className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-primary/50 rounded-full animate-ping delay-500"></div>
      </div>

      <div className="container relative mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Premium Badge */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-primary/10 text-primary border border-primary/20">
              <SparklesIcon className="w-5 h-5" />
              <span className="font-bold">Coming Soon</span>
            </div>
          </div>

          {/* Main Content */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-7xl font-black text-foreground mb-8 leading-tight">
              Get the{" "}
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                MindoraHealth
              </span>
              {" "}App
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
              Transform your mental health journey with our revolutionary mobile app. Join thousands of users who trust MindoraHealth for personalized, AI-powered mental wellness support.
            </p>
          </div>

          {/* Enhanced Download Buttons */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 mb-20">
            <Button
              className="group relative w-full lg:w-auto bg-foreground hover:bg-foreground/90 text-background
                rounded-2xl py-8 px-12 transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl
                text-xl font-bold overflow-hidden"
            >
              <Link href="https://www.apple.com/app-store/" className="flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent
                  opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                <div className="flex items-center justify-center relative z-10">
                  <AppleIcon className="w-10 h-10 mr-4" />
                  <div className="text-left">
                    <div className="text-sm opacity-80">Download on the</div>
                    <div className="text-2xl font-black">App Store</div>
                  </div>
                </div>
              </Link>
            </Button>

            <Button
              className="group relative w-full lg:w-auto bg-primary hover:bg-primary/90 text-primary-foreground
                rounded-2xl py-8 px-12 transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl
                text-xl font-bold overflow-hidden"
            >
              <Link href="https://play.google.com/store/apps" className="flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-foreground/20 to-transparent
                  opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                <div className="flex items-center justify-center relative z-10">
                  <PlayIcon className="w-10 h-10 mr-4" />
                  <div className="text-left">
                    <div className="text-sm opacity-80">Get it on</div>
                    <div className="text-2xl font-black">Google Play</div>
                  </div>
                </div>
              </Link>
            </Button>
          </div>

          {/* Enhanced Feature Badges */}
          <div className="flex flex-wrap justify-center gap-6 mb-16">
            <div className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-card shadow-lg border-0">
              <CheckCircle className="w-6 h-6 text-green-500" />
              <span className="font-semibold text-foreground">Free Download</span>
            </div>
            <div className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-card shadow-lg border-0">
              <CheckCircle className="w-6 h-6 text-green-500" />
              <span className="font-semibold text-foreground">24/7 Support</span>
            </div>
            <div className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-card shadow-lg border-0">
              <CheckCircle className="w-6 h-6 text-green-500" />
              <span className="font-semibold text-foreground">Secure & Private</span>
            </div>
          </div>

          {/* App Preview Section */}
          <div className="text-center">
            <div className="inline-flex items-center gap-2 text-muted-foreground mb-4">
              <Smartphone className="w-5 h-5" />
              <span className="font-medium">Available on iOS and Android</span>
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Be the first to experience the future of mental health support. Join our waitlist for early access and exclusive updates.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}