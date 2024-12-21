import React from 'react'
import Image from 'next/image'

interface Partner {
  name: string
  image: string
}

export default function PartnersSection() {
  const partners: Partner[] = [
    { name: "Aegis", image: "aegis.png" },
    { name: "CMU", image: "cmu.png" },
    { name: "Lifeline", image: "lifeline.jpg" },
    { name: "Never Again", image: "neveragan.jpg" },
    { name: "kLab", image: "klab.png" },
    { name: "University of Rwanda", image: "ur.jpg" },
    { name: "AERG", image: "aerg.jpg" },
    { name: "Imbuto Foundation", image: "imbuto.png" },
    { name: "ISR", image: "isr.png" },
    { name: "RBC", image: "rbc.png" },
    { name: "UNFPA", image: "unfpa.png" }
  ]

  return (
    <section className="relative bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-16 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-grid-gray-900/10 dark:bg-grid-gray-100/10" 
          style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)', backgroundSize: '40px 40px' }} 
        />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Our Trusted Partners
          </h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto rounded-full mb-6" />
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Collaborating with leading organizations to deliver innovative mental health solutions
          </p>
        </div>

        <div className="relative">
          {/* Partners Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 max-w-6xl mx-auto">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="group relative bg-white dark:bg-gray-800 p-4 md:p-6 rounded-xl 
                  shadow-sm hover:shadow-md dark:shadow-gray-900 
                  transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="relative w-full h-24">
                  <Image
                    src={`/images/${partner.image}`}
                    alt={`${partner.name} logo`}
                    fill
                    className="object-contain filter dark:invert-0 
                      transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-purple-600/0 group-hover:bg-purple-600/5 
                  dark:group-hover:bg-purple-400/5 rounded-xl transition-colors duration-300" />
              </div>
            ))}
          </div>

          {/* Decorative Elements */}
          <div className="absolute -top-8 -left-8 w-16 h-16 bg-purple-200/20 dark:bg-purple-400/10 rounded-full blur-xl" />
          <div className="absolute -bottom-8 -right-8 w-16 h-16 bg-purple-200/20 dark:bg-purple-400/10 rounded-full blur-xl" />
        </div>

        {/* Bottom Decoration */}
        <div className="flex justify-center mt-12">
          <div className="flex space-x-2">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="w-2 h-2 rounded-full bg-purple-600/30 dark:bg-purple-400/30"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}