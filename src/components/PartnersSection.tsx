import React from 'react';
import Image from 'next/image';
import { Card } from "@/components/ui/card";

interface Partner {
  name: string;
  image: string;
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
  ];

  return (
    <section className="relative bg-gradient-to-b from-background/50 to-background py-16 overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0" 
          style={{ 
            backgroundImage: 'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)',
            backgroundSize: '40px 40px' 
          }} 
        />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Our Trusted Partners
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Collaborating with leading organizations to deliver innovative mental health solutions
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

          <div className="flex space-x-16 animate-marquee hover:pause">
            <div className="flex space-x-16 min-w-full">
              {partners.map((partner) => (
                <Card
                  key={partner.name}
                  className="flex-none w-48 h-32 flex items-center justify-center p-4 
                    transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={`/images/${partner.image}`}
                      alt={`${partner.name} logo`}
                      fill
                      className="object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                </Card>
              ))}
            </div>
            <div className="flex space-x-16 min-w-full">
              {partners.map((partner) => (
                <Card
                  key={`${partner.name}-duplicate`}
                  className="flex-none w-48 h-32 flex items-center justify-center p-4 
                    transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={`/images/${partner.image}`}
                      alt={`${partner.name} logo`}
                      fill
                      className="object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
        <div className="absolute -top-8 -left-8 w-16 h-16 bg-primary/20 rounded-full blur-xl" />
        <div className="absolute -bottom-8 -right-8 w-16 h-16 bg-primary/20 rounded-full blur-xl" />

        <div className="flex justify-center mt-12">
          <div className="flex space-x-2">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="w-2 h-2 rounded-full bg-primary/30"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}